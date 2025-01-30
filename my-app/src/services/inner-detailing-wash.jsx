import React from 'react';
import service03 from '../assets/service-03.jpg';
import servicedetail07 from '../assets/service-detail-07.jpg';
import servicedetail08 from '../assets/service-detail-08.jpg';
import servicedetail09 from '../assets/service-detail-09.jpg';
import servicedetail10 from '../assets/service-detail-10.jpg';

const InnerDetailingWash = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-3xl uppercase font-bold text-center text-gray-800 mb-6">Inner Detailing Wash</h1>
      {/* Top Section with Image */}
      <div className="flex flex-col items-center">
        <img
          src={service03}
          alt="Inner Detailing Wash"
          className="w-full max-w-4xl h-auto rounded-xl shadow-lg mb-8"
        />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Inner Detailing Wash</h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mb-10">
          Outer splendor is not anything as compared to internal splendor. Therefore, it comes as no surprise
          that interior automobile detailing requires greater time and effort than exterior detailing. A dirty
          interior cabin not only has a bad odor, but also adds to operational complications. Dirty air
          exhaust spreads allergens about the cabin; stain and grit cause switches to fail; and hazy windows
          can obscure the view of a driver. In that case, cleaning a automobile’s interior is more than just
          washing with water and soap.
        </p>
      </div>

      {/* Four Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img
          src={servicedetail07}
          alt="Detailing 1"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={servicedetail08}
          alt="Detailing 2"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={servicedetail09}
          alt="Detailing 3"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={servicedetail10}
          alt="Detailing 4"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Our Key Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Key Benefits</h2>
        <p className="text-gray-700 text-lg">
          Taking your vehicle to a vehicle wash could be very important. However, it is right which you
          element your vehicle as soon as in a while. A new vehicle constantly has a clean coat on top of
          the paint. With time, that coat fades away due to exposure to sunlight. Without the coat, the car
          looks really old and undesirable.
        </p>
    </div>
  );
};

export default InnerDetailingWash;
