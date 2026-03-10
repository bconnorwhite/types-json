import { expectAssignable, expectNotAssignable } from "tsd";
import { type JSONValue, type OptionalJSONValue } from "../src/index.js";

expectAssignable<JSONValue>(1);
expectAssignable<JSONValue>("a");
expectAssignable<JSONValue>(true);
expectAssignable<JSONValue>(null);
expectAssignable<JSONValue>([1, 2, 3]);
expectAssignable<JSONValue>({ a: 1, b: 2 });
expectAssignable<JSONValue>({ a: 1, b: null });
expectNotAssignable<JSONValue>(undefined);
expectNotAssignable<JSONValue>({ a: 1, b: undefined });
expectNotAssignable<JSONValue>({ a: 1, b: [1, undefined, 3], c: 3 });

expectAssignable<OptionalJSONValue>(undefined);
expectAssignable<OptionalJSONValue>([1, 2, 3]);
expectAssignable<OptionalJSONValue>({ a: 1, b: undefined });
expectNotAssignable<OptionalJSONValue>({ a: 1, b: [1, undefined, 3], c: 3 });
