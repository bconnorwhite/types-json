import { test, expect } from "@jest/globals";
import { isJSONObject, isOptionalJSONObject, parseJSONObject } from "../source/index.js";

test("isJSONObject string", () => {
  expect(isJSONObject("string")).toBe(false);
});

test("isJSONObject number", () => {
  expect(isJSONObject(10)).toBe(false);
});

test("isJSONObject boolean", () => {
  expect(isJSONObject(true)).toBe(false);
});

test("isJSONObject object", () => {
  expect(isJSONObject({ a: true })).toBe(true);
});

test("isOptionalJSONObject object", () => {
  expect(isOptionalJSONObject({ a: true, b: undefined })).toBe(true);
  expect(isOptionalJSONObject({ a: true, b: [1, undefined, 3] })).toBe(false);
});

test("isJSONObject array", () => {
  expect(isJSONObject([1, 2, 3])).toBe(false);
});

test("isJSONObject null", () => {
  expect(isJSONObject(null)).toBe(false);
});

test("isJSONObject undefined", () => {
  expect(isJSONObject(undefined)).toBe(false);
});

test("parseJSONObject", () => {
  expect(parseJSONObject({ a: true })).toEqual({ a: true });
});

test("parseJSONObject", () => {
  expect(parseJSONObject("false")).toBe(undefined);
});

test("parseJSONObject", () => {
  expect(parseJSONObject({ a: true, b: () => 3 })).toBe(undefined);
});


