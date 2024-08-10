import {z} from "zod";

export const SentMailSchema = z.object({
  from: z.string().email(),
  title: z.string().min(1, "Title can not be empty."),
  message: z.string().min(1, "Message can not be empty."),
});

export type SentMailType = z.infer<typeof SentMailSchema>;
