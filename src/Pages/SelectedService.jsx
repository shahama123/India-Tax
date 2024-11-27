import React, { useEffect } from "react";
import { MdSupportAgent } from "react-icons/md";
import { useLocation } from "react-router-dom";
import image from "../assets/Customer-relationship-management.gif";
import "aos/dist/aos.css";
import AOS from "aos";
import BackButton from "../Components/BackButton";

const SelectedService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const location = useLocation();
  const subservice = location.state;

  console.log("Subservice Data:", subservice);

  if (!subservice) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: Service data not found
      </div>
    );
  }

  const { id, name, description, image_url } = subservice;

  return (
    <div className="bg-white px-6 py-12 lg:px-32 lg:py-20 min-h-screen">
      <div className="p-8 lg:p-12">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center text-gray-800 mb-4">
          {name}
        </h2>

        <div className="flex flex-col  gap-10 lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div data-aos="fade-right" className="flex-1">
            <img src={image} alt="Service Image" />
          </div>

          <div data-aos="fade-left" className="flex-1 pt-24">
            <p className="text-gray-600 leading-relaxed mb-6">
              GST registration is a process by which a taxpayer gets himself
              registered under GST. Once a business is successfully registered,
              a unique registration number is assigned to them known as the
              Goods and Services Tax Identification Number (GSTIN). This is a
              15-digit number consisting of an identification number allocated
              based on PAN and State of the applicant. The number consists of
              state code, PAN details, entity code, and check digit.
            </p>

            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-gray-800 font-semibold">
                  <span className="text-[#7fb2dc]">Price:</span> Contact for
                  details
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  <span className="text-[#7fb2dc]">Duration:</span> Varies based
                  on application
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-8">
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Who Can Register?</h3>
            <p className="text-gray-600">
              Anyone earning taxable income or conducting business activities
              is required to register. Ensure your compliance today!
            </p>
          </div>

          <div data-aos="fade-up" className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Documents Needed for Registration
            </h3>

            <p className="text-gray-600 space-y-3">
              <strong>For individuals:</strong> ID proof, address proof, PAN
              card.
              <br />
              <strong>For businesses:</strong> Business registration
              certificate, PAN card, bank details.
              <br />
              <strong>For foreign entities:</strong> Passport, tax ID from
              home country, etc.
            </p>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Steps to Register</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Create an account on the tax portal.</li>
              <li>Fill out the online registration form.</li>
              <li>Upload the necessary documents.</li>
              <li>Submit the application.</li>
              <li>Receive your Taxpayer Identification Number (TIN).</li>
            </ol>
            <p className="mt-2">
              Follow these five simple steps to complete your taxpayer
              registration. Click here to start your application now!
            </p>
            <button className="mt-4 py-2 px-6 bg-[#7fb2dc] text-white  hover:bg-white border hover:border-[#7fb2dc]  hover:text-[#7fb2dc] transition duration-300  rounded">
              Register
            </button>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Key Points to Remember
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Deadlines for registration.</li>
              <li>Consequences of failing to register.</li>
              <li>
                Benefits of timely registration, such as avoiding penalties.
              </li>
            </ul>
          </div>

          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Frequently Asked Questions
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Do I need to register if I am not earning any income?</li>
              <li>How long does the registration process take?</li>
              <li>Can I update my details after registration?</li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          className="flex justify-center pt-20 items-center"
        >
          <div className="space-y-2">
            <div className="flex justify-center">
              <MdSupportAgent className="text-5xl text-center text-[#008080]" />
            </div>

            <h1 className="text-center text-3xl text-[#008080]">Need Help?</h1>

            <p className="text-gray-600 text-center">
              Contact our customer support team if you have any further
              questions.
            </p>
            <p className="text-gray-600 text-center">
              We are here to help you out.
            </p>

            <div className="flex justify-center items-center py-5 gap-5">
              <p className="text-gray-700 text-2xl text-center">1-800-300-2121</p>
              <p className="text-gray-700 text-2xl text-center">|</p>
              <p className="text-gray-700 text-2xl text-center">
                Support@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start  mt-10">
        <BackButton/>
      </div>
      </div>
    </div>
  );
};

export default SelectedService;
