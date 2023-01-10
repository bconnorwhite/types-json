import { test, expect } from "@jest/globals";
import { isUndefined } from "../source/index.js";

test("isUndefined string", () => {
  expect(isUndefined("string")).toBe(false);
});

test("isUndefined number", () => {
  expect(isUndefined(10)).toBe(false);
});

test("isUndefined boolean", () => {
  expect(isUndefined(true)).toBe(false);
});

test("isUndefined object", () => {
  expect(isUndefined({ a: true })).toBe(false);
});

test("isUndefined array", () => {
  expect(isUndefined([1, 2, 3])).toBe(false);
});

test("isUndefined null", () => {
  expect(isUndefined(null)).toBe(false);
});

test("isUndefined undefined", () => {
  expect(isUndefined(undefined)).toBe(true);
});
