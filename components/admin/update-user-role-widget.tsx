"use client";
import { UserRole } from "@prisma/client";
import { updateUserRole } from "actions/users/updateUserRole";
import { useRouter } from "next/navigation";
import React from "react";

interface UpdateUserRoleWidgetProps {
  user: {
    id: string;
    role: UserRole;
  };
}

const UpdateUserRoleWidget = ({ user }: UpdateUserRoleWidgetProps) => {
  const router = useRouter();

  const handleUpdateUserRole = async (userId: string, role: UserRole) => {
    await updateUserRole(userId, role);
    router.refresh();
  };

  return (
    <select
      value={user.role}
      onChange={(e) =>
        handleUpdateUserRole(user.id, e.target.value as UserRole)
      }
    >
      {Object.keys(UserRole).map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default UpdateUserRoleWidget;