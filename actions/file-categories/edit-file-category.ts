"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const editFileCategory = async (id: string, name: string | undefined, subtitle: string | undefined, description: string | undefined) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.fileCategory.update({
    where: {
      id
    },
    data: {
        name,
        subtitle,
        description,
    }
  });
};
