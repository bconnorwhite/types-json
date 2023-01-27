import { z } from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";
import { stringSchema } from "./string.js";
import { numberSchema } from "./number.js";
import { booleanSchema } from "./boolean.js";
import { nullSchema } from "./null.js";

// JSONPrimitive

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

// JSONMagnitudinous

export type JSONMagnitudinous = string | number;
export type OptionalJSONMagnitudinous = Optional<JSONMagnitudinous>;

export const jsonMagnitudinousSchema: z.ZodSchema<JSONMagnitudinous> = z.union([
  stringSchema,
  numberSchema
]);
export const optionalJsonMagnitudinousSchema: z.ZodSchema<OptionalJSONMagnitudinous> = jsonMagnitudinousSchema.optional();

export const isJSONMagnitudinous = is(jsonMagnitudinousSchema);
export const isOptionalJSONMagnitudinous = is(optionalJsonMagnitudinousSchema);

export const parseJSONMagnitudinous = parse(jsonMagnitudinousSchema);

export * from "./string.js";
export * from "./number.js";
export * from "./boolean.js";
export * from "./null.js";
