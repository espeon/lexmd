import * as BskyLex from "./types.ts"; // This will be adjusted below
import config from "./config.ts"; // Import the configuration

import * as fs from "node:fs/promises";
import * as path from "node:path";

// Use the prefix table from the configuration
const PREFIX_TABLE = config.prefixLinkTable;

// --- Helper Functions ---

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
        if (linkFormatter) { // Check if the formatter function exists
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
  headerLevel: number, // Note: headerLevel is not currently used here
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
    // Handle other simple schema types directly if needed,
    // otherwise fallback to a generic message.
    const constraints = formatConstraints(schema);
    md += `**Schema Type:** ${formatType(schema)}\n\n`;
    if (constraints) md += `**Constraints:**<br/>${constraints}\n\n`;
    // console.warn(`Unhandled schema type in renderSchema: ${schema.type}`);
  }
  return md;
}

function renderPropertiesTable(
  properties:
    | BskyLex.LexObject["properties"]
    | BskyLex.LexXrpcParameters["properties"],
  required: string[] = [],
  nullable: string[] = [], // Added for LexObject
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
    // Only show nullable for object properties, not parameters
    const isNullable = (nullable && nullable.includes(name)) ? "✅" : "n/a";
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
          def.nullable || [], // Pass nullable here
        );
        md += `\n`;
        break;

      case "query":
      case "procedure":
      case "subscription":
        if (
          def.parameters &&
          def.parameters.properties && // Check properties exist
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
        // Tokens usually just have a description, already handled above.
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
            (def as any).type // Use type assertion carefully
          } in ${lexicon.id}`,
        );
        break;
    }
    md += `\n---\n\n`; // Separator between definitions
  }

  // Conditionally append the source JSON based on config
  if (config.includeSourceJson) {
    md += "## Lexicon Source\n```json\n" + JSON.stringify(lexicon, null, 2) +
      "\n```\n";
  }

  return md;
}

// --- Main Execution Logic ---

async function main() {
  const args = Deno.args;
  if (args.length !== 2) {
    console.error(
      "Usage: deno run --allow-read --allow-write lexToMd/main.ts <input-dir> <output-dir>", // Updated usage
    );
    console.error(
      `\nEnsure the import path in main.ts matches config.typesImportPath ('${config.typesImportPath}')`,
    );
    Deno.exit(1);
  }

  const inputDir = path.resolve(args[0]);
  const outputDir = path.resolve(args[1]);

  console.log(`Input Directory: ${inputDir}`);
  console.log(`Output Directory: ${outputDir}`);
  console.log(`Include Source JSON: ${config.includeSourceJson}`);
  console.log(`Using Types Import Path Hint: ${config.typesImportPath}`);

  try {
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Ensured output directory exists: ${outputDir}`);

    const dirents = await fs.readdir(inputDir, {
      withFileTypes: true,
      recursive: true,
    });
    const jsonFiles = dirents
      .filter((dirent: any) => dirent.isFile() && dirent.name.endsWith(".json"))
      .map((dirent: any) => path.join(dirent.parentPath, dirent.name));

    if (jsonFiles.length === 0) {
      console.warn(`No .json files found in ${inputDir}`);
      return;
    }

    console.log(`Found ${jsonFiles.length} JSON files. Processing...`);

    for (const inputFilePath of jsonFiles) { // Renamed for clarity
      // Generate output filename based on lexicon ID (sanitized)
      let outputFileName = path.basename(inputFilePath, ".json") + ".md"; // Default

      console.log(`Processing ${inputFilePath}...`);

      try {
        const fileContent = await fs.readFile(inputFilePath, "utf-8");
        const jsonData = JSON.parse(fileContent);

        // --- Zod Validation ---
        // Note: Using BskyLex imported at the top, ensure it's correct
        const parseResult = BskyLex.lexiconDoc.safeParse(jsonData);

        if (!parseResult.success) {
          console.warn(
            `Skipping ${inputFilePath}: Invalid Lexicon format. Errors:`,
            parseResult.error.flatten(), // Log flattened errors for readability
          );
          continue; // Skip this file
        }
        // --- End Validation ---

        const lexiconData = parseResult.data; // Use validated data

        // Generate a cleaner filename from the lexicon ID
        const sanitizedId = lexiconData.id.toLowerCase().replace(
          /[^a-z0-9-]/g,
          config.defaultLexiconSeparator,
        ); // Sanitize for filename
        outputFileName = `${sanitizedId}.md`;
        const specificOutputFilePath = path.join(outputDir, outputFileName);

        // Ensure the specific output directory exists (needed if IDs contain '/')
        // Although we sanitized '/' away, this is good practice if that changes
        await fs.mkdir(path.dirname(specificOutputFilePath), {
          recursive: true,
        });

        const markdownContent = generateMarkdown(lexiconData);
        await fs.writeFile(specificOutputFilePath, markdownContent);
        console.log(`  -> Generated ${specificOutputFilePath}`); // Log full path
      } catch (error: any) {
        console.error(
          `Error processing file ${inputFilePath}: ${error.message}`,
        );
        if (error instanceof SyntaxError) {
          console.error(
            "   This might be due to invalid JSON format.",
          );
        }
        console.error(error.stack);
      }
    }

    console.log("Processing complete.");
  } catch (error: any) {
    // Catch errors like readdir failing
    console.error(
      `An error occurred during setup or file listing: ${error.message}`,
    );
    // console.error(error.stack); // Optional: Log stack trace
    Deno.exit(1);
  }
}

main();
