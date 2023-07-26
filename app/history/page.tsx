import Divider from "@/components/shared/divider";
import ImageCarousel from "@/components/shared/image-carousel";
import Text from "@/components/shared/text";
import React from "react";

const timeline = {
  2023: ["Professional development workshop (PDW) of the case holds at the Annual Meeting of Academy of Management (Boston, MA)  "],
  2022: ["Winner of the Innovative Teaching Award from the Academy of Management, HR Division (Seattle, WA)", "Adapted in HR Metrics & Analytics course (Master's), University of Texas at Arlington (Fall 2022 to present)"],
  2021: ["Adapted in HR Metrics & Talent Analytics (Executive Education), Rutgers University"],
  2020: ["Revised as online course materials for HR Analytics course (Master's), Rutgers University (Spring 2020 to present)"],
  2019: ["The workbook for Mr. Macky's case, Exercises in HR Analytics,  was written ", "Adapted in HR Analytics course (Master's), Rutgers University (Fall 2019 to present) "],
  2018: ["The simulator for the Mr. Macky's case was developed "],
};

const carouselData = [
  {
    id: 1,
    title: "",
    description: "",
    src: "https://lh3.googleusercontent.com/pw/AIL4fc9WEifyjmTOR02Ij8IO1IbnMmPHZBwG1D9SXAOX9JVFNFaaySg9v9EXSr4kql2pJSltFElR3o9MoNuRrIlKuEl2kgEoBRc8tysK2NhB1-qP69XUDgHW6CHXMalOTzMubH3HKLe4sxNRb6usm4OHd5AC=w650-h500-s-no",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc9WEifyjmTOR02Ij8IO1IbnMmPHZBwG1D9SXAOX9JVFNFaaySg9v9EXSr4kql2pJSltFElR3o9MoNuRrIlKuEl2kgEoBRc8tysK2NhB1-qP69XUDgHW6CHXMalOTzMubH3HKLe4sxNRb6usm4OHd5AC=w650-h500-s-no"/> ,
  },
  {
    id: 2,
    title: "",
    description: "",
    src: "https://lh3.googleusercontent.com/pw/AIL4fc-mVYsZ5kJJzCXohCZf6vGd1DA-UD2JskSm3FXn6RV80N4cvS_ufaxbLk4otUI2lvIllD_-OdjYQeeHYfO26bNk53NZ7oWQFd20BI8GeNYgxXdjYKacf8VOZ-F3ngnav-eNWV3FZGhVKBy8sUvmdMHr=w650-h500-s-no",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc-mVYsZ5kJJzCXohCZf6vGd1DA-UD2JskSm3FXn6RV80N4cvS_ufaxbLk4otUI2lvIllD_-OdjYQeeHYfO26bNk53NZ7oWQFd20BI8GeNYgxXdjYKacf8VOZ-F3ngnav-eNWV3FZGhVKBy8sUvmdMHr=w650-h500-s-no" alt="Slide 2" />,
  },
  {
    id: 3,
    title: "",
    description: "",
    src: "https://lh3.googleusercontent.com/pw/AIL4fc_5_Wj4uHpx2xu3Wc1-N0uKnPvpa9mOGTPnqXa0dtqtiaCqIOHZMCxAF_vzUjbdQu2kd3dwn4OlL8UU6CtbSVg1cttPevvtruv5OlFD1nx86RQwimD94IV3JnSFOQx14fdMxqg2rcGqC4zhlU56bpcy=w650-h500-s-no",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_5_Wj4uHpx2xu3Wc1-N0uKnPvpa9mOGTPnqXa0dtqtiaCqIOHZMCxAF_vzUjbdQu2kd3dwn4OlL8UU6CtbSVg1cttPevvtruv5OlFD1nx86RQwimD94IV3JnSFOQx14fdMxqg2rcGqC4zhlU56bpcy=w650-h500-s-no" alt="Slide 3" />,
  },
  {
    id: 4,
    title: "",
    description: "",
    src: "https://lh3.googleusercontent.com/pw/AIL4fc_m1Q7Oq0MFCnEQOel9N5ykIN7_6Rb_yi6YoZcPmsS29B1XLW5bAH9RKsDhTSDxi9swkziiL__B6-OW14zyVDxgpulI1s4FDgyAdWzArUJ1Gl5ksbwfdMu2N-Upx0RvZ8_3WhYSaLt3H-u-iAsOd4es=w650-h500-s-no",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_m1Q7Oq0MFCnEQOel9N5ykIN7_6Rb_yi6YoZcPmsS29B1XLW5bAH9RKsDhTSDxi9swkziiL__B6-OW14zyVDxgpulI1s4FDgyAdWzArUJ1Gl5ksbwfdMu2N-Upx0RvZ8_3WhYSaLt3H-u-iAsOd4es=w650-h500-s-no" alt="Slide 4" />,
  },
];


const HistoryPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="grid grid-cols-4 gap-4 lg:gap-16">
        <div className="col-span-4 lg:col-span-1 flex flex-col">
          <Text variation="title" className='!font-light'>History of<br/>Mr. Macky&apos;s case</Text>
               {/* Display the cards no carousel*/}
        <ImageCarousel>
          {carouselData.map((item) => (
            <div key={item.id}>
              <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
                {item.title}
              </h2>
              {item.demo}
              {item.description}
            </div>
          ))}
        </ImageCarousel>
          <Divider className='bg-gray-400' />
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
          {Object.keys(timeline).sort((a,b) => parseInt(b)-parseInt(a)).map((yearStr, index) => {
            const year = parseInt(yearStr);
            const events = timeline[year as keyof typeof timeline];
            return (
              <div key={`evnts_${year}_index`} className="flex flex-row gap-8">
                <Text variation="paragraphheading">{year}</Text>
                <div>
                  {events.map((event, eventIndex) => (
                    <Text key={`${year}_${event}_${eventIndex}`}>{event}</Text>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HistoryPage;
