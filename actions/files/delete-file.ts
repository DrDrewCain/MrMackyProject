"use server";

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const deleteFile = async (id: string) => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser(UserRole.ADMIN);
  if (error || !user) {
    return;
  }

  await prisma.fileUserRole.deleteMany({
    where: {
      file: {
        id
      }
    }
  })
  
  await prisma.file.delete({
    where: {
        id
    }
  })

  return;
};
