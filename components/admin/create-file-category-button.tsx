"use client";
import React, { useState } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";
import { createFileCategory } from "actions/file-categories/create-file-category";
import { useRouter } from "next/navigation";

const CreateFileCategoryButton = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleCreate = async () => {
    setLoading(true);
    await createFileCategory(name, subtitle, description);

    setModalOpen(false);
    setName("");
    setSubtitle("");
    setDescription("");
    router.refresh();

    setLoading(false);
  };

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col px-16 py-8 shadow-md">
          <h2 className="mb-4 text-xl">Create new file category</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
          />

          <label htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mb-4 h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows={4}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-black shadow-sm transition-all duration-75 hover:bg-gray-50 focus:outline-none"
          />
          <Button isLoading={loading} onClick={handleCreate}>
            Create
          </Button>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>(+) New File Category</Button>
    </>
  );
};

export default CreateFileCategoryButton;
