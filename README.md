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

<blockquote align="center">Type checking for JSON objects.</blockquote>

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
<div align="center">
  <h1>types-json</h1>
  <a href="https://npmjs.com/package/types-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-json.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/types-json?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-json.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/types-json?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Type checking for JSON objects.

Derived from [type-fest](https://www.npmjs.com/package/type-fest) with a focus on JSON types.

## Installation

```sh
yarn add types-json
```

```sh
npm install types-json
```

## API

### Types
```ts
import {
  isJSONValue,
  isJSONObject,
  isJSONArray,
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  JSONObject,
  JSONValue,
  JSONArray
} from "types-json";

function isJSONValue(object?: JSONValue): boolean;

function isJSONObject(object?: JSONValue): boolean;

function isJSONArray(object?: JSONValue): boolean;

function isString(object?: JSONValue): boolean;

function isNumber(object?: JSONValue): boolean;

function isBoolean(object?: JSONValue): boolean;

function isNull(object?: JSONValue): boolean;

function isUndefined(object?: JSONValue): boolean;

type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/types-json.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/types-json.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
- [types-tsconfig](https://www.npmjs.com/package/types-tsconfig): Type checking for tsconfig.json
- [types-eslintrc](https://www.npmjs.com/package/types-eslintrc): Type checking for .eslintrc.json
<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
