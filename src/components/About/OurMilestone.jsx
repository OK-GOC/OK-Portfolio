import milestone1 from "../../assets/image/about/milestone1.svg";
import milestone2 from "../../assets/image/about/milestone2.svg";

const OurMilestone = () => {
  return (
    <div className="sections bg-[#F8F8F8] ">
      <h1 className="header-text">Our Milestone</h1>
      <div className="">
        <img src={milestone1} alt="" className="w-full" />
        <img src={milestone2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default OurMilestone;
