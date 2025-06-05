import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "./../../assets/image/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="bg-white/30 backdrop-blur-md mx-auto flex items-center py-5 justify-between px-40">
        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="Logo" className="w-20 md:w-14" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-5 lg:space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-white hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-white hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            About OK Group Of Companies
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-white hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            Our Business
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[14px] lg:text-[18px] font-semibold text-gray-800 hover:translate-y-[-2px] transition-all duration-300"
                : "text-[14px] lg:text-[18px] font-semibold text-white hover:translate-y-[-2px] transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-sub focus:outline-none">
            {isOpen ? (
              <IoClose size={20} className="text-pridark" />
            ) : (
              <IoMenuSharp size={20} className="text-pridark" />
            )}{" "}
            {/* Hamburger or Close icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-10 absolute w-full z-10 bg-white">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:scale-102"
                  : "text-black text-lg font-semibold text-gray-800 hover:scale-102"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:scale-102"
                  : "text-black text-lg font-semibold text-gray-800 hover:scale-102"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:scale-102"
                  : "text-black text-lg font-semibold text-gray-800 hover:scale-102"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-lg font-semibold text-gray-800 hover:scale-102"
                  : "text-black text-lg font-semibold text-gray-800 hover:scale-102"
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
