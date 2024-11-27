import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import applyImage from '../assets/apply.gif'
import BackButton from "../Components/BackButton";

const JobDetails = ({ jobListings }) => {
  const { index } = useParams(); 
  const job = jobListings[index]; 
  const navigate = useNavigate();

  if (!job) {
    return <p className="text-center text-red-500">Job not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    Swal.fire({
      title: "Application Submitted!",
      text: "Thank you for applying. We will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/"); 
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-32 py-20 bg-white">
      <div className="  ">
        <h1 className="text-3xl font-bold text-center text-black mb-10">
          Apply for {job.title}
        </h1>
        <div className="flex">
        
          <div><p className="text-gray-600 mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-gray-600 mb-10">
          <strong>Description:</strong> {job.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="w-96 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-96 p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Why are you a good fit for this job?"
            className="w-96 p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
          <label htmlFor="">Upload Your Resume : </label>
          <input type="file" placeholder="Upload Your Resume" />
          <div className="flex justify-between pt-10">
            <BackButton/>
          <button
            type="submit"
            className=" bg-[#7fb2dc] text-white py-2 px-4 rounded border hover:bg-white hover:border-[#7fb2dc] hover:text-[#7fb2dc]"
          >
            Submit Application
          </button>
          </div>
          
        </form></div>
        <div><img src={applyImage} alt="" /></div>
        </div>
        
      </div>
    </section>
  );
};

export default JobDetails;
