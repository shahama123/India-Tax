import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../assets/Confirmed.gif";
import "aos/dist/aos.css";
import Aos from "aos";

const BookingConfirmation = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const location = useLocation();
  const navigate = useNavigate();

  const { firstname, lastname, service, date } = location.state || {};

  return (
    <div className="min-h-screen flex items-center  justify-center py-20  ">
      <div className="bg-white px-10 max-w-3xl w-full">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="flex justify-center items-center"
        >
          <img
            className="flex justify-center items-center w-60"
            src={image}
            alt=""
          />
        </div>
        <h3
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="text-3xl font-bold text-center mt-5 text-[#008080] mb-6"
        >
          Booking Confirmed!
        </h3>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
          className="text-lg text-gray-600 text-center mb-6"
        >
          Your appointment with{" "}
          <span className="font-semibold text-blue-500">
            {firstname} {lastname}
          </span>{" "}
          has been successfully scheduled.
        </p>
        <div className="space-y-4 text-center">
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
            className="text-md font-medium text-gray-700"
          >
            <strong>Service:</strong> {service}
          </p>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
            className="text-md font-medium text-gray-700"
          >
            <strong>Date:</strong> {date}
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            data-aos-offset="0"
            onClick={() => navigate("/")}
            className="bg-[#7fb2dc] px-6 py-3 text-white font-semibold rounded-lg shadow-lghover:border-[#3bccec] hover:bg-[#3bccec] focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
