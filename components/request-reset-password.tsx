"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import zod from "zod";
import { useForm } from "react-hook-form";
import { requestResetPassword } from "actions/users/requestResetPassword";
import Button from "./shared/button";

const requestResetPasswordSchema = zod.object({
  email: zod.string().email("Invalid email address"),
});

interface RequestResetPasswordForm
  extends zod.infer<typeof requestResetPasswordSchema> {}

interface RequestResetPasswordProps {
  onClose: () => void;
}

const RequestResetPassword = ({ onClose }: RequestResetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<RequestResetPasswordForm>({
    resolver: zodResolver(requestResetPasswordSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setMessage(null);
    setLoading(true);

    const message = await requestResetPassword(data.email);

    setLoading(false);
    setMessage(message);
    resetForm();
  });

  return (
    <div>
      <div className="flex flex-col space-y-4 bg-gray-50">
        <h1 className="text-2xl">Reset Password</h1>
        {/* Render your form inputs */}
        <label htmlFor="email">Email:</label>
        <input
          {...register("email")}
          type="text"
          className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Render your submit button */}
        <Button isLoading={loading} onClick={onSubmit}>
          Reset Password
        </Button>

        <span
          className="cursor-pointer text-sm text-gray-500 hover:text-gray-600"
          onClick={onClose}
        >
          Back
        </span>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RequestResetPassword;
