
export type JSONObject = {
  [key in string]?: JSONValue;
};

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

export interface JSONArray extends Array<JSONValue> {};

export function isJSONObject(value?: JSONValue): value is JSONObject {
  return typeof value === "object" && !isJSONArray(value) && !isNull(value);
}

export function isJSONArray(value?: JSONValue): value is JSONArray {
  return Array.isArray(value);
}

export function isString(value?: JSONValue): value is string {
  return typeof value === "string";
}

export function isNumber(value?: JSONValue): value is number {
  return typeof value === "number";
}

export function isBoolean(value?: JSONValue): value is boolean {
  return typeof value === "boolean";
}

export function isNull(value?: JSONValue): value is null {
  return value === null;
}

export function isUndefined(value?: JSONValue): value is undefined {
  return value === undefined;
}
