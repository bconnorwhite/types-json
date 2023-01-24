import z from "zod";
import { is, parse } from "../utils.js";
import { Optional } from "../optional.js";

export type OptionalNumber = Optional<number>;

export const numberSchema = z.number().finite();
export const optionalNumberSchema = numberSchema.optional();

export const isNumber = is(numberSchema);
export const isOptionalNumber = is(optionalNumberSchema);

export const parseNumber = parse(numberSchema);
