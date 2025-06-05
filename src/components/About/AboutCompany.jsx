import ceo from "../../assets/image/home/ceo.jpg";

const AboutCompany = () => {
  return (
    <div className="sections">
      <div className="flex items-center gap-20">
        <img src={ceo} alt="ceo" className="h-[400px]" />
        <div className="">
          <p className="text-[20px] font-semibold">
            At OK Group of Companies, we measure success not just in profits,
            but in the lasting impact we create for Myanmar and its people.
            Since our founding, we have remained committed to contributing to
            Myanmar&apos;s development by investing across key sectors - from
            infrastructure and energy to human resources, manufacturing, trade,
            and healthcare. Our journey began with a simple vision: to build a
            company that supports the country while setting standards in
            quality, trust, and innovation.
          </p>
          <br />
          <p className="text-[20px] font-semibold">
            Over the years, that vision has evolved into a dynamic group of
            companies that operate with integrity, create employment
            opportunities, and partner with both local and international
            stakeholders to bring long-term value to our society.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutCompany;
