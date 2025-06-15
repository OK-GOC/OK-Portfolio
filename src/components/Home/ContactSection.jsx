import contactbg from "../../assets/image/contact/contactbg.jpg";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

function ContactSection() {
  return (
    <div
      className="sections h-[50vh] md:h-[80vh] relative"
      style={{
        backgroundImage: `url(${contactbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white absolute top-[55%]  left-[5%] lg:left-[50%] transform -translate-y-1/2">
        <h1 className="header-text mb-5">
          <span className="text-white">Contact Us</span>
        </h1>
        <a
          href="mailto:okgroupofcompanies.mm@gmail.com"
          className="cursor-pointer hover:text-blue-200 transition-all duration-300"
        >
          <span className="flex items-center gap-2 text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            <CiMail size={24} />
            okgroupofcompanies.mm@gmail.com
          </span>
        </a>
        <div className="border border-b-white my-5"></div>
        <a
          href="tel:+9595064567"
          className="cursor-pointer hover:text-blue-200 transition-all duration-300"
        >
          <span className="flex items-center gap-2 text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
            <MdOutlinePhone size={24} />
            095064567
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
