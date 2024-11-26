import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { services } from "../assets/Services";
import { FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const location = useLocation();
  console.log(services);
  
  const { text, subservices } = location.state;
  console.log("text",text);
  console.log("subservices",subservices);
  

  const navigate = useNavigate();

  const handleReadMore = (subservice) => {
    console.log("Navigating with subservice:", subservice);
    navigate(`/selectedservice`, { 
      state: subservice
    });
  };

  return (
    <div className="px-32 pt-10 pb-20  bg-gray-50 min-h-screen">
    
      <div className="mb-10  rounded-lg p-6">
        <div className="flex  space-x-6">
          {/* <img
            src={photo_url}
            alt={text}
            className="w-24 h-24 object-cover rounded-md shadow-md"
          /> */}
          <div className="flex justify-center">
            <h2 data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0" className="text-3xl font-bold  text-center text-gray-800">{text}</h2>
            {/* <p className="text-gray-600 mt-2">{description}</p>
            <div className="mt-4">
              <p className="text-lg text-gray-800 font-semibold">
                Price: <span className="text-indigo-600">{price}</span>
              </p>
              <p className="text-lg text-gray-800 font-semibold">
                Duration: <span className="text-indigo-600">{duration}</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>

   
      <div>
        {subservices && subservices.length > 0 ? (
          <div data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="700"
          data-aos-offset="0" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservices.map((subservice, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
               
                <div className="bg-gray-200 rounded-full flex justify-center items-center w-16 h-16 shadow-lg transition-transform transform hover:scale-110 mb-4">
                  <img
                    src={subservice.image_url}
                    alt={subservice.name}
                    className="w-12 h-12 object-contain rounded-full border-4 hover:border-white transition-all duration-300"
                  />
                </div>

                
                <h4 className="text-lg font-semibold text-gray-800">{subservice.name}</h4>
                <p className="text-gray-600 mt-2">{subservice.description}</p>
                <div className="flex justify-center items-center mt-5">
                  <button onClick={()=>handleReadMore(subservice)} className="bg-[#00b6dd] px-5 text-white py-2 rounded"><FaArrowRight /></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No subservices available for this service.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
