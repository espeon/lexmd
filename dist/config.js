const config = {
    prefixLinkTable: {
        "place.stream": (nsid) => {
            return `/lex-reference/${nsid.toLowerCase().replaceAll(".", "-")}`;
        },
        "app.bsky": (nsid) => {
            const [prefix, suffix] = nsid.split("#");
            return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${prefix
                .toLowerCase()
                .replaceAll(".", "/")}.json#${suffix}`;
        },
        "chat.bsky": (nsid) => {
            const [prefix, suffix] = nsid.split("#");
            return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${prefix
                .toLowerCase()
                .replaceAll(".", "/")}.json#${suffix}`;
        },
        "com.atproto": (nsid) => {
            const [prefix, suffix] = nsid.split("#");
            return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${prefix
                .toLowerCase()
                .replaceAll(".", "/")}.json#${suffix}`;
        },
        "tools.ozone": (nsid) => {
            const [prefix, suffix] = nsid.split("#");
            return `https://github.com/bluesky-social/atproto/tree/main/lexicons/${prefix
                .toLowerCase()
                .replaceAll(".", "/")}.json#${suffix}`;
        },
    },
    defaultLexiconSeparator: "-",
    includeSourceJson: true,
    typesImportPath: "./types.ts",
};
export default config;
//# sourceMappingURL=config.js.map