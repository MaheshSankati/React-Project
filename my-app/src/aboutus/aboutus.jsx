import React from "react";
import icon05 from "../assets/icon-05.png";
import icon06 from "../assets/icon-06.png";
import icon07 from "../assets/icon-07.png";
import about01 from "../assets/about-01.jpg";
import about02 from "../assets/about-02.jpg";
import about03 from "../assets/about-03.jpg";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="flex flex-wrap justify-between items-start mb-10">
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Professional Washing &<br /> Cleaning of Your Car
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              We are an organization that has assembled <br />
              its standing on dependable administrations <br />
              for all seasons of vehicles in Manhattan.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={icon05}
                  alt="Modern Workshop Icon"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold mb-2">Modern Workshop</h4>
                <p className="text-gray-600">
                  A car wash shop is a foundation where cars are
                  <br />
                  fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={icon06}
                  alt="Talented Workers Icon"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold mb-2">Talented Workers</h4>
                <p className="text-gray-600">
                  A car wash shop is a foundation where cars are <br />
                  fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={icon07}
                  alt="Best Price Icon"
                  className="w-full h-full"
                />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold mb-2">Best Price</h4>
                <p className="text-gray-600">
                  A car wash shop is a foundation where cars are
                  <br />
                  fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={about01}
              alt="Car Wash Workshop"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-wrap gap-0 mt-4">
            <div className="w-1/2">
              <img
                src={about02}
                alt="Car Wash Detail 1"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-1/2">
              <img
                src={about03}
                alt="Car Wash Detail 2"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
