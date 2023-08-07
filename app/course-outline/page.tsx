import GradingItemsGrid from "@/components/course-outline/grading-items-grid";
import LabeledSection from "@/components/shared/labeled-section";
import PageHeader from "@/components/shared/page-header";
import Text from "@/components/shared/text";
import Link from "next/link";
import React from "react";

const courseoutline = () => {
  return (
    <div className="bg-grey px-4 py-6">
      <PageHeader title="HR Analytics course outline using Mr. Macky's case">
        <Text className="animate-fade-down text-center">
          An HR Analytics course can be designed to introduce students to the
          fundamental logic, metrics, and methods necessary to conduct HR
          analytics. Organizations increasingly rely on HR Analytics to improve
          decision-making in human resources, and ultimately contribute more
          effectively to organizational effectiveness. HR practitioners need to
          be skilled in understanding (1) the types of problems that can be
          addressed using HR analytics, (2) how to analyze and interpret human
          resource data, (3) how to evaluate the validity of those analyses, and
          (4) how to communicate analytical and statistical results in a way to
          influence decisions.
        </Text>
        <Text className="animate-fade-down text-center">
          While the course outline draws as a Master-level course, it can be
          customized to various levels from undergraduate to executive
          education.
        </Text>
      </PageHeader>

      <hr className="my-6" />

      <LabeledSection
        title="Course Objectives"
        innerClassName="flex flex-col gap-4"
      >
        <Text>
          Upon successfully completing this course, students should be capable
          of the following:
        </Text>
        <ul className="list-disc pl-6">
          <li>
            <Text variation="caption">
              Relating the importance of using data-based reasoning to support
              HR decision-making
            </Text>
          </li>
          <li>
            <Text variation="caption">
              Engaging in critical thinking, translating how human resource
              issues and questions can be tested
            </Text>
          </li>
          <li>
            <Text variation="caption">
              Performing basic data analyses to answer human resource questions
            </Text>
          </li>
          <li>
            <Text variation="caption">
              Conducting summary statistics, correlation analysis, and
              regression analysis to answer HR questions
            </Text>
          </li>
          <li>
            <Text variation="caption">
              Communicate, in writing and orally, the meaning and implications
              of HR analytics
            </Text>
          </li>
          {/* Add more challenges as needed */}
        </ul>
      </LabeledSection>

      <LabeledSection title="Grading Items" className="mt-8">
        <Text>
          To enhance the learning experiences of Mr. Macky&apos;s case, we
          suggest 75% of total grades to be earned from the case workbook, while
          the rest 25% can be accomplished by weekly assignment submissions:
        </Text>
      </LabeledSection>

      <GradingItemsGrid className="mt-16" />
    </div>
  );
};
export default courseoutline;
