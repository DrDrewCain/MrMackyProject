import { prisma } from "@/lib/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://simulation.sturman.org",
      lastModified: new Date(),
    },
    ...users.map((user: any) => ({
      url: `https://simulation.sturman.org/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
