import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import BackButton from "../Components/BackButton";

const ViewFullProfile = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    firstname,
    lastname,
    photo_url,
    designation,
    introduction,
    qualification,
    mobile_number,
    email,
    services, 
  } = location.state;

  return (
    <div className="mx-32 my-20">
      <div className="flex justify-center gap-16">
        <div className="p-4">
          <h2  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0" className="text-5xl font-semibold mb-5">
            {firstname} {lastname}
          </h2>
          <p  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0" className="text-xl text-gray-500">{designation}</p>
          <p  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="800"
              data-aos-offset="0" className="text-base text-gray-700 mt-2 max-w-[28rem]">
            {introduction}
          </p>
          <div className="mt-4 space-y-3">
            <p
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="1200"
             data-aos-offset="0" className="text-xl font-medium text-gray-600">
              Qualification: {qualification}
            </p>
            <p  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="1600"
              data-aos-offset="0" className="text-xl text-gray-600">Mobile: {mobile_number}</p>
            <p  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2000"
              data-aos-offset="0" className="text-xl text-gray-600">
              Email:{" "}
              <a href={`mailto:${email}`} className="text-blue-500">
                {email}
              </a>
            </p>
          </div>
          <div className="mt-5">
            <h1  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2400"
              data-aos-offset="0"  className="text-2xl text-[#008080]">Let's Talk</h1>
            <div  data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2800"
              data-aos-offset="0" className="flex gap-3 mt-3">
                <FaWhatsapp className="text-2xl text-green-500"/>
                <PiPhoneCall className="text-2xl text-blue-500"/>
            </div>
          </div>
          <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="30000"
             data-aos-offset="0" className="mt-10 flex gap-5 justify-center">
            <BackButton/>
            <button
             
              onClick={() => {
                console.log("Navigating with state:", { firstname, lastname, services });
                navigate("/book-appointment", {
                  state: { firstname, lastname, services },
                });
              }}
              className="bg-[#7fb2dc] px-8 py-3 rounded border hover:border-[#7fb2dc] hover:text-[#7fb2dc] hover:bg-white"
            >
              Book An Appointment
            </button>
          </div>
        </div>
        <div className="mt-20">
          <img
           data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="600"
           data-aos-duration="10000"
           data-aos-offset="0"
            src={photo_url}
            alt=""
            className="w-full h-[20rem] border border-black rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewFullProfile;
