import React from "react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        How It Works <br /> Our Working Process
      </h1>
 
      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        {/* Step One */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-full mb-4">
            1
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Booking & Confirm
          </h2>
          <p className="text-gray-600">
            Book online & leave your car with us. We’ll provide you with
            excellent services.
          </p>
        </div>

        {/* Step Two */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white text-xl font-bold rounded-full mb-4">
            2
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Get Amazing Service
          </h2>
          <p className="text-gray-600">
            Every cleaner is friendly and reliable. They’ve been checked & rated
            5-stars.
          </p>
        </div>

        {/* Step Three */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-red-500 text-white text-xl font-bold rounded-full mb-4">
            3
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Get Online Payment
          </h2>
          <p className="text-gray-600">
            Pay online. We’ll provide you with excellent services with a door
            delivery option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
