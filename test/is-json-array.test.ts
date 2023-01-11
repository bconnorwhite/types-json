import { test, expect } from "@jest/globals";
import { isJSONArray, parseJSONArray } from "../source/index.js";

test("isJSONArray string", () => {
  expect(isJSONArray("string")).toBe(false);
});

test("isJSONArray number", () => {
  expect(isJSONArray(10)).toBe(false);
});

test("isJSONArray boolean", () => {
  expect(isJSONArray(true)).toBe(false);
});

test("isJSONArray object", () => {
  expect(isJSONArray({ a: true })).toBe(false);
});

test("isJSONArray array", () => {
  expect(isJSONArray([1, 2, 3])).toBe(true);
});

test("isJSONArray null", () => {
  expect(isJSONArray(null)).toBe(false);
});

test("isJSONArray undefined", () => {
  expect(isJSONArray(undefined)).toBe(false);
});

test("parseJSONArray", () => {
  expect(parseJSONArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test("parseJSONArray", () => {
  expect(parseJSONArray("false")).toBe(undefined);
});

test("parseJSONArray", () => {
  expect(parseJSONArray([1, 2, 3, () => 3])).toBe(undefined);
});
