"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "actions/users/resetPassword";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import Button from "./shared/button";

const resetPasswordSchema = zod
  .object({
    password: zod
      .string()
      .min(6, "Password must be at least 6 characters long."),
    passwordConfirmation: zod.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords must match.",
    path: ["passwordConfirmation"],
  });

interface ResetPasswordFormValues
  extends zod.infer<typeof resetPasswordSchema> {}

interface ResetPasswordFormProps {
  recoveryToken: string;
}

const ResetPasswordForm = ({ recoveryToken }: ResetPasswordFormProps) => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    await resetPassword(recoveryToken, data.password);
    resetForm();
    router.push("/");
    setLoading(false);
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Reset Password</h1>
      <div className='flex flex-col'>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200" />
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
      </div>
      <div className='flex flex-col'>
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input {...register("passwordConfirmation")} type="password" className="mr-100 flex h-10 w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200" />
        {errors.passwordConfirmation && (
          <p className='text-red-500'>{errors.passwordConfirmation.message}</p>
        )}
      </div>
      <Button onClick={onSubmit} isLoading={loading}>Reset Password</Button>
    </div>
  );
};

export default ResetPasswordForm;
