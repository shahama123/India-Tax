
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ id, text, description, photo_url, subservices }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/services/${id}`, { state: { id, text, description, photo_url, subservices } });
  };

  return (
    <div className="mx-32 " >
      <div className="">
        <div className="flex justify-center">
          <img
            src={photo_url}
            alt={text}
            className="object-cover rounded mb-3 w-14 h-14 "
          />
        </div>
      </div>
      <div >
        <h1 className="text-xl text-center text-gray-600">{text}</h1>
        <p>
          {/* {description } */}
        </p>
        <p className="mb-5 ">{subservices}</p>
        <hr />
      </div>
    </div>
  );
};

export default ServiceCard;
