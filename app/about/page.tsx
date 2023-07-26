import LabeledSection from "@/components/shared/labeled-section";
import PageHeader from "@/components/shared/page-header";
import Text from "@/components/shared/text";

const AboutPage = () => {
  return (
    <div className="bg-grey px-4 py-6">
      <PageHeader title="Overview of Mr. Macky's case">
        <Text className='text-center'>
          Our innovative teaching approach with the simulated datasets,
          workbook, and generated grading rubrics provides a comprehensive yet
          efficient HR analytics learning experience. We would like to share our
          innovative approach and related resources with our fellow students and
          educators in the HR field.
        </Text>
      </PageHeader>

      <hr className="my-6 border-gray-300" />

      <Text variation="subheading">How Mr. Macky&apos;s case helps:</Text>

      <div className="mt-8 flex flex-col gap-8">
        <LabeledSection
          title="1) Using computer simulations"
          titleVariation="subsubheading"
        >
          <Text>
            To address the challenges of getting HR data from an organization,
            we use computer simulations to generate complex HRIS datasets of a
            hypothetical organization: Mr. Macky&apos;s Cajun Cuisine. This company
            represents a nation-wide restaurant chain company with 145
            individual restaurants, a current workforce of nearly 7500
            employees, and annual revenues exceeding $600 million. Within each
            unit, there are 11 different job titles for non-exempt employees,
            and two for exempt employees. The company thus has a large amount of
            data, but in the scenario are only beginning to consider HR
            Analytics. Students thus are tasked with moving from simple to
            complex analytical tasks, across a range of HR functions.
          </Text>
        </LabeledSection>
        <LabeledSection
          title="2) Using HR Analytics Workbook"
          titleVariation="subsubheading"
        >
          <Text>
            To fully utilize the HRIS dataset and maximize students&apos; learning
            experiences throughout the semester, we have written a 100-page
            workbook and use this as the course&apos; main project over the entire
            semester. This workbook includes a large number of analytical
            exercises that accompany the Mr. Macky&apos;s dataset, as well as several
            short-answer questions. All empirical questions can be solved using
            Excel&apos;s Analysis Tookpak add-in for statistical analyses, although
            other statistical packages (e.g., SPSS, R) can be used at the
            students&apos; or professor&apos;s discretion and skill, thus giving
            flexibility to the professor as to their courses&apos; instructional
            methods.
          </Text>
        </LabeledSection>
        <LabeledSection
          title="3) Using R codes for Grading"
          titleVariation="subsubheading"
        >
          <Text>
            Because students are provided their own unique dataset, grading
            student responses to the workbook presents a potentially large,
            time-consuming challenge. To alleviate this concern and improve the
            efficiency and effectiveness of the grading process, we developed
            grading modules using the statistical package R that creates answer
            books for each dataset and each module. The R code yields answer to
            all empirical questions from the workbook and provide them
            automatically in a Word file (one per dataset). This innovation
            prevents the need to manually compute the answers for each student
            in each semester and facilitates the opportunity to provide timely
            feedback on students&apos; performance.
          </Text>
          <br />
          <Text>
            In our experiences, students have been highly satisfied with the
            timely and accurate feedback from the instructor for their
            submissions of each module. We have also found that the quick
            feedback further motivated students to pursue the “Revise &
            Resubmit” option and resubmit their responses multiple times as they
            learned from prior mistakes. On average, approximately two-thirds of
            students have taken advantage of these optional revisions, which we
            believe have become one of the key drivers of their high
            satisfaction and successful learning experiences regardless of their
            initial levels of analytic skills.
          </Text>
        </LabeledSection>
      </div>
    </div>
  );
};
export default AboutPage;
{
  /* <p className="text-sm mt-6 animate-fade-down text-gray-500"> */
}
