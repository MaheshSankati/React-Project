import React from "react";
import "./infobox.css";

const Card = ({ icon, title, description, delay }) => {
  return (
    <div
      className={`col-md-6 col-lg-3 mt-1-9 wow fadeInUp`}
      data-wow-delay={delay}
    >
      <div className="card card-style1">
        <div className="card-body">
          <div className="info-icon">
            <img src={icon} alt="Icon" className="w-75px" />
          </div>
          <h4 className="h5 borders-bottom border-color-extra-light-gray pb-3 pb-lg-4 mb-3 mb-lg-4">
            {title}
          </h4>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

const InfoBox = () => {
  const cardData = [
    {
      icon: "img/icons/icon-01.png",
      title: "Engine Servicing",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "200ms",
    },
    {
      icon: "img/icons/icon-02.png",
      title: "Diagnostic Tests",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "300ms",
    },
    {
      icon: "img/icons/icon-03.png",
      title: "Interior Cleaning",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "400ms",
    },
    {
      icon: "img/icons/icon-04.png",
      title: "Vacuum Cleaning",
      description:
        "We use contemporary test device system to carry out engine diagnostics and car wash.",
      delay: "500ms",
    },
  ];

  return (
    <section className="info-box">
      <div className="services">... Services ...</div>
      <div className="container">
        <div className="row info-box-number mb-3 mt-n1-9">
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
