import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const navigate = useNavigate()
  return (
    <div  className="text-center">
      <div className="min-h-screen justify-center items-center bg-hero bg-cover bg-no-repeat bg-fixed backdrop-blur-md">
        <div className="bg-black bg-opacity-50 w-screen h-screen "> {/* Optional dark overlay for better contrast */}
          <h1 className="text-3xl pt-52 text-white font-semibold">Maximize Your Returns with Professional Tax Services</h1>
          <p className="text-lg mt-5 text-white">Get the most out of your tax returns with expert advice and meticulous 
            planning. Our team helps<br /> you keep more of your hard-earned money.</p>
        <button onClick={()=>navigate('/consultantlist')} className="mt-10 bg-transparent text-white py-3 px-6  border hover:scale-110 focus:outline-none transition duration-300">Make Appointment</button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
 