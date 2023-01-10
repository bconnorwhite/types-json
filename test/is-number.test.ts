import { test, expect } from "@jest/globals";
import { isNumber } from "../source/index.js";

test("isNumber string", () => {
  expect(isNumber("string")).toBe(false);
});

test("isNumber number", () => {
  expect(isNumber(10)).toBe(true);
});

test("isNumber boolean", () => {
  expect(isNumber(true)).toBe(false);
});

test("isNumber object", () => {
  expect(isNumber({ a: true })).toBe(false);
});

test("isNumber array", () => {
  expect(isNumber([1, 2, 3])).toBe(false);
});

test("isNumber null", () => {
  expect(isNumber(null)).toBe(false);
});

test("isNumber undefined", () => {
  expect(isNumber(undefined)).toBe(false);
});
