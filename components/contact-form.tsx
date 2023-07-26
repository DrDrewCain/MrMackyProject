"use client";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { sendContactEmail } from "actions/misc/sendContactEmail";
import Button from "./shared/button";
import Divider from "./shared/divider";
import Text from "./shared/text";

const contactSchema = zod.object({
  firstName: zod
    .string()
    .min(1, "First name must be at least 1 character long"),
  lastName: zod.string().min(1, "Last name must be at least 1 character long"),
  email: zod.string().email("Invalid email address"),
  subject: zod.string().min(1, "Please provide a subject"),
  message: zod.string().min(10, "Please provide a more detailed message"),
});

interface ContactForm extends zod.infer<typeof contactSchema> {}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setMessage(null);
    setLoading(true);

    const message = await sendContactEmail(
      data.firstName,
      data.lastName,
      data.email,
      data.subject,
      data.message,
    );

    setLoading(false);
    setMessage(message);
    resetForm();
  });

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <Text variation="title">CONTACT</Text>
      <Divider className="!mb-0 !mt-8 h-[2px] w-[5%]" />
      <Text>
        For any questions, or data inquiries/requests, please use the form below
        to contact us. We will respond to you by email at our best availability
      </Text>

      <div className="mt-16 grid grid-cols-6 gap-x-16">
        <div className="col-span-4 flex w-full flex-col gap-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <input
                placeholder="First Name*"
                {...register("firstName")}
                type="text"
                className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Last Name*"
                {...register("lastName")}
                type="text"
                className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              placeholder="Email*"
              {...register("email")}
              type="text"
              className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              placeholder="Subject*"
              {...register("subject")}
              type="text"
              className="mr-100 flex h-10  w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              placeholder="Message*"
              rows={4}
              {...register("message")}
              className="mr-100 flex w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <div className="w-min">
            <Button
              onClick={onSubmit}
              isLoading={loading}
              className="!bg-black !px-14 !py-6 !text-white hover:!bg-gray-800"
            >
              SUBMIT
            </Button>
          </div>
          {message && <p>{message}</p>}
        </div>

        <div className="col-span-2 flex flex-col gap-2" style={{fontSize: "13px"}}>
          <p>
              Name: <b>Dr. Michael Sturman & Dr. Hanbo Shim</b>
          </p>
          <p>
            EMAIL: <b>hrsimulation@sturman.org</b>
          </p>
          <p>
              Address: <b>1946 Sweetwater Ln. Allen, TX 75013
              </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
