import logo from "./../assets/image/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaViber } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="sections bg-white">
      <div className="mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className=" " />
            <p className="uppercase text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-primary">
              Ok Group of Companies
            </p>
          </div>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-primary mt-5">
            NoB(3/5),Malikha Housing , Yadanar Main Road, Thingangyun Tsp,Yangon
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row mt-10 md:mt-0">
          <div className="flex flex-col w-full justify-end md:items-end">
            <div>
              <h2 className="text-[18px] font-semibold text-primary">
                Useful Links
              </h2>
              <ul className="mt-2 space-y-5 mt-5">
                <li className="">
                  <Link
                    to="/about"
                    className="text-[16px] font-medium text-primary hover:translate-x-2 transition-all duration-300"
                  >
                    About OK Group Of Companies
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/service"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="text-[16px] font-medium text-primary hover:translate-x-2 transition-all duration-300"
                  >
                    Our Companies
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/service"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="text-[16px] font-medium text-primary hover:translate-x-2 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 items-start md:items-center mt-10 md:mt-0">
            <div>
              <h2 className="text-[18px] text-primary font-semibold">
                Visit Us On
              </h2>
              <div className="flex flex-row md:flex-col gap-10">
                <p className="mt-5 font-medium text-primary text-[12px]">
                  <p className="flex items-center gap-5">
                    <FaFacebook /> <span>Facebook</span>
                  </p>
                </p>
                <p className="mt-5 font-medium text-primary text-[12px]">
                  <a
                    href="mailto:carenekontact@mail.com"
                    className="hover:text-green-300 flex items-center gap-5"
                  >
                    <FaViber />
                    Viber
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[100px]">
          <p className="text-sm text-gray-600">
            © 2025 OK Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
