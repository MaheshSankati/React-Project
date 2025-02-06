import React from "react";
import { useNavigate } from "react-router-dom";

import wheeleashing from "../assets/WheelsWashing .png";
import totalcarwash from "../assets/TotalCarWash.png";
import innerDetailing from "../assets/InnerDetailingWash.png";
import vacuumCleaning from "../assets/VaccumCleaning.png";
import Footer from "../footer/footer";

const SpecialOffers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-100 min-h-screen mt-16">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-black text-center uppercase font-bold">
            Special Offers
          </h1>
          {/* Car Washing Service Offers Heading */}
          <h2 className="text-3xl font-semibold text-center mb-8">
            Car Washing Service Offers
          </h2>

          {/* Offer 1 */}
          <div className="flex flex-wrap items-center mb-8">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={wheeleashing}
                alt="Wheel Cleaning"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-bold mb-4">
                15% off discount Wheel Cleaning
              </h3>
              <p className="text-gray-700 mb-4">
                The earliest automobile proprietors had no actual restore
                enterprise to show to. Typically those proprietors restore the
                automobile themselves and appeared towards different industries
                for the manufacture of the essential elements that he might
                require.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => navigate("/appointment")}
              >
                Book now
              </button>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="flex flex-wrap items-center mb-8">
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <h3 className="text-xl font-bold mb-4">
                5% off discount Total Car Wash
              </h3>
              <p className="text-gray-700 mb-4">
                The earliest automobile proprietors had no actual restore
                enterprise to show to. Typically those proprietors restore the
                automobile themselves and appeared towards different industries
                for the manufacture of the essential elements that he might
                require.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => navigate("/appointment")}
              >
                Book now
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
              <img
                src={totalcarwash}
                alt="Total Car Wash"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Offer 3 */}
          <div className="flex flex-wrap items-center mb-8">
            <div className="w-full md:w-1/2 p-4">
              <img
                src={innerDetailing}
                alt="Wheel Cleaning"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-xl font-bold mb-4">
                15% off discount Wheel Cleaning
              </h3>
              <p className="text-gray-700 mb-4">
                The earliest automobile proprietors had no actual restore
                enterprise to show to. Typically those proprietors restore the
                automobile themselves and appeared towards different industries
                for the manufacture of the essential elements that he might
                require.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => navigate("/appointment")}
              >
                Book now
              </button>
            </div>
          </div>

          {/* Offer 4 */}
          <div className="flex flex-wrap items-center mb-8">
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <h3 className="text-xl font-bold mb-4">
                5% off discount Total Car Wash
              </h3>
              <p className="text-gray-700 mb-4">
                The earliest automobile proprietors had no actual restore
                enterprise to show to. Typically those proprietors restore the
                automobile themselves and appeared towards different industries
                for the manufacture of the essential elements that he might
                require.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => navigate("/appointment")}
              >
                Book now
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
              <img
                src={vacuumCleaning}
                alt="Total Car Wash"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecialOffers;
