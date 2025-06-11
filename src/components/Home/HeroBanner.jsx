import logo from "./../../assets/image/logo.svg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const HeroBanner = () => {
  return (
    <div className="px-5 mx-auto min-h-[100vh] flex flex-col md:flex-row pt-20 md:pt-0 ">
      <div className="w-full md:w-1/2 flex items-end order-2 md:order-1">
        <div className="mb-20 md:px-20">
          <p className="banner-text text-primary">
            To grow with Myanmar, <br /> build for Myanmar, and <br /> shape a
            brighter future
          </p>

          <button className="bg-primary text-white mt-2 button">
            Let’s shape Together
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-end justify-center order-1 md:order-2">
        <img
          src={logo}
          alt="logo"
          className="w-[70%] md:w-full h-[50vh] md:h-[80vh]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
