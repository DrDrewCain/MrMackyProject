"use client";
import React from "react";
import Text from "../shared/text";
import UpdateUserRoleWidget from "./update-user-role-widget";
import { UserRole } from "@prisma/client";

interface UsersSectionProps {
  sessionUserId: string;
  users: {
    id: string;
    email: string | null;
    role: UserRole;
  }[];
}

const UsersSection = ({ sessionUserId, users }: UsersSectionProps) => {
  const [searchEmail, setSearchEmail] = React.useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex flex-col">
        <Text>Search user emails</Text>
        <input
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="rounded-md border border-gray-400 p-2"
        />
      </div>
      {users.filter((user) => user.email?.includes(searchEmail)).map((user) => {
        if (user.id === sessionUserId) return null;
        return (
          <div key={user.id} className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="font-bold">
                  {user.email} ({user.role})
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <UpdateUserRoleWidget user={user} />
              </div>
            </div>
            <div className="my-4 h-[1px] bg-slate-300" />
          </div>
        );
      })}
    </div>
  );
};

export default UsersSection;