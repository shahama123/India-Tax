import React, { useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import "aos/dist/aos.css";
import Aos from "aos";

const BackButton = ({ label = 'Back', className = ' px-8 py-3 rounded border border-[#7fb2dc] text-[#7fb2dc] bg-white' }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <button
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="400"
    data-aos-offset="0"
      onClick={handleBack}
      className={`back-button flex items-center gap-2 ${className}`}
    >
      <FaArrowLeftLong />
      {label}
    </button>
  );
};

export default BackButton;
