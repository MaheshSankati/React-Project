import React from 'react';
import "../header/Search.css"


const Header = () => {
  return (
    <header className="header-style1 menu_area-light">
      <div className="navbar-default border-bottom border-color-light-white">
        {/* Top Search */}
        <div className="top-search bg-primary">
          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <form className="search-form" action="search.html" method="GET" acceptCharset="utf-8">
              <div className="input-group">
                <span className="input-group-addon cursor-pointer">
                  <button className="search-form_submit fas fa-search text-white" type="submit"></button>
                </span>
                <input
                  type="text"
                  className="search-form_input form-control"
                  name="s"
                  autoComplete="off"
                  placeholder="Type & hit enter..."
                />
                <span className="input-group-addon close-search mt-1">
                  <i className="fas fa-times"></i>
                </span>
              </div>
            </form>
          </div>
        </div>
        {/* End Top Search */}

        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12">
              <div className="menu_area">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="navbar-header navbar-header-custom">
                    {/* Logo */}
                    <a href="index.html" className="navbar-brand">
                      <img id="logo" src="img/logos/logo-inner.png" alt="logo" />
                    </a>
                  </div>

                  <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  {/* Menu Area */}
                  <ul className="navbar-nav ms-auto" id="nav">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#!">Pages</a>
                      <ul>
                        <li>
                          <a href="aboutus.html">About Us</a>
                        </li>
                        <li>
                          <a href="company-history.html">Company History</a>
                        </li>
                        <li>
                          <a href="appointment.html">Appointment</a>
                        </li>
                        <li>
                          <a href="offers.html">Offers</a>
                        </li>
                        <li>
                          <a href="#!">Team</a>
                          <ul>
                            <li>
                              <a href="our-team.html">Our Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                          </ul>
                        </li>
                        {/* Add more nested lists as needed */}
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Services</a>
                      <ul>
                        <li>
                          <a href="our-services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="standard-car-wash.html">Standard Car Wash</a>
                        </li>
                        <li>
                          <a href="vacuum-cleaning.html">Vacuum Cleaning</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contactus.html">Contact</a>
                    </li>
                  </ul>
                  {/* End Menu Area */}

                  {/* Attribute Navigation */}
                  <div className="attr-nav align-items-lg-center ms-lg-auto">
                    <ul>
                      <li className="search">
                        <a href="#!">
                          <i className="fas fa-search"></i>
                        </a>
                      </li>
                      <li className="d-none d-xl-inline-block">
                        <a href="tel:+1123456789" className="butn small text-white">
                          <span>+1 123 456 789</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Attribute Navigation */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Banner = () => {
  return (
    <div className="top-position1 z-index-1">
      <div className="common-banner">
        <div className="owl-carousel owl-theme w-100">
          <div
            className="text-start item bg-img cover-background secondary-overlay"
            style={{
              backgroundImage: `url("img/banner/banner-01.jpg")`,
              backgroundSize: "cover",
            }}
          >
            <div className="container h-100">
              <div className="d-table h-100 w-100">
                <div className="d-table-cell align-middle">
                  <div className="w-95 w-md-85 w-lg-70 w-xxl-65 mt-5 mt-sm-0">
                    <div className="mb-2-2">
                      <span className="text-uppercase">Welcome</span>
                    </div>
                    <h2>Your Banner Text</h2>
                    <a href="#!" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default App;
