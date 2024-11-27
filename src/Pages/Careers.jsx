import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import image from "../assets/job-hunt.gif";
import EmployeeTestimonials from "../Components/EmployeeTestimonials";

import "aos/dist/aos.css";
import Aos from "aos";
import Contact from "../Components/Contact";
import { IoIosArrowRoundForward } from "react-icons/io";

const Careers = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const jobListings = [
    {
      title: "Senior Tax Consultant",
      location: "Remote",
      description:
        "Looking for a skilled Senior Tax Consultant to join our team.",
      services: ["GST", "PAN", "TAN"],
    },
    {
      title: "Tax Audit Specialist",
      location: "Karandakkad, Kasaragod, Kerala",
      description:
        "We need a Tax Audit Specialist with experience in Tax Audit .",
      services: ["GST", "PAN", "TAN"],
    },
    {
      title: "Real Estate Tax Consultant",
      location: "Karandakkad, Kasaragod, Kerala",
      description:
        "We need a Real Estate Tax Consultant with experience in Tax Consultaion .",
      services: ["GST", "PAN", "TAN"],
    },
  ];

 

  return (
    <div>
      <div>
        <div className="mx-32 mt-20 ">
          <h1 data-aos="fade-down" className="text-4xl font-bold text-center">
            Careers
          </h1>
          <div className="flex items-center gap-5">
            <section className="">
              <h2
                data-aos="slide-right"
                className="text-2xl font-semibold text-center text-black mb-8"
              >
                Why Work With Us?
              </h2>
              <p
                data-aos="fade-up"
                className="text-lg text-center text-gray-600"
              >
                Join our team and make an impact. We offer a dynamic and
                inclusive work environment, excellent benefits, and plenty of
                growth opportunities.
              </p>
            </section>
            <div>
              <img
                data-aos="zoom-in-left"
                data-aos-delay="300"
                src={image}
                alt="Job Hunt"
              />
            </div>
          </div>
          <section className="w-full mb-20">
            <h2
              data-aos="zoom-in"
              className="text-2xl font-semibold text-center text-black mb-8"
            >
              Current Openings
            </h2>
            <div className="flex items-center justify-center gap-10">
              {jobListings.map((job, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={`${200 * (index + 1)}`}
                  className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
                >
                  <h3 className="text-xl mb-2 font-semibold text-[#5baff3]">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Location: {job.location}
                  </p>
                  <p className="text-md text-gray-600 mt-2">
                    {job.description}
                  </p>
                  <button className=" ">
                  <Link
                    to={`/job-details/${index}`}
                    className="mt-4 flex items-center   text-blue-500 hover:underline"
                  >
                     Apply
                    <IoIosArrowRoundForward />
                   
                  </Link>
                  </button>
                </div>
              ))}
            </div>
          </section>
          ;
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <EmployeeTestimonials />
        </div>
        <div className="mb-20">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Careers;
