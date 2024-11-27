import { useState } from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LogIn from "./Pages/LogIn";
import BookAppointment from "./Pages/BookAppointment";
import Footer from "./Components/Footer";
import ConsultantList from "./Pages/ConsultantList";
import ViewFullProfile from "./Pages/ViewFullProfile";
import BookingConfirmation from "./Pages/BookingConfirmation";
import Careers from "./Pages/Careers";
import Register from "./Pages/Register";
import AllServices from "./Pages/AllServices";
import SelectedService from "./Pages/SelectedService";
import JobDetails from "./Pages/JobDetails";
import ScrollToTop from "./Components/ScrollToTop ";

function App() {
  
  const jobListings = [
    {
      title: "Senior Tax Consultant",
      location: "Remote",
      description:
        "Looking for a skilled Senior Tax Consultant to join our team.",
      services: ["React", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Tax Audit Specialist",
      location: "Karandakkad, Kasaragod, Kerala",
      description:
        "We need a Tax Audit Specialist with experience in Tax Audit .",
      services: ["Node.js", "MongoDB", "REST APIs"],
    },
  ];
  
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/consultant-list" element={<ConsultantList />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/view-full-profile/:id" element={<ViewFullProfile />} />
          <Route path="/confirmation-page" element={<BookingConfirmation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selected-service" element={<SelectedService />} />
          <Route
            path="/job-details/:index"
            element={<JobDetails jobListings={jobListings} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
