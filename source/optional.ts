import z from "zod";
import { is } from "./utils.js";

export type Optional<T> = T | undefined;

export const undefinedSchema = z.undefined();

export const isUndefined = is(undefinedSchema);
