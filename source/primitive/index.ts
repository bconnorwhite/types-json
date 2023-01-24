import { z } from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";
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

export * from "./string.js";
export * from "./number.js";
export * from "./boolean.js";
export * from "./null.js";
