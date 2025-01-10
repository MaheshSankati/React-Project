import React, { useState } from "react";
import "../header/header.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Term:", searchTerm);
    // Implement search functionality here.
  };

  return (
    <div class="home-container">
      <div class="Background1">
        <div class="text1">
          <div class="logo">Surya Car washing</div>
          <ul class="text-Links">
            <li class="text-Item">
              <a href="#home" class="text-Link">
                Home
              </a>
            </li>
            <li class="text-Item">
              <a href="#page" class="text-Link">
                Page
              </a>
            </li>
            <li class="text-Item">
              <a href="#services" class="text-Link">
                Services
              </a>
            </li>
            <li class="text-Item">
              <a href="#team" class="text-Link">
                Team
              </a>
            </li>
            <li class="text-Item">
              <a href="#elements" class="text-Link">
                Elements
              </a>
            </li>
            <li class="text-Item">
              <a href="#contact" class="text-Link">
                Contact
              </a>
            </li>
          </ul>
          <form class="searchForm" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              class="searchInput"
            />
            <button type="submit" class="searchButton">
              🔍
            </button>
          </form>
        </div>
        <h1 class="">
          Ready For 24/7 Hours<br></br> Car Servicing
        </h1>
        <div class="text1-btns">
          <a href="#contact" class="btn1">
            <b>Contact Us</b>
          </a>
          <a href="#learnmore" class="btn2">
            <b>Learn more</b>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbarr = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Navbarr;
