"use server";

import { prisma } from "@/lib/prisma";

export const getUserByRecoveryToken = async (recoveryToken: string) => {
  const user = await prisma.user.findUnique({
    where: {
      recoveryToken: recoveryToken,
    },
  });

  return user;
};
