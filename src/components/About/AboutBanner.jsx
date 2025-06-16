import bg from "./../../assets/image/about/aboutbanner.jpg";
import logo from "./../../assets/image/logo.svg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const AboutBanner = () => {
  return (
    <div
      className="px-5 mx-auto h-[50vh] md:h-[70vh] flex items-end"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-10 px-5 lg:px-10">
        <p className="banner-text text-primary flex flex-wrap md:gap-4 items-center">
          <img src={logo} alt="logo" className="w-24 h-24" />
          <span className="font-semibold">OK Group Of Companies</span>
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
