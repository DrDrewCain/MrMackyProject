import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropdownMenu from "../shared/dropdown-menu/dropdown-menu";
import DropdownMenuList from "../shared/dropdown-menu/dropdown-menu-list";
import DropdownMenuGroup from "../shared/dropdown-menu/dropdown-menu-group";
import DropdownMenuItem from "../shared/dropdown-menu/dropdown-menu-item";
import { ChevronDown } from "lucide-react";
import UserDropdown from "./user-dropdown";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { useSignUpModal } from "./sign-up-modal";
import useWindowSize from "@/lib/hooks/use-window-size";

const DesktopNavbar = ({ session }: { session: Session | null }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { SignUpModal, setShowSignUpModal } = useSignUpModal();
  const scrolled = useScroll(50);
  
  const dimensions = useWindowSize();

  if(!dimensions.isDesktop) {
    return null;
  }

  return (
    <>
      <SignInModal />
      <SignUpModal />

      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between gap-2 lg:gap-12  xl:mx-auto">
          <Link
            href="/"
            className="flex flex-none items-center font-display text-2xl"
          >
            <Image
              src="/favicon.png"
              alt="Sturman logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
            <p>HR Analytics & Simulation</p>
          </Link>

          <div className="hidden h-16 min-w-min max-w-screen-xl flex-grow items-center justify-between md:flex">
          <DropdownMenu
              items={
                <DropdownMenuList>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="px-4 py-2">
                      <p>Signed in as {session?.user?.email}</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="/about"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Case Overview</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/history"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">History</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/authors"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Authors</p>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuList>
              }
            >
              <div className="p-1.3 flex flex-row items-center gap-2 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black">
                About
                <ChevronDown size={16} />
              </div>
            </DropdownMenu>
            <DropdownMenu
              items={
                <DropdownMenuList>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="px-4 py-2">
                      <p>Signed in as {session?.user?.email}</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="/case-background"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Case background</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/download-materials"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Download Materials</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/faqs"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">FAQS</p>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuList>
              }
            >
              <div className="p-1.3 flex flex-row items-center gap-2 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black">
                Students
                <ChevronDown size={16} />
              </div>
            </DropdownMenu>
            <DropdownMenu
              items={
                <DropdownMenuList>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="px-4 py-2">
                      <p>Signed in as {session?.user?.email}</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="/teaching-analytics"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Teaching HR Analytics</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/case-materials"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Case Materials</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/resources-faculty"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2"> Resources for Faculty</p>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuList>
              }
            >
              <div className="p-1.3 flex flex-row items-center gap-2 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black">
                Faculty
                <ChevronDown size={16} />
              </div>
            </DropdownMenu>
            <DropdownMenu
              items={
                <DropdownMenuList>
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="px-4 py-2">
                      <p>Signed in as {session?.user?.email}</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="/course-outline"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Course Outline</p>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/syllabus"
                        className="transition-all ease-in-out hover:bg-slate-100"
                      >
                        <p className="px-4 py-2">Sample Syllabi</p>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuList>
              }>
              <div className="p-1.3 flex flex-row items-center gap-2 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black">
                HR Analytics Course
                <ChevronDown size={16} />
              </div>
            </DropdownMenu>
            
          
            <Link
              href="/contact"
              className="p-1.3 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black py-.9"
            >
              <p>Contact</p>
            </Link>
            <Link
              href="/extra-fun"
              className="p-1.3 rounded-full border border-black bg-black px-3 text-sm text-white transition-all hover:bg-white hover:text-black py-.9"
            >
              <p>Extra/Fun</p>
            </Link>
          </div>
          <div className="hidden flex-none md:block">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
                <button
                  className="ml-2 rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white"
                  onClick={() => setShowSignUpModal(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
