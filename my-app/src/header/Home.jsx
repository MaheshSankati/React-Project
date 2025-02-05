import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner-01.jpg";
import Navbar from "./navbar";

import InfoBox from "./infobox";
import AboutSection from "../aboutus/aboutus";
import Services from "../services/services";
import PricingPlans from "../pricingplans/pricingplans";
import Testimonials from "../Testimonials/testimonials";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div
        className="h-screen w-full bg-cover bg-fixed bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="text-center text-white mt-40">
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
              to="/about-us"
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
