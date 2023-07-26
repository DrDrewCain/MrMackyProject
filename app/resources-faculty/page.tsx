import RequestNewFileButton from "@/components/request-new-file-button";
import Button from "@/components/shared/button";
import Divider from "@/components/shared/divider";
import DownloadFileButton from "@/components/shared/download-file-button";
import Text from "@/components/shared/text";
import { UserRole } from "@prisma/client";
import { getCategorizedFiles } from "actions/files/get-files";
import { getUser } from "actions/users/getUser";
import Link from "next/link";
import React from "react";

const ResourcesFacultyPage = async () => {
  const { user, error } = await getUser();
  const filesByCategory = await getCategorizedFiles();

  if (!filesByCategory || error || !user) {
    return <div>No files found.</div>;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col items-center text-center">
          <Text variation="headinglabel" className="text-center">
            For Mr. Macky&apos;s Cajune Cuisine HR Analytics Case
          </Text>
          <Text variation="heading" className="mt-2 text-center">
            A Sample HRIS Dataset of Mr. Macky&apos;s
          </Text>
          <Text className="mt-6 text-center">
            This is the sample dataset of Mr. Macky&apos;s to use as a class sample
            for any demo or instruction purpose. For detailed information on
            variables and dataset structures, download and read the
            &apos;Introduction&apos; of the case workbook above. Faculty members can also
            request us additional datasets to provide a unique dataset for each
            student (i.e., same data and variable structure but in different
            data values). Upon request, we will provide the simulated HRIS
            datasets and answers of each workbook module for those unique
            student datasets.
          </Text>
          <Text className="mt-6 text-center">
            To submit your request(s), please click the &apos;Contact&apos; top menu to
            send us your inquiry.
          </Text>
          <Text className="mt-6 text-center !text-gray-400">
            (Last update: July 15, 2023)
          </Text>
          <div className="mt-16">
            <Button href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
              Download the sample HRIS Dataset
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full flex-col bg-gray-50 px-16 py-16"> */}
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-center">
          <Divider className="my-16 w-3/5" />
        </div>

        <div className="flex flex-col gap-2">
          <Text variation="headinglabel" className="text-center">
            For Mr. Macky&apos;s Cajune Cuisine HR Analytics Case
          </Text>
          <Text variation="heading" className="mt-2 text-center">
            HR ANALYTICS WORKBOOK & Workbook Solution
          </Text>
          <Text className="mt-6 text-center">
            This workbook is composted of an introduction and five exercuse
            modules. For each module, you may download (1) Question files, (2)
            blank answer sheets, (3) grading sheets, and (4) answer keys for the
            sample HRIS dataset above.
          </Text>
          <Text className="mt-6 text-center !text-gray-400">
            (Last update: July 15, 2023)
          </Text>

          <div className="mt-4 flex w-full flex-row justify-center">
            <RequestNewFileButton
              name={user.name || "Not Set"}
              email={user.email || "Not Set"}
            />
          </div>
        </div>

        <div className="mt-16 grid w-full grid-cols-2 gap-x-24 gap-y-12">
          {filesByCategory.categorizedFiles.map((fileCategory) => {
            return (
              <div
                key={fileCategory.categoryId}
                className="flex flex-1 flex-col flex-wrap items-center"
              >
                <Text variation="subsubheading" className='text-center'>
                  {fileCategory.categoryName}
                </Text>
                <Text className='text-center mb-4'>
                  {fileCategory.categorySubtitle}
                </Text>
                <Text>
                  {fileCategory.categoryDescription}
                </Text>

                <div className="mt-4 flex flex-col gap-2">
                  {fileCategory.files
                    .filter((file) =>
                      file.fileUserRoles.some(
                        (fileUserRole: any) =>
                          fileUserRole.userRole === UserRole.PROFESSOR,
                      ),
                    )
                    .map((file) => {
                      return <DownloadFileButton key={file.id} file={file} />;
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ResourcesFacultyPage;
