import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import image from "../assets/Queue.gif";
import image2 from "../assets/Mobile.gif";
import "aos/dist/aos.css";
import Aos from "aos";
import { NavLink } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [houseName, setHouseName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [locality, setLocality] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");


  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const generateOtp = () => {
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);
    Swal.fire({
      title: "OTP Sent!",
      text: `Your OTP is ${randomOtp} (for demo purposes).`,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      Swal.fire({
        title: "Registration Successful!",
        text: "You have been registered successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setFirstName("");
        setSecondName("");
        setEmail("");
        setMobileNumber("");
        setGender("");
        setHouseName("");
        setStreetName("");
        setLocality("");
        setPinCode("");
        setDistrict("");
        setState("");
        setCountry("");
        setOtp("");
        setGeneratedOtp("");
      });
    } else {
      Swal.fire({
        title: "Invalid OTP",
        text: "The OTP you entered is incorrect. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="mx-32 my-20">
        <h1
          data-aos="zoom-in"
          className="text-4xl text-center font-bold  text-black"
        >
          Register
        </h1>
      </div>
      <div className="flex justify-center gap-20  ">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
        >
          <img src={image}  alt="" />
        </div>
        <div className="">
          <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="first-name"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your first name"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="second-name"
                className="block text-gray-700 font-medium mb-2"
              >
                Second Name <span className="text-red-500">*</span>
              </label>
              <input
                id="second-name"
                type="text"
                placeholder="Enter your second name"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile-number"
                className="block text-gray-700 font-medium mb-2"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile-number"
                type="text"
                placeholder="Enter your mobile number"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 font-medium mb-2"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={gender}
                onChange={handleGenderChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="house-name"
                className="block text-gray-700 font-medium mb-2"
              >
                House/Flat Name <span className="text-red-500">*</span>
              </label>
              <input
                id="house-name"
                type="text"
                placeholder="Enter house/flat name"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={houseName}
                onChange={(e) => setHouseName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="street-name"
                className="block text-gray-700 font-medium mb-2"
              >
                Street Name <span className="text-red-500">*</span>
              </label>
              <input
                id="street-name"
                type="text"
                placeholder="Enter street name"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="locality"
                className="block text-gray-700 font-medium mb-2"
              >
                Locality <span className="text-red-500">*</span>
              </label>
              <input
                id="locality"
                type="text"
                placeholder="Enter locality"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="pin-code"
                className="block text-gray-700 font-medium mb-2"
              >
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                id="pin-code"
                type="text"
                placeholder="Enter pin code"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="district"
                className="block text-gray-700 font-medium mb-2"
              >
                District <span className="text-red-500">*</span>
              </label>
              <input
                id="district"
                type="text"
                placeholder="Enter district"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 font-medium mb-2"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter state"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-medium mb-2"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                type="text"
                placeholder="Enter country"
                className="border rounded px-5 py-2 border-[#7fb2dc] w-full"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
          </form>

          <div className="flex justify-center my-10">
            <button
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay=""
              data-aos-offset="0"
              type="submit"
              className="bg-[#7fb2dc] hover:bg-white border hover:border-[#7fb2dc] text-white hover:text-[#7fb2dc] px-10 py-3 rounded"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="bg-gray-200 text-center py-10 space-y-2 "
        >
          <p className="text-xl font-semibold ">
            FOR ANY QUERIES YOU CAN CONTACT US.
          </p>
          <p className="text-gray-600">
            We will ensure that you receive satisfactory response at the
            earliest.
          </p>
          <NavLink to={"/contactus"}>
            <div className="pt-5">
              <button className="bg-[#7fb2dc] px-5 py-2 rounded border hover:border-[#7fb2dc] hover:text-[#99c8d3] hover:bg-white transition-transform transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
