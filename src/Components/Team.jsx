import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/image3.jpg";
import image2 from "../assets/image7.jpg";
import image3 from "../assets/image6.jpg";
import image4 from "../assets/image10.jpg";

const Team = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <>
      <div className="pt-10 pb-10 px-5 relative">
        <div data-aos="fade-up">
          <h1 className="text-4xl text-center font-bold mb-20  hover:cursor-pointer z-10">
            Our Expert Teams
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 relative">
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              className="w-full h-72 object-cover transition-transform duration-300"
              src={image1}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-lg font-bold">Muhammed Mustafa C T</h2>
              <h2>Chairman</h2>
              <p className="mt-2 text-center">
                Muhammed Mustafa C T is the Founder and CEO of BRQ, which he
                started from his dorm room in 2007.
              </p>
            </div>
          </div>
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              className="w-full h-72 object-cover transition-transform duration-300"
              src={image2}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-lg font-bold">Purushothama K</h2>
              <h2>Finance Manager</h2>
              <p className="mt-2 text-center">
                Mr. Purushothama’s focus lies in the development and optimization of talent retention.
              </p>
            </div>
          </div>
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              className="w-full h-72 object-cover transition-transform duration-300"
              src={image3}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h2 className="text-lg font-bold">Adv. UM SURESH</h2>
              <h2>Legal Advisor to Investment Department</h2>
              <p className="mt-2 text-center">
                Advocate UM SURESH Legal Advisor, oversees Legal aspects of the Company.
              </p>
            </div>
          </div>
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              className="w-full h-72 object-cover transition-transform duration-300"
              src={image4}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg font-bold">Hashim</h2>
              <h2>Company Law Consultant</h2>
              <p className="mt-2 text-center">
                As General Counsel of BRQ, they all oversee global legal activities and policies across..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
