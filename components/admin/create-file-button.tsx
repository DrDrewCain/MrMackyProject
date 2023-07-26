"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../shared/modal";
import Button from "../shared/button";
import { createFile } from "actions/files/create-file";
import { FileType, UserRole } from "@prisma/client";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

const createFileSchema = zod.object({
  name: zod.string().min(1, "Name must be at least 1 character long"),
  description: zod
    .string(),
  fileUrl: zod.string().min(1, "File URL must be at least 1 character long"),
  fileType: zod.nativeEnum(FileType),
  fileCategoryId: zod
    .string()
    .min(1, "File category ID must be at least 1 character long"),
  userRoles: zod.array(zod.nativeEnum(UserRole)),
});

interface CreateFileForm extends zod.infer<typeof createFileSchema> {}

interface CreateFileButtonProps {
  fileCategories: {
    id: string;
    name: string;
  }[];
}

const CreateFileButton = ({ fileCategories }: CreateFileButtonProps) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
    control,
  } = useForm<CreateFileForm>({
    resolver: zodResolver(createFileSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    await createFile(
      data.name,
      data.description,
      data.fileUrl,
      data.fileCategoryId,
      data.fileType,
      data.userRoles,
    );
    setLoading(false);
    setModalOpen(false);

    router.refresh();

    resetForm();
  });

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col gap-4 px-16 py-8 shadow-md">
          <h2 className="text-xl">Create new file</h2>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              {...register("name")}
              className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              {...register("description")}
              rows={3}
              className="w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.description?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="fileType">File Type</label>
            <select {...register("fileType")}>
              {Object.values(FileType).map((fileType) => {
                return (
                  <option key={fileType} value={fileType}>
                    {fileType.charAt(0).toUpperCase() +
                      fileType.slice(1).toLowerCase().replaceAll("_", " ")}
                  </option>
                );
              })}
            </select>
            <p className="text-red-500">{errors.fileType?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="fileUrl">File URL</label>
            <input
              {...register("fileUrl")}
              className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.fileUrl?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="fileCategoryId">File Category</label>
            <select {...register("fileCategoryId")}>
              {fileCategories.map((fileCategory) => (
                <option key={fileCategory.id} value={fileCategory.id}>
                  {fileCategory.name}
                </option>
              ))}
            </select>
            <p className="text-red-500">{errors.fileCategoryId?.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="userRoles">User Access</label>
            {Object.values(UserRole).map((userRole, index) => {
              if (userRole === UserRole.ADMIN) return null;
              return (
                <div key={userRole} className='flex flex-row gap-2 items-center'>
                  <input
                    key={userRole}
                    type="checkbox"
                    value={userRole}
                    {...register("userRoles")}
                  />
                  <label htmlFor={userRole}>{userRole.charAt(0) + userRole.substring(1,userRole.length).toLowerCase()}</label>
                </div>
              );
            })}
            <p className="text-red-500">{errors.userRoles?.message}</p>
          </div>

          <Button isLoading={loading} onClick={() => onSubmit()}>
            Create
          </Button>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>(+) New File</Button>
    </>
  );
};

export default CreateFileButton;
