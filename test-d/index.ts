import { expectType, expectNotType } from "tsd";
import { JSONValue, OptionalJSONValue } from "../source/index.js";

expectType<JSONValue>(1);
expectType<JSONValue>("a");
expectType<JSONValue>(true);
expectType<JSONValue>(null);
expectType<JSONValue>([1, 2, 3]);
expectType<JSONValue>({ a: 1, b: 2 });
expectType<JSONValue>({ a: 1, b: null });
expectNotType<JSONValue>(undefined);
expectNotType<JSONValue>({ a: 1, b: undefined });
expectNotType<JSONValue>({ a: 1, b: [1, undefined, 3], c: 3 });

expectType<OptionalJSONValue>(undefined);
expectType<OptionalJSONValue>([1, 2, 3]);
expectType<OptionalJSONValue>({ a: 1, b: undefined });
expectNotType<OptionalJSONValue>({ a: 1, b: [1, undefined, 3], c: 3 });
