"use client";
import Link from "next/link";
import React, { CSSProperties, MouseEventHandler } from "react";
import { LoadingDots } from "./icons";

interface ClickableProps {
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode[] | React.ReactNode;
}

const Clickable = ({
  href,
  onClick,
  isLoading = false,
  isDisabled = false,
  className,
  style,
  children,
}: ClickableProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isLoading === true || isDisabled === true || onClick === undefined) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  if (href) {
    return (
      <Link
        style={style}
        href={href}
        target="_blank"
        className={`${className} w-full cursor-pointer transition-all hover:bg-[rgba(0,0,0,0.05)]`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <div
        style={style}
        onClick={handleClick}
        className={`${className} w-full transition-all ${
          isLoading || isDisabled
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "cursor-pointer hover:bg-[rgba(0,0,0,0.05)]"
        }`}
      >
        {isLoading && <LoadingDots color="#808080" />}
        {!isLoading && children}
      </div>
    );
  }
};

export default Clickable;
