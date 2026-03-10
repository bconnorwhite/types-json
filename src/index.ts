import { z } from "zod";
import { is, parse } from "./utils.js";
import { jsonPrimitiveSchema, type JSONPrimitive, type OptionalJSONPrimitive, optionalJsonPrimitiveSchema } from "./primitive/index.js";
import { type Optional } from "./optional.js";

export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type NestedOptionalJSONValue = JSONPrimitive | NestedOptionalJSONObject | NestedOptionalJSONArray;
export type OptionalJSONValue = OptionalJSONPrimitive | OptionalJSONObject | OptionalJSONArray;

export const jsonValueSchema: z.ZodType<JSONValue> = z.union([
  jsonPrimitiveSchema,
  z.record(z.lazy(() => jsonValueSchema)),
  z.array(z.lazy(() => jsonValueSchema))
]);
const nestedOptionalJSONValueSchema: z.ZodType<NestedOptionalJSONValue> = z.union([
  jsonPrimitiveSchema,
  z.record(z.lazy(() => nestedOptionalJSONValueSchema.optional())),
  z.array(z.lazy(() => nestedOptionalJSONValueSchema))
]);
export const optionalJSONValueSchema: z.ZodType<OptionalJSONValue> = z.union([
  optionalJsonPrimitiveSchema,
  z.record(z.lazy(() => optionalJSONValueSchema)),
  z.array(z.lazy(() => nestedOptionalJSONValueSchema))
]);

export const isJSONValue = is(jsonValueSchema);
export const isNestedOptionalJSONValue = is(nestedOptionalJSONValueSchema);
export const isOptionalJSONValue = is(optionalJSONValueSchema);

export const parseJSONValue = parse(jsonValueSchema);
export const parseNestedOptionalJSONValue = parse(nestedOptionalJSONValueSchema);
export const parseOptionalJSONValue = parse(optionalJSONValueSchema);

export type JSONArray = JSONValue[];
export type NestedOptionalJSONArray = NestedOptionalJSONValue[];
export type OptionalJSONArray = Optional<NestedOptionalJSONValue[]>;

export const jsonArraySchema = z.array(jsonValueSchema);
export const nestedOptionalJSONArraySchema = z.array(nestedOptionalJSONValueSchema);
export const optionalJSONArraySchema = z.array(nestedOptionalJSONValueSchema);

export const isJSONArray = is(jsonArraySchema);
export const isNestedOptionalJSONArray = is(nestedOptionalJSONArraySchema);
export const isOptionalJSONArray = is(optionalJSONArraySchema);

export const parseJSONArray = parse(jsonArraySchema);
export const parseNestedOptionalJSONArray = parse(nestedOptionalJSONArraySchema);
export const parseOptionalJSONArray = parse(optionalJSONArraySchema);

export type JSONObject = {
  [key in string]: JSONValue;
};
export type NestedOptionalJSONObject = {
  [key in string]?: NestedOptionalJSONValue;
};
export type OptionalJSONObject = Optional<NestedOptionalJSONObject>;

export const jsonObjectSchema = z.record(jsonValueSchema);
export const nestedOptionalJSONObjectSchema = z.record(optionalJSONValueSchema);
export const optionalJSONObjectSchema = nestedOptionalJSONObjectSchema.optional();

export const isJSONObject = is(jsonObjectSchema);
export const isNestedOptionalJSONObject = is(nestedOptionalJSONObjectSchema);
export const isOptionalJSONObject = is(optionalJSONObjectSchema);

export const parseJSONObject = parse(jsonObjectSchema);
export const parseNestedOptionalJSONObject = parse(nestedOptionalJSONObjectSchema);
export const parseOptionalJSONObject = parse(optionalJSONObjectSchema);

export * from "./optional.js";
export * from "./primitive/index.js";
