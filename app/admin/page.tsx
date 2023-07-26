import CreateFileButton from "@/components/admin/create-file-button";
import CreateFileCategoryButton from "@/components/admin/create-file-category-button";
import DeleteFileButton from "@/components/admin/delete-file-button";
import DeleteFileCategoryButton from "@/components/admin/delete-file-category-button";
import EditFileButton from "@/components/admin/edit-file-button";
import EditFileCategoryButton from "@/components/admin/edit-file-category-button";
import Button from "@/components/shared/button";
import CollapsibleMenu from "@/components/shared/collapsible-menu/collapsible-menu";
import { getFileCategories } from "actions/file-categories/get-file-categories";
import React from "react";

const AdminPage = async () => {
  const fileCategories = await getFileCategories();

  if (!fileCategories) {
    return <div>No file categories found</div>;
  }

  return (
    <div className="container mx-auto flex h-full flex-1 flex-col">
      <h1 className="mb-4 text-2xl">Admin Dashboard</h1>
      <div className="flex flex-row gap-2">
        <div>
          <CreateFileCategoryButton />
        </div>

        <div>
          <CreateFileButton fileCategories={fileCategories} />
        </div>
      </div>

      <div className="my-4" />

      <div className="flex flex-col">
        {fileCategories.map((fileCategory: any) => (
          <CollapsibleMenu
            key={fileCategory.id}
            title={fileCategory.name}
            className="bg-white p-4 shadow-md"
            innerClassName="px-6 py-4 shadow-md bg-gray-50"
          >
            <div className="flex flex-row gap-4">
              <div>
                <EditFileCategoryButton fileCategory={fileCategory} />
              </div>
              <div>
                <DeleteFileCategoryButton fileCategory={fileCategory} />
              </div>
            </div>

            <div className="my-4 h-[1px] bg-slate-300" />

            <div className="flex flex-col">
              {fileCategory.files.map((file: any) => (
                <div key={file.id} className="flex flex-col">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <div className="font-bold">
                        {file.name} ({file.type})
                      </div>
                      <div className="text-sm text-gray-500">
                        {file.description}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <EditFileButton
                        file={file}
                        fileCategories={fileCategories}
                      />
                      <DeleteFileButton file={file} />
                    </div>
                  </div>
                  <div className="my-4 h-[1px] bg-slate-300" />
                </div>
              ))}

              {fileCategory.files.length === 0 && (
                <div>
                  No files found. Add files to this category with the button
                  above
                </div>
              )}
            </div>
          </CollapsibleMenu>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
