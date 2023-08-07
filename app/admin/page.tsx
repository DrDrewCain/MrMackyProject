import CreateFileButton from "@/components/admin/create-file-button";
import CreateFileCategoryButton from "@/components/admin/create-file-category-button";
import DeleteFileButton from "@/components/admin/delete-file-button";
import DeleteFileCategoryButton from "@/components/admin/delete-file-category-button";
import EditFileButton from "@/components/admin/edit-file-button";
import EditFileCategoryButton from "@/components/admin/edit-file-category-button";
import UpdateUserRoleWidget from "@/components/admin/update-user-role-widget";
import UsersSection from "@/components/admin/users-section";
import Button from "@/components/shared/button";
import CollapsibleMenu from "@/components/shared/collapsible-menu/collapsible-menu";
import Divider from "@/components/shared/divider";
import LabeledSection from "@/components/shared/labeled-section";
import Text from "@/components/shared/text";
import { UserRole } from "@prisma/client";
import { getFileCategories } from "actions/file-categories/get-file-categories";
import { getAllUsers } from "actions/users/getAllUsers";
import { getUser } from "actions/users/getUser";
import React from "react";

const AdminPage = async () => {
  const fileCategories = await getFileCategories();

  const sessionUser = await getUser();
  const users = await getAllUsers();

  if (!fileCategories) {
    return <div>No file categories found</div>;
  }

  if (!users || !sessionUser || !sessionUser.user?.id) {
    return <div>No users found</div>;
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

      <LabeledSection title="Files">
        <div className="flex flex-col">
          {fileCategories.map((fileCategory) => (
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
                {fileCategory.files.map((file) => (
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
      </LabeledSection>

      <Divider className="bg-gray-400" />


      <LabeledSection title="Users">
        <UsersSection sessionUserId={sessionUser.user.id} users={users} />
      </LabeledSection>
    </div>
  );
};

export default AdminPage;