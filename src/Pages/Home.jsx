import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Title from "../Components/Title";
import { services } from "../assets/Services";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import ClientTestimonials from "../Components/ClientTestimonials";
import { MdSupportAgent } from "react-icons/md";
import Countup from "../Components/CountUp";
import "aos/dist/aos.css";
import AOS from "aos";
import NewsletterSignup from "../Components/NewsletterSignup";
import Team from "../Components/Team";
import Faqs from "../Components/Faqs";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const navigation = useNavigate();

  return (
    <div>
      <Hero />
      <div className="py-10">
        <div className="mx-32">
          <div data-aos="zoom-in">
            <h1 className="text-3xl my-16">
              <Title
                text1={"Our"}
                text2={"Services"}
                description={
                  "We provide GST filing software for accurate GST filing, reconciliation, and claiming ITC."
                }
              />
            </h1>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="400"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-1"
          >
            {services.slice(0, 6).map((service) => (
              <Card
                key={service.id}
                photo_url={service.photo_url}
                text={service.service_name}
                description={service.description}
                subservices={service.subservices}
              />
            ))}
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            className="flex justify-center pt-10 pb-10"
          >
            <button
              onClick={() => navigation("/allservices")}
              className="mt-4 hover:bg-[#a18263] text-[#9c6254] py-3 px-6 bg-white border border-[#9c6254] hover:text-white focus:outline-none transition duration-300"
            >
              Explore More Services
            </button>
          </div>
        </div>

        <div data-aos="zoom-in">
          <Countup />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <ClientTestimonials />
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="flex justify-center py-20 items-center"
        >
          <div className="space-y-2">
            <div className="flex justify-center">
              <MdSupportAgent className="text-5xl text-center text-[#008080]" />
            </div>

            <h1 className="text-center text-3xl text-[#008080]">Need Help?</h1>

            <p className="text-gray-600 text-center">
              Contact our customer support team if you have any further
              questions.
            </p>
            <p className="text-gray-600 text-center">
              We are here to help you out.
            </p>

            <div className="flex justify-center items-center py-5 gap-5">
              <p className="text-gray-700 text-2xl text-center">
                1-800-300-2121
              </p>
              <p className="text-gray-700 text-2xl text-center">|</p>
              <p className="text-gray-700 text-2xl text-center">
                Support@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="mx-32 mb-20">
          <Team />
        </div>
        <div>
          <Faqs/>
        </div>
        <div>
          <NewsletterSignup />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
