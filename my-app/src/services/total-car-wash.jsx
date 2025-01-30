import React from 'react';
import service04 from '../assets/service-04.jpg';
import srevicedetail11 from '../assets/service-detail-11.jpg';
import servicedetail12 from '../assets/service-detail-12.jpg';

const TotalCarWash = () => { 
  return (
    <div className="bg-gray-100 min-h-screen p-5">
     <h1 className="text-black text-center uppercase text-4xl font-bold">Total Car Wash</h1>
      {/* Top Cover Image */}
      <div className="h-80 w-full object-cover rounded-lg shadow-lg" style={{ backgroundImage: `url(${service04})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* <h1 className="text-white text-4xl font-bold">Total Car Wash</h1> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Total Car Wash</h2>
        {/* Introduction Paragraph */}
        <p className="text-gray-700 text-lg my-6">
          A automobile wash is a technique that entails an outside and indoors cleaning, relying on wherein you’re getting it. An computerized drive-via automobile wash doesn’t provide indoors cleaning, which incorporates vacuuming the seats and ground and wiping down difficult surfaces. Its number one purpose is to cast off salt, dirt, tar, and different environmental particles from the coat of your vehicles. Some vehiclemobile wash centers provide area of expertise coatings, like unique soaps or waxes, to get rid of caked-on grime.
        </p>

        {/* Interior Car Wash Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
          {/* Left Image */}
          <img
            src={srevicedetail11}
            alt="Interior Car Wash"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />

          {/* Right Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Does Interior Car Wash Involve?</h2>
            <p className="text-gray-700 mb-4">Basic Interior vehicle wash includes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Vacuuming interior and trunk.</li>
              <li>Cleaning door jambs.</li>
              <li>Cleaning windows and mirrors.</li>
            </ul>
          </div>
        </div>

        {/* Exterior Car Wash Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
          {/* Right Image */}
          <img
            src={servicedetail12}
            alt="Exterior Car Wash"
            className="w-full h-64 object-cover rounded-lg shadow-md md:order-last"
          />

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Does Exterior Car Wash Involve?</h2>
            <p className="text-gray-700 mb-4">Basic Exterior vehicle wash includes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Bug and tar removal.</li>
              <li>Washing & Buffing.</li>
              <li>Touch-up painting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCarWash;
