import z from "zod";
import { validate } from "is-zod";

export const is = validate;

export function parse<T>(schema: z.ZodSchema<T>) {
  return (value?: unknown): T | undefined => {
    return is<T>(schema)(value) ? value : undefined;
  };
}
