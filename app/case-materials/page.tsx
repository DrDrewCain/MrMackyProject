import Button from "@/components/shared/button";
import LabeledSection from "@/components/shared/labeled-section";
import PageHeader from "@/components/shared/page-header";
import Text from "@/components/shared/text";

const CaseMaterialsPage = () => {
  return (
    <div>
      <PageHeader title="Mr. Macky's case materials for HR Analytics course">
        <Text className="text-center">
          The Case of Mr. Macky&apos;s Cajun Cuisine has been developed and
          refined to teach students HR Analytics in the Master-level Human
          Resource Management programs. The case has been used as the primary
          course material of HR Analytics courses at the Master&apos;s programs
          of Rutgers University and the University of Texas at Arlington. This
          workbook has been used (and updated) every semester since Fall 2019,
          culminating in the current version which presents a comprehensive
          range of analytical exercises covering various HR topics. We believe
          this case provides a highly valuable way to teach HR Analytics from
          which other faculty and students could benefit.
        </Text>
        <Text className="text-center">
          The case materials are composed of two key components: (1) Simulated
          HRIS datasets of Mr. Macky&apos;s and (2) workbook.
        </Text>
      </PageHeader>

      <hr className="my-6 border-gray-300" />

      <LabeledSection
        title="HRIS Datasets of Mr. Macky's (Simulated)"
        titleVariation="subheading"
        innerClassName="flex flex-col gap-8"
      >
        <Text>
          To address the challenges of getting the HR data from an organization,
          we used computer simulations to generate complex HRIS datasets of a
          hypothetical organization: Mr. Macky&apos;s Cajun Cuisine. The company
          represents a nation-wide restaurant chain company with 145 individual
          restaurants, a current workforce of nearly 7500 employees, and annual
          revenues exceeding $600 million. Within each unit, there are 11
          different job titles for non-exempt employees, and two for exempt
          employees. The company thus has a large amount of data, but in the
          scenario are only beginning to consider HR Analytics. Students thus
          are tasked with moving from simple to complex analytical tasks, across
          a range of HR functions.
        </Text>
        <div className="flex flex-col gap-4">
          <Text>
            <b>Current Employees</b> data contain information on every employee
            currently employed at each unit, and includes demographics, job
            title, wage rate, recruitment source, prior experience, interview
            scores, promotion history and performance ratings (for exempt
            employees) for nearly 7500 employees.
          </Text>
          <Text>
            <b>Past and Current Employees</b> data contain information on every
            employee who passed through the organization over the past seven
            years. It has all the variables found in Current Employees as well
            as information about employment status (i.e., employed, quit, or
            discharged) and termination date. This worksheet contains data on
            nearly 40,000 current and former employees.
          </Text>
          <Text>
            <b>Assistant Manager Applicant Information</b> data contain
            information about all applicants for the assistant manager position
            over the past 7 years (roughly 9500 total applicants and 475 hires).
          </Text>
          <Text>
            <b>Validation Study</b> data contain information related to an
            effort at Mr. Macky&apos;s to improve their hiring practices. The
            data represents a concurrent validation study in the company for six
            potential selection devices of exempt employees (with data on
            roughly 350 employees).
          </Text>
          <Text>
            <b>Manager Data by Year</b> data contain information on all managers
            and assistant managers over the past seven years (representing
            roughly 2800 lines of data from 800 employees).
          </Text>
          <Text>
            <b>Engagement Survey Results</b> data contain information collected
            from annual engagement and leadership evaluation surveys distributed
            to Mr. Macky&apos;s employees over the past seven years. The
            engagement survey items include the self-rating responses of job
            satisfaction, collaboration, communication, support, customer focus,
            personal growth, inclusion, empowerment, and accountability. The
            leadership survey items include the employees&apos; ratings of their
            unit managers&apos; vision, staff development, supportive
            leadership, and innovative thinking. Data are provided for each of
            the 185 units in each of the past seven years, and summarized by the
            various categories: exempt, non-exempt, men, women, white, and
            under-represented minorities.
          </Text>
          <Text>
            <b>Raw Engagement Survey Data Subset</b> data contain a random (25%)
            subset of raw data from the most recent engagement survey, yielding
            a total of roughly 1750 lines of data.
          </Text>
          <Text>
            <b>Restaurant Performance Information</b> provides the financial
            performance of each unit (sales, cost of goods sold, payroll, fixed
            operating expenses, and profit) for the past seven years.
          </Text>
        </div>
        <div>
          <Button href="/resources-faculty" className="mt-6">
            Go to the download page
          </Button>
        </div>
      </LabeledSection>

      <hr className="my-6" />

      <LabeledSection
        title="HR Analytics Workbook for Mr. Macky's Case"
        titleVariation="subheading"
        innerClassName="flex flex-col gap-8"
      >
        <Text>
          To fully utilize the HRIS dataset and maximize students&apos; learning
          experiences throughout the semester, we have written a 100-page
          workbook and use this as the course&apos; main project over the entire
          semester. This workbook includes a large number of analytical
          exercises that accompany the Mr. Macky&apos;s dataset, as well as
          several short-answer questions. All empirical questions can be solved
          using Excel&apos;s Analysis Tookpak add-in for statistical analyses,
          although other statistical packages (e.g., SPSS, R) can be used at the
          students&apos; or professor&apos;s discretion and skill, thus giving
          flexibility to the professor as to their courses&apos; instructional
          methods.
        </Text>
        <Text>
          Our workbook consists of five modules providing a series of exercises
          from simpler to more complex analyses. The modules each address
          different areas of HR Analytics, yet also build upon each other:
        </Text>

        <LabeledSection
          variation="vertical"
          title="Module 1: Summary Information of Mr. Macky's"
          titleVariation="paragraphheading"
        >
          <Text>
            Students conduct analytics that provide basic foundational
            information including summary information about current employees,
            employees who had been employed by Mr. Macky&apos;s over the past
            few years, and on the various units (i.e., individual restaurants)
            of the restaurant chain. Information determined in this Module will
            help set up analyses for future modules.
          </Text>
        </LabeledSection>
        <LabeledSection
          variation="vertical"
          title="Module 2: Performance, Turnover, and Engagement"
          titleVariation="paragraphheading"
        >
          <Text>
            Students examine the effects associated with managerial performance
            ratings and unit performance. Students also investigate the
            predictors and consequences of employee turnover, relationships with
            unit performance over time, and models predicting the
            employees&apos; propensity to leave. They also examine the measure
            of engagement and investigate its relationship with unit
            performance.
          </Text>
        </LabeledSection>
        <LabeledSection
          variation="vertical"
          title="Module 3: Recruitment, Selection, and Diversity"
          titleVariation="paragraphheading"
        >
          <Text>
            Students explore issues associated with the company&apos;s
            recruitment and selection efforts, both in terms of the performance
            ratings of those hired and the diversity of its recruitment and
            equity within its compensation practices.
          </Text>
        </LabeledSection>
        <LabeledSection
          variation="vertical"
          title="Module 4: Employee Development and Compensation"
          titleVariation="paragraphheading"
        >
          <Text>
            Students explore how much value there is to the organization in
            accumulating organizational experience. Moreover, they investigate
            how the company rewards performance and how effective their
            compensation practices are for incentivizing future performance and
            retaining high performers.
          </Text>
        </LabeledSection>
        <LabeledSection
          variation="vertical"
          title="Module 5: HR Analytics Review"
          titleVariation="paragraphheading"
        >
          <Text>
            This final module covers all aspects of analytics covered in the
            course. It includes questions related to individual functions
            covered in the earlier modules, as well as analytics associated with
            multiple functional areas. We use Module 5 akin to a take-home final
            examination.
          </Text>
        </LabeledSection>
        <div>
          <Button href="/resources-faculty" className="mt-6">
            Go to the download page
          </Button>
        </div>
      </LabeledSection>
    </div>
  );
};
export default CaseMaterialsPage;
