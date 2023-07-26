import Button from "@/components/shared/button";
import Text from "@/components/shared/text";
import Image from "next/image";

const button1 = [
  {
    "title": "Go to Dr. Sturman's website",
    "url": "https://smlr.rutgers.edu/faculty-staff/michael-c-sturman",
    "style": "!bg-white"
  },
]

const button2 = [
    {
      "title": "Go to Dr. Shim's website",
      "url": "https://www.uta.edu/academics/faculty/profile?username=shimh",
      "style": "!bg-white"
    },
]
const authors = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-1">
        <div>
          <Image src="https://lh3.googleusercontent.com/2DDdnxls1u7BrwxkV3InsMkW41eK14iaVB8hBQlmVhtcOCuFit3Eh69m9lxAi3EDAKquOxgidaE8V1FyRTXUE5fOy2Y_VEoy9F_h3geW7lgc_bXJXuJqrg=w800" 
               className="img-responsive" 
               data-attach="true" 
                width={400} height={7.5}
               alt="Sturman_Michael_2022sm.jpg" 
          />
        </div>
        <div className="flex flex-col justify-center gap-">
          <Text variation="title" className="!font-light">
            Dr. Michael C. Sturman
          </Text>
          <span className="!font-light" style={{ fontFamily: 'Noto Sans KR', color: 'rgb(194, 148, 94)' }}>
            ​Distinguished Professor and Chair, Human Resource Management (HRM)
            <p className="fsize11" style={{ fontFamily: 'Noto Sans KR', color: 'rgb(194, 148, 94)' }}>
            School of Management and Labor Relations, Rutgers University
            </p>
        </span>
          <Text className="!font-light">
            Dr. Michael C. Sturman is a Distinguished Professor of Human Resource Management in the
            Rutgers School of Management and Labor Relations. He brings more than two decades of
            research and teaching experience, with his work focusing on the prediction of individual job
            performance over time, the influence of compensation systems, and the use of HR Analytics
            further questions about designing and managing the course using Mr.
            and Metrics to improve HR decision-making. 
          </Text>
          <Text className="!font-light">
            Dr. Sturman teaches undergraduate, graduate, and executive courses on human resource
            management, HR Analytics, compensation, and analytical methods. He holds a Ph.D., M.S.,
            and B.S. from Cornell University’s School of Industrial and Labor Relations, and is a Senior
            Professional of Human Resources as certified by the Society for Human Resource
            Management.
          </Text>
          <div className='flex flex-row flex-wrap justify-center gap-9 mt-8'>
            {button1.map((button, index) => (
              <div key={button.title+index}>
                <Button href={button.url} className={button.style}>
                  {button.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src="https://lh3.googleusercontent.com/sttKuvMHI2vrqcMdsdu8Ran1jeoMzQPOee-Hq0RoeXBzxoV-06j18Q2AzOTX7ImEEdp1de3kB2M-HC2tADuBvzs3VSD6eW77Kvn4z6jmZdEVqABCLNSFk-k=w800" 
               className="img-responsive" 
               data-attach="true" 
               width={400} height={7.5}
               alt="Hanbo_Shim_2022sm.jpg" 
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Text variation="title" className="!font-light">
           Dr. Hanbo Shim
          </Text>
          <span className="!font-light" style={{ fontFamily: 'Noto Sans KR', color: 'rgb(194, 148, 94)' }}>
            Assistant Professor, Management
            <p className="fsize11" style={{ fontFamily: 'Noto Sans KR', color: 'rgb(194, 148, 94)' }}>
                College of Business, University of Texas at Arlington
            </p>
        </span>
          <Text className="!font-light">
            Dr. Shim conducts research at the intersection of Human Resource (HR) and Organizational
            Behavior, including how employee&apos; job performance changes over time, the dynamic effect
            of compensation on employee performance, and how employee emotions in interpersonal
            relationships influence performance within teams. 
          </Text>
          <Text className="!font-light">
            Dr. Shim&apos; research focuses on how individual employees contribute to their organization
            given the changes in individual job performance and compensation over time. He further
            studies employee emotion and interpersonal relationships as preconditions or consequences
            of employee contributions. Hanbo earned his Master, M.S. and Ph.D. degrees in Human
            Resource from the School of Management and Labor Relations at Rutgers University, and his
            B.A. degree in Mathematics and Economics at the University of Illinois at Urbana-Champaign. 
          </Text>
          <div className='flex flex-row flex-wrap justify-center gap-9 mt-8'>
            {button2.map((button, index) => (
              <div key={button.title+index}>
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

export default authors;
