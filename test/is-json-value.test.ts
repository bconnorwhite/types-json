import { test, expect } from "@jest/globals";
import { isJSONValue } from "../source/index.js";

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

test("isJSONValue array", () => {
  expect(isJSONValue([1, 2, 3])).toBe(true);
});

test("isJSONValue null", () => {
  expect(isJSONValue(null)).toBe(true);
});

test("isJSONValue undefined", () => {
  expect(isJSONValue(undefined)).toBe(false);
});
