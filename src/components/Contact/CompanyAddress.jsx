import { PiBuildingApartmentFill } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

function CompanyAddress() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#2D2AA1] h-[500px] flex items-center justify-center">
        <div className="text-white px-5 lg:px-0">
          <h1 className="header-text mb-5">
            <span className="text-white">Contact Us</span>
          </h1>
          <a href="mailto:okgroupofcompanies.org@gmail.com">
            <span className="flex items-center gap-2  lg:text-[20px] font-semibold">
              <CiMail size={24} />
              okgroupofcompanies.org@gmail.com
            </span>
          </a>
          <div className="border border-b-white my-5"></div>
          <a href="tel:+9595064567">
            <span className="flex items-center gap-2 lg:text-[20px] font-semibold">
              <MdOutlinePhone size={24} />
              095064567
            </span>
          </a>
        </div>
      </div>
      <div className="bg-[#FBD95A] h-[500px] flex items-center justify-center">
        <div className="max-w-lg mb-10 px-5 lg:px-0">
          <h1 className="header-text mb-5">
            <span className="">Head Office</span>
          </h1>
          <div>
            <span className="flex items-center gap-4 lg:text-[20px] font-semibold text-primary">
              <PiBuildingApartmentFill size={35} />
              NoB(3/5),Malikha Housing , Yadanar Main Road, Thingangyun
              Tsp,Yangon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAddress;
