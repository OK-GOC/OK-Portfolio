import bg from "./../../assets/image/contact/contactBanner.png";

// import { GradualSpacing } from "../animaition/GradualSpacing";

const ContactBanner = () => {
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
        <p className="banner-text text-primary">
          <span className="font-semibold">Contact Us</span>
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
