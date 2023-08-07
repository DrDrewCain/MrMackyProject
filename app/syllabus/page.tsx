import Button from "@/components/shared/button";
import Text from "@/components/shared/text";
import Image from "next/image";
const buttons = [
  {
    title: "Syllabus Rutgers",
    url: "https://rutgers.box.com/shared/static/9yvmqy1k0h98w5snwr27z9dzdxu4p5fd.pdf",
    style: "!bg-pink-50",
  },
  {
    title: "Syllabus UT Arlington",
    url: "https://rutgers.box.com/shared/static/u13y0e0ihnpmvknxje5h62q4ya9gxsjn.pdf",
    style: "!bg-sky-400",
  },
];

const SyllabusPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
        <div>
          <Image
            src="https://lh3.googleusercontent.com/pw/AIL4fc8KdhNNe2o7KwzXZU5QR2mhbD9eyRcQlOVDFLqCp8pnfDAANwVRhLHHwdJme7c5OxqsGnYeppROE3iPJbsiXQv1MgCto1CFxbSre86De3kqN7QnqdolQtvex77XIk-5FjF5CzNpmsiQSaTm1c6fpWqg=w650-h370-s-no"
            alt="Slide 4"
            width={550}
            height={550}
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Text variation="title" className="!font-light">
            Sample Syllabi
          </Text>
          <Text className="!font-light">
            Please click the links below for simple syllabi of master-level HR
            Analytics courses using Mr. Macky&apos;s at Rutgers University and
            the University of Texas at Arlington. Downloading the sample
            syllabi, please click the &apos;Contact&apos; menu on the top to
            inquire about any further questions about designing and managing the
            course using Mr. Macky&apos;s case materials.
          </Text>

          <div className="mt-8 flex flex-row flex-wrap justify-center gap-8">
            {buttons.map((button, index) => (
              <div key={button.title + index}>
                <Button href={button.url} className={button.style}>
                  {button.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
