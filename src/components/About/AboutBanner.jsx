import bg from "./../../assets/image/about/aboutbanner.jpg";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const AboutBanner = () => {
  return (
    <div
      className="px-5 mx-auto min-h-[100vh] flex items-end"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-20 px-10">
        <p className="banner-text text-primary">
          <span className="font-semibold">OK Group Of Companies</span>
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
