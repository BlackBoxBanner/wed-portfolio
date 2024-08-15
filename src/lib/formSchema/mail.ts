import {z} from "zod";

export const SentMailSchema = z.object({
  from: z.string().email().min(1, "Email can not be empty."),
  title: z.string().min(1, "Title can not be empty."),
  message: z.string().min(1, "Message can not be empty."),
  to: z
    .string()
    .min(1, "Email send can not be empty.")
    .default("svac.mai@gmail.com"),
});

export type SentMailType = z.infer<typeof SentMailSchema>;
