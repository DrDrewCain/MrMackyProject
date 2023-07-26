"use client";
import { File } from "@prisma/client";
import { deleteFile } from "actions/files/delete-file";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface DeleteFileButtonProps {
  file: File;
}

const DeleteFileButton = ({ file }: DeleteFileButtonProps) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    await deleteFile(file.id);
    router.refresh();
    setLoading(false);
  };

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col gap-4 px-16 py-8 shadow-md">
          <h2 className="text-xl">Delete file &quot;{file.name}&quot;</h2>
          <p>
            Are you sure you want to delete the file <b>{file.name}</b>? This action cannot be undone.
          </p>

          <div className="flex flex-row gap-8">
            <Button isLoading={loading} onClick={() => onSubmit()}>
              Delete
            </Button>
            <Button onClick={() => setModalOpen(false)}>
              Cancel
            </Button>

            {/* Add a focusable element inside the modal */}
            <button style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }} />
          </div>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Delete</Button>
    </>
  );
};

export default DeleteFileButton;
