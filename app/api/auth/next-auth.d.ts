import { UserRole } from "@prisma/client";
import type { User } from "next-auth";
import "next-auth/jwt";

import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: UserRole | null;
    };
    expires: ISODateString;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    role: UserRole | null;
    sub?: string;
  }
}
