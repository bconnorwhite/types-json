<div align="center">
  <h1>types-json</h1>
  <a href="https://npmjs.com/package/types-json">
    <img alt="npm" src="https://img.shields.io/npm/v/types-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-json">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-json?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

> Type checking for json objects

## Installation

```bash
yarn add types-json
```

```bash
npm install types-json
```

## API

### Types
```ts
import { isJSONObject, JSONObject, JSONValue, JSONArray } from "types-json";

isJSONObject(object?: JSONValue): boolean;

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

[MIT](https://mit-license.org/)
