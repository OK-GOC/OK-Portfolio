import about1 from "./../../assets/image/home/about1.jpg";
import about2 from "./../../assets/image/home/about2.jpg";

const AboutUs = () => {
  return (
    <div className="sections">
      <div className="md:flex items-center w-full mb-2">
        <div className="w-full md:w-1/2">
          <div className="max-w-md">
            <p className="header-text">OK GROUP OF COMPANIES</p>
            <p className="body-text">
              OEstablished in 2002 and headquartered at No. B (3/5), Mali Kha
              Housing, Bawamyine Ward, Thingangyun Township, Yangon Region, is
              dedicated to providing dependable, responsible, and high-quality
              services across Myanmar.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={about1} alt="Mission" className="rounded-lg object-cover" />
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <div className="flex items-center">
          <div className="w-1/3">
            <img src={about2} alt="Vision" className="w-full" />
          </div>
          <div className="w-2/3 body-text ml-10 ">
            <p className="font-semibold">
              With a strong vision to become a trusted industry leader
              supporting national development, the company focuses on
              government-related projects-especially in public infrastructure,
              construction, industrial facilities and energy.
            </p>
            <br />
            <p className="font-semibold">
              Currently, OK GROUP OF COMPANIES is carrying out a floating solar
              power project and working closely with the government on
              electricity distribution. The company is also building strategic
              partnerships with international firms through joint ventures to
              expand its reach and capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
