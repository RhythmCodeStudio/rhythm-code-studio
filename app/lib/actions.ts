"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
