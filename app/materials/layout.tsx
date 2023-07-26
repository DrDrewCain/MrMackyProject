import FullSignInForm from "@/components/layout/full-sign-in-form";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get user session
  const session = await getServerSession(authOptions);

  const role = session?.user?.role;

  console.log(role);

  if (session === null) {
    return <FullSignInForm />;
  }

  return <div>{children}</div>;
}
