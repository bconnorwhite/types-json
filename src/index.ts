
export type JSONObject = {
  [key in string]?: JSONValue
};

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

export interface JSONArray extends Array<JSONValue> {};

export function isJSONObject(object?: JSONValue): object is JSONObject {
  return typeof object === "object" && !Array.isArray(object);
}
