import { sql } from "@vercel/postgres";
import { Message } from "./definitions";

export async function submitMessage(message: Message) {
  try {
  await sql`INSERT INTO messages (first_name, last_name, email, message, date) VALUES (${message.first_name}, ${message.last_name}, ${message.email}, ${message.message}, ${new Date().toISOString().split('T')[0]})`;
  }
  catch (error) {
    console.error(error);
  }
}