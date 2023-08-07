import LabeledSection from "@/components/shared/labeled-section";
import PageHeader from "@/components/shared/page-header";
import Text from "@/components/shared/text";

const TeachingAnalyticsPage = () => {
  return (
    <div>
      <PageHeader title="Teaching HR Analytics & Purpose of Mr. Macky's case">
        <div className="flex flex-col">
          <Text className="text-center">
            Our innovative teaching approach with the simulated datasets,
            workbook, and generated grading rubrics provides a comprehensive yet
            efficient HR analytics learning experience. This case provides a
            highly valuable way to teach HR Analytics from which other faculty
            and students could benefit. As the creators of this workbook and
            corresponding data, we would like to make the case available to the
            entire academic community.
          </Text>
        </div>
      </PageHeader>

      <hr className="my-6 border-gray-300" />

      <div>
        <LabeledSection
          title="Purpose of Mr. Macky's case:"
          titleVariation="subsubheading"
          innerClassName="flex flex-col gap-4"
        >
          <Text>
            The purpose of Mr. Macky&apos;s is to provide a causal understanding
            of how HRs contributes to business success, and to give students the
            skills to use data to make HR decisions that help support an
            organization&apos;s mission. Through our HR Analytics course, we
            teach students the skills they need to identify empirical patterns
            and relationships that can be used to inform strategic HR
            decision-making. The recent surge of interest in HR analytics
            pertains to the high demand of HR professionals and organizations
            adopting evidence-based management of human capital.
          </Text>
        </LabeledSection>
      </div>

      <hr className="my-6" />

      <LabeledSection
        title="Challenges to teach HR Analytics"
        titleVariation="subsubheading"
        innerClassName="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <Text>
            Teaching HR Analytics, however, is often a challenge because faculty
            frequently face a difficult tradeoff with respect to providing
            student exercises. We have noted several challenges that necessitate
            innovation in teaching HR analytics, including:
          </Text>
          <ul className="list-disc pl-6">
            <li>
              <Text variation="caption">
                It is practically difficult for instructors to get consistent
                access to field data from organizations across semesters because
                of varying levels of industrial relationships and data security
                concerns.
              </Text>
            </li>
            <li>
              <Text variation="caption">
                Organizations vary extensively in terms of what data they store
                and can share from their human resource information systems
                (HRIS), thus making the use of field data very risky in terms of
                trying to ensure the use of new data each year that conforms to
                the teaching needs of an HR Analytics course.
              </Text>
            </li>
            <li>
              <Text variation="caption">
                If using field data, all students in a class typically have to
                employ the same dataset, which can lead to difficulties in terms
                of ensuring each student relying on their own work.
              </Text>
            </li>
            <li>
              <Text variation="caption">
                Sample datasets are often unrealistically simplistic, and do not
                reflect the sort of richness and complexity that those pursuing
                HR Analytics in their careers are likely to face.
              </Text>
            </li>
            {/* Add more challenges as needed */}
          </ul>
        </div>
      </LabeledSection>

      <hr className="justify-left my-6 flex" />

      <Text variation="subheading">How Mr. Macky&apos;s case helps:</Text>

      <div className="mt-8 flex flex-col gap-8">
        <LabeledSection
          title="1) Using computer simulations"
          titleVariation="subsubheading"
          innerClassName="flex flex-col gap-4"
        >
          <Text>
            To address the challenges of getting the HR data from an
            organization, we use computer simulations to generate complex HRIS
            datasets of a hypothetical organization: Mr. Macky&apos;s Cajun
            Cuisine. This company represents a nation-wide restaurant chain
            company with 145 individual restaurants, a current workforce of
            nearly 7500 employees, and annual revenues exceeding $600 million.
            Within each unit, there are 11 different job titles for non-exempt
            employees, and two for exempt employees. The company thus has a
            large amount of data, but in the scenario are only beginning to
            consider HR Analytics. Students thus are tasked with moving from
            simple to complex analytical tasks, across a range of HR functions.
          </Text>
          <div className="flex flex-col">
            <Text>
              This HRIS dataset generated from computer simulations
              fundamentally helps students&apos; learning experiences in several
              ways:
            </Text>
            <ul className="list-disc pl-6">
              <li>
                <Text variation="caption">
                  The HRIS dataset provides comprehensive HR information across
                  various HR topics including performance management,
                  compensation, turnover, diversity, engagement, leadership,
                  selection, promotion, and development. Because the data
                  feature many variables and multiple levels of analyses (i.e.,
                  within-individual, between-individual, unit, and store market
                  size) over the sevenyear period, the data allows for a wide
                  variety of analytical tasks.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  The HRIS datasets are based on underlying true relationships,
                  based on evidence from existing HR and management literature,
                  thus enhancing the external validity of the data. Yet because
                  the computer simulation process includes measurement error, we
                  can create separate datasets with unique values. In so doing,
                  we promoted each student&apos;s sense of ownership and
                  individual learning experiences while avoiding any potential
                  cheating concerns of course materials.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  With their own datasets, students learn what patterns in HR
                  data occur in their own situation, which can be contrasted to
                  findings from other students or groups. This facilitates the
                  development of communication skills with respect to the
                  reporting of findings, with an emphasis on how statistical
                  findings can be described in plain language with concise
                  “story-telling.”
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  Even though students are provided with their own unique
                  datasets, we also wanted to ensure certain relationships were
                  present to ensure a consistent “story” for all students. Thus,
                  20 key relationships are tested for each dataset to ensure
                  they exist (typically, are either statistically significant or
                  exceed a desired threshold) to ensure a consistent learning
                  experience for all students. All available datasets pass these
                  data checks.
                </Text>
              </li>
              {/* Add more challenges as needed */}
            </ul>
          </div>
        </LabeledSection>
        <LabeledSection
          title="2) Using HR Analytics Workbook"
          titleVariation="subsubheading"
          innerClassName="flex flex-col gap-4"
        >
          <Text>
            To fully utilize the HRIS dataset and maximize students&apos;
            learning experiences throughout the semester, we have written a
            100-page workbook and use this as the course&apos; main project over
            the entire semester. This workbook includes a large number of
            analytical exercises that accompany the Mr. Macky&apos;s dataset, as
            well as several short-answer questions. All empirical questions can
            be solved using Excel&apos;s Analysis Tookpak add-in for statistical
            analyses, although other statistical packages (e.g., SPSS, R) can be
            used at the students&apos; or professor&apos;s discretion and skill,
            thus giving flexibility to the professor as to their courses&apos;
            instructional methods.
          </Text>
          <div className="flex flex-col">
            <Text>
              In our use of these materials, students are asked to submit their
              initial responses to Modules 1-4 progressively over the span of
              the semester. Once each module was graded, students are then given
              the option to “Revise & Resubmit” their incorrect responses to
              master the material (and improve their grades). In so doing,
              students&apos; learning experiences are enhanced by reviewing
              their earlier attempts and related feedback. Having utilized this
              workbook for the past semesters, we have found that this workbook
              helped students&apos; learning experiences in the following ways:
            </Text>
            <ul className="list-disc pl-6">
              <li>
                <Text variation="caption">
                  Students have commonly reported that the combination of the
                  workbook and the HRIS dataset has enabled them to experience
                  very realistic practices of HR analytics overall. They noted
                  the utility of workbook questions not only for their immediate
                  learning but for their future career as the questions can
                  readily become a HR analytics project in most organizations.
                  Some of the past students indeed presented their work from the
                  workbook in job interviews, while others adopted workbook
                  questions to investigate issues using their employer&apos;s
                  data.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  Encouraging students to use Excel&apos;s add-in has noticeably
                  helped them to develop Excel skills. Because many
                  organizations today still rely heavily on Excel to store and
                  analyze their HRIS, students have smoothly yet rapidly
                  developed a variety of Excel skills, including functions,
                  pivot tables, data cleaning, and statistical analyses.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  A few students have used SPSS and R to answer workbook
                  questions, and although our experience teaching with the
                  workbook has focused on Excel, these examples have
                  demonstrated that the tools can be used with other approaches
                  to the choice of statistical tools.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  Our workbook questions cover different areas in HR analytics
                  as well as feature various metrics and analytic approaches.
                  For example, questions include descriptive statistics,
                  correlation, regression, utility analysis, individual employee
                  performance and compensation trajectories over time,
                  standardization, aggregation from individual to unit level,
                  mediation, and moderation. This wide variety of methods has
                  improved the breadth and depth of the students&apos; learning
                  experiences.
                </Text>
              </li>
              <li>
                <Text variation="caption">
                  Throughout the modules are questions that ask students to
                  interpret their analyses in plain language. These short-answer
                  exercises help ensure that students understand their results
                  as well as teaches them to effectively communicate their
                  findings.
                </Text>
              </li>
              {/* Add more challenges as needed */}
            </ul>
          </div>
        </LabeledSection>
        <LabeledSection
          title="3) Using R codes for Grading"
          titleVariation="subsubheading"
          innerClassName="flex flex-col gap-4"
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
            in each semester, as well as facilitating the opportunity to provide
            timely feedback to students&apos; performance.
          </Text>
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
export default TeachingAnalyticsPage;
