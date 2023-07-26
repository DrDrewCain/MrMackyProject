import Button from "@/components/shared/button";
import Divider from "@/components/shared/divider";
import DownloadFileButton from "@/components/shared/download-file-button";
import Text from "@/components/shared/text";
import { UserRole } from "@prisma/client";
import { getCategorizedFiles } from "actions/files/get-files";

const DownloadMaterialsPage = async () => {
  const filesByCategory = await getCategorizedFiles();

  if (!filesByCategory) {
    return <div>If you see this page, please register and login</div>;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col justify-center bg-gray-400 px-16 py-16">
        <div className="grid w-full grid-cols-2 gap-8">
          <Text variation="title" className="mt-2 !font-normal !text-gray-100 ">
            Dataset & Workbook for Mr. Macky&apos;s Case
          </Text>
          <Text variation="headinglabel" className="!text-gray-100">
            This workbook is composed of an introduction and five exercise
            modules. Please download the introduction of the workbook and the
            HRIS dataset. Then, click the buttons of each module to download
            question files and answer sheets.
          </Text>
        </div>
        <div className="flex w-full flex-row ">
          <div className="flex-1" />
          <Text variation="headinglabel" className="!text-gray-100">
            (Last update: July 2023)
          </Text>
        </div>
      </div>

      <div className="flex w-full flex-col px-16 pb-16 pt-8">
        <div className="flex w-full justify-center">
          <Divider className="mb-24 mt-4 w-2/5 " />
        </div>

        <div className="flex flex-col items-center">
          <Text variation="heading">
            A sample HRIS dataset for Mr. Macky&apos;s case
          </Text>

          <Text className="mt-4 text-center">
            Please click the button below to download the sample HRIS dataset of
            Mr. Macky&apos;s restaurant organization.
          </Text>

          <Text className="text-center">
            Students in the HR analytics course may get an individual dataset of
            Mr. Macky&apos;s with the same structure of variables yet in different
            data values.
          </Text>

          <Text className="text-center">
            For detailed information on variables and dataset structures,
            download and read the &apos;Introduction&apos; of the case workbook below.
          </Text>

          <div className="mt-8">
            <Button href="https://rutgers.box.com/shared/static/3e5m0jejswvjkpfuswod7wg0mj524u7p.xlsx">
              Download the sample dataset of Mr. Macky&apos;s
            </Button>
          </div>

          <Text className="mt-8 text-center text-gray-400">
            (Last update: July 15, 2023)
          </Text>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-x-24 gap-y-12">
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
                <Text className='text-center'>
                  {fileCategory.categoryDescription}
                </Text>

                <div className="mt-4 flex w-full flex-row justify-center gap-2">
                  {fileCategory.files
                    .filter((file) =>
                      file.fileUserRoles.some(
                        (fileUserRole: any) =>
                          fileUserRole.userRole === UserRole.STUDENT,
                      ),
                    )
                    .map((file) => {
                      return (
                        <div key={file.id} className="flex">
                          <DownloadFileButton file={file} />
                        </div>
                      );
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
export default DownloadMaterialsPage;
