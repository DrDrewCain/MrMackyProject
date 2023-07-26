"use server";

import { prisma } from "@/lib/prisma";
import { File, FileCategory, FileUserRole, UserRole } from "@prisma/client";
import { checkRequestIsAuthorizedUser } from "actions/utils";

export const getFiles = async () => {
  // Make sure user is admin.
  const { user, error } = await checkRequestIsAuthorizedUser();
  if (error || !user) {
    return undefined;
  }

  if (user.role === UserRole.ADMIN) {
    const files = await prisma.file.findMany({
      include: {
        category: true,
        fileUserRoles: true,
      },
    });
    return files;
  }

  const files = await prisma.file.findMany({
    where: {
      fileUserRoles: {
        some: {
          userRole: user.role,
        },
      },
    },
    include: {
      category: true,
      fileUserRoles: true
    },
  });

  return files;
};

export const getCategorizedFiles = async () => {
  const response = await getFiles();

  if(!response) {
    return undefined;
  }

  const files = response.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);

  const categorizedFiles: {
    categoryId: string;
    categoryName: string;
    categorySubtitle: string;
    categoryDescription: string;
    files: (File & {category: FileCategory | null; fileUserRoles: FileUserRole[]})[]
  }[] = [];
  const uncategorizedFiles: (File & {category: FileCategory | null; fileUserRoles: FileUserRole[]})[] = [];

  files.forEach((file) => {
    if(file.category) {
      if(categorizedFiles.some((categoryData) => categoryData.categoryId === file.categoryId)) {
        const categoryData = categorizedFiles.find((categoryData) => categoryData.categoryId === file.categoryId);
        if(categoryData) {
          categoryData.files.push(file);
        }
      } else {
        categorizedFiles.push({
          categoryId: file.category.id,
          categoryName: file.category.name,
          categorySubtitle: file.category.subtitle,
          categoryDescription: file.category.description,
          files: [file]
        })
      }
    } else {
      uncategorizedFiles.push(file);
    }
  })

  return {categorizedFiles, uncategorizedFiles};
};
