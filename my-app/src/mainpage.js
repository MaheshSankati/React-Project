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

import ProtectedRoute from "./login/protestedroute";
import { UserAuthContextProvider } from "./login/userauthcontext";

const Mainpage = () => {
  return (
    <UserAuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <ProtectedRoute>
                <CarWashBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/offers"
            element={
              <ProtectedRoute>
                <SpecialOffers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/working-process"
            element={
              <ProtectedRoute>
                <HowItWorks />
              </ProtectedRoute>
            }
          />

          <Route
            path="/our-services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/standard-car-washing"
            element={
              <ProtectedRoute>
                <StandardCarWash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vacuum-cleaning"
            element={
              <ProtectedRoute>
                <VacuumCleaning />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inner-detailing-wash"
            element={
              <ProtectedRoute>
                <InnerDetailingWash />
              </ProtectedRoute>
            }
          />
          <Route
            path="/total-car-wash"
            element={
              <ProtectedRoute>
                <TotalCarWash />
              </ProtectedRoute>
            }
          />

          <Route
            path="/team"
            element={
              <ProtectedRoute>
                <Ourteam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
};

export default Mainpage;
