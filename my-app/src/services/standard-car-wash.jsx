import React from "react";
import service01 from "../assets/service-01.jpg";
import servicedetail02 from "../assets/service-detail-02.jpg";
import Footer from "../footer/footer";

const StandardCarWash = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4 space-y-8 mt-16">
        {/* Cover Image */}
        <div className="w-full">
          <h1 className="text-3xl text-center uppercase font-bold text-gray-800 mb-4">
            Standard Car Wash
          </h1>
          <img
            src={service01}
            alt="Car Wash Cover"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Heading and Paragraphs */}
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Standard Car Wash
          </h1>
          <p className="text-gray-600 mb-4">
            The quantity of time human beings spend washing their vehicle can
            range substantially and there are some of various factors which can
            have an effect on the time it takes such as matters just like the
            length of the car in question, the extent of enjoy and talent of the
            man or woman doing the washing, the goods getting used and
            strategies being employed, the climate situations and manifestly how
            grimy the auto certainly is.
          </p>
          <p className="text-gray-600">
            When washing a automobile properly, there are sure matters that need
            to be performed irrespective of a number of the elements stated
            above and those critical steps will surely have an effect on the
            automobile washing workouts timescale.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 w-full max-w-5xl items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={servicedetail02}
              alt="Car Service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Car Washing Service
            </h2>
            <p className="text-gray-600 mb-4">
              One of the maximum not unusualplace additions humans make to their
              vehicles in an effort to preserve the warmth out is a windshield
              visor. Cars grow to be heat withinside the summer.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Brake Service Repair</li>
              <li>Undercarriage Rust Inhibitor</li>
              <li>Rubber Mats Washed</li>
              <li>Rim cleaner x 2</li>
              <li>Computerized Diagnostics</li>
            </ul>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="text-center max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Key Benefits
          </h2>
          <p className="text-gray-600">
            There isn't anyt any doubt that in case you preserve your automobile
            searching new, you'll maintain its cost and extend its lifespan.
            Cars are able to lasting longer than ever before. In fact, the
            common age for a car on the street nowadays is almost twelve years.
            That manner there are a number of cars, trucks, and SUVs on the road
            with one hundred and fifty thousand miles or more. Of course, in
            case you do now no longer deal with it right, your journey won't
            make it nearly so far.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StandardCarWash;
