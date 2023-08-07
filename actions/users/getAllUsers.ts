"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const getAllUsers = async () => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      name: true,
    },
  });

  return users;
};