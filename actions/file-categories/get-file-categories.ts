"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const getFileCategories = async () => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  const fileCategories = await prisma.fileCategory.findMany({
    include: {
        files: {
          include: {
            fileUserRoles: true,
          }
        }
    },
    orderBy: {
      createdAt: "asc"
    }
  });

  return fileCategories
};
