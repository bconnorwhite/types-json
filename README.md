<div align="center">
  <h1>type-json</h1>
  <a href="https://npmjs.com/package/type-json">
    <img alt="npm" src="https://img.shields.io/npm/v/type-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/type-json">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/type-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/type-json">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/type-json?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

> Type checking for json objects

## Installation

```bash
yarn add type-json
```

```bash
npm install type-json
```

## API

### Types
```ts
import { isJSONObject, JSONObject, JSONValue, JSONArray } from "@bconnorwhite/json-types";

isJSONObject(object?: JSONValue): boolean;

type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/type-json.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/type-json.svg"></h2>

[MIT](https://mit-license.org/)
