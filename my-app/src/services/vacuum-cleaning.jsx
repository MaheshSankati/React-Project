import React from "react";
import service02 from "../assets/service-02.jpg";
import servicedetail04 from "../assets/service-detail-04.jpg";
import servicedetail05 from "../assets/service-detail-05.jpg";

const VacuumCleaning = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-black text-center uppercase text-4xl font-bold">Vacuum Cleaning</h1>

      {/* Top Image Section */}
      <div className="h-80 w-full object-cover rounded-lg shadow-lg" style={{ backgroundImage: `url(${service02})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* <h1 className="text-white text-4xl font-bold">Vacuum Cleaning</h1> */}
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Vacuum Cleaning</h2>
        <p className="text-gray-700 mb-4">
          If you’re very specific approximately maintaining your matters easy specially your vehicle then a transportable vehicle vacuum purifier can absolutely are available handy. Different kinds of transportable vehicle vacuum cleaners are to be had withinside the marketplace in diverse rate stages with all types of features.
        </p>
        <ul className="list-disc pl-5 mb-8 text-gray-700">
          <li>They Are Small</li>
          <li>They Are Easy to Use</li>
          <li>Runs on Battery Power</li>
          <li>They Are Powerful</li>
          <li>They Are Lightweight</li>
          <li>They Are Safe</li>
          <li>Cleans Difficult Spots</li>
          <li>Can Go Anywhere</li>
        </ul>

        {/* Types of Vacuum Cleaning Section */}
        <h2 className="text-2xl font-bold mb-4">Types Of Vacuum Cleaning</h2>
        <p className="text-gray-700 mb-8">
          So how do making a decision which one is first-class for you? Which elements must you recollect earlier than shopping for one? Of course, they must be smooth to handle, compact, smooth to store, excessive power, fairly priced, etc. But most significantly they must serve the reason they had been offered for i.e offer powerful cleansing on your vehicle's interior.
        </p>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img
            src={servicedetail04}
            alt="Vacuum Cleaning 1"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src={servicedetail05}
            alt="Vacuum Cleaning 2"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <h2 className="text-2xl font-bold mb-4">Our Vacuum Cleaning Benefits</h2>
        <p className="text-gray-700 mb-4">
          One of the blessings of vacuum cleaners is that it's far an powerful manner of cleansing your automobile. There aren't anyt any different method through which you could easy your automobile successfully than whilst the use of a vacuum cleanser. A vacuum cleanser can put off all of the dust that your eyes can’t see.
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>It is very powerful in cleaning.</li>
          <li>The smaller length makes them a high-quality choice for smaller dwelling spaces.</li>
          <li>Many human beings don’t understand this little lifestyles hack, however a hand held automobile vacuum may be used to rescue tiny gadgets from unreachable places.</li>
          <li>A vehicle vacuum may be of top notch benefit to you due to the fact they're mobile.</li>
          <li>When you're carried out vacuuming, honestly sell off the accrued particles right into a trash can or bag and you’re equipped to easy the subsequent mess.</li>
          <li>The device is person friendly, and this makes it suitable for maximum vehicle owners.</li>
        </ul>
      </div>
    </div>
  );
};

export default VacuumCleaning;
