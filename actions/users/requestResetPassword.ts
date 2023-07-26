"use server";

import { prisma } from "@/lib/prisma";
import { PostmarkTemplate, sendEmailWithTemplate } from "utils/PostmarkUtils";

export const requestResetPassword = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !user.email) {
    return "If an account with that email exists, we have sent you an email with instructions on how to reset your password.";
  }

  // Update user with recovery token
  const recoveryToken =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  await prisma.user.update({
    where: {
      email,
    },
    data: {
      recoveryToken,
    },
  });

  // Send email
  try {
    const resetUrl = `${process.env.NEXT_PUBLIC_API_URL}/reset-password/${recoveryToken}`
    await sendEmailWithTemplate(
      user.email,
      PostmarkTemplate.RESET_PASSWORD_EMAIL_TEMPLATE,
      {
        name: user.name || user.email,
        actionUrl: resetUrl,
      },
    );
  } catch (err) {
    return "Failed to send email. Please try again later.";
  }
  return "If an account with that email exists, we have sent you an email with instructions on how to reset your password.";
};
