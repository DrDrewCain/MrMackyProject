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
      src: "/sign1.png",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc-h1JwVKLnh21aXjkQYddFoA3RvwmZsUznl-gnEyiIg41VNw2xXp_nohLuCspXyoxgZNsu2OiAakK5Gj_RiNxhbLdBy_RTlBHeJxFjlINRp_nTIPVWJfnAlwEWG3yHDNcb69d4tphLPRNbvyXIZd5wWU4fb-6fbmTHF1LiPVlFwXe_LpPtpKhlSRAR8LCy_mfxbo_j_cIpdKw_gV75jjLG90O_2qr2d0jn1ERuNpq2qDgbv7QmaHpnD4UjoR_E7obgbYWPGWc6E3btD5xAtF5KBCU4kXR9GPRk_OsR-L5bSQ4IQN7_d1YTYfHY1z8txBcPKl78cgNYgv06EGZ8YW9JUrE29vZJle8dx1UHNiLz7rk-tE7mccd3yN5mVDHNrx8TU4zYjBvvfmYHd4hJ_AfHvWavZSxr7O6BY8k7OKDgbPKuCGwD6Mj9G94Zl_O18kHkPorCUJKK7BD1DF5zuj0CEGOU5ky3a6h2zjbIw0cF2I7oFXz-Otq-kUyu1atea7aKkSrLTCQzpFCDWymBuCuQbMshiEUm3PEF6jepWqWgD0DWEgmWsY0xqyrQjXAo_iL9lgmnJk_fJIfjzK76QxgDVguSeDVsvmofCn3wWp29HlavF3n8Y_jHcqCNG8mxNNVkkBMWrzyJuwhus_PW2aB3Y46GpMvCenfCx6HSDXuMBEr_4JhzKaj1hsF7gXULlsKt1hBoqvjyhs0Tn9TqA82hBgeEQwmRJWCvJ3oAPVzo41b390YDi5sQ0aD9kTySlhb06if3ZGILg8QQrrC1WtNa_kv6QFftNHivHZHFI-E1j1wFPGm46XrNoA17Z6KqYB-kqAUxYpfvyGgjEndO_pw7rkCgaKZkbtZXDHqFWhTFqOtLSeRvw1DSltqzIEOlgjn8Sjv2XncKtfYRNidkgOdrKUbj2Ko0wfnaZb4OSbx1Tb_b-EUj2nJUGZLYBFKE91iOWhOtl7q3ePG7siWxFg4ViMH9xPPRR9BWujb0suuDK34OFVZSxEoU0lp-RyuJPuCi3Hv91jbjdBoU0ef0uykQsTHNsGQ-J45jQ=w2244-h1622-s-no?authuser=0" alt="Slide 1" />,
    },
    {
      id: 2,
      title: "",
      description: "",
      src: "/sign2.jpg",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_PrWeceune6n5MFbeCc3F0yCx6YUcQVMYKSPBxMdbv53ocC5PcPp2qtGq6caleW64T4v2Q92mTqsZEE25MKyKrI3tqm29Imv6i66zSw9ZPZt31pt_VYmHy9voOVNGFvOE-62N3MEpZeSkSSpchK8K7tUALMWAc4ejUAeqzX1oBzBH9jcrZkC313lspJ30QRrbCkbEhdoSTbE5QMOxWLimbXhm_6VgaiHXKbEjxRwBdhMuoFn0c7fcjXrNMqUalTzlX2nuf7c0ClgxdYXTcOIj8xUZ2Ig2e6CK_w0_31G-G7B32HwXdrUryDkXsiiFCBOiFal4pzrPwwxzFyTJmNNMqgSom_YtiqxuHN28pD8Pvc_VTfmequ5aEEqeFwzmUWjCyZghfub0FLZI7nL46SacwfmYP0JIeMhojYpJm0pA0MEGy8XraFl5PILfOxtUgoNKLQiItRwe0cHUftnbNdpljmMIqPIP2-KPtqdpBzJD3oeIIShwR21kK2PDT5KgNpPQDyyABZ4fefXU992YKJLHuQBcje7nQadhen3fTj8T6wQNYoRmjOfH7ZjMeg14NYjIptkDtY7EQWxsScQKbXZ8r3O4YVil_IgxpJf8EHJ_lHG3yCY5wUKAW0V4q0uLHrN8T6EQW8b5RE2gkM_5hQhtc8nSXgF_4InosnG9hM-NneO4kxNay4y0UQhkShzBy8aEGDMYggSbTNGDWx8oasGyJjtxcX-rNPrg9b4dm_Z_jqmnZvDraVpKmERbH9BD4HMRLlG8VX1ZV2v8kIY5hw6houXFN2fyh0zbylSykzw8r-pWTgPjuQH_xct584rkFL3I5WC7AO7SqwQymQHgTnaFzMZ3BiC_R4OXylj9GIfHwi--afwM4Mzpiy--ykCcfKdcTTAHfR13exqmDKqWzj_wL19SD-FEkUuqhejCTgwDz9nu4bB7H87WREPZiAyuP92-2YUIzelPqsVy5KlW0yNwjX0iC6MQL5OdLXnJlEfETCNoI_S8b5DEZkmtdblX2v9poyONTZLCpk3l-jQQ4cZOe3R0vRGH4gXzu=w1982-h1622-s-no?authuser=0" alt="Slide 2" />,
    },
    {
      id: 3,
      title: "",
      description: "",
      src: "/sign3.png",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc9dyLgV4forjhKr7Wk40HU0pJPW4zCU4gpwgjuGzKpmyycpsKdMJ4JIWj4shED-NgzDXfeUCE2iDdq84uSmdAtHySYeaU-gT3dqE2xo3nbqkYjPTuQ_kLXNza21KWQk5AbxnkzNiwHlAtwo8y-VpaRkTs1DHxoOpWUNFXTyQkm5U1dkN2CAYrZdgwBloqyVt_vHMxSSN0W2AajwZi3xP-LutnfYaLr4of0AXkgMyyhJmbgE3VnlIhiVIQ0grDd_Lpu7Kunr3l2hAPXgZVh1JW9h9IfQtetlamqtsCbLVcNSAIZIQx-0OSPMIZO9nESYcBqd8SppGSeeNMZftC6-FekBUF8OR4vb__nCAduNQHmiQxHUCzgmUp8U5qOoAi2hEVmIQX0qOGZoNcDeFZEyosPkjvbUtWV3mciXn0WWrB5GWz0yP7dO6qU5YLosg9bihxwvpn7YvOH7YgO0nSfSOdkj5kQfrmu3bqN-nQEVRPcPwl26iq2siWYdoZ_tMg3oe3pVSGc_ItFBmUIndqtNU9kNJCFxaKhA-GVfhOLoLTptDlGrwWWIbV4GaTWnIPjtcZdSHd0p5KRfKOkk9sYC35OdcRvKLwzztm0mLx_gYCDtJn6PWIRHEld0DsH5I4T8bPjm5eVx653PNpdQzKqo-Ia6gworn8JtTod72q3iiscf1R7YXhojZkbz0WT5Bj-sFxhLM-KJKlbYC5zUJM2nzmRiUzgk2Y_jxLzSPQj12Mht8Qup-btiNQDRczwFwoqJ05soTjUX5NcYjJMCwunkT4DshsGoG9z8cuPjkseNHaFDwidNI148o-qZakMFWpMTecL7hXKs5rmjeCVg4-Cw0xH4u0ae1AVUtjQwnrUlkww0ou-l3-z7URy3Z5_g2Dy6XrjCJlPna_eZfQFlTQc7JRtI1P7lv9dDlr5vK6iT2dxDrDZRerZJY0Y8hJMHXF3os0rcoz2Go28lFFySdzt2RYM3jfA34xa-hXRmdLf6E2sdIm9rJNo6R63ISdcSW7trfEhn7tXoLUZk1tFqckmC2D_qXA1G4LV9JpnO=w2170-h1622-s-no?authuser=0" alt="Slide 3" />,
    },
    {
      id: 4,
      title: "",
      description: "",
      src: "/sign4.png",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc_WzLD82O73f66EaoMt685IjBUBnFB4JXlBtPZOukQdCMbtYY9_W_xayQGv_lj_Dl1Z3QvvRjk1QcXo5R3EpLGTBZ3Hi29GnKVdEltMiHVD3lohuh9lXuLOXO7o55bLr0ym_khyh3K2tDe6MBqFJAts1RrOb7_9WG2PP4H-vYYAXRdBYheWcgsfbGFG1dCdLPu3sZawYFJ9JWCS5TKtSdiS0tfq-xPDfNuXceyfwkqUJKc36E7UXOFu1V8YEZonB2IiT2j9Dfn5P6jIKJsyduDOejb900VmPBazpHGTtbcFOsPVvbvBiLCH1uAmGyMrHVTz7CLf0QmVkDSKZ2fq7ERa22KIpBmie_SX5EnlLQjrM4Ut4jxdP1OTp4l6hAv_LK7kg_CjXh46sR7aLEKGe1WTW05VgBvIk3cuT6SrtF1R21PObpG4YPIagwjdpC_dn3clScSUx3Tade7jFwkFW2EHKM59Dhfm4sAvoBJetA2LdBO-1QZvZ4XiyFsDIy7ff8KLK5dLRXZTh4Mp350yj_FvzWCcffunD-tapAgixQ-8meXuhn4FVYMLEQ6BFNVVuU1CNPH9Ys4T225DlZR4TmlMMJFAcNdRbl0W1h7X19CQR7YJwsS3gLUvMBNc45HB6rXbZlwrEwmcqF_hNEtwJyRdbSJPgaqw9n1NZVCy2PKLwmbGSSPbAVnUnUOmWAtDzZ_UySFTCIMhAZ4gm-U7Kjq8iR3s5jsMEQVfxQtZ01IQ2ifiYR2_BMQnR_Qtz-lz9IspW-IjjN0mAdLN4KNNaqON64AjMjUMxJ9h69JTU6cDrIM4D6jeUnP28cWW_Ce0p5cmdwjyVkjRsPXMSRV6OBcmF_69Qv7oF4vCn_j80qeIjgQx1Ab9rp9_11Zj_2ek6thPRG1ZSkDbkyP2mKyKB_4Bqj-RzW8BYUBUKZSFwsiZsToC8663Vt-h1XAgTINAV6WE7_gNY7-mJsfQvLthK6Dty0nCYrI_COTQj11WD0gRu1-Q9TgaAmrlRc2F7m9--LMvnwYAWprMCIa-wDT_HBBtm5HRmW7SlPdr=w2432-h1622-s-no?authuser=0" alt="Slide 4" />,
    },
    {
      id: 5,
      title: "",
      description: "",
      src: "/sign5.png",
      demo: <img src="https://lh3.googleusercontent.com/pw/AIL4fc93CHgpEYdlUgJJY4vYPf4mb-cInNNhtHwHJds1TJaZcYj0aGdqQzIVZDnlnliFR9XoYxxJSOblXupKtyaK1CWht9-TQk5z4UYgK-trC3thWMs9beip2O1L2zmD9acIeyxQ8GFtDyhOwLeGjTELKYu3-yg2CAdsEGHzfFp5jyTPv9XpZe2-9T8TcbG1QOe7ThK1qx_29b4vN2YLPQ-dbVJedbsoysuUON5itrq_AO39cJxgyV1-XYULX059NeGJKtlB2YoEt8Iyss8EH3IDQJoYIaNPp2zXPG-S4dIau4FR2-g7ildONKXLPtxRf4IfnwU8cmrRHdQURgEYjbcavRQeY4nW1SsQTsJn-DJKJ58wpKRDxq3Lejz0a4OvSaL53byxL9Zqdm1yNFj4njWxakDA5iktoKI8PNVQJJ7laFOLeRaaqvPqTHOlWvcU7b3Eaks2SsZIiU0iL72mNVTNci-5ppHCLsF0NpyQNn2_M7G5fbEqDtTtpY_b31da1NYH16F62OdOINmsSd2LwJP2WGRpvtXbFtDdE9dfIHvVgL1QPVzmZB9fECjTSIR7nYvQluLYK8lIJ0tKSO_ZSkxd6X0zUcWgKRou6_dD22a6GoYlX6ahezr5CO2eGStWmpcalVhj4Z1miCyKEbsSJ9Prd-W9vQaRfWVCQUt7m__GfTFIufIaTVYStlFp6HtEx_UUfwnvOKy1rBSyPsc1gJEz5KMZ7uK0iJq9P-oY6m-V4yWuQOIoVGYGYymw1URqZZ6NHMucZVikeKzCMI63p__vOFANTWmftSV1nbMLxvMMIwxWjjf_anUThaMYmPybSCmMOpw5pDTdaBhiMcDaHD8Fowmt2H11OgRNM3N_NXiPUjZf8YWnykSuoU9jnSXDRgYUIRrNrRNcBUJtaC2lm_X3OaexTGWgKI6vX3riBVNDeYHJY4z7t6_GBWFRYuahFkI3PYaX_2JKu4qPkwtSyUETMDFQuRUDf_PeCqr91Lp9CKG564GSQwrAVXvW-M3wwyg41L90yUy-ie9S4lw1h46EyGGKbM_qVZzt_DXb=w1146-h1622-s-no?authuser=0" alt="Slide 5" />,
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
