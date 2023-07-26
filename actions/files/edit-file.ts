"use server";

import { prisma } from "@/lib/prisma";
import { FileType, UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const editFile = async (
  id: string,
  name: string | undefined,
  description: string | undefined,
  url: string | undefined,
  categoryId: string | undefined,
  type: FileType | undefined,
  userRoles: UserRole[] | undefined
) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.file.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      url,
      fileUserRoles: userRoles ? {
        deleteMany: {},
        createMany: {
            data: userRoles.map((role) => ({
                userRole: role,
            })),
        }
      } : undefined,
      category: {
        connect: {
          id: categoryId,
        },
      },
      type,
    },
  });

  return;
};
