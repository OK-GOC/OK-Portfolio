import logo from "./../../assets/image/logo.svg";
import bg from "./../../assets/image/service/one/bannerOne.png";

// import { GradualSpacing } from "../animaition/GradualSpacing";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 mx-auto h-[50vh] lg:h-[70vh] flex flex-col justify-center md:justify-start items-end md:flex-row pt-20 md:pt-0 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:w-[60%] flex items-center order-2 md:order-1">
        <div className="mb-10 lg:ps-20">
          <p className="banner-text text-primary max-w-lg">
            To grow with Myanmar, build for Myanmar, and shape a brighter future
          </p>

          <button
            className="bg-primary text-white mt-2 button"
            onClick={() => navigate("/contact")}
          >
            Let’s shape Together
          </button>
        </div>
      </div>
      {/* <div className="w-full md:w-[40%] order-1 md:order-2 relative">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[70%] md:w-full h-[50vh] md:h-[50vh]"
          />
        </div>
      </div> */}
    </div>
  );
};

export default HeroBanner;
