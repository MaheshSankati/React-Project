import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner-01.jpg";

import InfoBox from "./infobox";
import AboutSection from "../aboutus/aboutus";
import Services from "../services/services";
import PricingPlans from "../pricingplans/pricingplans";
import Testimonials from "../Testimonials/testimonials";
import Footer from "../footer/footer";


const Home = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-fixed bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="flex justify-between items-center px-10 py-5 text-white">
          <div className="text-2xl font-bold text-red-600">
            Bunny's Car Washing
          </div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
                className="hover:text-red-500"
              >
                Page
              </button>
              {isPagesOpen && (
                <ul className="absolute bg-white text-black mt-2 rounded-lg shadow-md">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/appointment"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Appointment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/offers"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/working"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Working Process
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="hover:text-red-500"
              >
                Services
              </button>
              {isServicesOpen && (
                <ul className="absolute bg-white text-black mt-2 rounded-lg shadow-md">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/standard-wash"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Standard Car Washing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vacuum"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Vacuum Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/inner-detailing"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Inner Detailing Wash
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/total-wash"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Total Car Wash
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onMouseEnter={() => setIsTeamOpen(true)}
                onMouseLeave={() => setIsTeamOpen(false)}
                className="hover:text-red-500"
              >
                Team
              </button>
              {isTeamOpen && (
                <ul className="absolute bg-white text-black mt-2 rounded-lg shadow-md">
                  <li>
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-sm hover:bg-gray-200 "
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-red-500">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-red-500">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center text-white mt-1 mb-24">
          <h1 className="text-6xl font-bold">
            Ready For 24/7 Hours
            <br />
            Car Servicing
          </h1>
          <div className="mt-10 flex justify-center space-x-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg hover:bg-red-700"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white text-red-600 text-lg font-bold rounded-lg hover:bg-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <InfoBox/>
      <AboutSection/>
      <Services/>
      <PricingPlans/>
      <Testimonials/>
      <Footer/>
    </div> 
  );
};

export default Home;
