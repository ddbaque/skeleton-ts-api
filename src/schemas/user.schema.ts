import { z } from "zod";

export const CreateUserSchema = z.object({
  body: z.object({
    username: z.string().nonempty().email({
      message: "must be a email",
    }),
    password: z.string().nonempty().min(6, "password min charcarters -> 6"),
  }),
});

export const UpdateUserSchema = z.object({
  body: z.object({
    username: z
      .string()
      .nonempty()
      .email({
        message: "must be a email",
      })
      .optional(),
    password: z
      .string()
      .nonempty()
      .min(6, "password min charcarters -> 6")
      .optional(),
  }),
  params: z.object({
    id: z.string().nonempty(),
  }),
});

export type CreateUserType = z.infer<typeof CreateUserSchema>["body"];
export type UpdateUserBodyType = z.infer<typeof UpdateUserSchema>["body"];
export type UpdateUserParamsType = z.infer<typeof UpdateUserSchema>["params"]
