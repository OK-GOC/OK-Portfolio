import logo from "./../assets/image/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaViber } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // console.log(location.pathname);
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
            NoB(3/5),Malikha Housing, Yadanar Main Road, Thingangyun Tsp,Yangon
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row mt-10 md:mt-0">
          <div className="flex flex-col w-full md:items-end">
            <div>
              <h2 className="text-[18px] font-semibold text-primary">
                Useful Links
              </h2>
              <ul className="mt-2 space-y-5 mt-5">
                {location.pathname !== "/" && (
                  <li className="hover:scale-105 transition-all duration-300">
                    <Link
                      to="/"
                      className="text-[16px] font-medium text-primary"
                    >
                      Home
                    </Link>
                  </li>
                )}
                {location.pathname !== "/about" && (
                  <li className="hover:scale-105 transition-all duration-300">
                    <Link
                      to="/about"
                      className="text-[16px] font-medium text-primary"
                    >
                      About OK Group Of Companies
                    </Link>
                  </li>
                )}
                {/* {location.pathname !== "/service" && (
                  <li className="hover:scale-105 transition-all duration-300">
                    <Link
                      to="/service"
                      className="text-[16px] font-medium text-primary"
                    >
                      Our Companies
                    </Link>
                  </li>
                )} */}
                {location.pathname !== "/contact" && (
                  <li className="hover:scale-105 transition-all duration-300">
                    <Link
                      to="/contact"
                      className="text-[16px] font-medium text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                )}

                {/* <li className="hover:scale-105 transition-all duration-300">
                  <Link
                    to="/service"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className="text-[16px] font-medium text-primary hover:translate-x-2 transition-all duration-300"
                  >
                    Our Companies
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 items-start md:items-center mt-10 md:mt-0">
            <div>
              <h2 className="text-[18px] text-primary font-semibold">
                Visit Us On
              </h2>
              <div className="flex flex-row md:flex-col gap-10 md:gap-0">
                <p
                  className="mt-5 font-medium text-primary hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/share/16eEWiY3M4/?mibextid=wwXIfr",
                      "_blank"
                    )
                  }
                >
                  <p className="flex items-center gap-5">
                    <FaFacebook />{" "}
                    <span className="text-text-[14px]">Facebook</span>
                  </p>
                </p>
                <p className="mt-5 font-medium text-primary text-[14px] hover:scale-105 transition-all duration-300 cursor-pointer">
                  <a href="tel:+9595064567" className="flex items-center gap-5">
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
