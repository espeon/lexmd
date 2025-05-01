/**
 * Configuration settings for the Lexicon to Markdown converter.
 */
export interface Config {
  /**
   * A map where keys are the first two segments of a Lexicon ID (e.g., "com.atproto")
   * and values are functions that generate the target URL path for external references,
   * or null if no special linking is desired for that prefix.
   *
   * The function receives the full Lexicon ID (e.g., "com.atproto.repo.strongRef").
   */
  prefixLinkTable: Record<string, null | ((nsid: string) => string)>;

  /**
   * If true, appends the original Lexicon JSON definition within a code block
   * at the end of the generated Markdown file.
   */
  includeSourceJson: boolean;

  /**
   * Path to the Zod types file.
   * IMPORTANT: Ensure this path is correct relative to main.ts.
   */
  typesImportPath: string;

  /**
   * The separator used to join the lexicon NSID segments in the generated Markdown filename.
   */
  defaultLexiconSeparator: string;
}

const config: Config = {
  prefixLinkTable: {
    // Example: Link place.stream definitions to a specific path structure
    // replacing all dots for starlight/astro file-based routing reasons
    "place.stream": (nsid: string) => {
      return `/lex-reference/${nsid.toLowerCase().replaceAll(".", "-")}`;
    },
    // https://github.com/bluesky-social/atproto/tree/main/lexicons
    // Prefixes with null will not generate special links
    "app.bsky": (nsid: string) => {
      const [prefix, suffix] = nsid.split("#");
      return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${
        prefix.toLowerCase().replaceAll(".", "/")
      }.json#${suffix}`;
    },
    "chat.bsky": (nsid: string) => {
      const [prefix, suffix] = nsid.split("#");
      return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${
        prefix.toLowerCase().replaceAll(".", "/")
      }.json#${suffix}`;
    },
    "com.atproto": (nsid: string) => {
      const [prefix, suffix] = nsid.split("#");
      return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${
        prefix.toLowerCase().replaceAll(".", "/")
      }.json#${suffix}`;
    },
    "tools.ozone": (nsid: string) => {
      const [prefix, suffix] = nsid.split("#");
      return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${
        prefix.toLowerCase().replaceAll(".", "/")
      }.json#${suffix}`;
    },
  },
  defaultLexiconSeparator: "-",
  includeSourceJson: true,
  typesImportPath: "./types.ts",
};

export default config;
