import type {
  LexiconDoc,
  LexUserType,
  LexXrpcQuery,
  LexXrpcProcedure,
  LexXrpcSubscription,
  LexXrpcParameters,
  LexXrpcBody,
  LexObject,
  LexPrimitive,
  LexArray,
  LexRef,
  LexRefUnion,
  LexRefVariant,
} from "./types.js";

function convertResponse(
  id: string,
  body: LexXrpcBody,
  schemas: Map<string, any>,
): any {
  return {
    description: body.description || "Success",
    content: {
      [body.encoding]: {
        schema: body.schema
          ? convertSchemaToOpenAPI(id, body.schema, schemas)
          : {},
      },
    },
  };
}

function convertSchemaToOpenAPI(
  id: string,
  schema: LexRefVariant | LexObject,
  schemas: Map<string, any>,
): any {
  switch (schema.type) {
    case "ref":
      return convertRefSchema(id, schema);
    case "union":
      return convertUnionSchema(id, schema, schemas);
    case "object":
      return convertObjectSchema(id, schema, schemas);
    default:
      return { description: "Unknown schema type" };
  }
}

/**
 * Recursively traverse a schema object and collect all referenced schema names.
 * @param schema The schema object to traverse.
 * @param schemas A map of all available schemas by their generated name.
 * @param usedSchemas A Set to accumulate the names of schemas that are referenced.
 * @param visited Schemas already visited during this traversal to prevent infinite loops.
 */
function traverseSchema(
  schema: any,
  schemas: Map<string, any>,
  usedSchemas: Set<string>,
  visited: Set<string>,
): void {
  if (!schema || typeof schema !== "object" || visited.has(schema)) {
    return;
  }
  visited.add(schema);

  if (schema.$ref) {
    const refName = schema.$ref.replace("#/components/schemas/", "");
    if (!usedSchemas.has(refName)) {
      usedSchemas.add(refName);
      // Traverse the referenced schema if it exists in our map
      if (schemas.has(refName)) {
        traverseSchema(schemas.get(refName), schemas, usedSchemas, visited);
      }
    }
  } else if (schema.type === "object" && schema.properties) {
    for (const propName in schema.properties) {
      traverseSchema(
        schema.properties[propName],
        schemas,
        usedSchemas,
        visited,
      );
    }
  } else if (schema.type === "array" && schema.items) {
    traverseSchema(schema.items, schemas, usedSchemas, visited);
  } else if (schema.oneOf) {
    if (Array.isArray(schema.oneOf)) {
      schema.oneOf.forEach((subSchema: any) =>
        traverseSchema(subSchema, schemas, usedSchemas, visited),
      );
    }
  }
  // Add more cases here if other schema compositions exist (e.g., anyOf, allOf)
}

/**
 * Collects all schema names referenced directly or indirectly from the OpenAPI paths object.
 * @param paths The OpenAPI paths object.
 * @param schemas A map of all available schemas by their generated name.
 * @returns A Set containing the names of all referenced schemas.
 */
function collectReferencedSchemas(
  paths: Record<string, any>,
  schemas: Map<string, any>,
): Set<string> {
  const usedSchemas = new Set<string>();
  const visited = new Set<string>(); // Track schemas visited during recursive traversal

  for (const path in paths) {
    for (const method in paths[path]) {
      const operation = paths[path][method];

      // Check parameters
      if (operation.parameters) {
        operation.parameters.forEach((param: any) => {
          if (param.schema) {
            traverseSchema(param.schema, schemas, usedSchemas, visited);
          }
        });
      }

      // Check request body
      if (operation.requestBody && operation.requestBody.content) {
        for (const mediaType in operation.requestBody.content) {
          const content = operation.requestBody.content[mediaType];
          if (content.schema) {
            traverseSchema(content.schema, schemas, usedSchemas, visited);
          }
        }
      }

      // Check responses
      if (operation.responses) {
        for (const statusCode in operation.responses) {
          const response = operation.responses[statusCode];
          if (response.content) {
            for (const mediaType in response.content) {
              const content = response.content[mediaType];
              if (content.schema) {
                traverseSchema(content.schema, schemas, usedSchemas, visited);
              }
            }
          }
        }
      }

      // Check x-websocket message schema if it exists
      if (
        operation["x-websocket-message"] &&
        operation["x-websocket-message"].schema
      ) {
        traverseSchema(
          operation["x-websocket-message"].schema,
          schemas,
          usedSchemas,
          visited,
        );
      }
    }
  }

  // After initial pass, ensure all recursively referenced schemas are included
  // This is implicitly handled by the recursive `traverseSchema` function
  // calling itself on referenced schemas, so no extra loop needed here.

  return usedSchemas;
}

export interface OpenAPISpec {
  openapi: string;
  info: {
    title: string;
    version: string;
    description?: string;
  };
  paths: Record<string, any>;
  components?: {
    schemas?: Record<string, any>;
  };
}

export function convertLexiconToOpenAPI(
  lexicons: LexiconDoc[],
  externalLexicons: LexiconDoc[],
): OpenAPISpec {
  const spec: OpenAPISpec = {
    openapi: "3.0.3",
    info: {
      title: "Generated Lexicon API schema",
      version: "1.0.0",
      description: "Autogenerated using lexmd",
    },
    paths: {},
    components: {
      schemas: {},
    },
  };

  const schemas = new Map<string, any>();

  // Add external lexicons (just as schemas)
  for (const lexicon of externalLexicons) {
    for (const [defName, def] of Object.entries(lexicon.defs)) {
      if (defName !== "main") {
        const schemaName = `${lexicon.id}_${defName}`;
        schemas.set(schemaName, convertTypeToSchema(schemaName, def, schemas));
      } else {
        // Add main type as a schema
        schemas.set(
          lexicon.id,
          convertTypeToSchema(lexicon.id, lexicon.defs.main, schemas),
        );
      }
    }
  }

  for (const lexicon of lexicons) {
    const mainDef = lexicon.defs.main;
    if (mainDef) {
      // Only process query, procedure, and subscription types
      if (mainDef.type === "query") {
        convertQuery(lexicon, mainDef, spec, schemas);
      } else if (mainDef.type === "procedure") {
        convertProcedure(lexicon, mainDef, spec, schemas);
      } else if (mainDef.type === "subscription") {
        convertSubscription(lexicon, mainDef, spec, schemas);
      } else {
        schemas.set(
          lexicon.id,
          convertTypeToSchema(lexicon.id, mainDef, schemas),
        );
      }
    }

    // Add any additional definitions as reusable schemas
    for (const [defName, def] of Object.entries(lexicon.defs)) {
      if (defName !== "main") {
        const schemaName = `${lexicon.id}_${defName}`;
        schemas.set(schemaName, convertTypeToSchema(schemaName, def, schemas));
      }
    }
  }

  // Collect all schemas referenced from paths and recursively from those schemas
  const usedSchemaNames = collectReferencedSchemas(spec.paths, schemas);

  // Filter the schemas map to only include the used schemas
  const filteredSchemas = new Map<string, any>();
  for (const schemaName of usedSchemaNames) {
    if (schemas.has(schemaName)) {
      filteredSchemas.set(schemaName, schemas.get(schemaName));
    }
  }

  // Add filtered schemas to components
  spec.components!.schemas = Object.fromEntries(filteredSchemas);

  return spec;
}

function convertQuery(
  lexicon: LexiconDoc,
  query: LexXrpcQuery,
  spec: OpenAPISpec,
  schemas: Map<string, any>,
): void {
  const path = `/xrpc/${lexicon.id.replace("#", "_")}`;

  if (!spec.paths[path]) {
    spec.paths[path] = {};
  }

  const operation: any = {
    summary: query.description,
    operationId: lexicon.id.replace("#", "_"),
    tags: [lexicon.id.split(".").slice(0, -1).join(".")],
    responses: {},
  };

  // Convert parameters
  if (query.parameters) {
    operation.parameters = convertParameters(query.parameters, schemas);
  }

  // Convert output
  if (query.output) {
    operation.responses["200"] = convertResponse(
      lexicon.id.replace("#", "_"),
      query.output,
      schemas,
    );
  } else {
    operation.responses["200"] = {
      description: "Success",
    };
  }

  // Convert errors
  if (query.errors) {
    const errorResponse = convertErrors(query.errors);
    if (errorResponse) {
      operation.responses["400"] = errorResponse;
    }
  }

  spec.paths[path].get = operation;
}

function convertProcedure(
  lexicon: LexiconDoc,
  procedure: LexXrpcProcedure,
  spec: OpenAPISpec,
  schemas: Map<string, any>,
): void {
  const path = `/xrpc/${lexicon.id.replace("#", "_")}`;

  if (!spec.paths[path]) {
    spec.paths[path] = {};
  }

  const operation: any = {
    summary: procedure.description,
    operationId: lexicon.id.replace("#", "_"),
    tags: [lexicon.id.split(".").slice(0, -1).join(".")],
    responses: {},
  };

  // Convert parameters
  if (procedure.parameters) {
    operation.parameters = convertParameters(procedure.parameters, schemas);
  }

  // Convert input
  if (procedure.input) {
    operation.requestBody = {
      description: procedure.input.description,
      required: true,
      content: {
        [procedure.input.encoding]: {
          schema: procedure.input.schema
            ? convertSchemaToOpenAPI(
                lexicon.id.replace("#", "_"),
                procedure.input.schema,
                schemas,
              )
            : {},
        },
      },
    };
  }

  // Convert output
  if (procedure.output) {
    operation.responses[200] = convertResponse(
      lexicon.id,
      procedure.output,
      schemas,
    );
  } else {
    operation.responses[200] = {
      description: "Success",
    };
  }

  // Convert errors
  if (procedure.errors) {
    const errorResponse = convertErrors(procedure.errors);
    if (errorResponse) {
      operation.responses["400"] = errorResponse;
    }
  }

  spec.paths[path].post = operation;
}

function convertSubscription(
  lexicon: LexiconDoc,
  subscription: LexXrpcSubscription,
  spec: OpenAPISpec,
  schemas: Map<string, any>,
): void {
  const path = `/xrpc/${lexicon.id}`;

  if (!spec.paths[path]) {
    spec.paths[path] = {};
  }

  // WebSocket endpoint - using OpenAPI extension
  const operation: any = {
    summary: subscription.description,
    operationId: lexicon.id.replace("#", "_"),
    tags: [lexicon.id.split(".").slice(0, -1).join(".")],
    "x-websocket": true,
    responses: {},
  };

  // Convert parameters
  if (subscription.parameters) {
    operation.parameters = convertParameters(subscription.parameters, schemas);
  }

  // Convert message
  if (subscription.message) {
    operation["x-websocket-message"] = {
      description: subscription.message.description,
      schema: subscription.message.schema
        ? convertSchemaToOpenAPI(
            lexicon.id.replace("#", "_"),
            subscription.message.schema,
            schemas,
          )
        : {},
    };
  }

  // Convert errors
  if (subscription.errors) {
    const errorResponse = convertErrors(subscription.errors);
    if (errorResponse) {
      operation.responses["400"] = errorResponse;
    }
  }

  spec.paths[path].get = operation;
}

function convertParameters(
  params: LexXrpcParameters,
  schemas: Map<string, any>,
): any[] | undefined {
  const parameters: any[] = [];

  for (const [name, param] of Object.entries(params.properties)) {
    const parameter: any = {
      name,
      in: "query",
      required: params.required?.includes(name) || false,
      description: param.description,
      schema: convertTypeToSchema(name, param as LexUserType, schemas),
    };

    parameters.push(parameter);
  }

  return parameters.length > 0 ? parameters : undefined;
}

// New error handling function
function convertErrors(
  errors: Array<{ name: string; description?: string }> | undefined,
): any {
  if (!errors || errors.length === 0) {
    return undefined; // No errors defined, no 400 response needed
  }

  const errorNames = errors.map((error) => error.name);

  return {
    description: "Bad Request",
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["error", "message"],
          properties: {
            error: {
              type: "string",
              oneOf: errorNames.map((name) => ({ const: name })),
            },
            message: {
              type: "string",
            },
          },
        },
      },
    },
  };
}

function convertTypeToSchema(
  id: string,
  type: LexUserType,
  schemas: Map<string, any>,
): any {
  switch (type.type) {
    case "boolean":
      return convertBooleanSchema(type);
    case "integer":
      return convertIntegerSchema(type);
    case "string":
      return convertStringSchema(type);
    case "unknown":
      return { description: type.description };
    case "bytes":
      return {
        type: "string",
        format: "byte",
        description: type.description,
        minLength: type.minLength,
        maxLength: type.maxLength,
      };
    case "cid-link":
      return {
        type: "string",
        description: type.description || "CID link",
      };
    // @ts-ignore we know this can exist
    case "ref":
      return convertRefSchema(id, type as LexRef);
    // @ts-ignore we know this can exist
    case "union":
      return convertUnionSchema(id, type as LexRefUnion, schemas);
    case "array":
      return convertArraySchema(id, type as LexArray, schemas);
    case "object":
      return convertObjectSchema(id, type as LexObject, schemas);
    case "blob":
      return {
        type: "string",
        format: "binary",
        description: type.description,
      };
    case "token":
      return {
        type: "string",
        description: type.description || "Token",
      };
    default:
      return { description: "Unknown type" };
  }
}

function convertBooleanSchema(type: any): any {
  return {
    type: "boolean",
    description: type.description,
    default: type.const || type.default,
  };
}

function convertIntegerSchema(type: any): any {
  return {
    type: "integer",
    description: type.description,
    default: type.const || type.default,
    minimum: type.minimum,
    maximum: type.maximum,
    enum: type.enum,
  };
}

function convertStringSchema(type: any): any {
  const schema: any = {
    type: "string",
    description: type.description,
    default: type.const || type.default,
    minLength: type.minLength,
    maxLength: type.maxLength,
    enum: type.enum,
  };

  // Convert format
  if (type.format) {
    switch (type.format) {
      case "datetime":
        schema.format = "date-time";
        break;
      case "uri":
      case "at-uri":
        schema.format = "uri";
        break;
      default:
        schema.format = type.format;
    }
  }

  return schema;
}

function convertRefSchema(id: string, ref: LexRef): any {
  return {
    $ref: `#/components/schemas/${getRefLabel(id, ref.ref)}`,
    description: ref.description,
  };
}

function getRefLabel(id: string, ref: string) {
  if (id.includes("_")) {
    id = id.split("_").slice(0, -1).join("_");
  }
  // A local to file reference
  if (ref.startsWith("#")) {
    return `${id}${ref.replace("#", "_")}`;
  }

  // Reference already includes the lexicon name
  if (ref.includes("#")) {
    return ref.replace("#", "_");
  }

  // Reference is just a lexicon name
  return ref;
}

function convertUnionSchema(
  id: string,
  union: LexRefUnion,
  schemas: Map<string, any>,
): any {
  return {
    oneOf: union.refs.map((ref) => ({
      $ref: `#/components/schemas/${getRefLabel(id, ref)}`,
    })),
    description: union.description,
  };
}

function convertArraySchema(
  typ: string,
  array: LexArray,
  schemas: Map<string, any>,
): any {
  return {
    type: "array",
    description: array.description,
    items: convertTypeToSchema(typ, array.items as LexUserType, schemas),
    minItems: array.minLength,
    maxItems: array.maxLength,
  };
}

function convertObjectSchema(
  id: string,
  obj: LexObject,
  schemas: Map<string, any>,
): any {
  const schema: any = {
    type: "object",
    description: obj.description,
    properties: {},
    required:
      obj.required && obj.required?.length > 0 ? obj.required : undefined,
  };

  for (const [propName, propType] of Object.entries(obj.properties)) {
    schema.properties[propName] = convertTypeToSchema(
      id,
      propType as LexUserType,
      schemas,
    );

    // Handle nullable properties
    if (obj.nullable?.includes(propName)) {
      schema.properties[propName] = {
        oneOf: [schema.properties[propName]],
      };
    }
  }

  return schema;
}
