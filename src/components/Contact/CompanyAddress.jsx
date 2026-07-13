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
          <a
            href="mailto:info@okgroupofcompanies.business"
            className="cursor-pointer hover:text-blue-200 transition-all duration-300"
          >
            <span className="flex items-center gap-2  lg:text-[20px] font-semibold">
              <CiMail size={24} />
              info@okgroupofcompanies.business
            </span>
          </a>
          <div className="border border-b-white my-5"></div>
          <a
            href="tel:+959888515511"
            className="cursor-pointer hover:text-blue-200 transition-all duration-300"
          >
            <span className="flex items-center gap-2 lg:text-[20px] font-semibold">
              <MdOutlinePhone size={24} />
              09888515511
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
              No.45 , Rose Garden , Shwe Pinlon Housing , Shukinthar Street, 27
              Quarter , North Dagon ,Ygn Tsp'
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAddress;
