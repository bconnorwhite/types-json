import z from "zod";

export function is<T>(schema: z.ZodSchema<T>) {
  return (value?: unknown): value is T => {
    return schema.safeParse(value).success;
  };
}

export function parse<T>(schema: z.ZodSchema<T>) {
  return (value?: unknown): T | undefined => {
    return is<T>(schema)(value) ? value : undefined;
  };
}
