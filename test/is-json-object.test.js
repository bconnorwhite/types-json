const { isJSONObject } = require('../build');

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

test("isJSONObject array", () => {
  expect(isJSONObject([1,2,3])).toBe(false);
});

test("isJSONObject null", () => {
  expect(isJSONObject(null)).toBe(false);
});

test("isJSONObject undefined", () => {
  expect(isJSONObject(undefined)).toBe(false);
});
