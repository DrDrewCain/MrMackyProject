import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import FullSignInForm from "@/components/layout/full-sign-in-form";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    
  // Get user session
  const session = await getServerSession(authOptions);

  const role = session?.user?.role;

  if (role !== UserRole.ADMIN) {
    if(!session) {
        return <FullSignInForm />;
    } else {
      redirect("/");
    }
  }

  return children;
};

export default AdminLayout;
