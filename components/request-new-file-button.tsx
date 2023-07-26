"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactEmail } from "actions/misc/sendContactEmail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import Button from "./shared/button";
import Modal from "./shared/modal";

const contactSchema = zod.object({
  message: zod.string().min(10, "Please provide a more detailed message"),
});

interface ContactForm extends zod.infer<typeof contactSchema> {}

interface RequestNewFileButtonProps {
  name: string;
  email: string;
}

const RequestNewFileButton = ({ name, email }: RequestNewFileButtonProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setMessage(null);
    setLoading(true);

    const message = await sendContactEmail(
      name,
      "-",
      email,
      "New File Request",
      data.message,
    );

    setLoading(false);
    setMessage(message);
    resetForm({message: ''});
  });

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex min-w-[600px] flex-col gap-4 bg-white p-16">
          <h1 className="text-3xl font-semibold">Request new file</h1>

          <div className="mt-8 flex w-full flex-col gap-4">
            <div className="flex flex-col">
              <input
                placeholder="Name*"
                value={`Name: ${name}`}
                disabled
                type="text"
                className="flex h-10 w-full cursor-not-allowed  items-center justify-center space-x-3 rounded-md border-gray-500 bg-gray-100 shadow-sm transition-all focus:ring-indigo-200"
              />
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Email*"
                value={`Email: ${email}`}
                disabled
                type="text"
                className="flex h-10 w-full cursor-not-allowed  items-center justify-center space-x-3 rounded-md border-gray-500 bg-gray-100 shadow-sm transition-all focus:ring-indigo-200"
              />
            </div>

            <div className="flex flex-col">
              <input
                placeholder="Subject*"
                value={"Subject: New File Request"}
                disabled
                type="text"
                className="flex h-10 w-full cursor-not-allowed  items-center justify-center space-x-3 rounded-md border-gray-500 bg-gray-100 shadow-sm transition-all focus:ring-indigo-200"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                placeholder="Make sure to include a link to your file you would like added*"
                rows={4}
                {...register("message")}
                className="flex w-full items-center justify-center space-x-3 rounded-md border-gray-500 shadow-sm transition-all focus:ring-indigo-200"
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
        </div>
      </Modal>
      <div>
        <Button onClick={() => setShowModal(true)}>Request new file</Button>
      </div>
    </>
  );
};

export default RequestNewFileButton;
