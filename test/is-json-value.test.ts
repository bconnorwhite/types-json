import { test, expect } from "@jest/globals";
import { isJSONValue, parseJSONValue } from "../source/index.js";

test("isJSONValue string", () => {
  expect(isJSONValue("string")).toBe(true);
});

test("isJSONValue number", () => {
  expect(isJSONValue(10)).toBe(true);
});

test("isJSONValue JSONValue", () => {
  expect(isJSONValue(true)).toBe(true);
});

test("isJSONValue object", () => {
  expect(isJSONValue({ a: true })).toBe(true);
});

test("isJSONValue object with undefined", () => {
  expect(isJSONValue({ a: true, b: undefined })).toBe(false);
});

test("isJSONValue array", () => {
  expect(isJSONValue([1, 2, 3])).toBe(true);
});

test("isJSONValue null", () => {
  expect(isJSONValue(null)).toBe(true);
});

test("isJSONValue undefined", () => {
  expect(isJSONValue(undefined)).toBe(false);
});

test("parseJSONValue", () => {
  expect(parseJSONValue(true)).toBe(true);
});

test("parseJSONValue", () => {
  expect(parseJSONValue(() => 3)).toBe(undefined);
});

test("parseJSONValue", () => {
  expect(parseJSONValue([1, 2, 3, () => 3])).toBe(undefined);
});
