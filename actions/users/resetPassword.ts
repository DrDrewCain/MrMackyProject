"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const resetPassword = async (
  recoveryToken: string,
  password: string,
) => {
  const passwordHash = bcrypt.hashSync(password, 10);
  await prisma.user.update({
    where: {
      recoveryToken: recoveryToken,
    },
    data: {
      password: passwordHash,
      recoveryToken: null,
    },
  });
};
