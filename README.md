# @bconnorwhite/json-types
![dependencies](https://img.shields.io/david/bconnorwhite/json-types)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/json-types)
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

