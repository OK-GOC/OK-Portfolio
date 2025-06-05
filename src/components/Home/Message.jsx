import ceo from "../../assets/image/home/ceo.jpg";

const Message = () => {
  return (
    <div className="sections">
      <div className="flex items-center gap-20">
        <img src={ceo} alt="ceo" />
        <div className="max-w-2xl">
          <p className="text-[32px] font-semibold">Our CEO’s Message</p>
          <p className="text-[36px] font-semibold text-primary">
            As we move forward, our vision is clear: to grow with Myanmar, build
            for Myanmar, and shape a brighter future - together!
          </p>
          <p className="text-[24px] font-medium mt-2">
            Sincerely, Mr.Oake Khaung Chairperson
          </p>
          <button className="bg-primary text-white button mt-5">
            Learn About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
