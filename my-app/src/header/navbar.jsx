import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md border-b-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          Bunny's Car Washing
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-red-500">Home</Link>
          </li>

          {/* Pages Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
              className="hover:text-red-500"
            >
              Page
            </button>
            {isPagesOpen && (
              <ul
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
                className="absolute bg-white text-black mt-2 rounded-lg shadow-md w-40"
              >
                {["About Us", "Appointment", "Offers", "Working Process"].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="hover:text-red-500"
            >
              Services
            </button>
            {isServicesOpen && (
              <ul
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute bg-white text-black mt-2 rounded-lg shadow-md w-48"
              >
                {["Our Services", "Standard Car Washing", "Vacuum Cleaning", "Inner Detailing Wash", "Total Car Wash"].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Team Dropdown */}
          <li className="relative">
            <button
              onMouseEnter={() => setIsTeamOpen(true)}
              onMouseLeave={() => setIsTeamOpen(false)}
              className="hover:text-red-500"
            >
              Team
            </button>
            {isTeamOpen && (
              <ul
                onMouseEnter={() => setIsTeamOpen(true)}
                onMouseLeave={() => setIsTeamOpen(false)}
                className="absolute bg-white text-black mt-2 rounded-lg shadow-md w-32"
              >
                <li>
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-sm hover:bg-gray-200"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-red-500">Login</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-2 text-lg p-4">
            <li>
              <Link to="/" className="block hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-red-500">About</Link>
            </li>
            <li>
              <Link to="/services" className="block hover:text-red-500">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-red-500">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="block hover:text-red-500">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
