import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8 mt-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-red-600 text-center mb-1.5 text-gray-800">
        Contact Us
      </h1>

      {/* Contact Section Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            If Need Any Info Please Contact Us!
          </h2>
          <p className="text-gray-600 mb-6">
            Completely synergize aid taxing relationships thru most excellent
            area of interest markets. Professionally domesticate one-to-one
            consumer service. We're always here to help you with your car. We
            truly appreciate you taking the time to get in touch.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-800 transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-900 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Address Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Address</h2>
          <p className="text-gray-600 mb-4">Road NO. 2,Kukatpally, Hyderabad.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Phone</h2>
          <p className="text-gray-600 mb-4">
            (+91) 9133077705 <br /> (+91) 0123456789
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Email</h2>
          <p className="text-gray-600 mb-4">
            info@example.com <br /> bunnyservices@gmail.com
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Opening Hour
          </h2>
          <p className="text-gray-600">
            Mon to Sat - 7 AM to 6 PM <br /> Sun - 10 AM to 2 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
