import z from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";

export type OptionalBoolean = Optional<boolean>;

export const booleanSchema = z.boolean();
export const optionalBooleanSchema = booleanSchema.optional();

export const isBoolean = is(booleanSchema);
export const isOptionalBoolean = is(optionalBooleanSchema);

export const parseBoolean = parse(booleanSchema);
