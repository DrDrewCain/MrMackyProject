import SignInForm from "@/components/layout/full-sign-in-form";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function ProfessorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get user session
  const session = await getServerSession(authOptions);

  const role = session?.user?.role;

  console.log(role);

  if (role !== UserRole.PROFESSOR && role !== UserRole.ADMIN) {
    if (session !== null) {
      return (
        <div>
          <h1>You must be a professor to access this page.</h1>
        </div>
      );
    } else {
      return <SignInForm />;
    }
  }

  return <div>{children}</div>;
}
