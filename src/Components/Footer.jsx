import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className=" bg-[#dfdcd7] text-black py-10">
      <div
        className="flex flex-col lg:flex-row justify-evenly items-center px-8 lg:px-32"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-28">
          <div className="space-y-3 lg:space-y-4" data-aos="fade-right">
            <img
              src={assets.logo}
              alt="logo"
              className="w-40 mx-auto lg:mx-0"
            />
            <p className="text-center lg:text-left text-sm lg:text-base">
              An ISO 2001 - 2015 Certified Company
            </p>
            <p className="text-center lg:text-left text-sm lg:text-base">
              A Startup Recognized By Govt of India REG NO : DIPP32663
            </p>
            <p className="text-center lg:text-left text-sm lg:text-base">
              More Than 1000 Financial Planners, One Philosophy BRQ Investments.
            </p>
            <p className="text-center lg:text-left text-sm lg:text-base">
              Investing in BRQ is the Best Deposit
            </p>
            <p className="text-center lg:text-left text-lg font-semibold">
              Stay Connected
            </p>
            <div className="flex gap-3 justify-center lg:justify-start text-white mt-2">
              <p className="bg-slate-600 hover:bg-slate-500 px-3 py-3 rounded-full transition duration-300">
                <FaInstagram />
              </p>
              <p className="bg-slate-600 hover:bg-slate-500 px-3 py-3 rounded-full transition duration-300">
                <FaFacebookF />
              </p>
              <p className="bg-slate-600 hover:bg-slate-500 px-3 py-3 rounded-full transition duration-300">
                <FaTwitter />
              </p>
              <p className="bg-slate-600 hover:bg-slate-500 px-3 py-3 rounded-full transition duration-300">
                <FaLinkedin />
              </p>
            </div>
          </div>
          <div>
          <h1 className="text-center lg:text-left font-bold text-xl">
              LINKS
            </h1>
            <div  className="">
            <ul
              className="flex flex-col gap-2 text-lg font-semibold text-center lg:text-left"
              data-aos="fade-up"
            >
              <li className="hover:text-gray-800 transition duration-300 cursor-pointer">
                Service
              </li>
              <li className="hover:text-gray-800 transition duration-300 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-gray-800 transition duration-300 cursor-pointer">
                News
              </li>
              <li className="hover:text-gray-800 transition duration-300 cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-gray-800 transition duration-300 cursor-pointer">
                Global Office
              </li>
            </ul>
            </div>
          </div>

          <div className="space-y-4 ml-5" data-aos="fade-left">
            <h1 className="text-center lg:text-left font-bold text-xl">
              OUR MAIN OFFICE
            </h1>
            <div className="flex items-center gap-4">
              <FaHouse className="text-2xl" />
              <p className="text-sm lg:text-base">
                BRQ Associates, Second City Complex NH Road, Karandakkad,
                Kasaragod, Kerala, INDIA
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl" />
              <p className="text-sm lg:text-base">9987457546</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl" />
              <p className="text-sm lg:text-base">9987457546</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMailBulk className="text-2xl" />
              <p className="text-sm lg:text-base">
                info@taxtower.com, sales@taxtower.com legal@brqsales.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center mt-10 text-sm "
        // data-aos="zoom-in"
      >
        <p className="mb-1">Copyright © BRQ GlobTech PVT Ltd 2021</p>
        <p>Designed & Developed by BRQ GlobTech Pvt Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
