import Button from "@/components/shared/button";
import Text from "@/components/shared/text";

const buttons = [
  {
    "title": "Syllabus Rutgers",
    "url": "https://rutgers.box.com/shared/static/9yvmqy1k0h98w5snwr27z9dzdxu4p5fd.pdf",
    "style": "!bg-pink-50"
  },
  {
    "title": "Syllabus UT Arlington",
    "url": "https://rutgers.box.com/shared/static/9yvmqy1k0h98w5snwr27z9dzdxu4p5fd.pdf",
    "style": "!bg-sky-400"
  },
]

const SyllabusPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
        <div>
          <img src="https://lh3.googleusercontent.com/pw/AIL4fc_WzLD82O73f66EaoMt685IjBUBnFB4JXlBtPZOukQdCMbtYY9_W_xayQGv_lj_Dl1Z3QvvRjk1QcXo5R3EpLGTBZ3Hi29GnKVdEltMiHVD3lohuh9lXuLOXO7o55bLr0ym_khyh3K2tDe6MBqFJAts1RrOb7_9WG2PP4H-vYYAXRdBYheWcgsfbGFG1dCdLPu3sZawYFJ9JWCS5TKtSdiS0tfq-xPDfNuXceyfwkqUJKc36E7UXOFu1V8YEZonB2IiT2j9Dfn5P6jIKJsyduDOejb900VmPBazpHGTtbcFOsPVvbvBiLCH1uAmGyMrHVTz7CLf0QmVkDSKZ2fq7ERa22KIpBmie_SX5EnlLQjrM4Ut4jxdP1OTp4l6hAv_LK7kg_CjXh46sR7aLEKGe1WTW05VgBvIk3cuT6SrtF1R21PObpG4YPIagwjdpC_dn3clScSUx3Tade7jFwkFW2EHKM59Dhfm4sAvoBJetA2LdBO-1QZvZ4XiyFsDIy7ff8KLK5dLRXZTh4Mp350yj_FvzWCcffunD-tapAgixQ-8meXuhn4FVYMLEQ6BFNVVuU1CNPH9Ys4T225DlZR4TmlMMJFAcNdRbl0W1h7X19CQR7YJwsS3gLUvMBNc45HB6rXbZlwrEwmcqF_hNEtwJyRdbSJPgaqw9n1NZVCy2PKLwmbGSSPbAVnUnUOmWAtDzZ_UySFTCIMhAZ4gm-U7Kjq8iR3s5jsMEQVfxQtZ01IQ2ifiYR2_BMQnR_Qtz-lz9IspW-IjjN0mAdLN4KNNaqON64AjMjUMxJ9h69JTU6cDrIM4D6jeUnP28cWW_Ce0p5cmdwjyVkjRsPXMSRV6OBcmF_69Qv7oF4vCn_j80qeIjgQx1Ab9rp9_11Zj_2ek6thPRG1ZSkDbkyP2mKyKB_4Bqj-RzW8BYUBUKZSFwsiZsToC8663Vt-h1XAgTINAV6WE7_gNY7-mJsfQvLthK6Dty0nCYrI_COTQj11WD0gRu1-Q9TgaAmrlRc2F7m9--LMvnwYAWprMCIa-wDT_HBBtm5HRmW7SlPdr=w2432-h1622-s-no?authuser=0" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Text variation="title" className="!font-light">
            Sample Syllabi
          </Text>
          <Text className="!font-light">
            Please click the links below for simple syllabi of master-level HR
            Analytics courses using Mr. Macky&apos;s at Rutgers University and the
            University of Texas at Arlington. Downloading the sample syllabi,
            please click the &apos;Contact&apos; menu on the top to inquire about any
            further questions about designing and managing the course using Mr.
            Macky&apos;s case materials.
          </Text>

          <div className='flex flex-row flex-wrap justify-center gap-8 mt-8'>
            {buttons.map((button, index) => (
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

export default SyllabusPage;
