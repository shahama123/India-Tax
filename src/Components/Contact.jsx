import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import image from "../assets/Contactus.gif";
import "aos/dist/aos.css";
import Aos from "aos";


const Contact = () => {
    useEffect(() => {
        Aos.init({
          duration: 800, 
          once: true, 
          easing: "ease-in-out", 
        });
      }, []);
  return (
    <div>
  <div data-aos="fade-up" className="bg-white text-center items-center justify-center gap-16 pt-20 space-y-2 flex ">
  <div className="w-full md:w-1/3">
    <img src={image} className="w-60 h-auto" alt="" />
  </div>
  <div className="">
    <p className="text-xl font-semibold ">
      FOR ANY QUERIES YOU CAN CONTACT US.
    </p>
    <p className="text-gray-600">
      We will ensure that you receive satisfactory response at the
      earliest.
    </p>
    <NavLink to={"/contactus"}>
      <div className="pt-5">
        <button className="bg-[#7fb2dc] text-white  hover:bg-white  hover:border-[#7fb2dc]  hover:text-[#7fb2dc]  duration-300 px-5 py-2  rounded border  transition-transform transform ">
          Contact Us
        </button>
      </div>
    </NavLink>
  </div>
</div></div>
  )
}

export default Contact