import React from "react";
import bg01 from "../assets/bg-01.jpg";

const PricingPlans = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-black py-12"
      style={{ backgroundImage: `url(${bg01})` }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg uppercase mb-2 text-red-600">Pricing Plans</span>
          <h2 className="text-4xl font-bold mb-4 text-white">Choose Our Pricing Plans</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Basic Cleaning */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="bg-gray-100 p-6 text-center border-b">
                <h4 className="text-2xl font-bold mb-2">
                  <span className="align-top text">Rs: </span>1000
                  {/* <span className="text-lg">/mo</span> */}
                </h4>
                <h3 className="text-lg font-semibold">Basic Cleaning</h3>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-2">
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Exterior Washing
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Vacuum Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Interior Wet Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Window Wiping
                  </li>
                </ul>
                <a
                  href="appointment"
                  className="inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-md px-6 py-3 font-semibold transition"
                >
                  Choose Package
                </a>
              </div>
            </div>
          </div>
          {/* Express Washing */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="bg-gray-100 p-6 text-center border-b">
                <h4 className="text-2xl font-bold mb-2">
                  <span className="align-top ">RS: </span>2000
                  {/* <span className="text-lg">/mo</span> */}
                </h4>
                <h3 className="text-lg font-semibold">Express Washing</h3>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-2">
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Exterior Washing
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Vacuum Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Interior Wet Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Window Wiping
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Body Polish
                  </li>
                </ul>
                <a
                  href="appointment"
                  className="inline-block text-white bg-gray-700 hover:bg-gray-800 rounded-md px-6 py-3 font-semibold transition"
                >
                  Choose Package
                </a>
              </div>
            </div>
          </div>
          {/* Premium Service */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg transform hover:scale-105 transition-transform">
              <div className="bg-gray-100 p-6 text-center border-b">
                <h4 className="text-2xl font-bold mb-2">
                  <span className="align-top ">RS: </span>1500
                  {/* <span className="text-lg">/mo</span> */}
                </h4>
                <h3 className="text-lg font-semibold">Premium Service</h3>
              </div>
              <div className="p-6">
                <ul className="mb-6 space-y-2">
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Exterior Washing
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Vacuum Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Interior Wet Cleaning
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:content-['✓'] before:text-blue-500">
                    Window Wiping
                  </li>
                </ul>
                <a
                  href="appointment"
                  className="inline-block text-white bg-blue-500 hover:bg-blue-600 rounded-md px-6 py-3 font-semibold transition"
                >
                  Choose Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
