"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const deleteFileCategory = async (id: string) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.file.updateMany({
    where: {
      category: {
        id
      }
    },
    data: {
      categoryId: null
    }
  })

  await prisma.fileCategory.delete({
    where: {
      id
    }
  });
};
