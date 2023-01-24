import { z } from "zod";
import { is, parse } from "./utils.js";
import { jsonPrimitiveSchema, JSONPrimitive, OptionalJSONPrimitive, optionalJsonPrimitiveSchema } from "./primitive/index.js";
import { Optional } from "./optional.js";

// Value

export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type OptionalJSONValue = OptionalJSONPrimitive | OptionalJSONObject | OptionalJSONArray;

export const jsonValueSchema: z.ZodType<JSONValue> = z.union([
  jsonPrimitiveSchema,
  z.record(z.lazy(() => jsonValueSchema)),
  z.array(z.lazy(() => jsonValueSchema))
]);
export const optionalJSONValueSchema: z.ZodType<OptionalJSONValue> = z.union([
  optionalJsonPrimitiveSchema,
  z.record(z.lazy(() => optionalJSONValueSchema)),
  z.array(z.lazy(() => optionalJSONValueSchema))
]);

export const isJSONValue = is(jsonValueSchema);
export const isOptionalJSONValue = is(optionalJSONValueSchema);

export const parseJSONValue = parse(jsonValueSchema);
export const parseOptionalJSONValue = parse(optionalJSONValueSchema);

// Array

export type JSONArray = Array<JSONValue>;
export type OptionalJSONArray = Optional<Array<OptionalJSONValue>>;

export const jsonArraySchema = z.array(jsonValueSchema);
export const optionalJSONArraySchema = z.array(optionalJSONValueSchema).optional();

export const isJSONArray = is(jsonArraySchema);
export const isOptionalJSONArray = is(optionalJSONArraySchema);

export const parseJSONArray = parse(jsonArraySchema);
export const parseOptionalJSONArray = parse(optionalJSONArraySchema);

// Object

export type JSONObject = {
  [key in string]?: JSONValue;
};
export type OptionalJSONObject = Optional<{
  [key in string]?: OptionalJSONValue;
}>;

export const jsonObjectSchema = z.record(jsonValueSchema);
export const optionalJSONObjectSchema = z.record(optionalJSONValueSchema).optional();

export const isJSONObject = is(jsonObjectSchema);
export const isOptionalJSONObject = is(optionalJSONObjectSchema);

export const parseJSONObject = parse(jsonObjectSchema);
export const parseOptionalJSONObject = parse(optionalJSONObjectSchema);

// Exports

export * from "./optional.js";
export * from "./primitive/index.js";
