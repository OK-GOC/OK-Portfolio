import contactbg from "../../assets/image/contact/contactbg.jpg";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

function ContactSection() {
  return (
    <div
      className="sections h-[80vh] relative"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white absolute top-[55%] left-[50%] transform -translate-y-1/2">
        <h1 className="header-text mb-5">
          <span className="text-white">Contact Us</span>
        </h1>
        <a href="mailto:okgroupofcompanies.org@gmail.com">
          <span className="flex items-center gap-2 text-[20px] font-semibold">
            <CiMail size={24} />
            okgroupofcompanies.org@gmail.com
          </span>
        </a>
        <div className="border border-b-white my-5"></div>
        <a href="tel:+9595064567">
          <span className="flex items-center gap-2 text-[20px] font-semibold">
            <MdOutlinePhone size={24} />
            095064567
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
