import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ id, text, description, photo_url, subservices }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/services/${id}`, { state: { id, text, description, photo_url, subservices } });
  };

  return (
    <div className="flex gap-5 border items-center rounded bg-[#f0e8e6]  shadow-lg  px-3 py-3  transition duration-300 ease-in-out transform hover:scale-105">
      <div className="w-1/3">
        <div className="border  flex items-center justify-center">
          <img
            src={photo_url}
            alt={text}
            className="object-cover rounded mb-3 w-full h-20 "
          />
        </div>
      </div>
      <div className="w-2/3">
        <h1 className="font-bold text-xl">{text}</h1>
        <p className="text-gray-700 text-sm mt-3">
          {description.length > 75 ? `${description.slice(0, 75)}...` : description}
        </p>
        {/* <p>{subservices}</p> */}
        <button
          onClick={handleReadMore}
          className="mt-4 bg-[#82c1cf] text-white py-2 px-6  rounded hover:bg-[#69adbd] focus:outline-none transition duration-300"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
