import { useState, useEffect } from "react";
import Aos from "aos";
import Swal from "sweetalert2"; 
import "aos/dist/aos.css"; 
import "sweetalert2/dist/sweetalert2.min.css"; 
import image from "../assets/Subscriber.gif";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        icon: "success",
        title: "Subscription Successful",
        text: `Thank you for subscribing with: ${email}`,
        confirmButtonColor: "#00b6dd",
      });
      setEmail(""); 
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#ff6b6b",
      });
    }
  };

  return (
    <div
      className="pt-8  max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8"
      data-aos="fade-up"
    >
      <div
        className="w-full md:w-1/3"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={image}
          className="w-full h-auto"
          alt="Newsletter Subscription"
        />
      </div>

      <div
        className="w-full md:w-2/3"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h2 className="text-3xl font-bold mb-2 ">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Stay updated with our latest news and offers. Enter your email below.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6dd]"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-aos="fade-right"
            data-aos-delay="600"
          />
          <button
            type="submit"
            className="bg-[#7fb2dc] text-white py-2 px-6 rounded-lg  hover:bg-[#78baf0] transition duration-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
