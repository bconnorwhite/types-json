<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>types-json</h1>
  <a href="https://npmjs.com/package/types-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-json.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/types-json?branch=main">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-json.svg?branch=main">
  </a>
</div>

<br />

<blockquote align="center">Type checking for JSON values.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/types-json">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-json?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->
This package uses [zod](https://www.npmjs.com/package/zod) to type check JSON values.

It includes type guards for each of the JSON types, as well as parse functions and corresponding types.

## Contents

- [Installation](#installation)
- [Usage](#usage)
  - [JSONValue](#jsonvalue)
    - [Types](#types)
  - [JSONObject](#jsonobject)
  - [JSONArray](#jsonarray)
  - [String](#string)
  - [Number](#number)
  - [Boolean](#boolean)
  - [Null](#null)
  - [Undefined](#undefined)

## Installation

```sh
yarn add types-json
```

```sh
npm install types-json
```

```sh
pnpm add types-json
```

## Usage

### JSONValue

When using `isJSONValue`, values which cannot be parsed or serialized properly using `JSON.parse` and `JSON.stringify` return false.

Similarly, when using `parseJSONValue`, invalid values return `undefined`.

Finally, a zod schema provided representing the `JSONValue` type.

```ts
import { isJSONValue, parseJSONValue, jsonValueSchema } from "types-json";

isJSONValue(undefined); // false
isJSONValue(null); // true
isJSONValue(NaN); // false
isJSONValue(Infinity); // false
isJSONValue([1, 2, 3]); // true
isJSONValue([1, 2, () => 3]); // false
```

#### Types

Here are the full types:

```ts
import { JSONObject, JSONValue, JSONArray } from "types-json";

type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

### JSONObject

```ts
import {
  isJSONObject,
  parseJSONObject,
  jsonObjectSchema
} from "types-json";

isJSONObject({ foo: "bar" }); // true
isJSONObject({ foo: () => "bar" }); // false
parseJSONObject({ foo: "bar" }); // true
parseJSONObject({ foo: () => "bar" }); // undefined
```

### JSONArray

```ts
import {
  isJSONArray,
  parseJSONArray,
  jsonArraySchema,
} from "types-json";

isJSONArray([1]); // true
isJSONArray([1, () => 2]); // false
parseJSONArray([1]); // []
parseJSONArray([1, () => 2]); // undefined
```

### String

```ts
import {
  isString,
  parseString,
  stringSchema
} from "types-json";

isString("foo"); // true
isString(1); // undefined
parseString("foo"); // "foo"
parseString(1); // undefined
```

### Number

```ts
import {
  isNumber,
  parseNumber,
  numberSchema
} from "types-json";

isNumber(1); // true
isNumber("1"); // undefined
parseNumber(1); // true
parseNumber("1"); // undefined
```

### Boolean

```ts
import {
  isBoolean,
  parseBoolean,
  booleanSchema
} from "types-json";

isBoolean(true); // true
isBoolean("true"); // undefined
parseBoolean(true); // true
parseBoolean("true"); // undefined
```

### Null

```ts
import {
  isNull,
  parseNull,
  nullSchema
};

isNull(null); // true
isNull("not null"); // undefined
parseNull(null); // null
parseNull("not null"); // undefined
```

### Undefined

Finally, an `isUndefined` type guard is provided:

```ts
import { isUndefined } from "types-json";

isUndefined(undefined); // true
isUndefined("string"); // false
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/types-json?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/types-json.svg"></a></h2>

- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

<br />

## Related Packages

- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-eslintrc](https://www.npmjs.com/package/types-eslintrc): Type checking for .eslintrc.json
