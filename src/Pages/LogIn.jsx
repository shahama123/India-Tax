import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaFacebookF, FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import Aos from "aos";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To detect when navigating to this page

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const [currentState, setCurrentState] = useState("Log In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Clear form whenever the component is mounted or navigated to
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  }, [location.pathname]);

  const toggleForm = () => {
    setCurrentState(currentState === "Log In" ? "Sign Up" : "Log In");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((currentState === "Sign Up" && !name) || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");

    Swal.fire({
      title:
        currentState === "Log In" ? "Login Successful!" : "Sign Up Successful!",
      text:
        currentState === "Log In"
          ? "Welcome back! You have successfully logged in."
          : "Your account has been created successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center p-20 justify-center">
      <div className="bg-white shadow-lg rounded-lg w-11/12 max-w-4xl flex overflow-hidden">
        <div className="hidden lg:block w-1/2 bg-gray-50">
          <img
            src={currentState === "Log In" ? assets.login : assets.signup}
            alt={currentState === "Log In" ? "login" : "signup"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            {currentState}
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            {currentState === "Sign Up" && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg  text-gray-700"
                />
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg  text-gray-700"
              />
            </div>

            <div className="relative flex items-center border-2 border-gray-300 rounded-lg">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 focus:outline-none  text-gray-700"
              />
              <span
                className="pr-4 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7fb2dc] text-white py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
            >
              {currentState === "Log In" ? "Log In" : "Sign Up"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-4 text-gray-500">Or login with</span>
            <div className="flex-grow border-t"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="p-3 bg-blue-700 text-white rounded-full">
              <FaFacebookF />
            </button>
            <button className="p-3 bg-blue-400 text-white rounded-full">
              <FaTwitter />
            </button>
            <button className="p-3 bg-red-500 text-white rounded-full">
              <FaGoogle />
            </button>
          </div>

          <p className="text-center mt-6 text-sm">
            {currentState === "Log In" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Log In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
