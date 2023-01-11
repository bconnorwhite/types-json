import { z } from "zod";

// Value

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

export const jsonValueSchema: z.ZodType<JSONValue> = z.union([
  z.string(),
  z.number().finite(),
  z.boolean(),
  z.null(),
  z.record(z.lazy(() => jsonValueSchema)),
  z.array(z.lazy(() => jsonValueSchema))
]);

export function isJSONValue(value?: unknown): value is JSONValue {
  return jsonValueSchema.safeParse(value).success;
}

export function parseJSONValue(value?: unknown): JSONValue | undefined {
  return isJSONValue(value) ? value : undefined;
}

// Array

export interface JSONArray extends Array<JSONValue> {}

export const jsonArraySchema = z.array(jsonValueSchema);

export function isJSONArray(value?: unknown): value is JSONArray {
  return jsonArraySchema.safeParse(value).success;
}

export function parseJSONArray(value?: unknown): JSONArray | undefined {
  return isJSONArray(value) ? value : undefined;
}

// Object

export type JSONObject = {
  [key in string]?: JSONValue;
};

export const jsonObjectSchema = z.record(jsonValueSchema);

export function isJSONObject(value?: unknown): value is JSONObject {
  return jsonObjectSchema.safeParse(value).success;
}

export function parseJSONObject(value?: unknown): JSONObject | undefined {
  return isJSONObject(value) ? value : undefined;
}

// Boolean

export const booleanSchema = z.boolean();

export function isBoolean(value?: unknown): value is boolean {
  return booleanSchema.safeParse(value).success;
}

export function parseBoolean(value?: unknown): boolean | undefined {
  return isBoolean(value) ? value : undefined;
}

// Number

export const numberSchema = z.number().finite();

export function isNumber(value?: unknown): value is number {
  return numberSchema.safeParse(value).success;
}

export function parseNumber(value?: unknown): number | undefined {
  return isNumber(value) ? value : undefined;
}

// String

export const stringSchema = z.string();

export function isString(value?: unknown): value is string {
  return stringSchema.safeParse(value).success;
}

export function parseString(value?: unknown): string | undefined {
  return isString(value) ? value : undefined;
}

// Null

export const nullSchema = z.null();

export function isNull(value?: unknown): value is null {
  return nullSchema.safeParse(value).success;
}

export function parseNull(value?: unknown): null | undefined {
  return isNull(value) ? value : undefined;
}

// Undefined

export function isUndefined(value?: JSONValue): value is undefined {
  return value === undefined;
}
