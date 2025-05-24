#! /usr/bin/env node
import * as BskyLex from "./types.js";
import config from "./config.js";

import { convertLexiconToOpenAPI } from "./openapi.js";

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { Dirent } from "node:fs";

const PREFIX_TABLE = config.prefixLinkTable;

function formatType(
  prop:
    | BskyLex.LexUserType
    | BskyLex.LexRef
    | BskyLex.LexRefUnion
    | BskyLex.LexArray["items"],
): string {
  switch (prop.type) {
    case "ref": {
      if (prop.ref.startsWith("#")) {
        return `[\`${prop.ref}\`](${prop.ref.toLowerCase()})`;
      } else {
        const [tld, domain] = prop.ref.split(".");
        const prefix = `${tld}.${domain}`;
        // Use the configured prefix table
        const linkFormatter = PREFIX_TABLE[prefix];
        if (linkFormatter) {
          // Check if the formatter function exists
          return `[\`${prop.ref}\`](${linkFormatter(prop.ref)})`;
        } else {
          // No formatter defined or prefix not in table
          return `\`${prop.ref}\``; // Just display the ref without linking
        }
      }
    }
    case "union": {
      const unionRefs = prop.refs
        .map((r) => formatType({ type: "ref", ref: r }))
        .join("<br/>&nbsp;&nbsp;");
      return `Union of:<br/>&nbsp;&nbsp;${unionRefs}`;
    }
    case "array":
      return `Array of ${formatType(prop.items)}`;
    case "object":
      return `\`object\``;
    default:
      return `\`${prop.type}\``;
  }
}

function formatConstraints(prop: BskyLex.LexUserType): string {
  const constraints: string[] = [];
  if (prop.type === "string") {
    if (prop.format) constraints.push(`Format: \`${prop.format}\``);
    if (prop.minLength !== undefined) {
      constraints.push(`Min Length: ${prop.minLength}`);
    }
    if (prop.maxLength !== undefined) {
      constraints.push(`Max Length: ${prop.maxLength}`);
    }
    if (prop.minGraphemes !== undefined) {
      constraints.push(`Min Graphemes: ${prop.minGraphemes}`);
    }
    if (prop.maxGraphemes !== undefined) {
      constraints.push(`Max Graphemes: ${prop.maxGraphemes}`);
    }
    if (prop.enum) {
      constraints.push(`Enum: ${prop.enum.map((e) => `\`${e}\``).join(", ")}`);
    }
    if (prop.const) constraints.push(`Const: \`${prop.const}\``);
    if (prop.knownValues) {
      constraints.push(
        `Known Values: ${prop.knownValues.map((e) => `\`${e}\``).join(", ")}`,
      );
    }
    if (prop.default) constraints.push(`Default: \`${prop.default}\``);
  } else if (prop.type === "integer") {
    if (prop.minimum !== undefined) constraints.push(`Min: ${prop.minimum}`);
    if (prop.maximum !== undefined) constraints.push(`Max: ${prop.maximum}`);
    if (prop.enum) {
      constraints.push(`Enum: ${prop.enum.map((e) => `\`${e}\``).join(", ")}`);
    }
    if (prop.const) constraints.push(`Const: \`${prop.const}\``);
    if (prop.default) constraints.push(`Default: \`${prop.default}\``);
  } else if (prop.type === "boolean") {
    if (prop.const !== undefined) constraints.push(`Const: \`${prop.const}\``);
    if (prop.default !== undefined) {
      constraints.push(`Default: \`${prop.default}\``);
    }
  } else if (prop.type === "array") {
    if (prop.minLength !== undefined) {
      constraints.push(`Min Items: ${prop.minLength}`);
    }
    if (prop.maxLength !== undefined) {
      constraints.push(`Max Items: ${prop.maxLength}`);
    }
  } else if (prop.type === "bytes") {
    if (prop.minLength !== undefined) {
      constraints.push(`Min Length: ${prop.minLength}`);
    }
    if (prop.maxLength !== undefined) {
      constraints.push(`Max Length: ${prop.maxLength}`);
    }
  } else if (prop.type === "blob") {
    if (prop.accept) {
      constraints.push(
        `Accept: ${prop.accept.map((a) => `\`${a}\``).join(", ")}`,
      );
    }
    if (prop.maxSize !== undefined) {
      constraints.push(`Max Size: ${prop.maxSize} bytes`);
    }
  }
  // Add constraints for other types if they have relevant fields

  return constraints.join("<br/>");
}

function renderSchema(
  schema:
    | BskyLex.LexXrpcBody["schema"]
    | BskyLex.LexXrpcSubscriptionMessage["schema"]
    | undefined,
  headerLevel: number,
): string {
  if (!schema) return "_Schema not defined._";

  let md = "";
  if (schema.type === "object") {
    md += `**Schema Type:** \`object\`\n\n`;
    if (schema.description) md += `${schema.description}\n\n`;
    md += renderPropertiesTable(
      schema.properties,
      schema.required || [],
      schema.nullable || [],
    );
  } else if (schema.type === "ref" || schema.type === "union") {
    md += `**Schema Type:** ${formatType(schema)}\n\n`;
    if (schema.description) md += `${schema.description}\n\n`;
  } else {
    // fall back
    const constraints = formatConstraints(schema);
    md += `**Schema Type:** ${formatType(schema)}\n\n`;
    if (constraints) md += `**Constraints:**<br/>${constraints}\n\n`;
    console.warn(
      `Schema type not handled as schema does not seem to exist: ${schema}`,
    );
  }
  return md;
}

function renderPropertiesTable(
  properties:
    | BskyLex.LexObject["properties"]
    | BskyLex.LexXrpcParameters["properties"],
  required: string[] = [],
  nullable: string[] = [],
): string {
  if (!properties || Object.keys(properties).length === 0) {
    return "_(No properties defined)_";
  }

  const showNullable = nullable.length > 0;

  const header = `| Name | Type | Req'd ${
    showNullable ? "| Nullable" : ""
  } | Description | Constraints |`;
  const separator = `|------|------|----------${
    showNullable ? "|--" : ""
  }|-------------|-------------|`;
  const rows = Object.entries(properties).map(([name, prop]) => {
    const propName = `\`${name}\``;
    const propType = formatType(prop);
    const isRequired = required.includes(name) ? "✅" : "❌";
    // Only show nullable when applicable
    const isNullable = nullable && nullable.includes(name) ? "✅" : "n/a";
    const description = prop.description?.replace(/\n/g, "<br/>") || "";
    // TODO: find out the actual type of prop
    // works fine, but...
    const constraints = formatConstraints(prop as any);
    return `| ${propName} | ${propType} | ${isRequired} ${
      showNullable ? `| ${isNullable}` : ""
    } | ${description} | ${constraints} |`;
  });

  return [header, separator, ...rows].join("\n");
}

function generateMarkdown(lexicon: BskyLex.LexiconDoc): string {
  let md = `---
title: ${lexicon.id}
description: ${lexicon.description ?? `Reference for the ${lexicon.id} lexicon`}
---
`;

  if (lexicon.revision) {
    md += `**Revision:** ${lexicon.revision}\n\n`;
  }
  if (lexicon.description) {
    md += `${lexicon.description}\n\n`;
  }

  md += `**Lexicon Version:** ${lexicon.lexicon}\n\n`;

  md += `## Definitions\n\n`;

  for (const [defName, def] of Object.entries(lexicon.defs)) {
    // Generate anchor link compatible with Starlight/Astro (lowercase, no special chars)
    const anchorName = defName.toLowerCase().replace(/[^a-z0-9]/g, "");
    md += `<a name="${anchorName}"></a>\n`;
    md += `### \`${defName}\`\n\n`;
    md += `**Type:** \`${def.type}\`\n\n`;

    if (def.description) {
      md += `${def.description}\n\n`;
    }

    // Type-specific rendering
    switch (def.type) {
      case "record":
        if (def.key) md += `**Record Key:** \`${def.key}\`\n\n`;
        md += `**Record Properties:**\n\n`;
        md += renderPropertiesTable(
          def.record.properties,
          def.record.required || [],
          def.record.nullable || [],
        );
        md += `\n`;
        break;

      case "object":
        md += `**Properties:**\n\n`;
        md += renderPropertiesTable(
          def.properties,
          def.required || [],
          def.nullable || [],
        );
        md += `\n`;
        break;

      case "query":
      case "procedure":
      case "subscription":
        if (
          def.parameters &&
          def.parameters.properties &&
          Object.keys(def.parameters.properties).length > 0
        ) {
          md += `**Parameters:**\n\n`;
          md += renderPropertiesTable(
            def.parameters.properties,
            def.parameters.required || [],
            // Parameters don't have 'nullable' in the spec
          );
          md += `\n`;
        } else {
          md += `**Parameters:** _(None defined)_\n\n`;
        }

        if (def.type === "procedure" && def.input) {
          md += `**Input:**\n\n`;
          md += `- **Encoding:** \`${def.input.encoding}\`\n`;
          if (def.input.description) {
            md += `- **Description:** ${def.input.description}\n`;
          }
          md += `- **Schema:**\n\n${renderSchema(def.input.schema, 4)}\n`;
        }

        if ((def.type === "query" || def.type === "procedure") && def.output) {
          md += `**Output:**\n\n`;
          md += `- **Encoding:** \`${def.output.encoding}\`\n`;
          if (def.output.description) {
            md += `- **Description:** ${def.output.description}\n`;
          }
          md += `- **Schema:**\n\n${renderSchema(def.output.schema, 4)}\n`;
        }

        if (def.type === "subscription" && def.message) {
          md += `**Message:**\n\n`;
          if (def.message.description) {
            md += `- **Description:** ${def.message.description}\n`;
          }
          md += `- **Schema:**\n\n${renderSchema(def.message.schema, 4)}\n`;
        }

        if (def.errors && def.errors.length > 0) {
          md += `**Possible Errors:**\n\n`;
          md += def.errors
            .map(
              (err) =>
                `- \`${err.name}\`${
                  err.description ? `: ${err.description}` : ""
                }`,
            )
            .join("\n");
          md += `\n`;
        }
        break;

      case "blob": {
        const blobConstraints = formatConstraints(def);
        if (blobConstraints) {
          md += `**Constraints:**<br/>${blobConstraints}\n\n`;
        }
        break;
      }

      case "token":
        break;

      case "string":
      case "integer":
      case "boolean":
      case "bytes":
      case "cid-link":
      case "unknown": {
        const primitiveConstraints = formatConstraints(def);
        if (primitiveConstraints) {
          md += `**Constraints:**<br/>${primitiveConstraints}\n\n`;
        }
        break;
      }

      case "array": {
        md += `**Items Type:** ${formatType(def.items)}\n\n`;
        const arrayConstraints = formatConstraints(def);
        if (arrayConstraints) {
          md += `**Constraints:**<br/>${arrayConstraints}\n\n`;
        }
        break;
      }

      default:
        console.warn(
          `Unhandled definition type for markdown generation: ${
            (def as any).type
          } in ${lexicon.id}`,
        );
        break;
    }
    md += `\n---\n\n`;
  }

  if (config.includeSourceJson) {
    md +=
      "## Lexicon Source\n```json\n" +
      JSON.stringify(lexicon, null, 2) +
      "\n```\n";
  }

  return md;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2 && args.length !== 4) {
    console.error(
      "Usage: lexmd <input-dir> <output-dir> [openapi_external_lex_dir optional] [openapi.json-path optional]",
    );
    console.error(
      `\nEnsure the import paths in main.ts (or .js) match compiled output or TS config.`,
    );
    console.error(`Using Types Import Path Hint: ${config.typesImportPath}`);
    process.exit(1);
  }

  const inputDir = path.resolve(args[0]);
  const outputDir = path.resolve(args[1]);
  const externalLexDir = args.length === 4 ? path.resolve(args[2]) : null;
  const openApiPath = args.length === 4 ? path.resolve(args[3]) : null;

  console.log(`Input Directory (Markdown & OpenAPI): ${inputDir}`);
  console.log(`Output Directory (Markdown): ${outputDir}`);
  if (externalLexDir) {
    console.log(`External Lexicon Directory (OpenAPI only): ${externalLexDir}`);
  }
  if (openApiPath) {
    console.log(`OpenAPI Output Path: ${openApiPath}`);
  }
  console.log(`Include Source JSON: ${config.includeSourceJson}`);
  console.log(`Using Types Import Path Hint: ${config.typesImportPath}`);

  let openAPILexicons: BskyLex.LexiconDoc[] = [];

  try {
    // Use Node's fs.mkdir
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Ensured output directory exists: ${outputDir}`);

    // Process inputDir (Markdown + OpenAPI)
    const inputDirents: Dirent[] = await fs.readdir(inputDir, {
      withFileTypes: true,
      recursive: true,
    });
    const inputJsonFiles = inputDirents
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".json"))
      .map((dirent) => path.join(dirent.parentPath, dirent.name));

    console.log(
      `Found ${inputJsonFiles.length} JSON files in ${inputDir} recursively. Processing for Markdown...`,
    );

    for (const inputFilePath of inputJsonFiles) {
      console.log(`Processing ${inputFilePath}...`);
      try {
        const fileContent = await fs.readFile(inputFilePath, "utf-8");
        const jsonData = JSON.parse(fileContent);

        // validate
        const parseResult = BskyLex.lexiconDoc.safeParse(jsonData);
        if (!parseResult.success) {
          console.warn(
            `Skipping ${inputFilePath}: Invalid Lexicon format. Errors:`,
            parseResult.error.flatten(),
          );
          continue;
        }
        const lexiconData = parseResult.data;
        openAPILexicons.push(lexiconData); // Add to list for OpenAPI

        // Generate and save Markdown
        const sanitizedId = lexiconData.id
          .toLowerCase()
          .replace(/[^a-z0-9-]/g, config.defaultLexiconSeparator);
        const outputFileName = `${sanitizedId}.md`;
        const relativePath = path.relative(
          inputDir,
          path.dirname(inputFilePath),
        );
        const specificOutputDir = path.join(outputDir, relativePath);
        const specificOutputFilePath = path.join(
          specificOutputDir,
          outputFileName,
        );

        await fs.mkdir(specificOutputDir, { recursive: true });
        const markdownContent = generateMarkdown(lexiconData);
        await fs.writeFile(specificOutputFilePath, markdownContent);
        console.log(`  -> Generated ${specificOutputFilePath}`);
      } catch (error: any) {
        console.error(
          `Error processing file ${inputFilePath}: ${error.message}`,
        );
        if (error instanceof SyntaxError) {
          console.error("   This might be due to invalid JSON format.");
        }
        console.error(error.stack);
      }
    }

    let externalLexicons: BskyLex.LexiconDoc[] = [];

    // Process externalLexDir (OpenAPI only) if provided
    if (externalLexDir) {
      const externalDirents: Dirent[] = await fs.readdir(externalLexDir, {
        withFileTypes: true,
        recursive: true,
      });
      const externalJsonFiles = externalDirents
        .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".json"))
        .map((dirent) => path.join(dirent.parentPath, dirent.name));

      console.log(
        `Found ${externalJsonFiles.length} JSON files in ${externalLexDir} recursively. Processing for OpenAPI...`,
      );

      for (const inputFilePath of externalJsonFiles) {
        console.log(`Processing external ${inputFilePath}...`);
        try {
          const fileContent = await fs.readFile(inputFilePath, "utf-8");
          const jsonData = JSON.parse(fileContent);

          // validate
          const parseResult = BskyLex.lexiconDoc.safeParse(jsonData);
          if (!parseResult.success) {
            console.warn(
              `Skipping external ${inputFilePath}: Invalid Lexicon format. Errors:`,
              parseResult.error.flatten(),
            );
            continue;
          }
          const lexiconData = parseResult.data;
          externalLexicons.push(lexiconData); // Add to list for OpenAPI
        } catch (error: any) {
          console.error(
            `Error processing external file ${inputFilePath}: ${error.message}`,
          );
          if (error instanceof SyntaxError) {
            console.error("   This might be due to invalid JSON format.");
          }
          console.error(error.stack);
        }
      }
    }

    // Generate and save OpenAPI spec if path is provided
    if (openApiPath) {
      console.log("Converting to OpenAPI...");
      const restSpec = convertLexiconToOpenAPI(
        openAPILexicons,
        externalLexicons,
      );
      await fs.writeFile(openApiPath, JSON.stringify(restSpec, null, 2));
      console.log(`  -> Saved OpenAPI spec to ${openApiPath}`);
    }

    console.log("Processing complete.");
  } catch (error: any) {
    console.error(
      `An error occurred during setup or file listing: ${error.message}`,
    );
    console.error(error.stack);
    process.exit(1);
  }
}

main();
