"use client";
import {
    FileCategory
} from "@prisma/client";
import { deleteFileCategory } from "actions/file-categories/delete-file-category";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface DeleteFileCategoryButtonProps {
  fileCategory: FileCategory;
}

const DeleteFileCategoryButton = ({ fileCategory }: DeleteFileCategoryButtonProps) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    await deleteFileCategory(fileCategory.id);
    setLoading(false);
    setModalOpen(false);

    router.refresh();
  };

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col gap-4 px-16 py-8 shadow-md">
          <h2 className="text-xl">Delete file category &quot;{fileCategory.name}&quot;</h2>
          <p>
            Are you sure you want to delete the file category <b>{fileCategory.name}</b>? This
            action cannot be undone. All files in this category will be moved to the &quot;Uncategorized&quot; category.
          </p>

          <div className="flex flex-row gap-8">
            <Button isLoading={loading} onClick={() => onSubmit()}>
              Delete
            </Button>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>

            {/* Add a focusable element inside the modal */}
            <button
              style={{ position: "absolute", top: 0, left: 0, opacity: 0 }}
            />
          </div>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Delete</Button>
    </>
  );
};

export default DeleteFileCategoryButton;
