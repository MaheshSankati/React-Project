import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./header/Home";

// import About from "./pages/About";
import Services from "./services/services";
// import Team from "./pages/Team";
// import Appointment from "./pages/Appointment";
// import Offers from "./pages/Offers";
// import WorkingProcess from "./pages/WorkingProcess";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import StandardCarWash from "./services/standard-car-wash";
import VacuumCleaning from "./services/vacuum-cleaning";
import InnerDetailingWash from "./services/inner-detailing-wash";
import TotalCarWash from "./services/total-car-wash";
import SpecialOffers from "./pricingplans/offers";


import Signupp from "./login/signup";
import Loginn from "./login/login";
import ContactUs from "./contact/contactus";
import AboutUs from "./aboutus/aboutus01";

// import SpecialOffers from "./pricingplans/offers";
import Ourteam from "./team/ourteam";
// import Workingprocess from "./workingprocess/workingprocess";
import HowItWorks from "./workingprocess/workingprocess";
// import CarWashBooking from "./pricingplans/CarWashBooking";




const Mainpage = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/standard-wash" element={<StandardCarWash />} />
        <Route path="/vacuum" element={<VacuumCleaning />}/>
        <Route path="/inner-detailing" element={<InnerDetailingWash />}/>
        <Route path="/total-wash" element={<TotalCarWash />}/>

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Ourteam />} />
        {/* <Route path="/appointment" element={<Appointment />} /> */}
        {/* <Route path="/offers" element={<Offers />} /> */}
        {/* <Route path="/working-process" element={<WorkingProcess />} /> */}
        <Route path="/login" element={<Loginn />} />
        <Route path="/signup" element={<Signupp />} />
        {/* <Route path="/footer" element={<Footer/>} /> */}
        {/* <Route path="./" element={<CarWashBooking/>} /> */}
        <Route path="/offers" element={<SpecialOffers />}/>
        <Route path="/working" elements={<HowItWorks/>} />

      </Routes>
    </Router>
  );
};

export default Mainpage;
