import ImageCarousel from "@/components/shared/image-carousel";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  // Sample carousel data, replace this with your actual data
  const carouselData = [
    {
      id: 1,
      title: "",
      description: "",
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8Zrvvm-o65vj0bwveDMQIMuyrlEqA3LjkKSSCd8WGDLxQjIW1DlAuPOJuz4Jdpas3Lt-339xNm_O39RKuykMQwY-kJ0EPZ8VT1DCWq0kbI1_4rX8QuTl_6QP4j1fvRtTu9g6Eh9OfxXyZjElLYLsdV=w2244-h1622-s-no",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc8Zrvvm-o65vj0bwveDMQIMuyrlEqA3LjkKSSCd8WGDLxQjIW1DlAuPOJuz4Jdpas3Lt-339xNm_O39RKuykMQwY-kJ0EPZ8VT1DCWq0kbI1_4rX8QuTl_6QP4j1fvRtTu9g6Eh9OfxXyZjElLYLsdV=w2244-h1622-s-no" alt="Slide 1" />,
    },
    {
      id: 2,
      title: "",
      description: "",
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9Cci1HdfaYaWvyuI1JYTfzsZIvRW6Ao1qgIAqJaguSbKggx9O0-y8-h4xtS9OyYusAwMSceoQNwbA3_3cV94XbINmTlNiu95rwNaM8ydHN2BKlgyG5_bDtF3z3GcKcWHQEsaWN-49ojcsJBW2Hm_f_=w1982-h1622-s-no",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc9Cci1HdfaYaWvyuI1JYTfzsZIvRW6Ao1qgIAqJaguSbKggx9O0-y8-h4xtS9OyYusAwMSceoQNwbA3_3cV94XbINmTlNiu95rwNaM8ydHN2BKlgyG5_bDtF3z3GcKcWHQEsaWN-49ojcsJBW2Hm_f_=w1982-h1622-s-no" alt="Slide 2" />,
    },
    {
      id: 3,
      title: "",
      description: "",
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9twHX1sWi1StnVrH9SQzKF40SmlvQH_Ooaihu6_FKvMitKpmZyH7s34IRywMjQHZjhYvSXLHxVNOw8cJA7pwhzU2Tw_S2bg0WN-SyAebeXtV0NgqtlNpD2rGygBQunTtBLseVbmaHxdV7IN0xluHR7=w2170-h1622-s-no",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc9twHX1sWi1StnVrH9SQzKF40SmlvQH_Ooaihu6_FKvMitKpmZyH7s34IRywMjQHZjhYvSXLHxVNOw8cJA7pwhzU2Tw_S2bg0WN-SyAebeXtV0NgqtlNpD2rGygBQunTtBLseVbmaHxdV7IN0xluHR7=w2170-h1622-s-no" alt="Slide 3" />,
    },
    {
      id: 4,
      title: "",
      description: "",
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8KdhNNe2o7KwzXZU5QR2mhbD9eyRcQlOVDFLqCp8pnfDAANwVRhLHHwdJme7c5OxqsGnYeppROE3iPJbsiXQv1MgCto1CFxbSre86De3kqN7QnqdolQtvex77XIk-5FjF5CzNpmsiQSaTm1c6fpWqg=w650-h370-s-no",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc8KdhNNe2o7KwzXZU5QR2mhbD9eyRcQlOVDFLqCp8pnfDAANwVRhLHHwdJme7c5OxqsGnYeppROE3iPJbsiXQv1MgCto1CFxbSre86De3kqN7QnqdolQtvex77XIk-5FjF5CzNpmsiQSaTm1c6fpWqg=w650-h370-s-no" alt="Slide 4" />,
    },
    {
      id: 5,
      title: "",
      description: "",
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_gIpDzz13_m9-45aRq1rvtnqnQ3UX_OrIvlTpFNS995UakwCqwIQ0GpNzYE4MhjS9qw6sOZadqyQdtt-3Ig1u_4tlHqBSAMWo4z0JIH-EpviVcyCcnyJRs3Wzq7pAP7BsUrCEE6HF9o3QWbSvaoNsv=w1146-h1622-s-no",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_gIpDzz13_m9-45aRq1rvtnqnQ3UX_OrIvlTpFNS995UakwCqwIQ0GpNzYE4MhjS9qw6sOZadqyQdtt-3Ig1u_4tlHqBSAMWo4z0JIH-EpviVcyCcnyJRs3Wzq7pAP7BsUrCEE6HF9o3QWbSvaoNsv=w1146-h1622-s-no" alt="Slide 5" />,
    },
  ];

  return (
    <div className="w-full max-w-xl">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display font-bold text-transparent opacity-0 drop-shadow-sm md:text-3xl"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer> The Case of Mr. Macky&apos;s Cajun Cuisine </Balancer>
        <p className="mt-6 animate-fade-up text-sm text-gray-500">
          <p>Exercises in Human Resource Analytics & Simulations</p>
          <span
            style={{ fontFamily: "Roboto", color: "rgb(107, 107, 107)" }}
            className="fsize12"
          >
            <span style={{ letterSpacing: "2px" }}>
              For students, educators, and practitioners in HR analytics &amp;
              simulations
            </span>
          </span>
          <Link href="/faqs">
            <p className="mt-6 animate-fade-up text-sm text-gray-500 ">About</p>
          </Link>
        </p>
      </h1>
      <div>
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
      </div>
    </div>
  );
}
