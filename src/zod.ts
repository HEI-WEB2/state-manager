import z from "zod";

const userSchema = z.object({
  username: z.string().min(1).max(20),
  age: z.number().min(1).max(500),
  email: z.string().email(),
})
