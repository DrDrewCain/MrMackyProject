"use client";
import React, { ReactElement } from "react";
import DropdownMenuItem from "./dropdown-menu-item";

interface DropdownMenuGroupProps {
  children:
    | ReactElement<typeof DropdownMenuItem>
    | ReactElement<typeof DropdownMenuItem>[];
}

const DropdownMenuGroup = ({ children }: DropdownMenuGroupProps) => {
  return (
    <div className="mt-1 flex w-full flex-col">
      {children}
      <div className="border-t-[1px] border-gray-300" />
    </div>
  );
};

export default DropdownMenuGroup;
