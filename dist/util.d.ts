import { z } from "zod";
export declare function toLexUri(str: string, baseUri?: string): string;
export declare function requiredPropertiesRefinement<ObjectType extends {
    required?: string[];
    properties?: Record<string, unknown>;
}>(object: ObjectType, ctx: z.RefinementCtx): void;
//# sourceMappingURL=util.d.ts.map