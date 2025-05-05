// Taken from https://github.com/bluesky-social/atproto/blob/main/packages/lexicon/src/types.ts
import { z } from "zod";
import { NSID } from "@atproto/syntax";
import { requiredPropertiesRefinement } from "./util.js";
// primitives
// =
export const lexBoolean = z
    .object({
    type: z.literal("boolean"),
    description: z.string().optional(),
    default: z.boolean().optional(),
    const: z.boolean().optional(),
})
    .strict();
export const lexInteger = z
    .object({
    type: z.literal("integer"),
    description: z.string().optional(),
    default: z.number().int().optional(),
    minimum: z.number().int().optional(),
    maximum: z.number().int().optional(),
    enum: z.number().int().array().optional(),
    const: z.number().int().optional(),
})
    .strict();
export const lexStringFormat = z.enum([
    "datetime",
    "uri",
    "at-uri",
    "did",
    "handle",
    "at-identifier",
    "nsid",
    "cid",
    "language",
    "tid",
    "record-key",
]);
export const lexString = z
    .object({
    type: z.literal("string"),
    format: lexStringFormat.optional(),
    description: z.string().optional(),
    default: z.string().optional(),
    minLength: z.number().int().optional(),
    maxLength: z.number().int().optional(),
    minGraphemes: z.number().int().optional(),
    maxGraphemes: z.number().int().optional(),
    enum: z.string().array().optional(),
    const: z.string().optional(),
    knownValues: z.string().array().optional(),
})
    .strict();
export const lexUnknown = z
    .object({
    type: z.literal("unknown"),
    description: z.string().optional(),
})
    .strict();
export const lexPrimitive = z.discriminatedUnion("type", [
    lexBoolean,
    lexInteger,
    lexString,
    lexUnknown,
]);
// ipld types
// =
export const lexBytes = z
    .object({
    type: z.literal("bytes"),
    description: z.string().optional(),
    maxLength: z.number().optional(),
    minLength: z.number().optional(),
})
    .strict();
export const lexCidLink = z
    .object({
    type: z.literal("cid-link"),
    description: z.string().optional(),
})
    .strict();
export const lexIpldType = z.discriminatedUnion("type", [lexBytes, lexCidLink]);
// references
// =
export const lexRef = z
    .object({
    type: z.literal("ref"),
    description: z.string().optional(),
    ref: z.string(),
})
    .strict();
export const lexRefUnion = z
    .object({
    type: z.literal("union"),
    description: z.string().optional(),
    refs: z.string().array(),
    closed: z.boolean().optional(),
})
    .strict();
export const lexRefVariant = z.discriminatedUnion("type", [
    lexRef,
    lexRefUnion,
]);
// blobs
// =
export const lexBlob = z
    .object({
    type: z.literal("blob"),
    description: z.string().optional(),
    accept: z.string().array().optional(),
    maxSize: z.number().optional(),
})
    .strict();
// complex types
// =
export const lexArray = z
    .object({
    type: z.literal("array"),
    description: z.string().optional(),
    items: z.discriminatedUnion("type", [
        // lexPrimitive
        lexBoolean,
        lexInteger,
        lexString,
        lexUnknown,
        // lexIpldType
        lexBytes,
        lexCidLink,
        // lexRefVariant
        lexRef,
        lexRefUnion,
        // other
        lexBlob,
    ]),
    minLength: z.number().int().optional(),
    maxLength: z.number().int().optional(),
})
    .strict();
export const lexPrimitiveArray = lexArray.merge(z
    .object({
    items: lexPrimitive,
})
    .strict());
export const lexToken = z
    .object({
    type: z.literal("token"),
    description: z.string().optional(),
})
    .strict();
export const lexObject = z
    .object({
    type: z.literal("object"),
    description: z.string().optional(),
    required: z.string().array().optional(),
    nullable: z.string().array().optional(),
    properties: z.record(z.discriminatedUnion("type", [
        lexArray,
        // lexPrimitive
        lexBoolean,
        lexInteger,
        lexString,
        lexUnknown,
        // lexIpldType
        lexBytes,
        lexCidLink,
        // lexRefVariant
        lexRef,
        lexRefUnion,
        // other
        lexBlob,
    ])),
})
    .strict()
    .superRefine(requiredPropertiesRefinement);
// xrpc
// =
export const lexXrpcParameters = z
    .object({
    type: z.literal("params"),
    description: z.string().optional(),
    required: z.string().array().optional(),
    properties: z.record(z.discriminatedUnion("type", [
        lexPrimitiveArray,
        // lexPrimitive
        lexBoolean,
        lexInteger,
        lexString,
        lexUnknown,
    ])),
})
    .strict()
    .superRefine(requiredPropertiesRefinement);
export const lexXrpcBody = z
    .object({
    description: z.string().optional(),
    encoding: z.string(),
    // @NOTE using discriminatedUnion with a refined schema requires zod >= 4
    schema: z.union([lexRefVariant, lexObject]).optional(),
})
    .strict();
export const lexXrpcSubscriptionMessage = z
    .object({
    description: z.string().optional(),
    // @NOTE using discriminatedUnion with a refined schema requires zod >= 4
    schema: z.union([lexRefVariant, lexObject]).optional(),
})
    .strict();
export const lexXrpcError = z
    .object({
    name: z.string(),
    description: z.string().optional(),
})
    .strict();
export const lexXrpcQuery = z
    .object({
    type: z.literal("query"),
    description: z.string().optional(),
    parameters: lexXrpcParameters.optional(),
    output: lexXrpcBody.optional(),
    errors: lexXrpcError.array().optional(),
})
    .strict();
export const lexXrpcProcedure = z
    .object({
    type: z.literal("procedure"),
    description: z.string().optional(),
    parameters: lexXrpcParameters.optional(),
    input: lexXrpcBody.optional(),
    output: lexXrpcBody.optional(),
    errors: lexXrpcError.array().optional(),
})
    .strict();
export const lexXrpcSubscription = z
    .object({
    type: z.literal("subscription"),
    description: z.string().optional(),
    parameters: lexXrpcParameters.optional(),
    message: lexXrpcSubscriptionMessage.optional(),
    errors: lexXrpcError.array().optional(),
})
    .strict();
// database
// =
export const lexRecord = z
    .object({
    type: z.literal("record"),
    description: z.string().optional(),
    key: z.string().optional(),
    record: lexObject,
})
    .strict();
// core
// =
// We need to use `z.custom` here because
// lexXrpcProperty and lexObject are refined
// `z.union` would work, but it's too slow
// see #915 for details
export const lexUserType = z.custom((val) => {
    if (!val || typeof val !== "object") {
        return;
    }
    if (val["type"] === undefined) {
        return;
    }
    switch (val["type"]) {
        case "record":
            return lexRecord.parse(val);
        case "query":
            return lexXrpcQuery.parse(val);
        case "procedure":
            return lexXrpcProcedure.parse(val);
        case "subscription":
            return lexXrpcSubscription.parse(val);
        case "blob":
            return lexBlob.parse(val);
        case "array":
            return lexArray.parse(val);
        case "token":
            return lexToken.parse(val);
        case "object":
            return lexObject.parse(val);
        case "boolean":
            return lexBoolean.parse(val);
        case "integer":
            return lexInteger.parse(val);
        case "string":
            return lexString.parse(val);
        case "bytes":
            return lexBytes.parse(val);
        case "cid-link":
            return lexCidLink.parse(val);
        case "unknown":
            return lexUnknown.parse(val);
    }
}, (val) => {
    if (!val || typeof val !== "object") {
        return {
            message: "Must be an object",
            fatal: true,
        };
    }
    if (val["type"] === undefined) {
        return {
            message: "Must have a type",
            fatal: true,
        };
    }
    if (typeof val["type"] !== "string") {
        return {
            message: "Type property must be a string",
            fatal: true,
        };
    }
    return {
        message: `Invalid type: ${val["type"]} must be one of: record, query, procedure, subscription, blob, array, token, object, boolean, integer, string, bytes, cid-link, unknown`,
        fatal: true,
    };
});
export const lexiconDoc = z
    .object({
    lexicon: z.literal(1),
    id: z.string().refine((v) => NSID.isValid(v), {
        message: "Must be a valid NSID",
    }),
    revision: z.number().optional(),
    description: z.string().optional(),
    defs: z.record(lexUserType),
})
    .strict()
    .superRefine((doc, ctx) => {
    for (const defId in doc.defs) {
        const def = doc.defs[defId];
        if (defId !== "main" &&
            (def.type === "record" ||
                def.type === "procedure" ||
                def.type === "query" ||
                def.type === "subscription")) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Records, procedures, queries, and subscriptions must be the main definition.`,
            });
        }
    }
});
// helpers
// =
export function isValidLexiconDoc(v) {
    return lexiconDoc.safeParse(v).success;
}
export function isObj(v) {
    return v != null && typeof v === "object";
}
export function isDiscriminatedObject(v) {
    return isObj(v) && "$type" in v && typeof v.$type === "string";
}
export function parseLexiconDoc(v) {
    lexiconDoc.parse(v);
    return v;
}
export class ValidationError extends Error {
}
export class InvalidLexiconError extends Error {
}
export class LexiconDefNotFoundError extends Error {
}
//# sourceMappingURL=types.js.map