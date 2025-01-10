import React from "react";
import "./aboutus.css";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="pe-lg-2-5 pe-xl-6">
            <h2 className="mb-1-6">Professional Washing &amp; Cleaning of Your Car</h2>
            <p className="mb-2-5 display-29">
              We are an organization that has assembled its standing on dependable administrations for all seasons of vehicles in Manhattan.
            </p>
            {/* Feature 1 */}
            <div className="d-flex align-items-sm-center mb-1-9 wow fadeInUp" data-wow-delay="200ms">
              <div className="flex-shrink-0">
                <div className="about-icon">
                  <img src="img/icons/icon-05.png" alt="Modern Workshop Icon" />
                </div>
              </div>
              <div className="flex-grow-1 ms-4">
                <h4 className="h5">Modern Workshop</h4>
                <p className="mb-0">
                  A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="d-flex align-items-sm-center mb-1-9 wow fadeInUp" data-wow-delay="350ms">
              <div className="flex-shrink-0">
                <div className="about-icon">
                  <img src="img/icons/icon-06.png" alt="Talented Workers Icon" />
                </div>
              </div>
              <div className="flex-grow-1 ms-4">
                <h4 className="h5">Talented Workers</h4>
                <p className="mb-0">
                  A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="d-flex align-items-sm-center wow fadeInUp" data-wow-delay="500ms">
              <div className="flex-shrink-0">
                <div className="about-icon">
                  <img src="img/icons/icon-07.png" alt="Best Price Icon" />
                </div>
              </div>
              <div className="flex-grow-1 ms-4">
                <h4 className="h5">Best Price</h4>
                <p className="mb-0">
                  A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 order-1 order-lg-2 mb-2-9 mb-lg-0 wow fadeIn" data-wow-delay="400ms">
          <div className="position-relative">
            <img className="mb-3" src="img/content/about-01.jpg" alt="Car Wash Workshop" />
            <div className="about-counter-wrapper">
              <p className="countup fs-1 font-weight-700 text-white lh-1 mb-3">25</p>
              <h4 className="m-0 display-30 text-white">Years Experience</h4>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-6">
              <img src="img/content/about-02.jpg" alt="Car Wash Detail 1" />
            </div>
            <div className="col-lg-6">
              <img src="img/content/about-03.jpg" alt="Car Wash Detail 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
