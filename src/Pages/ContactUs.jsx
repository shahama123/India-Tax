import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import image from "../assets/Contact us.gif";
import { IoLocation } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import "aos/dist/aos.css";
import Aos from "aos";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import NewsletterSignup from "../Components/NewsletterSignup";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We will get back to you shortly.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="mx-4 md:mx-32">
        <div data-aos="zoom-in" className="mt-20">
          <h1 className="text-center font-semibold text-4xl">Contact Us</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mx-4 md:mx-32 pb-20 pt-10">
          <form
            className="flex flex-col space-y-6 md:space-y-9"
            onSubmit={handleSubmit}
          >
            <input
              data-aos="fade-down"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full md:w-96 focus:border-gray-600"
              placeholder="Your Name"
              required
            />
            <input
              data-aos="fade-down"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full focus:border-gray-600"
              placeholder="Email"
              required
            />
            <input
              data-aos="fade-down"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full focus:border-gray-600"
              placeholder="Subject"
              required
            />
            <textarea
              data-aos="fade-down"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-400 px-3 py-2 w-full focus:border-gray-600"
              placeholder="Write Your Message"
              required
            />
            <button
              type="submit"
              className="bg-[#7fb2dc] px-5 py-3 rounded hover:bg-white border hover:border-[#7fb2dc] hover:text-[#7fb2dc] text-white text-xl"
            >
              Send Message
            </button>
          </form>
          <img
            data-aos="zoom-out-left"
            src={image}
            className="w-full md:w-[35rem]"
            alt="Contact us"
          />
        </div>
      </div>
      <div className="bg-gray-200 pb-20 pt-16">
        <h1 data-aos="zoom-out-down" className="text-center mb-16 text-3xl font-semibold">
          We'd Love to Hear From You!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16 px-6 lg:px-64">
          {[
            {
              icon: <IoLocation aria-label="Location" />,
              title: "OUR MAIN OFFICE",
              content: (
                <>
                  <p>BRQ Associates, Second City Complex NH</p>
                  <p>Road, Karandakkad, Kasaragod, Kerala, INDIA</p>
                </>
              ),
            },
            {
              icon: <FaPhone/>,
              title: "PHONE NUMBER",
              content: <p>9987457546</p>,
            },
            {
              icon: <MdSupportAgent aria-label="Support Agent" />,
              title: "24/7 Customer Care Support",
              content: <p>+91 9987457546</p>,
            },
            {
              icon: <IoMdMail />,
              title: "EMAIL",
              content: (
                <>
                  <p>info@taxtower.com, sales@taxtower.com</p>
                  <p>legal@brqsales.com</p>
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-down"
              className="bg-white p-6 text-center rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-500 text-5xl flex justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              {item.content}
            </div>
          ))}
        </div>
      </div>
      <h2
        data-aos="fade-down"
        className="text-center mt-20 font-semibold text-2xl md:text-3xl"
      >
        Find Us Here!
      </h2>
      <div data-aos="fade-down" className="map-section pb-20 pt-10 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.1310874831142!2d74.9862676148172!3d12.507469191161523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba483b89a1bf4f5%3A0xa63dbc7dc3b6c2b9!2sBRQ%20GLOB%20TECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1629359569993!5m2!1sen!2sin"
          width="75%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          aria-label="Google Map"
          title="Google Map"
        ></iframe>
      </div>
      <div>
        <NewsletterSignup/>
      </div>
    </>
  );
};

export default ContactUs;
