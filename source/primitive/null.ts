import z from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";

export type OptionalNull = Optional<null>;

export const nullSchema = z.null();
export const optionalNullSchema = nullSchema.optional();

export const isNull = is(nullSchema);
export const isOptionalNull = is(optionalNullSchema);

export const parseNull = parse(nullSchema);
