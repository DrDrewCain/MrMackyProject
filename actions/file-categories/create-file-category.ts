"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const createFileCategory = async (name: string, subtitle: string, description: string) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.fileCategory.create({
    data: {
      name,
      description,
      subtitle
    },
  });
};
