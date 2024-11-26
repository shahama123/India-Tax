import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import image from "../assets/company.gif";
import image2 from "../assets/Contactus.gif";
import "aos/dist/aos.css";
import Aos from "aos";
import Team from "../Components/Team";
import { NavLink } from "react-router-dom";
import Contact from "../Components/Contact";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="mx-32 my-20">
      <div data-aos="zoom-in" className=" mb-10">
        <h1 className="text-4xl text-center font-bold  ">
          Who We Are?
        </h1>
      </div>
      <div className="space-y-4">
        <div data-aos="zoom-in" data-aos-delay="1000" className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            We,{" "}
            <span className="font-semibold">BRQ GLOB TECH PRIVATE LIMITED</span>
            , are a fast-growing startup company incorporated in February 2019
            under the Companies Act 2013. BRQ GLOB TECH PRIVATE LIMITED is a
            parent company that manages subsidiary companies with the following
            objectives: development of software, business/tax consultancy,
            tourism development, fertilizer manufacturing and marketing, etc.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1200" className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            In the field of software, we specifically focus on developing
            powerful, cutting-edge applications in emerging fields such as
            mobile and web-based custom business applications, e-commerce,
            e-payment, e-security, e-health, enterprise resource planning,
            entertainment, and the gaming industry.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1400" className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            In the field of tourism, we focus on resorts, ayurveda resorts,
            villas, gaming centers, amusement parks, snow parks, and party
            halls. We aim to offer unforgettable experiences in these sectors.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1600" className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            With over 30 years of experience, BRQ Associates is a distinguished
            team of professionals, including Chartered Accountants (CAs),
            Company Secretaries (CSs), tax consultants, advocates, engineers,
            and more. We provide complete compliance, accounting, taxation, and
            financial services under one roof, ensuring peace of mind while
            managing your financial needs.
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="1800" className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Our fully integrated factories are designed to produce compound
            fertilizers. The production process varies depending on the
            composition of the end product, ensuring high-quality manufacturing
            standards.
          </p>
        </div>
      </div>

      <div className="flex my-20 gap-20">
        <div data-aos="zoom-in-right" className="flex items-center">
          <img src={image} alt="" />
        </div>
        <div>
          <div data-aos="zoom-in-left" className="mt-10 px-6">
            <div className="space-y-2 text-start bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h1 className="text-2xl font-bold text-blue-500 mb-4">
                Our Values
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive to be true with our engagement and the expectations we
                set forth.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We always aim to give the best possible service that we can
                provide to our valuable clients.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are open and able to keep up with our ever-changing
                environment.
              </p>
            </div>

            <div className="space-y-2 text-start bg-green-50 p-6 mt-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h1 className="text-2xl font-bold text-[#008080] mb-4">
                Our Services
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bookkeeping and Accounting Services
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tax Computation and Preparation of Returns
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Business Registration Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="200" className="my-20">
        <h1 className="text-4xl text-center font-bold mb-20 ">
          Why Choose Us?
        </h1>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-16 px-6">
          <div className="relative text-gray-700 border rounded-lg shadow-md px-8 py-12 bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={assets.time}
              className="w-28 h-20 absolute -top-14 left-1/2 transform -translate-x-1/2"
              alt="Save Time Icon"
            />
            <div className="pt-2 text-center text-sm">
              <b className="block text-lg font-semibold text-gray-800">
                Save Time
              </b>
              <p className="pt-2 text-gray-600">
                By getting our bookkeeping, accounting, and tax preparation
                services, you will have more time to focus on your business and
                improve your bottom line. No more sorting receipts, recording,
                or waiting in long lines for tax returns.
              </p>
            </div>
          </div>

          <div className="relative text-gray-700 border rounded-lg shadow-md px-8 py-12 bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={assets.awarness}
              className="w-28 h-20 absolute -top-16 left-1/2 transform -translate-x-1/2"
              alt="Awareness Icon"
            />
            <div className="pt-2 text-center text-sm">
              <b className="block text-lg font-semibold text-gray-800">
                Awareness
              </b>
              <p className="pt-2 text-gray-600">
                Gain a complete record of your business transactions to stay
                fully aware of your financial performance. This helps CEOs and
                business owners make informed decisions.
              </p>
            </div>
          </div>

          <div className="relative text-gray-700 border rounded-lg shadow-md px-8 py-12 bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={assets.cost}
              className="w-28 h-20 absolute -top-12 left-1/2 transform -translate-x-1/2"
              alt="Save Cost Icon"
            />
            <div className="pt-2 text-center text-sm">
              <b className="block text-lg font-semibold text-gray-800">
                Save Cost
              </b>
              <p className="pt-2 text-gray-600">
                Get the same output without hiring full-time accountants,
                training them, or purchasing expensive accounting software. Our
                professional accountants will handle your business needs with
                years of expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Contact/>
      </div>
      
    </div>
  );
};

export default AboutUs;
