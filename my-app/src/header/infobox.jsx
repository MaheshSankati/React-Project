import React from "react";
import icon01 from "../assets/icon-01.png";
import icon02 from "../assets/icon-02.png";
import icon03 from "../assets/icon-03.png";
import icon04 from "../assets/icon-04.png";


const Card = ({ icon, title, description, delay }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/5 transition-transform duration-300 transform hover:-translate-y-2"
      style={{ animationDelay: delay }}
    >
      <div className="border-none shadow-md hover:shadow-lg bg-white">
        <div className="text-center pl-2.5 h-[250px] w-[165px] flex flex-col items-center justify-center">
          <div className="mb-5">
            <img src={icon} alt="Icon" className="w-[70px]" />
          </div>
          <h4 className="text-lg font-semibold border-b-2 border-gray-200 pb-3 mb-4">
            {title}
          </h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const InfoBox = () => {
  const cardData = [
    {
      icon: icon01,
      title: "Engine Servicing",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "200ms",
    },
    {
      icon: icon02,
      title: "Diagnostic Tests",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "300ms",
    },
    {
      icon: icon03,
      title: "Interior Cleaning",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "400ms",
    },
    {
      icon: icon04,
      title: "Vacuum Cleaning",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "500ms",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Services
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
