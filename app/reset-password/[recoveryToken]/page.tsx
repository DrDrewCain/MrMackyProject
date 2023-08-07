import ResetPasswordForm from "@/components/reset-password";
import { getUserByRecoveryToken } from "actions/users/getUserByRecoveryToken";
import React, { useState } from "react";

const ResetPasswordPage = async ({
  params,
}: {
  params: { recoveryToken: string };
}) => {
  const user = await getUserByRecoveryToken(params.recoveryToken);

  if (!user) {
    return <div>Invalid recovery token</div>;
  }

  return (
    <div className="flex h-[80vh] w-screen items-center justify-center">
      <div className="max-w-xl p-8 shadow-md">
        <ResetPasswordForm recoveryToken={params.recoveryToken} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
