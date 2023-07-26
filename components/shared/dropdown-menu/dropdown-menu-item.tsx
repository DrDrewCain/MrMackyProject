"use client";
import React from "react";

interface DropdownMenuItemProps {
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
}

const DropdownMenuItem = ({ className, children }: DropdownMenuItemProps) => {
  return <div className={`${className} flex w-full flex-col`}>{children}</div>;
};

export default DropdownMenuItem;
