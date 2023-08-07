"use client";
import React, { ReactElement } from "react";
import DropdownMenuGroup from "./dropdown-menu-group";
import DropdownMenuItem from "./dropdown-menu-item";

interface DropdownMenuListProps {
  children:
    | ReactElement<typeof DropdownMenuGroup>
    | ReactElement<typeof DropdownMenuItem>
    | (
        | ReactElement<typeof DropdownMenuGroup>[]
        | ReactElement<typeof DropdownMenuItem>
      )[];
}

const DropdownMenuList = ({ children }: DropdownMenuListProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};

export default DropdownMenuList;
