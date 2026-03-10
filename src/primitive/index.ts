import { z } from "zod";
import { is, parse } from "../utils.js";
import { type Optional } from "../optional.js";
import { stringSchema } from "./string.js";
import { numberSchema } from "./number.js";
import { booleanSchema } from "./boolean.js";
import { nullSchema } from "./null.js";

export type JSONPrimitive = string | number | boolean | null;
export type OptionalJSONPrimitive = Optional<JSONPrimitive>;

export const jsonPrimitiveSchema: z.ZodSchema<JSONPrimitive> = z.union([
  stringSchema,
  numberSchema,
  booleanSchema,
  nullSchema
]);
export const optionalJsonPrimitiveSchema: z.ZodSchema<OptionalJSONPrimitive> = jsonPrimitiveSchema.optional();

export const isJSONPrimitive = is(jsonPrimitiveSchema);
export const isOptionalJSONPrimitive = is(optionalJsonPrimitiveSchema);

export const parseJSONPrimitive = parse(jsonPrimitiveSchema);

export type JSONOrderable = string | number;
export type OptionalJSONOrderable = Optional<JSONOrderable>;

export const jsonOrderableSchema: z.ZodSchema<JSONOrderable> = z.union([
  stringSchema,
  numberSchema
]);
export const optionalJsonOrderableSchema: z.ZodSchema<OptionalJSONOrderable> = jsonOrderableSchema.optional();

export const isJSONOrderable = is(jsonOrderableSchema);
export const isOptionalJSONOrderable = is(optionalJsonOrderableSchema);

export const parseJSONOrderable = parse(jsonOrderableSchema);

export * from "./string.js";
export * from "./number.js";
export * from "./boolean.js";
export * from "./null.js";
