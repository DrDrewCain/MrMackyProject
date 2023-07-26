"use client";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react"
import React from 'react';

interface ProviderProps {
    children: React.ReactNode[] | React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    return (
        <SessionProvider>
            {children}
            <Analytics />
        </SessionProvider>
    )
};

export default Provider;
