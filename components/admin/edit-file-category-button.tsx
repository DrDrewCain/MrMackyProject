"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  File,
  FileCategory,
  FileType,
  FileUserRole,
  UserRole,
} from "@prisma/client";
import { editFileCategory } from "actions/file-categories/edit-file-category";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import Button from "../shared/button";
import Modal from "../shared/modal";

const editFileCategorySchema = zod.object({
  name: zod.string().min(1, "Name must be at least 1 character long"),
  subtitle: zod.string().min(1, "Subtitle must be at least 1 character long"),
  description: zod.string(),
});

interface EditFileCategoryForm extends zod.infer<typeof editFileCategorySchema> {}

interface EditFileCategoryButtonProps {
  fileCategory: FileCategory;
}

const EditFileCategoryButton = ({ fileCategory }: EditFileCategoryButtonProps) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
    control,
  } = useForm<EditFileCategoryForm>({
    resolver: zodResolver(editFileCategorySchema),
    defaultValues: {
      name: fileCategory.name,
      subtitle: fileCategory.subtitle,
      description: fileCategory.description,
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    await editFileCategory(fileCategory.id, data.name, data.subtitle, data.description);
    setLoading(false);
    setModalOpen(false);

    router.refresh();

    resetForm();
  });

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col gap-4 px-16 py-8 shadow-md">
          <h2 className="text-xl">Edit file category</h2>

          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              {...register("name")}
              className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="subtitle">Subtitle</label>
            <input
              {...register("subtitle")}
              className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.subtitle?.message}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              rows={4}
              {...register("description")}
              className="w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
            />
            <p className="text-red-500">{errors.description?.message}</p>
          </div>

          <div className="flex flex-row gap-8">
            <Button isLoading={loading} onClick={() => onSubmit()}>
              Save
            </Button>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Edit</Button>
    </>
  );
};

export default EditFileCategoryButton;
