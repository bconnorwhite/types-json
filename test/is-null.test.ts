import { test, expect } from "@jest/globals";
import { isNull } from "../source/index.js";

test("isNull string", () => {
  expect(isNull("string")).toBe(false);
});

test("isNull number", () => {
  expect(isNull(10)).toBe(false);
});

test("isNull boolean", () => {
  expect(isNull(true)).toBe(false);
});

test("isNull object", () => {
  expect(isNull({ a: true })).toBe(false);
});

test("isNull array", () => {
  expect(isNull([1, 2, 3])).toBe(false);
});

test("isNull null", () => {
  expect(isNull(null)).toBe(true);
});

test("isNull undefined", () => {
  expect(isNull(undefined)).toBe(false);
});
