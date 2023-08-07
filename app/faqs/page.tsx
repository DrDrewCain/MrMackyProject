import LabeledSection from "@/components/shared/labeled-section";
import PageHeader from "@/components/shared/page-header";
import Text from "@/components/shared/text";
import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

const faqSections = [
  {
    question: `I am not specifically pursuing a Human Resource (HR) analyst as my career. WHY do I need to learn HR analytics?`,
    answer: [
      `HR analytics is not just for technical experts or HR practitioners,
    but really for all individuals in an organization including
    employees (both HR and non-HR jobs), managers, leaders, and
    entrepreneurs. By definition, HR analytics is the data science of
    management and informs various HR-related decision-making processes
    with evidence obtained from existing data of people in an
    organization. For HR practitioners, HR analytics provide the tools,
    knowledge and evidence for organizations to make better investments
    in people and become more successful in accomplishing organizational
    goals. For non-HR employees and line managers, HR analytics provide
    knowledge of how to comprehend the data analytic results and how to
    utilize such insights to make better decisions for future management
    practices. Top leaders or business owners can also rely on evidence
    from HR analytics to (1) ask the relevant questions or issues with
    existing management practices, (2) understand the results of
    HR-related investment at the aggregate level, and (3) make more
    informed decisions related to their existing employees and new hires
    in the future.`,
    ],
  },
  {
    question: `I am neither good at Excel nor statistics in general. Will I
              still successfully learn how to work on HR analytics?`,
    answer: [
      `While greater Excel and statistical skills would surely help,
            students even with a basic level of such skills can successfully get
            to work on our analytics case over a semester (or two). To
            facilitate this learning experience, our HR analytics workbook is
            designed to start with exercises with basic Excel skills from the
            first module. This Excel and related statistical knowledge gets
            gradually sophisticated throughout the workbook. Over the semester,
            students' fear of Excel generally alleviates as long as they
            consistently work on the exercises.`,
      `By the end of the semester, what students usually struggle the most
            is not necessarily the Excel/statistics skills, but the lack of
            training in building logical and convincing storytelling of evidence
            found from the analyses (not the analyses per se). Again, HR
            analytics is not only about analyzing the data, but essentially
            about bringing good logic to inform managerial decision-making with
            the findings.`,
    ],
  },
  {
    question: `Is HR analytics something so-called "Artificial Intelligence",
              "Machine Learning", or "Deep Learning"?`,
    answer: [
      `Technically, Artificial Intelligence (AI) is about trying to make
            machines think (or pretend to think). Machine Learning (ML) and Deep
            Learning (DL) are the two large subsets of AI. ML is about how
            computers can use the data to come up with better decisions. Within
            ML, we find 'supervised learning' that copes with labeled data;
            'unsupervised learning' on Clustering unlabeled data; and
            'semi-supervised learning' with some labeled and unlabeled data). ML
            often involves smaller samples of data and thus requires human
            intervention in data analysis process. DL, however, is an automated
            process with no need of human intervention during its analytic and
            decision-making processes. To do so, DL requires extremely large
            samples of data, or so-called "Big Data".`,
      `To our understanding, HR analytics can be considered as the
            'supervised learning', or the subset of ML. In organizations HR or
            any related managerial data are just too small to be considered as
            DL. Moreover, human should intervene the analytic processes to
            deliver evidence-based insights and inform the decision-making
            processes.`,
    ],
  },
  {
    question: `The workbook seems to contain a lot of questions. Will I be
              able to complete it within a semester?`,
    answer: [
      `Yes, the workbook has been designed to complete over a given
            semester. Focusing on the workbook modules with no other exam or
            test-based assessment, we encourage students to work regularly and
            consistently over the entire semester as if this is for their job or
            living. Students performance usually do follow their learning curve
            and become much faster and efficient to work on the later modules of
            the workbook toward the end of the semester.`,
    ],
  },
  {
    question: `Which statistical software can I use for the Mr. Macky's case?`,
    answer: [
      `While students can utilize other statistical software (e.g., SPSS,
        JMP or R) to work on the workbook exercises, we recommend students
        to accomplish the course by using just Excel. Several reasons for
        this: First, Excel is the most popular and available (and free!)
        software in most companies today. Companies do not necessarily spend
        extra budgets just to purchase other paid software or application`,
      `We designed the workbook and the Mr. Macky's case only as an Excel
        version (and teach HR analytics solely using Excel) for students to
        fully understand the entire analytic processes. Recommending Excel
        as the primary tool for instructors and students, we further suggest
        students to build more analytic skills by working on the same
        workbook yet using other sophisticated statistical sofrware such as
        R (and R is free too!).`,
    ],
  },
  {
    question: `How useful will this Mr. Macky's case be in getting a job or
              working for actual HR tasks in organizations?`,
    answer: [
      `High utility of our case and workbook for students were among the
      top goals when we had developed these materials. As each exercise in
      our HR analytics workbook can easily become a real-world analytic
      project in any organization, the utility of the Mr. Macky's case has
      been historically high for students at work after their graduation.
      For instance, some have become HR middle managers practicing
      'utility analysis' (i.e., HR version of cost-benefit analysis) from
      the case workbook and refer to the findings when making HR
      intervention decisions (e.g., training or reward programs) for their
      employees.`,
      `Moreover, we hope our materials could enhance individual students'
      skills and future career opportunities. Indeed, some of our students
      in the past briefly presented their works during their job
      interviews and make themselves more probable candidates during the
      hiring process. Mr. Macky's case, therefore, conveys a great deal of
      potential for students (and faculty who advise them) to accomplish
      various short- and long-term career goals.`,
    ],
  },
  {
    question: `If my current or future company does not practice HR analytics
              at all, what shall I do?`,
    answer: [
      `Organizations vary in terms of 'data literacy' or the extent to
      which key managerial decisions are made based on analytical
      evidence. Even if your current or future job/organization does not
      practice any evidence-based or data-driven approach, or even if
      there have been no dataset exists, HR analytics is a very doable
      practice to start. Even the organizations with no data would in fact
      have good data in their key HR areas such as performance ratings,
      compensations, turnover, demographics of employees, selection device
      score, etc. As our HR analytics workbook contain a wide variety of
      exercises within and across HR areas, students may also refer to
      specific exercises from Mr. Macky's to easily adapt and call it a HR
      Analytics project in their organizations. It may not be an easy
      thing to fight for, but something that can surely bring unexpected
      contributions to business success.`,
    ],
  },
];

const FaqsPage = () => {
  return (
    <div>
      <PageHeader title="Frequently Asked Questions">
        <div className="flex flex-col">
          <Text
            variation="headinglabel"
            className="animate-fade-up text-center !text-gray-500"
          >
            Follow are some of the most common questions from previous students
            since 2018.
          </Text>
          <Text
            variation="headinglabel"
            className="animate-fade-up text-center !text-gray-500"
          >
            For any related or new questions, please click &apos;Contact&apos;
            menu above and send us any questions.
          </Text>
        </div>
      </PageHeader>

      <div className="mt-16 flex flex-col gap-8">
        {faqSections.map((section, index) => (
          <LabeledSection
            key={`faq_${index}`}
            title={`Q${index + 1}. ${section.question}`}
            titleVariation="subheading"
            innerClassName="flex flex-col gap-4"
          >
            {section.answer.map((answerBlock, answerIndex) => (
              <Text key={`q_${index}_${answerIndex}`}>{answerBlock}</Text>
            ))}
          </LabeledSection>
        ))}
      </div>
    </div>
  );
};
export default FaqsPage;
