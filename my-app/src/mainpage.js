import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./header/navbar";
import Home from "./header/Home";

import AboutUs from "./aboutus/aboutus01";
import CarWashBooking from "./pricingplans/CarWashBooking";
import SpecialOffers from "./pricingplans/offers";
import HowItWorks from "./working/workingprocess";

import Services from "./services/services";
import StandardCarWash from "./services/standard-car-wash";
import VacuumCleaning from "./services/vacuum-cleaning";
import InnerDetailingWash from "./services/inner-detailing-wash";
import TotalCarWash from "./services/total-car-wash";

import Ourteam from "./team/ourteam";
import ContactUs from "./contact/contactus";
import Login from "./login/login";
import Signup from "./login/signup";
import ForgetPassword  from "./login/forgotPswd";


const Mainpage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/appointment" element={<CarWashBooking />} />
        <Route path="/offers" element={<SpecialOffers />}/>
        <Route path="/working-process" element={<HowItWorks />} />

        <Route path="/our-services" element={<Services />} />
        <Route path="/standard-car-washing" element={<StandardCarWash />} />
        <Route path="/vacuum-cleaning" element={<VacuumCleaning />}/>
        <Route path="/inner-detailing-wash" element={<InnerDetailingWash />}/>
        <Route path="/total-car-wash" element={<TotalCarWash />}/>

        <Route path="/team" element={<Ourteam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgetPassword/>}/>
      </Routes>
    </Router>
  );
};

export default Mainpage;
