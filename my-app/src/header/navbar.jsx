import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Menu, X } from "lucide-react"; // Icon library
import { FaUserCircle } from "react-icons/fa";
import { useUserAuth } from "../login/userauthcontext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate(); // Fix: Use navigate for redirection

  const signOut = async () => {
    try {
      await logOut();
      navigate("/"); // Redirect after logout
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md border-b-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          Bunny's Car Washing
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg ml-40">
          <li>
            <Link to="/home" className="hover:text-red-500">
              Home
            </Link>
          </li>

          {/* Pages Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsPagesOpen(true)}
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <button className="hover:text-red-500">Pages</button>
            {isPagesOpen && (
              <ul className="absolute bg-white text-black -mt-0.5 rounded-lg shadow-md w-40">
                {["About Us", "Appointment", "Offers", "Working Process"].map(
                  (item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="hover:text-red-500">Services</button>
            {isServicesOpen && (
              <ul className="absolute bg-white text-black -mt-0.5 rounded-lg shadow-md w-48">
                {[
                  "Our Services",
                  "Standard Car Washing",
                  "Vacuum Cleaning",
                  "Inner Detailing Wash",
                  "Total Car Wash",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
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
          <li
            className="relative"
            onMouseEnter={() => setIsTeamOpen(true)}
            onMouseLeave={() => setIsTeamOpen(false)}
          >
            <button className="hover:text-red-500">Team</button>
            {isTeamOpen && (
              <ul className="absolute bg-white text-black -mt-0.5 rounded-lg shadow-md w-32">
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
            <Link to="/contact" className="hover:text-red-500">
              Contact
            </Link>
          </li>

          {/* User Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-red-500 flex items-center">
              <FaUserCircle className="mt-1 text-lg" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 -mt-1 w-40 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  <li>{user && <span className="ml-1">{user.email}</span>}</li>
                  <li>
                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
              <Link
                to="/home"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/our-services"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
