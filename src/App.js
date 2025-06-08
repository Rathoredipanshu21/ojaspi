import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";


import NavbarComponent from "./Components/Navbar/NavbarComponent";

// Section pages
import MainHome from "./Components/Home/MainHome";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/MainAbout";
import MainService from "./Components/Services/MainService";
import RetentionCPE from "./Components/Services/AllServices/RetentionCPE";
import CustomerVerification from "./Components/Services/AllServices/CustomerVerification";
import FinancialServices from "./Components/Services/AllServices/FinancialServices";
import HrServices from "./Components/Services/AllServices/HRServices";
import WebDevelopment from "./Components/Services/AllServices/WebDevelopment";
import DigitalMarketing from "./Components/Services/AllServices/DigitalMarketing";
import AllServices from "./Components/Services/AllServices";
import Career from "./Components/Career/Career";
import Contact from "./Components/Contact/Contact";
// import MainAbout from "./Components/About/MainAbout";
// import Gallery from "./Components/Gallery/Gallery";
// import Contact from "./Components/Contact/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<MainHome />} />
         <Route path="/about" element={<About/>} />
         <Route path="/services" element={<AllServices/>} />



         {/* all services */}
          <Route path="/retention-cpe" element={<RetentionCPE />} />
           <Route path="/customer-verification" element={<CustomerVerification/>} />
           <Route path="/financial-services" element={<FinancialServices/>} />
           <Route path="/hr-services" element={<HrServices/>} /> 
           <Route path="/web-development" element={<WebDevelopment/>} />
           <Route path="/digital-marketing" element={<DigitalMarketing/>} />
         

       
           <Route path="/career" element={<Career/>} />
           <Route path="/contact" element={<Contact/>} />




      </Routes>

     <Footer/>
    </Router>
  );
}

export default App;
