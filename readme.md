# Lex M.D.

[![Built with Deno](https://img.shields.io/badge/Built%20with-Deno-4695e1?logo=deno)](https://deno.land/)

Transform ATProto Lexicon files into well-formatted, linkable Markdown documents, perfect for automatic documentation generation.

Validates your lexicons against the official Lexicon specification.

## Configuration

The `lexToMd/config.ts` file allows you to customize the script's behavior:

```typescript
const config: Config = {
  prefixLinkTable: {
    // Link place.stream definitions to /reference/placestream* paths
    "place.stream": (nsid: string) => {
      return `/reference/${nsid.toLowerCase().replaceAll(".", "")}`;
    },
    // No special linking for app.bsky or com.atproto refs
    "app.bsky": null,
    "com.atproto": null,
    // Add more custom link rules here
  },
  // Set to false to omit the source JSON block from output
  includeSourceJson: true,
  // Change the default separator used in markdown filenames
  defaultLexiconSeparator: "-",
  // Path *relative to main.ts* where Zod types are defined.
  // MUST match the actual import in main.ts!
  typesImportPath: "./types.ts",
};

export default config;

```

*   **`prefixLinkTable`**:
    *   Keys are the first two segments of a Lexicon NSID (e.g., `"com.atproto"`).
    *   Values are either:
        *   A function `(nsid: string) => string` that takes the full Lexicon NSID and returns the desired Markdown link URL.
        *   `null` to indicate no special linking; the reference will just be displayed as code (`\`com.atproto.repo.strongRef\``).
*   **`includeSourceJson`**:
    *   `true`: Appends the original Lexicon JSON definition in a fenced code block at the end of the Markdown.
    *   `false`: Omits the source JSON block.
*   **`typesImportPath`**:
    *   A string representing the path to your Zod types definition file, relative to `main.ts`.
    *   **Crucial:** This path is used as a *hint* in logs and error messages. You **must** ensure the static `import * as BskyLex from '...'` statement at the top of `main.ts` uses the correct, corresponding path. ES Modules require static paths for imports.

## Usage

Run the script from your terminal using Deno, providing the input and output directories as arguments. You need to grant read permissions for the input directory/types file and write permissions for the output directory.

```bash
deno run --allow-read --allow-write lexToMd/main.ts <path/to/input-lexicons> <path/to/output-markdown>
```

**Example:**

```bash
# Process JSON files in ./lexicons/ and write Markdown to ./docs/reference/
deno run --allow-read --allow-write lexToMd/main.ts ./lexicons ./docs/reference
```

*   **`<path/to/input-lexicons>`:** The directory containing your `.json` Lexicon files. The script will search recursively.
*   **`<path/to/output-markdown>`:** The directory where the generated `.md` files will be saved. It will be created if it doesn't exist.

## Linking Behavior

*   **Internal References:** References within the same document (starting with `#`, e.g., `#main`) are linked to the corresponding definition's anchor tag within that document. Anchor names are generated from the definition key (e.g., `main`).
*   **External References:** References to other Lexicons (e.g., `com.atproto.repo.strongRef`) are handled based on the `prefixLinkTable` in `config.ts`:
    *   If a matching prefix (e.g., `com.atproto`) has a function defined, that function generates the link URL.
    *   If the prefix is `null` or not found in the table, the reference is displayed as inline code without a link.

## Contributing

Found a bug or have a feature request? Feel free to open an issue on the project's repository! Contributions via pull requests are also welcome (please adhere to existing coding style).
