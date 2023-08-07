import React from "react";
import GradingItem from "./grading-item";

const items = [
  {
    title: "Workbook Module 1 (10%)",
    description:
      "Students conduct analytics that provide basic foundational information about Mr. Macky's.",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc9g1I4aCURawwq5JimY5cmOM7DWzHrfawZkzBdFaDrtvM_S4xbqr_NVThe0Ylg6r1OzkS4WlDHVU43PtWGc9WX95X529amohDTlXyrkCW3G_48QdQyjr9VnzmAk--DVuhIDqmXruJB_FS_1yARAAEd_=w50-h50-s-no",
    highlighted: false,
  },
  {
    title: "Workbook Module 2 (15%)",
    description:
      "Students analyze the effects associated with managerial performance ratings and turnover",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc8Tnh3zAQorlu6oKKF9dCcQwkp9oPoSuhfOIUUYqrowYinSX2Zcc_vPOprqO9x968hiKEdg4U3fwEMUBPFGvlUblo2cFfFUs8jtQ_Sm4Lgal8nNs-UVMCjBofXnbsew1Wjkop3z1ANM0atrZzWcd3QV=w50-h50-s-no",
    highlighted: false,
  },
  {
    title: "Workbook Module 3 (15%)",
    description:
      "Students explore issues associated with engagement, diversity, and selection.",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc_-EQRAJnTYaEhEVSQTFL2Qtfz12T8eaVUOvO4BHgZIWkVm08R7EqSbtuh60dvGUtNJRauo2ySJt65LX8GSr0WkC1uX_nqhGiNcNZ8crsHc-9B3JVWMKU-Drl5dPfx6k_Hq6sUoEg0vZCAH4rkOEC7R=w50-h50-s-no",
    highlighted: false,
  },
  {
    title: "Workbook Module 4 (15%)",
    description:
      "Students engage in HR Analytics associated with employee development and compensation",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc_ebLdkXLicu0G8zZGj60lsHOsBaFfGRe91Kin8qVKXi3sYihb85lc1tCAmPVxCVYWqTHAfxH7JtyAfKyJjaLYbBmlS7zYexWshRWI20JfUrlgrs5XhJ_8MboVBLoxRd0ZmNMq66Oz8Hp923PQ8vHA6=w50-h50-s-no",
    highlighted: false,
  },
  {
    title: "Workbook Module 5 (20%)",
    description:
      "Module 5 covers all aspects of analytics covered in the course and the overall impact of HR functions to Mr. Macky's",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc8vs1d-gG9F6jFwOaK1VYID1JlG9RyvE-a13iMSV8Ajx2CeWbhWXfWX0maQ4_2kr7vU-2FWbGIdJUrVz1JaysRBybsMCoT3NHGhg7-TgJA7rTXzAaD-bxoJksh3K7kbIruh0mu7L2QPMN5WDJwiRTMm=w320-h320-s-no",
    highlighted: false,
  },
  {
    title: "Weekly Assignments (25%)",
    description:
      "Students are given short articles/book chapters to read and submit their response to short-answer questions",
    imageSrc:
      "https://lh3.googleusercontent.com/pw/AIL4fc_NGVAmlvoxTUuqNN-SdXFqWvAul5RLxMfXqSRXv7mwBvO02DP9rjQHeOjB7S0awla7kPYhPmqUKZinKrdqtcbYc1GqU2oqcus7f_VmUihYS7X2eY8lsRnE5-51lVNa747xTmrCoTcCNoLxZvHLrTDV=w200-h200-s-no",
    highlighted: true,
  },
];

interface GradingItemsGridProps {
  className?: string;
}

const GradingItemsGrid = ({ className }: GradingItemsGridProps) => {
  return (
    <div className={`${className} grid grid-cols-1 gap-8 lg:grid-cols-2`}>
      {items.map((item, index) => (
        <GradingItem
          key={item.title + index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          highlighted={item.highlighted}
        />
      ))}
    </div>
  );
};

export default GradingItemsGrid;
