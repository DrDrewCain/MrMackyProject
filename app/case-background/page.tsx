import Text from "@/components/shared/text";

const CaseBackgroundPage = () => {
  return (
    <div className='flex items-center'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='w-full flex flex-row justify-center'>
          <div className='flex-none lg:flex-1' />
          <img
            src="https://lh3.googleusercontent.com/pw/AIL4fc_YKxjskHeqODIknjb6X6lwBoGs5I4De6C-scanqorsXHlg62qIc7EvOlfXw_goyD9sviu29AUdfbgV4i0zqqmDI1fxqksaCyDMa2Vw3xti7bHevyYxtcf2bOFbD23GpfAug6sYp0qwqFLqAKgtlLsX5fED2QX7yoZt56Uf-r1VmtCOMZFCrfdlN_MI6E_QviR9-Fuy_OvdLk747GwSo-7jjS48DTvbDvRp5Gsv5IqxpjpABFn7ZZYyfesGVSaI1xLgluqpdOQ8VmXNgNfnu-3XaNiJBoeTLznY-B_V0bwOLEzziwA0bll5rgRjZIVM49Z9VelXjSQqRB-B0yupvDazE-Ryxth4eiLDTl4HRfLW_kYsh8IeArwPN0S0_wCAuM3j7wuDCZgBvb-t2Y8ldX-A3YTgXLj5v8kzoY0rzIltBbv3YiSRz7GvRdO5TdXefoARtge_feiJmf5NDvhHsl_autOfwRgWKv756O1RAB_2OlROtubCLr4OTY_5HkWsFFiiVEHwbXOngGZI1oFa92j8IRLwl7eNELmlHBSWa-YPhGvvbuPU3X_JhWtrP1eUB9IhEiMerU84FLePYNKFhM4H8wSE5IqOAKfv2lK1RBISxTVGo53KTGKaQGKn9sN8qsu2hmBF6tZjMBL4z4ioyDT3QqvMFii3TtGr11cxOyh2EUIh2THF-pOlLCbhHDWaoVEpc8GJGJIB31UlZZXgo5f8TzsDbErRJbQi_QyK2cAiX0PeVJeJkTUaxHWfFRzjlT_aQrmlD-9HdAEt2Sbt84WwrExibQJgFSQhLwaNcE8alr5N81xZwveyfd13Z8N39zgyDhSarmpoY_C6v2arl9HfHYIcq2OPTP81-GRvfW5N1rnx0njDy24yXtX8UlUHWtynA28XRhh0hesKR8ySdFRGgSnyckoCRZiGZDiFEWD2hgLcXx7inl1fDx2UHcrMR-RBW9I9U_pH5ujZdXWE0dqxBYoM7kIZjv434YHyqSNrG6PLcrtp5Q4FDxKpcLln6KOM7mAbeWtC27mvISQBq9sbEoF-O38vHDah=w600-h780-s-no?authuser=0"
            style={{ maxHeight: "615px" }}
          />
        </div>
        <div className="w-full">
          <Text variation="heading" className="animate-fade-down">
            Mr. Macky&apos;s Cajune Cuisine: Case Background
          </Text>
          <Text className="italic">“Good food, good friends, good times.”</Text>

          <div className="mt-6 flex flex-col gap-6">
            <Text variation="caption" className="animate-fade-down">
              Mr. Macky&apos;s Cajun Cuisine aims to provide the food and atmosphere to
              make this all happen. Originally a small restaurant, located off a
              dirt road along the Baton Rouge railway line, Mr. Macky&apos;s developed
              a reputation for being a fun place with great food. Mr. Macky&apos;s
              himself brought his grandmother&apos;s gumbo, jambalaya, cornbread, bread
              pudding, and other secret family recipes to the public, knowing that
              sharing great food was a great way to bring people together. The
              food and atmosphere of Mr. Macky&apos;s developed a local, then regional,
              then even a national reputation. After some great national exposure
              on some cooking and food shows, the expansion of Mr. Macky&apos;s seemed
              inevitable.
            </Text>

            <Text variation="caption" className="animate-fade-down">
              Today, Mr. Macky&apos;s Cajun Cuisine, a privately held company, has
              grown to 145 locations with nearly 7500 employees. Revenues exceed
              $600,000,000 per year, and annual profits topped $10,000,000. Mr.
              Macky&apos;s has traditionally focused on making sure each unit&apos;s food,
              service, and atmosphere are in the style of the original store, but
              with economic changes and tighter competition for the consumer&apos;s
              dollars, the founder recognized that more has to be done with the
              company&apos;s human resources. With the chain now spanning most of the
              states on the eastern and western US coasts, and with continued
              growth in the company&apos;s future, the company needs to ensure that its
              human resources are contributing to the company&apos;s mission at least
              as much as the old family recipes.
            </Text>

            <Text variation="caption" className="animate-fade-down">
              Currently, Mr. Macky&apos;s does not have any formal HR metrics or
              analytics. The company has collected a lot of data which is stored
              in a human resource information system (HRIS), but little has been
              done to seek value from this data. To remedy this situation, Mr.
              Macky&apos;s has hired you (or an individual student) to begin
              transforming the company to a data-driven, evidence-based
              organization. Combine the data you are provided with the information
              in your textbook, classroom discussions, and your instructor&apos;s
              directions to arrive at your recommendations.
            </Text>

            <Text variation="caption" className="animate-fade-down">
              The purpose of HR Analytics is to provide a causal understanding of
              how human resources contribute to business success. It involves the
              application of statistics, technology, and expertise to human
              resource data, with the intended results being better decisions for
              organizations. The goal of HR Analytics is to identify patterns that
              can be used to inform strategic human resource decision-making.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseBackgroundPage;
