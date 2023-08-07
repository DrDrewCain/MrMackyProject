import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import zod from "zod";

const signupSchema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string().min(1, "Password cannot be empty"),
});

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { email: emailInput, password: passwordInput } = data;

  // Validate email and password
  const parsedInputs = signupSchema.safeParse({
    email: emailInput,
    password: passwordInput,
  });

  if (!parsedInputs.success) {
    return new Response("Invalid email or password", {
      status: 400,
    });
  }

  const { email, password } = parsedInputs.data;

  // Check if a user already exists with the given email
  const currentUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (currentUser !== null) {
    return new Response("A user already exists with that email", {
      status: 400,
    });
  }

  // Register the user
  const passwordHash = bcrypt.hashSync(password, 10);
  await prisma.user.create({
    data: {
      email: email,
      password: passwordHash,
    },
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
