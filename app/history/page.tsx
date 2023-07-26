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
    src: "/HistoryImage1.jpg",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc-qtfvUmCvzgdTRVKvzGIqqP6w-fDq3tsP7I0l5T8ayGHg5p9p3WnTwXyF68Yl9HLDWFbKJdeHlfc0wF270j8THuE8dVN5cxW6yoGJS4mTxSME546QMUO_5YQlYmM9oqSz2G2cGpc6bgPtYThX7rfac6j0K_uy2qUjRkf4dFOZXR-R465nrVLX7xwa7-tu-fMr6Vj8-fn5qg4T9UA2RocmVRDeujMqxLK-tFxRdgldAyDF0ExUKvGswJAb2ckY1fToQTqqS77gQk706A5cjkdsWXbaCK5MDPSeYJ5LjtRomOK3yQ61gWY_gAOQUqJd4bvcYa5IzXxlUl06GUrBmEaJbdSnVSHCzfQXtzgHIYp-7B0GzwrrjiuuvTejerNQSQ7FOBFTggvFKXcHVnS6EmlrFtFtkPtNTIiKHr3zjO8jhV-xR3635lfcHsNqgXXqKbqewfEGTThOA_OAixoGiNg3ExCXVFkaqSKNXz-E_nveCiwtxFx2d4maoKWXwIlO84MZtmAAjF_G7_g16QXokLJ79X_4h3K6IQG4-xyj6vrFWuQUCBGD9ID0H7xObR2k-nHyVxWc6aXU88XIZECkumGWxA_0Scp1AiUjtnqu9NCvkId3nBtcd8-DFpeFkEm2aRIg0oum7T7Y9Fa6OXYLuyQTpb-ZwZ5vbUtdDij78bpMi9kqcJIHxioJcMXYuV8LtTCSeIe3AbbUsSMRZ7TtCtu4FmO3sD-UNWDUCHCAS995mU3Z11vI_HvXNK5b1yZeNI-vssDft-6bwafKMS17-OZUUbkJkIQbHl_DwhIjUaB_3G6eFNjeigq4ZA6l_4ptKZNNv8VdLYNq3BtnfR16k-SeuwKQcNBeL5Aq_dsQvsHziHnj5aovkracZ0y7KtkE1D3fF5f78A41b_1s-3WFTHmUf4cyTxWMY-C2gfS8xK3qIQ7EaBnIL6-D6Wxc3IzksSZQcjyfn-P_N4CfvQxMMM_zYSSsv25bmSnMvt-P-ls5C08n6UjkV0gu0GdFMKr7qBu0w6FvYC7k81yT4xv1Z8Va64V7earp-l6MR=w650-h500-s-no?authuser=0" alt="Slide 1" />,
  },
  {
    id: 2,
    title: "",
    description: "",
    src: "/HistoryImage2.jpg",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc-4RKCGN6o_gI2-nSZa3ryoYplD6sa4Nic66BPJBgxgnq7qnYo_XYad8BN6DqQsBNW2hGMNAf7QxLXi8QDJ3UgmZ3lWJAqOokOhW59cM09CMSFqR8u_Q2cSm4EG13xSFVIluvjZfCKHRSWZnu56rF4JJsdFpbLN2uhHkYZ3yYTeZGjY4hMpskawTVKkfJpc0SRt2hjSwo-E1YtzZ2ZL0zL2-K9NhdYL0Q28-OmBMd4SD815l1p7gawVxBVrozieR6tLEmFisgTOpRlsxIARo6k58MyIaf0CIPlK3c0wdSaJ4jDooPqr66UC9d0WqOkqfzBw-Ttq_xSUFkiscWFKleTzVAt-Qc5F8l4-fUK_QiozDym8RzYUKhCDuI2i_3UqYVezwIo8jZIl5YO-TRGw7xBhNU2UlfjVsTofG41WPXeHY_4aBzfnOYpBYiganJtJUomvbEodO4PNG-v_Oe6YYyUYoRPyxJVGCDQOdnoMq6qLB3P8OLlawgND0Q83vrh4EPlW7Y5GvFNIATG2vZ_OJIzbHFyPTT7qpBVMlJrWEJzihBBUJ_Qafm1YH3__EBSjgDtfrG9rLwk5vnWHJ5UUPUDpT-byh5oDEBDsa8zDbPHgpVQV8cPM9Yyimpuw0TpjsXsVswU2RF8HXqMwOhq7Mv-1B0y4IWWIOAAUPlOXZRQNrt1I6qGJNQtyjLp3M_Og737x14b9n0uqwrnVIGRhdXjedBngzzwvmFRF-0F0eeR8EkpTwZVbW4h8pnJ8TAjqq4iEWoaFMKR2DQ9HfuWR5M7wx3xV5y7cuaBgNIXnodAoupnqdGKIQ4zm_0jXoBR9J5zycZAnrEqWN0Y3dBEi9tlZ0M8Z8a-s4RyemosOhM-h698Hjzpr9WujYiwT6_WSwJ5QeRv68OJWqjt2OBUGU1Nv-HgOPE9vFxC61i5h2vQ7PqMKZBv3HxdnNLUAj7xW_LeZT03hWPE4L_sUlc09yCDRMZR71KMrRj0ZgQWctWG0U6O5ou-qNl7mUQaiW10KIRQPcRACTWDk3jRb1j6sZKW4yTT1TG66wyYz=w650-h500-s-no?authuser=0" alt="Slide 2" />,
  },
  {
    id: 3,
    title: "",
    description: "",
    src: "/HistoryImage3.png",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc84C-GfBJ8MfEWlF0V_QF7GGhDpIgOD-zb1mFapr1o-qjyyyoMKx6dMduEUuGsJRzKqIda0_Xr31TnzpYDd4weJBmeEzKvcAeeO-u_kA9kg2OXHTEAjZRXp1iZr3I1rRB2wOPTFaZf67WISBHgOiILSaJmXTSqROEKLI1cbUHuoKvTIG2N-sNVFAqKQ9C4rFZi0Z1hXsE3uMFc8nAPolQIuz0T17I3cyFLfRnqTBtAvAM3Ldtlu28agTaJJHWF1qvgPBfz7La_FWzTKVtytZaUBejaZwMRW_b7NbOaPU7EerqH4hlKTWnzDwiowi6FhreiYB0jfYPga-UGi9IAimjPf9cuOsqNOec5ddLCLdzKN1ny4JlK50IjhsAL1icFCYT4aWo1LHxoBT71shiGULZPSEDYkzuaBkyR3dNSqZ47b-VrAPrUCRN6dW-LkqssFqGJ3DFmuJQDgyWOSeKmDyzcXpm73lagsUr3OE6rCE4KKQy3ypWeUd2yE7EsgihDAoZnT5ka38tMqfoD-5vdpQb7gztJtsaTdgA9BntMaLI4l6RDMz4LqCoBdBloVjZ83zqzNVUNQOWrRCqYGhKEmcIArnUYKDd02vm4GzRx297dwpkmU4LKqv938xM4_ZP-iE7AjqtaRZ1ilB3fagBlTYdEZxuUsVNz2HQG9dDA5HWXiU3XV7yoyj9eK2658l0lUbarjeLlu-RgErH1La3lS7cPLv7n-9yi8PqV9Mz3YTwP9Qb-kDEiihPpQ_Xq8vvkHBtfRG1JZfcSLPwu9Thvd1t2JFGFulrPkgKjTrSN5zA7CAXi9byb3l6LuuKfz6rpOaGBHXvKLp_-uYGAzUemRhT_AU8Civ4xxmAGQpduzZqsx8p03S9S31nxoPXOTbHjmnQwmkewOexcxcVyIIQBgtoo1Jy3gFCPBAMq7cjPcAJbtrNulOYZcTOq32XmVuvkn02Vy2Xuqbdvn6KXuq2YTtFFGQVi8AcCEuC3GCpObdM7SvzNNATiUJrXA3m0jRWoWZtUUVdEgLglKyYc-uNczXdPURLEwSYuuGGNi=w650-h500-s-no?authuser=0" alt="Slide 3" />,
  },
  {
    id: 4,
    title: "",
    description: "",
    src: "/HistoryImage4.png",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc9R0_MgwaMgbxa5JY7FtV9-DHZdZpZBUfRugsfPmqTwyNwvJB9--820uirQHjsqIbjp1UBLbAQ38wOQEvsgB0skDCg2LaOsl8oz60AMeJoHDcM6sqAhlO6aHSoB7uMGAUoLdeqngHOMmM1tw7OASBR9s09KQ68vONEx7AY3f2xVHMB30O5FqEKDF6_lzm2GnMg7EtN6_VKQtCIPT6GVyiTyiTSPLUoJhAyc1tqRLMnDXyYdsiL0nzsCDFH0K_4T-1sQXUgzbESTTWhQXC4aHskBzkhocWmaBbWliXYQeWg5z-5BZCP_XQaWGnc6I0aXnf0kxtf6OoMGo9IAlvxcdMjBFuvIBbH9KB14Qj4FahyDg3zsota-WF-6eBa5dq_eaLsI7uCaKRn-XMeTOIDsMOZcPWfb0iNzWKeSQjlKNlR7CFTmHHgdY_ezh4fNJKlg92ajJzCYmnQNKJ-NCbt8BdeWzMsO7l39rJ7_O0egyuVh_izsFNKCP_eluZgJVvb8-45yDCNDTdjQEe2d_b91kL2bYSFabYd2TreLtBgvYa4VH5VnkbJwc1hRNqlYGwqvs6_mmbCGKyq9iAlHpRNQRwXho6Nx3Fy7kFLYmABwJk87Mkivi4A-ksMqq6QmLqP_PMCLk5dP9uhMVQZGt9_I-n_P_MPxMkCryLD0tbuUmj5CPrOWqmxnCU8972IPWLopPOZLa2TcznL3QAu6nbBOyMzK-E0cLo2UIaT-oYJWevySLfUfBlJxRkHZxXFsdT6O02Nt8bc2OMwa4vYtv0J_rXyfpTZyQ2kJxvQdbOVV-7tH4nIuTecxB3sPHhycSZmzszK2LkcPcqSkdIcuZ7_Oes452sBWH7QW8nbi0fPojNPumsz5EOU2vV8J5VCsgf4qtGRbKPBmYIjydQEzhBp62hIBbK8MxU5Klq48UjrpTVSctqLEta8kjhgqFkNVEhu9TfM-rmKaTgd3lh2mkQ3Dz2E--NfxfCdFcNqlHJPmuOfAiz3u38M8KN-sCLhjUXyeRajvn1oG35G4ajUGRexYQEQu7ywJ81JTBA2A=w650-h500-s-no?authuser=0" alt="Slide 4" />,
  },
  {
    id: 5,
    title: "",
    description: "",
    src: "/HistoryImage5.png",
    demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_sNP8OSEQOXJwW8c5CqcsioMfIqHs6IV7p4v_iEdyu0-7xet2ECjZ4K12TdAPtx7XrpxmOXPvSEd0A-Q_u8nqoFzcm2stGZYRLeE2r4LzkRCECsgeSgl7tOa629roUYTpNpJjdP64JRkCFDesGRy7dCa5m8rOmb7SUTcNwdh2c7oWhZdSOYyEjFbbZ9f1GqyP_OA1lXOBAzPJ1wkQw4PdsB9-xpY-mg0SgEmMzrTdi5Cy79RlBde7o-_iTqi05bX09XmRiqH6n2QCf5llNorFedcIWqUFjhzWhfAbRBqwJXiPtyAu_qt5JJ4pJMyRUE8o8QXSU_2t7ORNPU3xykYPZZOHk5FHuWwYZTtUDxvHG30JoUGiKdg3MNCZz_4lYWRCabG5JRxqKWHAan5lQqLIHG0WuBPFJGJFIkpvJacpn8XOSj3h-zQVIyrW1MT5U_wN87PrKvEwJfUAAXe7pvEly0W1MsNik6tdM55WhYC8Oh3uBleRut-IbFJHTpQJIUcFaZc8ydOk0yCWT3Ypqg33uRnHrrTrta0wGmkTxazz447PMduRkB6gWEfe5rnH-eREFW2agQley-4wzliEdxbQbLKSes66CYcd5RC-ZtxWVOQWo9xdlj3cWlvRSX_4baFM1txBYW-ygtm7-6rN_doy9G9KTHN14WrmE8Co4RlUDDkpqKN4QC2ojTfuX7sAZ-URtnNTaFl9_jlZs0pfsSYENnnGWu4OxcXcyMWrl7XwlYR4E71eSKx6G1xa1s-fbfvbs7GeSPhL3WTPrQaYoe8QwWNma41JxRkYCQC9QujgI9ZFawg-gQc3LXf3-bYnCachvMIgwZ_h1na0zoP1QpKeqXVlnXt_C67xc3oJeGOYWtYftFPXUhse8A1DxgRcD8tuGAOOAz3cjEgCgzZWXYCfWqJOKGjrhRKBfX8O4U0p2q39qb2e2qeSE-a7na_Y9mxEZUJBaLTy8S_Ptubk4xiJBaV1wEd_JzTXFFFrwhuUZhWRzU37TXL8y0TmKKYK8Hm9Up6QCHEYHkAn3BhhuBQz8HoqAsBKsK7Ez=w500-h500-s-no?authuser=0" alt="Slide 5" />,
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
