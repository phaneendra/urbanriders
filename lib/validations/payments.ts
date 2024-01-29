import * as z from "zod";

export const paymentSchema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a valid email address",
    })
    .optional(),
  student_id: z
    .string({
      required_error: "Student Id is required",
    })
    .min(8, {
      message: "StudentID must be 8 characters long",
    })
    .max(8, {
      message: "StudentID must be 8 characters long",
    }),
  price: z.coerce
    .number({
      required_error: "Price is required",
    })
    .gte(0.5, { message: "Price must be greater than $50C" }),
  terms: z.coerce.number({
    required_error: "Specify number of terms",
  }),
});
