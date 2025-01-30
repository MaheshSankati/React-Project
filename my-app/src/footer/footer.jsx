import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* Top Section */}
      <div className="container mx-auto px-14 py-8 border-b border-gray-700">
        <div className="flex flex-wrap justify-between">
          {/* Appointment Section */}
          <div className="p-4">
            <h5 className="text-lg font-bold">Appointment</h5>
            <p>(+19) 123 456 789</p>
          </div>
          {/* Hours Section */}
          <div className="p-4">
            <h5 className="text-lg font-bold">Mon - Sat</h5>
            <p>7:00 AM - 6:00 PM</p>
          </div>
          {/* Address Section */}
          <div className="p-4">
            <h5 className="text-lg font-bold">Address</h5>
            <p>
              66 Guild Street 512B, Great <br /> North Town.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-between">
        {/* Footer Logo Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="mb-6">
            <a href="index.html">
              <img
                src="img/logos/footer-light-logo.png"
                alt="Footer Logo"
                className="max-w-[150px]"
              />
            </a>
          </div>
          <p>
            It is built for auto wash and <br /> car maintenance shops but is <br />
            suitable for all companies <br /> with related services.
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="/standard-wash" className="hover:text-gray-300">
                Standard Car Wash
              </a>
            </li>
            <li>
              <a href="/vacuum" className="hover:text-gray-300">
                Vacuum Cleaning
              </a>
            </li>
            <li>
              <a href="/inner-detailing" className="hover:text-gray-300">
                Inner Detailing Wash
              </a>
            </li>
            <li>
              <a href="/total-wash" className="hover:text-gray-300">
                Total Car Wash
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-bold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="services" className="hover:text-gray-300">
                Service
              </a>
            </li>
            <li>
              <a href="testimonials.html" className="hover:text-gray-300">
                Testimonial
              </a>
            </li>
            <li>
              <a href="/working" className="hover:text-gray-300">
                Working Process
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
