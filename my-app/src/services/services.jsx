import React from "react";
import service01 from "../assets/service-01.jpg";
import service02 from "../assets/service-02.jpg";
import service03 from "../assets/service-03.jpg";
import service04 from "../assets/service-04.jpg";

const services = [
  {
    number: "01",
    title: "Standard Car Wash",
    description: "Keep your vehicle fine and running, We provide routine checks to ensure your vehicle remains in good condition.",
    image: service01,
    link: "/standard-car-washing",
  },
  {
    number: "02",
    title: "Vacuum Cleaning",
    description: "Maintain a clean vehicle interior with our thorough vacuum cleaning services.",
    image: service02,
    link: "/vacuum-cleaning",
  },
  {
    number: "03",
    title: "Inner Detailing Wash",
    description: "Ensure your vehicle's interior shines with our detailed cleaning service.",
    image: service03,
    link: "/inner-detailing-wash",
  },
  {
    number: "04",
    title: "Total Car Wash",
    description: "Give your car the ultimate wash for a spotless finish, inside and out.",
    image: service04,
    link: "/total-car-wash",
  },
];

const Card = ({ number, title, description, image,link}) => {
  return (
    <div className="min-w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex gap-4">
        {/* Number */}
        <h4 className="text-5xl font-bold text-red-500">{number}</h4>

        {/* Text Content */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-2">{description}</p>

          {/* Read More Link */}
          <a
            href={link}
            className="text-red-500 font-medium flex items-center gap-1 mt-3 hover:text-gray-600 transition"
          >
          Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto ">
        <div className="container mx-auto text-center">
         <span className="text-lg text-red-600 font-semibold uppercase">
           Our Services
         </span>
         <h2 className="text-3xl font-bold text-gray-800 mt-2">
           Explore Car Washing Services
         </h2>
         <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
       </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="overflow-x-auto p-10">
          <div className="flex space-x-6">
            {services.map((service, index) => (
              <Card
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
