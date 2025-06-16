import logo from "./../../assets/image/logo.svg";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenuSharp, IoClose, IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownItems = [
    { label: "Gold Mine Trading", path: "/service/0" },
    {
      label: "GOLD MINE TRADING STEEL FACTORY PRODUCTION AND MANUFACTURING",
      path: "/service/1",
    },
    { label: "GOLD MINE TRAINING CENTER ", path: "/service/2" },
    { label: "GOLD MINE INTERNATIONAL", path: "/service/3" },
    { label: "OK TRAVELS & TOURS", path: "/service/4" },
    { label: "RUBER SINER Global", path: "/service/5" },
    { label: "AVENUE MYANMAR HOLDING", path: "/service/6" },
    { label: "168 SUCCESS REAL ESTATE", path: "/service/7" },
    { label: "ATLAS BUILDERS BUILDING & DECORATION", path: "/service/8" },
    { label: "LIQUOR PRO", path: "/service/9" },
  ];

  const isServiceActive = dropdownItems.some(
    (item) => location.pathname === item.path
  );

  return (
    <nav className="">
      <div className="bg-white/30 backdrop-blur-md mx-auto flex items-center py-2 md:py-5 justify-between px-5 lg:px-20">
        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="Logo" className="w-20 md:w-14" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-10 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-primary opacity-50 hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-primary opacity-50 hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            About OK Group Of Companies
          </NavLink>

          {/* Desktop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1 text-[14px] lg:text-[18px] font-semibold transition-all duration-300 hover:translate-y-[-2px] ${
                isServiceActive
                  ? "text-primary text-gray-800"
                  : "text-primary opacity-50"
              }`}
            >
              Services
              <IoChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                size={16}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 ${
                      location.pathname === item.path
                        ? "text-primary bg-gray-50 hover:translate-y-[-2px] transition-all duration-300"
                        : "text-gray-700 hover:translate-y-[-2px] transition-all duration-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-primary opacity-50 hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-sub focus:outline-none">
            {isOpen ? (
              <IoClose size={20} className="text-primary" />
            ) : (
              <IoMenuSharp size={20} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-10 absolute w-full z-10 bg-white shadow-lg">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold hover:scale-102 transition-transform duration-200"
                  : "text-black text-lg font-semibold hover:scale-102 transition-transform duration-200"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold hover:scale-102 transition-transform duration-200"
                  : "text-black text-lg font-semibold hover:scale-102 transition-transform duration-200"
              }
            >
              About Us
            </NavLink>

            {/* Mobile Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={toggleMobileDropdown}
                className={`flex items-center justify-between text-lg font-semibold hover:scale-102 transition-transform duration-200 py-2 ${
                  isServiceActive ? "text-primary" : "text-black"
                }`}
              >
                Services
                <IoChevronDown
                  className={`transition-transform duration-200 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button>

              {isMobileDropdownOpen && (
                <div className="ml-4 mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
                  {dropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={toggleMenu}
                      className={`block text-base font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold hover:scale-102 transition-transform duration-200"
                  : "text-black text-lg font-semibold hover:scale-102 transition-transform duration-200"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
