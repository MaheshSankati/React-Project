import React from "react";
import about04 from "../assets/about-04.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center p-8 mt-16">
      {/* Top Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 ">
        About Us
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap items-center md:p-10 gap-8 ">
        {/* Left Image */}
        <div className="w-full">
          <img
            src={about04}
            alt="Car Washing"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Professional Washing and Cleaning of Your Car More Than 25 Years.
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Over the past 6 years we cleaned over 34,000 cars, saved over 8.9
            million liters of water from being used in car washing and employed
            50 youth. Our legacy is in the youth that gained work and grew their
            confidence and have moved on to bigger.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-2">Electronically and Securely</li>
            <li className="mb-2">Latest Equipments</li>
            <li className="mb-2">A thorough Cleaning of Dash</li>
            <li className="mb-2">Flexible and Cost-Effective</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
