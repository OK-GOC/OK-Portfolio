import ceo from "../../assets/image/home/ceo.jpg";

const Message = () => {
  return (
    <div className="sections">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <img
          src={ceo}
          alt="ceo"
          className="order-2 md:order-1 w-[250px] md:w-[400px]"
        />
        <div className="max-w-2xl order-1 md:order-2">
          <p className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold">
            Our CEO’s Message
          </p>
          <p className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-primary mt-5">
            As we move forward, our vision is clear: to grow with Myanmar, build
            for Myanmar, and shape a brighter future - together!
          </p>
          <p
            className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold mt-2"
            style={{ lineHeight: "2" }}
          >
            Sincerely, <br /> Mr.Oake Khaung <br /> Chairperson
          </p>
        </div>
      </div>
      <div className="body-text space-y-10 mt-10" style={{ lineHeight: "2" }}>
        <p className="font-semibold">
          At OK Group of Companies, we measure success not just in profits, but
          in the lasting impact we create for Myanmar and its people. Since our
          founding, we have remained committed to contributing to Myanmar's
          development by investing across key sectors - from infrastructure and
          energy to human resources, manufacturing, trade, and healthcare. Our
          journey began with a simple vision: to build a company that supports
          the country while setting standards in quality, trust, and innovation.
        </p>
        <p className="font-semibold">
          Over the years, that vision has evolved into a dynamic group of
          companies that operate with integrity, create employment
          opportunities, and partner with both local and international
          stakeholders to bring long-term value to our society.
        </p>
        <p className="font-semibold">
          As we expand into new sectors and continue strengthening our current
          operations, we remain deeply rooted in our responsibility to uplift
          communities and create a better future for the next generation.
          Whether we are powering homes through solar energy, training skilled
          workers, developing infrastructure, or supplying essential goods and
          services, our focus remains on sustainable, ethical, and people-driven
          growth.
        </p>
        <p className="font-semibold">
          We are proud to grow with Myanmar – shaping industries, empowering
          lives, and helping build a nation that thrives. Thank you for being
          part of our journey.
        </p>
      </div>
    </div>
  );
};

export default Message;
