import { z } from "zod";
export declare const lexBoolean: z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodBoolean>;
    const: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
}, {
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
}>;
export type LexBoolean = z.infer<typeof lexBoolean>;
export declare const lexInteger: z.ZodObject<{
    type: z.ZodLiteral<"integer">;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodNumber>;
    minimum: z.ZodOptional<z.ZodNumber>;
    maximum: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    const: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
}, {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
}>;
export type LexInteger = z.infer<typeof lexInteger>;
export declare const lexStringFormat: z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>;
export type LexStringFormat = z.infer<typeof lexStringFormat>;
export declare const lexString: z.ZodObject<{
    type: z.ZodLiteral<"string">;
    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minGraphemes: z.ZodOptional<z.ZodNumber>;
    maxGraphemes: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    const: z.ZodOptional<z.ZodString>;
    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
}, {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
}>;
export type LexString = z.infer<typeof lexString>;
export declare const lexUnknown: z.ZodObject<{
    type: z.ZodLiteral<"unknown">;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "unknown";
    description?: string | undefined;
}, {
    type: "unknown";
    description?: string | undefined;
}>;
export type LexUnknown = z.infer<typeof lexUnknown>;
export declare const lexPrimitive: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"boolean">;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodBoolean>;
    const: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
}, {
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"integer">;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodNumber>;
    minimum: z.ZodOptional<z.ZodNumber>;
    maximum: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    const: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
}, {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"string">;
    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
    description: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minGraphemes: z.ZodOptional<z.ZodNumber>;
    maxGraphemes: z.ZodOptional<z.ZodNumber>;
    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    const: z.ZodOptional<z.ZodString>;
    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
}, {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"unknown">;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "unknown";
    description?: string | undefined;
}, {
    type: "unknown";
    description?: string | undefined;
}>]>;
export type LexPrimitive = z.infer<typeof lexPrimitive>;
export declare const lexBytes: z.ZodObject<{
    type: z.ZodLiteral<"bytes">;
    description: z.ZodOptional<z.ZodString>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minLength: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}, {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}>;
export type LexBytes = z.infer<typeof lexBytes>;
export declare const lexCidLink: z.ZodObject<{
    type: z.ZodLiteral<"cid-link">;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "cid-link";
    description?: string | undefined;
}, {
    type: "cid-link";
    description?: string | undefined;
}>;
export type LexCidLink = z.infer<typeof lexCidLink>;
export declare const lexIpldType: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"bytes">;
    description: z.ZodOptional<z.ZodString>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minLength: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}, {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"cid-link">;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "cid-link";
    description?: string | undefined;
}, {
    type: "cid-link";
    description?: string | undefined;
}>]>;
export type LexIpldType = z.infer<typeof lexIpldType>;
export declare const lexRef: z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    description: z.ZodOptional<z.ZodString>;
    ref: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "ref";
    ref: string;
    description?: string | undefined;
}, {
    type: "ref";
    ref: string;
    description?: string | undefined;
}>;
export type LexRef = z.infer<typeof lexRef>;
export declare const lexRefUnion: z.ZodObject<{
    type: z.ZodLiteral<"union">;
    description: z.ZodOptional<z.ZodString>;
    refs: z.ZodArray<z.ZodString, "many">;
    closed: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    type: "union";
    refs: string[];
    description?: string | undefined;
    closed?: boolean | undefined;
}, {
    type: "union";
    refs: string[];
    description?: string | undefined;
    closed?: boolean | undefined;
}>;
export type LexRefUnion = z.infer<typeof lexRefUnion>;
export declare const lexRefVariant: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    description: z.ZodOptional<z.ZodString>;
    ref: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "ref";
    ref: string;
    description?: string | undefined;
}, {
    type: "ref";
    ref: string;
    description?: string | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"union">;
    description: z.ZodOptional<z.ZodString>;
    refs: z.ZodArray<z.ZodString, "many">;
    closed: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    type: "union";
    refs: string[];
    description?: string | undefined;
    closed?: boolean | undefined;
}, {
    type: "union";
    refs: string[];
    description?: string | undefined;
    closed?: boolean | undefined;
}>]>;
export type LexRefVariant = z.infer<typeof lexRefVariant>;
export declare const lexBlob: z.ZodObject<{
    type: z.ZodLiteral<"blob">;
    description: z.ZodOptional<z.ZodString>;
    accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    maxSize: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "blob";
    description?: string | undefined;
    maxSize?: number | undefined;
    accept?: string[] | undefined;
}, {
    type: "blob";
    description?: string | undefined;
    maxSize?: number | undefined;
    accept?: string[] | undefined;
}>;
export type LexBlob = z.infer<typeof lexBlob>;
export declare const lexArray: z.ZodObject<{
    type: z.ZodLiteral<"array">;
    description: z.ZodOptional<z.ZodString>;
    items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodBoolean>;
        const: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"integer">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodNumber>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        const: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minGraphemes: z.ZodOptional<z.ZodNumber>;
        maxGraphemes: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        const: z.ZodOptional<z.ZodString>;
        knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"bytes">;
        description: z.ZodOptional<z.ZodString>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minLength: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }, {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"cid-link">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "cid-link";
        description?: string | undefined;
    }, {
        type: "cid-link";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        description: z.ZodOptional<z.ZodString>;
        ref: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"union">;
        description: z.ZodOptional<z.ZodString>;
        refs: z.ZodArray<z.ZodString, "many">;
        closed: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"blob">;
        description: z.ZodOptional<z.ZodString>;
        accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        maxSize: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    }, {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    }>]>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}, {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}>;
export type LexArray = z.infer<typeof lexArray>;
export declare const lexPrimitiveArray: z.ZodObject<{
    type: z.ZodLiteral<"array">;
    description: z.ZodOptional<z.ZodString>;
    minLength: z.ZodOptional<z.ZodNumber>;
    maxLength: z.ZodOptional<z.ZodNumber>;
} & {
    items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodBoolean>;
        const: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"integer">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodNumber>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        const: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minGraphemes: z.ZodOptional<z.ZodNumber>;
        maxGraphemes: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        const: z.ZodOptional<z.ZodString>;
        knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>]>;
}, "strict", z.ZodTypeAny, {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}, {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
}>;
export type LexPrimitiveArray = z.infer<typeof lexPrimitiveArray>;
export declare const lexToken: z.ZodObject<{
    type: z.ZodLiteral<"token">;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "token";
    description?: string | undefined;
}, {
    type: "token";
    description?: string | undefined;
}>;
export type LexToken = z.infer<typeof lexToken>;
export declare const lexObject: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"object">;
    description: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"array">;
        description: z.ZodOptional<z.ZodString>;
        items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bytes">;
            description: z.ZodOptional<z.ZodString>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cid-link">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "cid-link";
            description?: string | undefined;
        }, {
            type: "cid-link";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"blob">;
            description: z.ZodOptional<z.ZodString>;
            accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            maxSize: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }>]>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }, {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodBoolean>;
        const: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"integer">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodNumber>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        const: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minGraphemes: z.ZodOptional<z.ZodNumber>;
        maxGraphemes: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        const: z.ZodOptional<z.ZodString>;
        knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"bytes">;
        description: z.ZodOptional<z.ZodString>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minLength: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }, {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"cid-link">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "cid-link";
        description?: string | undefined;
    }, {
        type: "cid-link";
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        description: z.ZodOptional<z.ZodString>;
        ref: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"union">;
        description: z.ZodOptional<z.ZodString>;
        refs: z.ZodArray<z.ZodString, "many">;
        closed: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"blob">;
        description: z.ZodOptional<z.ZodString>;
        accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        maxSize: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    }, {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
}, {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
}>, {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
}, {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
}>;
export type LexObject = z.infer<typeof lexObject>;
export declare const lexXrpcParameters: z.ZodEffects<z.ZodObject<{
    type: z.ZodLiteral<"params">;
    description: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"array">;
        description: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
    } & {
        items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>]>;
    }, "strict", z.ZodTypeAny, {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }, {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodBoolean>;
        const: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"integer">;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodNumber>;
        minimum: z.ZodOptional<z.ZodNumber>;
        maximum: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        const: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }, {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"string">;
        format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
        description: z.ZodOptional<z.ZodString>;
        default: z.ZodOptional<z.ZodString>;
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minGraphemes: z.ZodOptional<z.ZodNumber>;
        maxGraphemes: z.ZodOptional<z.ZodNumber>;
        enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        const: z.ZodOptional<z.ZodString>;
        knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }, {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"unknown">;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "unknown";
        description?: string | undefined;
    }, {
        type: "unknown";
        description?: string | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    type: "params";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
}, {
    type: "params";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
}>, {
    type: "params";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
}, {
    type: "params";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
}>;
export type LexXrpcParameters = z.infer<typeof lexXrpcParameters>;
export declare const lexXrpcBody: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    encoding: z.ZodString;
    schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        description: z.ZodOptional<z.ZodString>;
        ref: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"union">;
        description: z.ZodOptional<z.ZodString>;
        refs: z.ZodArray<z.ZodString, "many">;
        closed: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }>]>, z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"object">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bytes">;
            description: z.ZodOptional<z.ZodString>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cid-link">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "cid-link";
            description?: string | undefined;
        }, {
            type: "cid-link";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"blob">;
            description: z.ZodOptional<z.ZodString>;
            accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            maxSize: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    encoding: string;
    description?: string | undefined;
    schema?: {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | undefined;
}, {
    encoding: string;
    description?: string | undefined;
    schema?: {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | undefined;
}>;
export type LexXrpcBody = z.infer<typeof lexXrpcBody>;
export declare const lexXrpcSubscriptionMessage: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ref">;
        description: z.ZodOptional<z.ZodString>;
        ref: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }, {
        type: "ref";
        ref: string;
        description?: string | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"union">;
        description: z.ZodOptional<z.ZodString>;
        refs: z.ZodArray<z.ZodString, "many">;
        closed: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }, {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    }>]>, z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"object">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bytes">;
            description: z.ZodOptional<z.ZodString>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cid-link">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "cid-link";
            description?: string | undefined;
        }, {
            type: "cid-link";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"blob">;
            description: z.ZodOptional<z.ZodString>;
            accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            maxSize: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>]>>;
}, "strict", z.ZodTypeAny, {
    description?: string | undefined;
    schema?: {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | undefined;
}, {
    description?: string | undefined;
    schema?: {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | undefined;
}>;
export type LexXrpcSubscriptionMessage = z.infer<typeof lexXrpcSubscriptionMessage>;
export declare const lexXrpcError: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
}, {
    name: string;
    description?: string | undefined;
}>;
export type LexXrpcError = z.infer<typeof lexXrpcError>;
export declare const lexXrpcQuery: z.ZodObject<{
    type: z.ZodLiteral<"query">;
    description: z.ZodOptional<z.ZodString>;
    parameters: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"params">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        } & {
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>]>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>>;
    output: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        encoding: z.ZodString;
        schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>]>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"object">;
            description: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"array">;
                description: z.ZodOptional<z.ZodString>;
                items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    type: z.ZodLiteral<"boolean">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodBoolean>;
                    const: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"integer">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodNumber>;
                    minimum: z.ZodOptional<z.ZodNumber>;
                    maximum: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    const: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"string">;
                    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodString>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minGraphemes: z.ZodOptional<z.ZodNumber>;
                    maxGraphemes: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    const: z.ZodOptional<z.ZodString>;
                    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strict", z.ZodTypeAny, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"unknown">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "unknown";
                    description?: string | undefined;
                }, {
                    type: "unknown";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"bytes">;
                    description: z.ZodOptional<z.ZodString>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"cid-link">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "cid-link";
                    description?: string | undefined;
                }, {
                    type: "cid-link";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"ref">;
                    description: z.ZodOptional<z.ZodString>;
                    ref: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"union">;
                    description: z.ZodOptional<z.ZodString>;
                    refs: z.ZodArray<z.ZodString, "many">;
                    closed: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"blob">;
                    description: z.ZodOptional<z.ZodString>;
                    accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    maxSize: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }>]>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }>>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description?: string | undefined;
    }, {
        name: string;
        description?: string | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    type: "query";
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    type: "query";
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}>;
export type LexXrpcQuery = z.infer<typeof lexXrpcQuery>;
export declare const lexXrpcProcedure: z.ZodObject<{
    type: z.ZodLiteral<"procedure">;
    description: z.ZodOptional<z.ZodString>;
    parameters: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"params">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        } & {
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>]>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>>;
    input: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        encoding: z.ZodString;
        schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>]>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"object">;
            description: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"array">;
                description: z.ZodOptional<z.ZodString>;
                items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    type: z.ZodLiteral<"boolean">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodBoolean>;
                    const: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"integer">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodNumber>;
                    minimum: z.ZodOptional<z.ZodNumber>;
                    maximum: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    const: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"string">;
                    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodString>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minGraphemes: z.ZodOptional<z.ZodNumber>;
                    maxGraphemes: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    const: z.ZodOptional<z.ZodString>;
                    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strict", z.ZodTypeAny, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"unknown">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "unknown";
                    description?: string | undefined;
                }, {
                    type: "unknown";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"bytes">;
                    description: z.ZodOptional<z.ZodString>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"cid-link">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "cid-link";
                    description?: string | undefined;
                }, {
                    type: "cid-link";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"ref">;
                    description: z.ZodOptional<z.ZodString>;
                    ref: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"union">;
                    description: z.ZodOptional<z.ZodString>;
                    refs: z.ZodArray<z.ZodString, "many">;
                    closed: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"blob">;
                    description: z.ZodOptional<z.ZodString>;
                    accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    maxSize: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }>]>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }>>;
    output: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        encoding: z.ZodString;
        schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>]>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"object">;
            description: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"array">;
                description: z.ZodOptional<z.ZodString>;
                items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    type: z.ZodLiteral<"boolean">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodBoolean>;
                    const: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"integer">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodNumber>;
                    minimum: z.ZodOptional<z.ZodNumber>;
                    maximum: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    const: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"string">;
                    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodString>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minGraphemes: z.ZodOptional<z.ZodNumber>;
                    maxGraphemes: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    const: z.ZodOptional<z.ZodString>;
                    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strict", z.ZodTypeAny, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"unknown">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "unknown";
                    description?: string | undefined;
                }, {
                    type: "unknown";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"bytes">;
                    description: z.ZodOptional<z.ZodString>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"cid-link">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "cid-link";
                    description?: string | undefined;
                }, {
                    type: "cid-link";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"ref">;
                    description: z.ZodOptional<z.ZodString>;
                    ref: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"union">;
                    description: z.ZodOptional<z.ZodString>;
                    refs: z.ZodArray<z.ZodString, "many">;
                    closed: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"blob">;
                    description: z.ZodOptional<z.ZodString>;
                    accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    maxSize: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }>]>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }, {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }>>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description?: string | undefined;
    }, {
        name: string;
        description?: string | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    type: "procedure";
    input?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    type: "procedure";
    input?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}>;
export type LexXrpcProcedure = z.infer<typeof lexXrpcProcedure>;
export declare const lexXrpcSubscription: z.ZodObject<{
    type: z.ZodLiteral<"subscription">;
    description: z.ZodOptional<z.ZodString>;
    parameters: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"params">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        } & {
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>]>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }, {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    }>>;
    message: z.ZodOptional<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        schema: z.ZodOptional<z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>]>, z.ZodEffects<z.ZodObject<{
            type: z.ZodLiteral<"object">;
            description: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"array">;
                description: z.ZodOptional<z.ZodString>;
                items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                    type: z.ZodLiteral<"boolean">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodBoolean>;
                    const: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"integer">;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodNumber>;
                    minimum: z.ZodOptional<z.ZodNumber>;
                    maximum: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    const: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }, {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"string">;
                    format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                    description: z.ZodOptional<z.ZodString>;
                    default: z.ZodOptional<z.ZodString>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minGraphemes: z.ZodOptional<z.ZodNumber>;
                    maxGraphemes: z.ZodOptional<z.ZodNumber>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    const: z.ZodOptional<z.ZodString>;
                    knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strict", z.ZodTypeAny, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }, {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"unknown">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "unknown";
                    description?: string | undefined;
                }, {
                    type: "unknown";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"bytes">;
                    description: z.ZodOptional<z.ZodString>;
                    maxLength: z.ZodOptional<z.ZodNumber>;
                    minLength: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }, {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"cid-link">;
                    description: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    type: "cid-link";
                    description?: string | undefined;
                }, {
                    type: "cid-link";
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"ref">;
                    description: z.ZodOptional<z.ZodString>;
                    ref: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }, {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"union">;
                    description: z.ZodOptional<z.ZodString>;
                    refs: z.ZodArray<z.ZodString, "many">;
                    closed: z.ZodOptional<z.ZodBoolean>;
                }, "strict", z.ZodTypeAny, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }, {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"blob">;
                    description: z.ZodOptional<z.ZodString>;
                    accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    maxSize: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }, {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                }>]>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>>;
        }, "strict", z.ZodTypeAny, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }, {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }, {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    }>>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description?: string | undefined;
    }, {
        name: string;
        description?: string | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    type: "subscription";
    message?: {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}, {
    type: "subscription";
    message?: {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
}>;
export type LexXrpcSubscription = z.infer<typeof lexXrpcSubscription>;
export declare const lexRecord: z.ZodObject<{
    type: z.ZodLiteral<"record">;
    description: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    record: z.ZodEffects<z.ZodObject<{
        type: z.ZodLiteral<"object">;
        description: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        nullable: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        properties: z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"array">;
            description: z.ZodOptional<z.ZodString>;
            items: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"boolean">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodBoolean>;
                const: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"integer">;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodNumber>;
                minimum: z.ZodOptional<z.ZodNumber>;
                maximum: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                const: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }, {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"string">;
                format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
                description: z.ZodOptional<z.ZodString>;
                default: z.ZodOptional<z.ZodString>;
                minLength: z.ZodOptional<z.ZodNumber>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minGraphemes: z.ZodOptional<z.ZodNumber>;
                maxGraphemes: z.ZodOptional<z.ZodNumber>;
                enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                const: z.ZodOptional<z.ZodString>;
                knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }, {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"unknown">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "unknown";
                description?: string | undefined;
            }, {
                type: "unknown";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes">;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }, {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"cid-link">;
                description: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "cid-link";
                description?: string | undefined;
            }, {
                type: "cid-link";
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"ref">;
                description: z.ZodOptional<z.ZodString>;
                ref: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }, {
                type: "ref";
                ref: string;
                description?: string | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"union">;
                description: z.ZodOptional<z.ZodString>;
                refs: z.ZodArray<z.ZodString, "many">;
                closed: z.ZodOptional<z.ZodBoolean>;
            }, "strict", z.ZodTypeAny, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }, {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            }>, z.ZodObject<{
                type: z.ZodLiteral<"blob">;
                description: z.ZodOptional<z.ZodString>;
                accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                maxSize: z.ZodOptional<z.ZodNumber>;
            }, "strict", z.ZodTypeAny, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }, {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            }>]>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"boolean">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodBoolean>;
            const: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"integer">;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodNumber>;
            minimum: z.ZodOptional<z.ZodNumber>;
            maximum: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            const: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }, {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"string">;
            format: z.ZodOptional<z.ZodEnum<["datetime", "uri", "at-uri", "did", "handle", "at-identifier", "nsid", "cid", "language", "tid", "record-key"]>>;
            description: z.ZodOptional<z.ZodString>;
            default: z.ZodOptional<z.ZodString>;
            minLength: z.ZodOptional<z.ZodNumber>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minGraphemes: z.ZodOptional<z.ZodNumber>;
            maxGraphemes: z.ZodOptional<z.ZodNumber>;
            enum: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            const: z.ZodOptional<z.ZodString>;
            knownValues: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }, {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"unknown">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "unknown";
            description?: string | undefined;
        }, {
            type: "unknown";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bytes">;
            description: z.ZodOptional<z.ZodString>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minLength: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }, {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"cid-link">;
            description: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "cid-link";
            description?: string | undefined;
        }, {
            type: "cid-link";
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ref">;
            description: z.ZodOptional<z.ZodString>;
            ref: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }, {
            type: "ref";
            ref: string;
            description?: string | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"union">;
            description: z.ZodOptional<z.ZodString>;
            refs: z.ZodArray<z.ZodString, "many">;
            closed: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }, {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"blob">;
            description: z.ZodOptional<z.ZodString>;
            accept: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            maxSize: z.ZodOptional<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }, {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        }>]>>;
    }, "strict", z.ZodTypeAny, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }, {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "record";
    record: {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    };
    description?: string | undefined;
    key?: string | undefined;
}, {
    type: "record";
    record: {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    };
    description?: string | undefined;
    key?: string | undefined;
}>;
export type LexRecord = z.infer<typeof lexRecord>;
export declare const lexUserType: z.ZodType<{
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
} | {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
} | {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
} | {
    type: "unknown";
    description?: string | undefined;
} | {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
} | {
    type: "cid-link";
    description?: string | undefined;
} | {
    type: "blob";
    description?: string | undefined;
    maxSize?: number | undefined;
    accept?: string[] | undefined;
} | {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
} | {
    type: "token";
    description?: string | undefined;
} | {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
} | {
    type: "query";
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "procedure";
    input?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "subscription";
    message?: {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "record";
    record: {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    };
    description?: string | undefined;
    key?: string | undefined;
}, z.ZodTypeDef, {
    type: "boolean";
    default?: boolean | undefined;
    description?: string | undefined;
    const?: boolean | undefined;
} | {
    type: "integer";
    default?: number | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    description?: string | undefined;
    enum?: number[] | undefined;
    const?: number | undefined;
} | {
    type: "string";
    default?: string | undefined;
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    enum?: string[] | undefined;
    const?: string | undefined;
    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
    minGraphemes?: number | undefined;
    maxGraphemes?: number | undefined;
    knownValues?: string[] | undefined;
} | {
    type: "unknown";
    description?: string | undefined;
} | {
    type: "bytes";
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
} | {
    type: "cid-link";
    description?: string | undefined;
} | {
    type: "blob";
    description?: string | undefined;
    maxSize?: number | undefined;
    accept?: string[] | undefined;
} | {
    type: "array";
    items: {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    };
    description?: string | undefined;
    minLength?: number | undefined;
    maxLength?: number | undefined;
} | {
    type: "token";
    description?: string | undefined;
} | {
    type: "object";
    properties: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "ref";
        ref: string;
        description?: string | undefined;
    } | {
        type: "union";
        refs: string[];
        description?: string | undefined;
        closed?: boolean | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    }>;
    required?: string[] | undefined;
    description?: string | undefined;
    nullable?: string[] | undefined;
} | {
    type: "query";
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "procedure";
    input?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    output?: {
        encoding: string;
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "subscription";
    message?: {
        description?: string | undefined;
        schema?: {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        } | undefined;
    } | undefined;
    description?: string | undefined;
    parameters?: {
        type: "params";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
    } | undefined;
    errors?: {
        name: string;
        description?: string | undefined;
    }[] | undefined;
} | {
    type: "record";
    record: {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    };
    description?: string | undefined;
    key?: string | undefined;
}>;
export type LexUserType = z.infer<typeof lexUserType>;
export declare const lexiconDoc: z.ZodEffects<z.ZodObject<{
    lexicon: z.ZodLiteral<1>;
    id: z.ZodEffects<z.ZodString, string, string>;
    revision: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    defs: z.ZodRecord<z.ZodString, z.ZodType<{
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }, z.ZodTypeDef, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    lexicon: 1;
    id: string;
    defs: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }>;
    description?: string | undefined;
    revision?: number | undefined;
}, {
    lexicon: 1;
    id: string;
    defs: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }>;
    description?: string | undefined;
    revision?: number | undefined;
}>, {
    lexicon: 1;
    id: string;
    defs: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }>;
    description?: string | undefined;
    revision?: number | undefined;
}, {
    lexicon: 1;
    id: string;
    defs: Record<string, {
        type: "boolean";
        default?: boolean | undefined;
        description?: string | undefined;
        const?: boolean | undefined;
    } | {
        type: "integer";
        default?: number | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
        description?: string | undefined;
        enum?: number[] | undefined;
        const?: number | undefined;
    } | {
        type: "string";
        default?: string | undefined;
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
        enum?: string[] | undefined;
        const?: string | undefined;
        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
        minGraphemes?: number | undefined;
        maxGraphemes?: number | undefined;
        knownValues?: string[] | undefined;
    } | {
        type: "unknown";
        description?: string | undefined;
    } | {
        type: "bytes";
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "cid-link";
        description?: string | undefined;
    } | {
        type: "blob";
        description?: string | undefined;
        maxSize?: number | undefined;
        accept?: string[] | undefined;
    } | {
        type: "array";
        items: {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        };
        description?: string | undefined;
        minLength?: number | undefined;
        maxLength?: number | undefined;
    } | {
        type: "token";
        description?: string | undefined;
    } | {
        type: "object";
        properties: Record<string, {
            type: "boolean";
            default?: boolean | undefined;
            description?: string | undefined;
            const?: boolean | undefined;
        } | {
            type: "integer";
            default?: number | undefined;
            minimum?: number | undefined;
            maximum?: number | undefined;
            description?: string | undefined;
            enum?: number[] | undefined;
            const?: number | undefined;
        } | {
            type: "string";
            default?: string | undefined;
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
            enum?: string[] | undefined;
            const?: string | undefined;
            format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
            minGraphemes?: number | undefined;
            maxGraphemes?: number | undefined;
            knownValues?: string[] | undefined;
        } | {
            type: "unknown";
            description?: string | undefined;
        } | {
            type: "bytes";
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        } | {
            type: "cid-link";
            description?: string | undefined;
        } | {
            type: "ref";
            ref: string;
            description?: string | undefined;
        } | {
            type: "union";
            refs: string[];
            description?: string | undefined;
            closed?: boolean | undefined;
        } | {
            type: "blob";
            description?: string | undefined;
            maxSize?: number | undefined;
            accept?: string[] | undefined;
        } | {
            type: "array";
            items: {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            };
            description?: string | undefined;
            minLength?: number | undefined;
            maxLength?: number | undefined;
        }>;
        required?: string[] | undefined;
        description?: string | undefined;
        nullable?: string[] | undefined;
    } | {
        type: "query";
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "procedure";
        input?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        output?: {
            encoding: string;
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "subscription";
        message?: {
            description?: string | undefined;
            schema?: {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "object";
                properties: Record<string, {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                } | {
                    type: "array";
                    items: {
                        type: "boolean";
                        default?: boolean | undefined;
                        description?: string | undefined;
                        const?: boolean | undefined;
                    } | {
                        type: "integer";
                        default?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                        description?: string | undefined;
                        enum?: number[] | undefined;
                        const?: number | undefined;
                    } | {
                        type: "string";
                        default?: string | undefined;
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                        enum?: string[] | undefined;
                        const?: string | undefined;
                        format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                        minGraphemes?: number | undefined;
                        maxGraphemes?: number | undefined;
                        knownValues?: string[] | undefined;
                    } | {
                        type: "unknown";
                        description?: string | undefined;
                    } | {
                        type: "bytes";
                        description?: string | undefined;
                        minLength?: number | undefined;
                        maxLength?: number | undefined;
                    } | {
                        type: "cid-link";
                        description?: string | undefined;
                    } | {
                        type: "ref";
                        ref: string;
                        description?: string | undefined;
                    } | {
                        type: "union";
                        refs: string[];
                        description?: string | undefined;
                        closed?: boolean | undefined;
                    } | {
                        type: "blob";
                        description?: string | undefined;
                        maxSize?: number | undefined;
                        accept?: string[] | undefined;
                    };
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                }>;
                required?: string[] | undefined;
                description?: string | undefined;
                nullable?: string[] | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        parameters?: {
            type: "params";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
        } | undefined;
        errors?: {
            name: string;
            description?: string | undefined;
        }[] | undefined;
    } | {
        type: "record";
        record: {
            type: "object";
            properties: Record<string, {
                type: "boolean";
                default?: boolean | undefined;
                description?: string | undefined;
                const?: boolean | undefined;
            } | {
                type: "integer";
                default?: number | undefined;
                minimum?: number | undefined;
                maximum?: number | undefined;
                description?: string | undefined;
                enum?: number[] | undefined;
                const?: number | undefined;
            } | {
                type: "string";
                default?: string | undefined;
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
                enum?: string[] | undefined;
                const?: string | undefined;
                format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                minGraphemes?: number | undefined;
                maxGraphemes?: number | undefined;
                knownValues?: string[] | undefined;
            } | {
                type: "unknown";
                description?: string | undefined;
            } | {
                type: "bytes";
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            } | {
                type: "cid-link";
                description?: string | undefined;
            } | {
                type: "ref";
                ref: string;
                description?: string | undefined;
            } | {
                type: "union";
                refs: string[];
                description?: string | undefined;
                closed?: boolean | undefined;
            } | {
                type: "blob";
                description?: string | undefined;
                maxSize?: number | undefined;
                accept?: string[] | undefined;
            } | {
                type: "array";
                items: {
                    type: "boolean";
                    default?: boolean | undefined;
                    description?: string | undefined;
                    const?: boolean | undefined;
                } | {
                    type: "integer";
                    default?: number | undefined;
                    minimum?: number | undefined;
                    maximum?: number | undefined;
                    description?: string | undefined;
                    enum?: number[] | undefined;
                    const?: number | undefined;
                } | {
                    type: "string";
                    default?: string | undefined;
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    enum?: string[] | undefined;
                    const?: string | undefined;
                    format?: "language" | "datetime" | "uri" | "at-uri" | "did" | "handle" | "at-identifier" | "nsid" | "cid" | "tid" | "record-key" | undefined;
                    minGraphemes?: number | undefined;
                    maxGraphemes?: number | undefined;
                    knownValues?: string[] | undefined;
                } | {
                    type: "unknown";
                    description?: string | undefined;
                } | {
                    type: "bytes";
                    description?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                } | {
                    type: "cid-link";
                    description?: string | undefined;
                } | {
                    type: "ref";
                    ref: string;
                    description?: string | undefined;
                } | {
                    type: "union";
                    refs: string[];
                    description?: string | undefined;
                    closed?: boolean | undefined;
                } | {
                    type: "blob";
                    description?: string | undefined;
                    maxSize?: number | undefined;
                    accept?: string[] | undefined;
                };
                description?: string | undefined;
                minLength?: number | undefined;
                maxLength?: number | undefined;
            }>;
            required?: string[] | undefined;
            description?: string | undefined;
            nullable?: string[] | undefined;
        };
        description?: string | undefined;
        key?: string | undefined;
    }>;
    description?: string | undefined;
    revision?: number | undefined;
}>;
export type LexiconDoc = z.infer<typeof lexiconDoc>;
export declare function isValidLexiconDoc(v: unknown): v is LexiconDoc;
export declare function isObj<V>(v: V): v is V & object;
export type DiscriminatedObject = {
    $type: string;
};
export declare function isDiscriminatedObject(v: unknown): v is DiscriminatedObject;
export declare function parseLexiconDoc(v: unknown): LexiconDoc;
export type ValidationResult<V = unknown> = {
    success: true;
    value: V;
} | {
    success: false;
    error: ValidationError;
};
export declare class ValidationError extends Error {
}
export declare class InvalidLexiconError extends Error {
}
export declare class LexiconDefNotFoundError extends Error {
}
//# sourceMappingURL=types.d.ts.map