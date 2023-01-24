import z from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";

export type OptionalString = Optional<string>;

export const stringSchema = z.string();
export const optionalStringSchema = stringSchema.optional();

export const isString = is(stringSchema);
export const isOptionalString = is(optionalStringSchema);

export const parseString = parse(stringSchema);

