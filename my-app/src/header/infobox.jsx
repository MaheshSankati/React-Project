import React from "react";
import icon01 from "../assets/icon-01.png";
import icon02 from "../assets/icon-02.png";
import icon03 from "../assets/icon-03.png";
import icon04 from "../assets/icon-04.png";

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white border-2 shadow-md hover:shadow-lg p-6 rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
        <h4 className="text-lg font-semibold border-b-2 border-gray-200 pb-2 mb-3">
          {title}
        </h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const InfoBox = () => {
  const cardData = [
    {
      icon: icon01,
      title: "Engine Servicing",
      description: "We use contemporary test devices to diagnose and clean engines.",
    },
    {
      icon: icon02,
      title: "Diagnostic Tests",
      description: "Advanced diagnostic tests for vehicle health and safety.",
    },
    {
      icon: icon03,
      title: "Interior Cleaning",
      description: "Comprehensive interior cleaning with premium materials.",
    },
    {
      icon: icon04,
      title: "Vacuum Cleaning",
      description: "Deep vacuum cleaning to keep your vehicle spotless.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto -mt-24">
          {cardData.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
