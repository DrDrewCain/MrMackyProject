"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";

export const checkRequestIsAuthorizedUser = async (role?: UserRole) => {
    const session = await getServerSession(authOptions);

    // Check if session exists & is valid.
    if(!session || !session.user?.id) {
        return {user: undefined, error: 'User is not logged in.'};
    }

    // Get user from database.
    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    })

    // Check if user exists.
    if(!user) {
        return {user: undefined, error: 'User does not exist.'};
    }

    // Check if user has role if specified.
    if(role && user.role !== role) {
        return {user: undefined, error: 'User does not have permission.'};
    }

    // User is authorized.
    return {user, error: undefined};
}