import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoSearchSharp } from "react-icons/io5";
import { services } from "../assets/Services";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { LuLogIn } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesClick = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <div>
    <div className="flex items-center justify-between px-10 py-2 fixed top-0 z-50 w-full bg-[#416068] text-white">
      <div className="bg-[#f1f0e8]  px-3 pr-4">
        <img className="w-32 pb-2" src={assets.logo} alt="logo-image" />
      </div>

      <div>
        <ul className="flex gap-5 relative">
          <NavLink to={"/"}>
            <li className="hover:text-[#f8f0c3] cursor-pointer text-lg">Home</li>
          </NavLink>

          <li
            className="relative group pb-2"
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)} 
            onClick={handleServicesClick} 
          >
            <span className="hover:text-[#f8f0c3] cursor-pointer text-lg">
              Services
            </span>

            <ul
              className={`grid grid-cols-2 bg-white top-6 text-black absolute left-0 my-3 px-3 w-[30rem] shadow-lg rounded-lg ${
                isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-200 z-10 pointer-events-none ${isServicesOpen ? "pointer-events-auto" : ""}`}
            >
              {services.map((service) => (
                <div key={service.id}>
                   <NavLink to={`/services/${service.id}`} state={{ text: service.service_name, subservices: service.subservices }}>
                  <h2 className="text-sm hover:bg-blue-300 p-2">{service.service_name}</h2>
                  </NavLink>
                </div>
              ))}
            </ul>
          </li>

          <NavLink to={"/consultant"}></NavLink>
          <NavLink to={"/aboutus"}>
            <li className="hover:text-[#f8f0c3] cursor-pointer text-lg">About Us</li>
          </NavLink>
          <NavLink to={"/contactus"}>
            <li className="hover:text-[#f8f0c3] cursor-pointer text-lg">Contact Us</li>
          </NavLink>
          <NavLink to={"/careers"}>
            <li className="hover:text-[#f8f0c3] cursor-pointer text-lg">Career</li>
          </NavLink>
        </ul>
      </div>

      <div>
        <NavLink to={"/consultantlist"}>
          <button className="hover:text-[#f8f0c3] bg-[#f1f0e8] text-gray-800 p-3 rounded-md flex items-center gap-2 cursor-pointer text-lg">
            <SlCalender />
            Book An Appointment
          </button>
        </NavLink>
      </div>

      <div className="flex gap-5 items-center">
        
        <NavLink to={"/login"}>
          <div className="flex items-center pb-2 gap-1">
            <LuLogIn />
            <button className="hover:text-[#f8f0c3]  cursor-pointer text-lg">Log In</button>
          </div>
        </NavLink>
        <NavLink to={"/register"}>
          <div className="flex items-center pb-2 gap-1">
            <RiContactsLine />
            <button className="hover:text-[#f8f0c3] cursor-pointer text-lg">Register</button>
          </div>
        </NavLink>
      </div>
    </div>
    <div className="h-[5rem]"></div>
    </div>
  );
};

export default NavBar;
