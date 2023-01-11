<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>types-json</h1>
  <a href="https://npmjs.com/package/types-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-json.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/types-json?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-json.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Types and type guards for JSON values.</blockquote>

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

This package is specifically for when you have a value that you know is valid JSON - ex: the result of `JSON.parse`.

It includes type guards for each of the JSON types, as well as matching types.

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

```ts
import {
  isJSONValue,
  isJSONObject,
  isJSONArray,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined
} from "types-json";

isJSONObject({}); // true
isJSONArray([]); // true
isString("foo"); // true
isNumber(1); // true
isBoolean(true); // true
isNull(null); // true
isUndefined(undefined); // true

isJSONValue(undefined); // false
```

### Types
```ts
import {
  JSONObject,
  JSONValue,
  JSONArray
} from "types-json";

type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

## Related Packages

- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-eslintrc](https://www.npmjs.com/package/types-eslintrc): Type checking for .eslintrc.json
