"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const updateUserRole = async (userId: string, role: UserRole) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      role,
    },
  });

  return;
};