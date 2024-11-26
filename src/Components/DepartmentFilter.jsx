import React, { useEffect, useState } from "react";
import ConsultantCard from "./ConsultantCard";
import "aos/dist/aos.css";
import Aos from "aos";

const DepartmentFilter = ({ consultants = [] }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const departments = ["All", ...new Set(consultants.map((c) => c.department))];

  const filteredConsultants = consultants.filter((consultant) => {
    const matchesSearch = consultant.department
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) || 
      `${consultant.firstname} ${consultant.lastname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" || consultant.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  return (
    <>
      <div className="mb-10 px-4 sm:px-8">
        <div className="flex justify-end mt-4">
          <label
            htmlFor="department"
            className="font-medium mr-3"
            data-aos="fade-zoom-in"
          >
            Filter by Department:
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            className="border rounded-lg px-4 py-2 shadow-sm w-full sm:w-auto"
            data-aos="fade-zoom-in"
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 sm:px-8">
        <h1
          className="text-4xl font-bold text-center text-gray-800 mb-5"
          data-aos="fade-zoom-in"
          data-aos-delay="300"
        >
          Meet Our Expert Consultants
        </h1>
        <p
          className="text-lg text-center text-gray-600 mb-10"
          data-aos="fade-zoom-in"
          data-aos-delay="500"
        >
          Browse through our team of experienced professionals to find the
          perfect consultant for your needs.
        </p>
      </div>

      <div className="mt-2 mb-14 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Consultants"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-lg px-4 py-2 w-full sm:w-1/3 shadow-sm"
          data-aos="fade-zoom-in"
        />
      </div>

      <div className="px-4 sm:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mx-auto"
          data-aos="fade-zoom-in"
          data-aos-delay="900"
        >
          {filteredConsultants.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              photo_url={consultant.photo_url}
              firstname={consultant.firstname}
              lastname={consultant.lastname}
              introduction={consultant.introduction}
              services={consultant.services}
              designation={consultant.designation}
              qualification={consultant.qualification}
              mobile_number={consultant.mobile_number}
              email={consultant.email}
            />
          ))}
        </div>

        {filteredConsultants.length === 0 && (
          <p
            className="text-gray-500 mt-6 text-center text-lg"
            data-aos="fade-in"
          >
            No consultants found.
          </p>
        )}
      </div>
    </>
  );
};

export default DepartmentFilter;
