import logo from "./../../assets/image/logo.svg";

// import { GradualSpacing } from "../animaition/GradualSpacing";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 mx-auto min-h-[100vh] flex flex-col md:flex-row pt-20 md:pt-0 ">
      <div className="w-full md:w-[60%] flex items-end order-2 md:order-1">
        <div className="mb-20 lg:ps-20">
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
      <div className="w-full md:w-[40%] order-1 md:order-2 relative">
        <div className="filter flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[70%] md:w-full h-[50vh] md:h-[100vh]"
          />
        </div>
        {/* <div className="flex items-center justify-center md:hidden">
          <img
            src={logo}
            alt="logo"
            className="w-[70%] md:w-full h-[50vh] md:h-[100vh]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
