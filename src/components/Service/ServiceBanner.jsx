// import { GradualSpacing } from "../animaition/GradualSpacing";

const ServiceBanner = ({ banner }) => {
  return (
    <div
      className="mx-auto h-[50vh] md:min-h-[100vh] flex items-end"
      style={{
        backgroundImage: `url(${banner.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" px-5 lg:px-20">
        <p className="banner-text text-primary flex flex-wrap items-center">
          <img
            src={banner.logo}
            alt="logo"
            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
          />
          <span className="font-semibold">{banner.name}</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceBanner;
