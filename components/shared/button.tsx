"use client";
import React from 'react'
import Clickable from './clickable';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
    children: React.ReactNode[] | React.ReactNode;
}

const Button = ({ href, onClick, isLoading = false, className, children }: ButtonProps) => {
  return (
    <Clickable className={`${className} text-center px-4 py-2 border text-black ${isLoading ? '' : 'hover:bg-gray-50 border-gray-200 bg-white'}`} href={href} onClick={onClick} isLoading={isLoading}>
        {children}
    </Clickable>
  )
}

export default Button