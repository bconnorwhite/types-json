import { test, expect } from "@jest/globals";
import { isNumber, parseNumber } from "../source/index.js";

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

test("isNumber NaN", () => {
  expect(isNumber(NaN)).toBe(false);
});

test("isNumber Infinity", () => {
  expect(isNumber(Infinity)).toBe(false);
});

test("parseNumber", () => {
  expect(parseNumber(10)).toBe(10);
});

test("parseNumber", () => {
  expect(parseNumber("false")).toBe(undefined);
});

test("parseNumber", () => {
  expect(parseNumber(NaN)).toBe(undefined);
});

test("parseNumber", () => {
  expect(parseNumber(Infinity)).toBe(undefined);
});
