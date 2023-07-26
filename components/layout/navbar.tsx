"use client";
import { Session } from "next-auth";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function NavBar({ session }: { session: Session | null }) {
  // add a function to handle the Banana page redirect
  return (
    <>
      <DesktopNavbar session={session} />
      <MobileNavbar session={session} />
    </>
  );
}
