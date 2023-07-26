"use client";
import { File } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

interface DownloadFileButtonProps {
  file: File;
}

const DownloadFileButton = ({ file }: DownloadFileButtonProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Modal showModal={modalOpen} setShowModal={setModalOpen}>
        <div className="flex flex-col bg-white">
          <div className='flex flex-row'>
            <div className='flex-1' />
            <button
              onClick={() => setModalOpen(false)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Close popup</span>
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 52 52"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 16 36 36 M36 16 16 36"
                />
              </svg>
            </button>
          </div>

          <div>
            <div className="flex flex-col gap-4 px-16 pb-8">
              <h2 className="text-center text-xl">{file.name}</h2>
              <p className="text-center">Do you want to download a file?</p>

              <div className="flex flex-row gap-4">
                <Button
                  onClick={() => setModalOpen(false)}
                  className="!bg-gray-400 hover:!bg-gray-500 !px-16 !py-4 !text-white !rounded-md"
                >
                  CANCEL
                </Button>
                <Button
                  href={file.url}
                  className="!bg-slate-700 hover:!bg-slate-800 !px-16 !py-4 !text-white !rounded-md"
                >
                  OK
                </Button>

                {/* Add a focusable element inside the modal */}
                <button
                  style={{ position: "absolute", top: 0, left: 0, opacity: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Button onClick={() => setModalOpen(true)}>Download {file.name}</Button>
    </>
  );
};

export default DownloadFileButton;
