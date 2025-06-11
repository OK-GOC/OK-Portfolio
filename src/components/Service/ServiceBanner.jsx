import bg from "./../../assets/image/contact/contactBanner.png";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const ServiceBanner = ({ banner }) => {
  return (
    <div
      className="mx-auto min-h-[100vh] flex items-end"
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-20 px-5  lg:px-20">
        <p className="banner-text text-primary flex flex-wrap">
          <img src={banner.logo} alt="logo" className="" />
          <span className="font-semibold">{banner.name}</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceBanner;
