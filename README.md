# @bconnorwhite/json-types
![dependencies](https://img.shields.io/david/write-json-safe)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/write-json-safe)
![npm](https://img.shields.io/npm/v/@bconnorwhite/json-types)

Type checking for json objects

```
yarn add @bconnorwhite/json-types
```

## API
```ts
import { isJSONObject, JSONObject, JSONValue, JSONArray } from "@bconnorwhite/json-types";

isJSONObject(object?: JSONValue): boolean;

type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};

```

