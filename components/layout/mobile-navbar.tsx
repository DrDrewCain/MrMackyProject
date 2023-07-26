"use client";
import useWindowSize from "@/lib/hooks/use-window-size";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Clickable from "../shared/clickable";
import CollapsibleMenu from "../shared/collapsible-menu/collapsible-menu";
import { useSignInModal } from "./sign-in-modal";
import { useSignUpModal } from "./sign-up-modal";

const MobileNavbar = ({ session }: { session: Session | null }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { SignUpModal, setShowSignUpModal } = useSignUpModal();

  const dimensions = useWindowSize();

  const handleToggleOpen = () => {
    setOpen(!isOpen);
  }

  useEffect(() => {
    // Close the drawer when the user clicks outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if(isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen])

  if (!dimensions.isMobile) {
    return null;
  }

  return (
    <>
      <SignInModal />
      <SignUpModal />

      <div className="flex md:hidden">
        <div className="fixed w-full">
          <div className="flex flex-row justify-between p-4">
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

            <button
              onClick={handleToggleOpen}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={drawerRef}
          className={`fixed right-0 top-0 z-20 h-full w-64 bg-white shadow-lg transition-all duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col py-4">
            <div className="flex w-full flex-row">
              <div className="flex flex-1" />
              <button
                onClick={handleToggleOpen}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-8 w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 52 52"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 16 36 36 M36 16 16 36"
                  />
                </svg>
              </button>
            </div>

            <div className="flex h-full w-full flex-col">
              <div className="flex w-full flex-grow flex-col">
                <CollapsibleMenu
                  title="About"
                  innerClassName="w-full flex"
                >
                  <Clickable href="/about" className="w-full px-6 py-2">
                  Case Overview
                  </Clickable>
                  <Clickable href="/history" className="w-full px-6 py-2">
                    History
                  </Clickable>
                  <Clickable href="/authors" className="w-full px-6 py-2">
                    Authors
                  </Clickable>
                </CollapsibleMenu>
                <CollapsibleMenu
                  title="Students"
                  innerClassName="w-full flex"
                >
                  <Clickable href="/case-background" className="w-full px-6 py-2">
                    Case Background
                  </Clickable>
                  <Clickable href="/download-materials" className="w-full px-6 py-2">
                    Download Materials
                  </Clickable>
                  <Clickable href="/faqs" className="w-full px-6 py-2">
                    FAQS
                  </Clickable>
                </CollapsibleMenu>

                <CollapsibleMenu
                  title="Faculty"
                  innerClassName="w-full flex"
                >
                  <Clickable href="/teaching-analytics" className="w-full px-6 py-2">
                    Teaching HR Analytics
                  </Clickable>
                  <Clickable href="/case-materials" className="w-full px-6 py-2">
                    Case Materials
                  </Clickable>
                  <Clickable href="/resources-faculty" className="w-full px-6 py-2">
                    Resources For Faculty
                  </Clickable>
                </CollapsibleMenu>

                <CollapsibleMenu
                  title="HR Analytics Course"
                  innerClassName="w-full flex"
                >
                  <Clickable href="/course-outline" className="w-full px-6 py-2">
                    Course Outline
                  </Clickable>
                  <Clickable href="/syllabus" className="w-full px-6 py-2">
                    Sample Syallbus
                  </Clickable>
                </CollapsibleMenu>
                <Clickable href="/contact" className="w-full px-6 py-2">
                    Contact
                </Clickable>
                <Clickable href="/extra-fun" className="w-full px-6 py-2">
                    Fun Extras
                  </Clickable>
              </div>

              <div className="flex w-full flex-none flex-col">
                {session ? (
                  <CollapsibleMenu
                    title="My Account"
                    innerClassName="w-full flex"
                  >
                    <div className="w-full px-6 py-2">
                      Signed in as {session.user?.email && session.user?.name}
                    </div>
                    <Clickable href="/" className="w-full px-6 py-2">
                      Home
                    </Clickable>
                    <Clickable
                      onClick={() => signOut()}
                      className="w-full px-6 py-2"
                    >
                      Log Out
                    </Clickable>
                  </CollapsibleMenu>
                ) : (
                  <>
                    <Clickable
                      className="w-full px-4 py-2"
                      onClick={() => setShowSignInModal(true)}
                    >
                      Sign In
                    </Clickable>
                    <Clickable
                      className="w-full px-4 py-2"
                      onClick={() => setShowSignUpModal(true)}
                    >
                      Sign Up
                    </Clickable>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
