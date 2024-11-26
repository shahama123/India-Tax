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
        <NavBar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/allservices" element={<AllServices />} />
          {/* <Route path='/consultant' element={<Consultant/>}/> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/consultantlist" element={<ConsultantList />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/viewfullprofile/:id" element={<ViewFullProfile />} />
          <Route path="/confirmationpage" element={<BookingConfirmation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selectedservice" element={<SelectedService />} />
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
