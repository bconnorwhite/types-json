const { isBoolean } = require('../build');

test("isBoolean string", () => {
  expect(isBoolean("string")).toBe(false);
});

test("isBoolean number", () => {
  expect(isBoolean(10)).toBe(false);
});

test("isBoolean boolean", () => {
  expect(isBoolean(true)).toBe(true);
});

test("isBoolean object", () => {
  expect(isBoolean({ a: true })).toBe(false);
});

test("isBoolean array", () => {
  expect(isBoolean([1,2,3])).toBe(false);
});

test("isBoolean null", () => {
  expect(isBoolean(null)).toBe(false);
});

test("isBoolean undefined", () => {
  expect(isBoolean(undefined)).toBe(false);
});
