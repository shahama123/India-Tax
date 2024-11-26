import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const JobDetails = ({ jobListings }) => {
  const { index } = useParams(); // Get the job index from URL
  const job = jobListings[index]; // Retrieve the specific job
  const navigate = useNavigate();

  if (!job) {
    return <p className="text-center text-red-500">Job not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send application data to the backend here

    // Display SweetAlert after form submission
    Swal.fire({
      title: "Application Submitted!",
      text: "Thank you for applying. We will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/"); // Redirect to the main page after applying
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-32 py-20 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-[#008080] mb-4">
          Apply for {job.title}
        </h1>
        <p className="text-gray-600 mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Description:</strong> {job.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Why are you a good fit for this job?"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
          <label htmlFor="">Upload Your Resume : </label>
          <input type="file" placeholder="Upload Your Resume" />
          <div className="pt-10">
          <button
            type="submit"
            className="w-full bg-[#008080] text-white py-2  rounded hover:bg-[#008095]"
          >
            Submit Application
          </button>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default JobDetails;
