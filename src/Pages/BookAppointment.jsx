import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import image from "../assets/Hotel Booking.gif";
import "aos/dist/aos.css";
import Aos from "aos";
import BackButton from "../Components/BackButton";

const BookAppointment = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const location = useLocation();
  const navigate = useNavigate();

  const { firstname, lastname, services } = location.state || {};

  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    phonenumber: "",
    service: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { yourName, email, phonenumber, service, date } = formData;

    if (!yourName || !email || !phonenumber || !service || !date) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");

    Swal.fire({
      title: "Appointment Confirmed!",
      text: `Your appointment with ${firstname} ${lastname} for ${service} on ${date} has been booked successfully.`,
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/confirmation-page", {
        state: {
          firstname,
          lastname,
          service,
          date,
          yourName,
          email,
          phonenumber,
        },
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-20">
      <div className="bg-white  px-10 max-w-4xl w-full">
        <h3
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="text-3xl font-bold text-center text-black mb-6"
        >
          Book an Appointment
        </h3>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="text-lg text-gray-600 text-center mb-10"
        >
          Schedule your appointment with{" "}
          <span className="font-semibold text-blue-500">
            {firstname} {lastname}
          </span>
        </p>

        {error && (
          <div className="text-red-500 text-center mb-4">
            <p>{error}</p>
          </div>
        )}

        <div className="flex justify-center items-center gap-20">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-offset="0"
          >
            <img src={image} alt="" />
          </div>
          <div>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="500"
                      data-aos-offset="0"
                      htmlFor="consultant-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Consultant Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="500"
                      data-aos-offset="0"
                      type="text"
                      id="consultant-name"
                      value={`${firstname} ${lastname}`}
                      readOnly
                      className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="600"
                      data-aos-offset="0"
                      htmlFor="your-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="600"
                      data-aos-offset="0"
                      type="text"
                      id="your-name"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="700"
                      data-aos-offset="0"
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="700"
                      data-aos-offset="0"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="800"
                      data-aos-offset="0"
                      htmlFor="phonenumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="800"
                      data-aos-offset="0"
                      type="text"
                      id="phonenumber"
                      name="phonenumber"
                      value={formData.phonenumber}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="900"
                      data-aos-offset="0"
                      htmlFor="services"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Choose Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="900"
                      data-aos-offset="0"
                      id="services"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1  p-3 border rounded-lg w-[30rem] shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {services && services.length > 0 ? (
                        services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>
                          No services available
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="1000"
                      data-aos-offset="0"
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="1000"
                      data-aos-offset="0"
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-5 pt-7 justify-center">
                  <BackButton/>
                  <button
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    data-aos-offset="0"
                    type="submit"
                    className="py-4 bg-[#7fb2dc]  text-white  hover:bg-white border hover:border-[#7fb2dc]  hover:text-[#7fb2dc] transition duration-300  px-9  font-semibold rounded-lg shadow-lg  focus:ring-2 focus:ring-blue-400 focus:outline-none  transform "
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
