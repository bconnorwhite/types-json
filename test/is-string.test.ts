import { test, expect } from "@jest/globals";
import { isString } from "../source";

test("isString string", () => {
  expect(isString("string")).toBe(true);
});

test("isString number", () => {
  expect(isString(10)).toBe(false);
});

test("isString boolean", () => {
  expect(isString(true)).toBe(false);
});

test("isString object", () => {
  expect(isString({ a: true })).toBe(false);
});

test("isString array", () => {
  expect(isString([1, 2, 3])).toBe(false);
});

test("isString null", () => {
  expect(isString(null)).toBe(false);
});

test("isString undefined", () => {
  expect(isString(undefined)).toBe(false);
});
