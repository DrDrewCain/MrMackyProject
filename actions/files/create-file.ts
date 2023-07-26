"use server";

import { prisma } from "@/lib/prisma";
import { FileType, UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const createFile = async (
  name: string,
  description: string,
  url: string,
  categoryId: string,
  type: FileType,
  userRoles: UserRole[],
) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.file.create({
    data: {
      name,
      description,
      url,
      category: {
        connect: {
          id: categoryId,
        },
      },
      type,
      fileUserRoles: {
        createMany: {
          data: userRoles.map((role) => ({
            userRole: role,
          })),
        },
      },
    },
  });

  return;
};
