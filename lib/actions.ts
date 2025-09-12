"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

const MessageSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const SubmitMessage = MessageSchema.required();

export async function submitMessage(formData: FormData) {
  const { first_name, last_name, email, message, } = SubmitMessage.parse({
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  });
  const date = new Date().toISOString().split('T')[0];
  await sql`INSERT INTO messages (first_name, last_name, email, message, date) VALUES (${first_name}, ${last_name}, ${email}, ${message}, ${date})`;
}
