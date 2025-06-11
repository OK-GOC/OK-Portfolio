import about from "../../assets/image/about/3.jpg";

const AboutCompany = () => {
  return (
    <div className="sections">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[45%] flex justify-center items-center">
          <div>
            <h1 className="header-text">Established in 2002</h1>
            <p className="body-text mt-5">
              OK Group Of Companies Headquartered at No. B (3/5), Mali Kha
              Housing, Bawamyine Ward, Thingangyun Township, Yangon Region, is
              dedicated to providing dependable, responsible, and high-quality
              services across Myanmar.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[55%] mt-5 md:mt-0 md:ml-20">
          <img src={about} alt="aboutone" className=" rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-3">
        <div className={`w-full md:w-[55%]`}>
          <div className="md:mr-20">
            <p className="body-text mt-5 ">
              With a strong vision to become a trusted industry leader
              supporting national development, the company focuses on
              government-related projects-especially in public infrastructure,
              construction, industrial facilities and energy.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <p className="body-text mt-5">
            Currently, OK GROUP OF COMPANIES is carrying out a floating solar
            power project and working closely with the government on electricity
            distribution. The company is also building strategic partnerships
            with international firms through joint ventures to expand its reach
            and capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
