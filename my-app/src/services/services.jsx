import React from "react";
import service01 from "../assets/service-01.jpg";
import service02 from "../assets/service-02.jpg";
import service03 from "../assets/service-03.jpg";
import service04 from "../assets/service-04.jpg";

const ServiceCard = ({ image, number, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="p-5  flex flex-col gap-4">
        <div className="relative mb-4">
          <h4 className="text-6xl font-bold text-red-500 opacity-10 absolute -top-2 -left-2">
            {number}
          </h4>
        </div>
        <div>
          <h4 className="text-right font-semibold mb-2 text-gray-800">
            <a href={link} className="hover:text-red-500 transition-colors">
              {title}
            </a>
          </h4>
          <p className="text-sm text-gray-600 mb-3 mt-5">{description}</p>
          <a
            href={link}
            className="text-red-500 font-medium flex items-center hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      // image: {service01},
      number: "01",
      title: "Standard Car Wash",
      description: <p> Keep your vehicle fine and running,<br/> We provide routine checks to ensure <br/> your vehicle remains in good condition.</p>,
      link: "/standard-wash",
    },
    {
      // image: {service02},
      number: "02",
      title: "Vacuum Cleaning",
      description: <p>Maintain a clean vehicle interior<br/> with our thorough vacuum cleaning<br/> services.</p>,
      link: "/vacuum",
    },
    {
      // image: {service03},
      number: "03",
      title: "Inner Detailing Wash",
      description: <p>Ensure your vehicle's interior shines<br/> with our detailed cleaning service.</p>,
      link: "/inner-detailing",
    }, 
    {
      // image: {service04},
      number: "04",
      title: "Total Car Wash",
      description:<p>Give your car the ultimate wash<br/> for a spotless finish, inside and out.</p>,
      link: "/total-wash",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <span className="text-lg text-red-500 font-semibold uppercase">
          Our Services
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Explore Car Washing Services
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
      </div>
      <div className="relative overflow-scroll h-[250px] w-full p-5">
      <div className="flex gap-6 items-center h-full">
        <img src={service01} alt="Service 1" className="h-full w-auto" />
        <img src={service02} alt="Service 2" className="h-full w-auto" />
        <img src={service03} alt="Service 3" className="h-full w-auto" />
        <img src={service04} alt="Service 4" className="h-full w-auto" />
      </div>
      <div className="mb-20 gap-6 items-center p-6 flex ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            // image={service.image}
            number={service.number}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
