import React from "react";
import { useNavigate } from "react-router-dom";

const ConsultantCard = ({
  id,
  firstname,
  lastname,
  photo_url,
  designation,
  introduction,
  qualification,
  mobile_number,
  email,
  services,
}) => {
  const navigate = useNavigate();

  const handleViewFullProfile = () => {
    navigate(`/view-full-profile/${id}`, {
      state: {
        id,
        firstname,
        lastname,
        photo_url,
        designation,
        introduction,
        qualification,
        mobile_number,
        email,
        services,
      },
    });
  };
  const handleBookAppointment = () => {
    navigate(`/book-appointment`, {
      state: {
        firstname,
        lastname,
        services,
      },
    });
  };

  const imageSrc =
    Array.isArray(photo_url) && photo_url.length > 0
      ? photo_url[0]
      : "https://via.placeholder.com/150";

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between h-full">
      <img src={imageSrc} alt="" className="w-full h-56 object-cover" />
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold">
          {firstname} {lastname}
        </h2>
        <p className="text-md text-gray-500">{designation}</p>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-600 mb-8">
            Qualification: {qualification}
          </p>
          {/* <p className="text-sm text-gray-600 mb-5">Mobile: {mobile_number}</p> */}
          {/* <p className="text-sm text-gray-600">
            Email:{" "}
            <a href={`mailto:${email}`} className="text-blue-500">
              {email}
            </a>
          </p> */}
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex justify-center mb-2">
            <button
              onClick={handleViewFullProfile}
              className="bg-[#7fb2dc] px-9 py-2 rounded text-white border hover:border-[#7fb2dc] hover:text-[#7fb2dc] hover:bg-white"
            >
              View Full Profile
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleBookAppointment}
              className="bg-[#7fb2dc] px-5 py-2 text-white rounded border hover:border-[#7fb2dc] hover:text-[#7fb2dc] hover:bg-white"
            >
              Book An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
