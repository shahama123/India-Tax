import React, { useEffect, useState } from "react";
import Title from "../Components/Title";
import Card from "../Components/Card";
import { services } from "../assets/Services";
import "aos/dist/aos.css";
import Aos from "aos";
import BackButton from "../Components/BackButton";

const AllServices = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const filteredServices = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mx-32 my-20">
      <div>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="text-center font-semibold text-4xl mb-10"
        >
          Our Services
        </h1>
      </div>

      <div className="my-12 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Services"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-lg px-4 py-2 w-full sm:w-1/2 shadow-sm"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
        />
      </div>

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="700"
        data-aos-offset="0"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-1"
      >
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            photo_url={service.photo_url}
            text={service.service_name}
            description={service.description}
            subservices={service.subservices}
          />
        ))}
      </div>
      <div className="flex justify-start  mt-10">
        <BackButton/>
      </div>
    </div>
  );
};

export default AllServices;
