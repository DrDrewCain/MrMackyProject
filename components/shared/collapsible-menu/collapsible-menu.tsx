"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import React from "react";

interface CollapsibleMenuProps {
  title: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode[] | React.ReactNode;
}

const CollapsibleMenu = ({
  title,
  className,
  innerClassName,
  children,
}: CollapsibleMenuProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`${className} flex w-full items-center justify-between px-4 py-2 text-left hover:bg-[rgba(0,0,0,0.05)]`}
          >
            <span>{title}</span>
            <ChevronUpIcon
              className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              className={`${innerClassName} flex flex-col text-sm text-gray-500`}
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default CollapsibleMenu;
