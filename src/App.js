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
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>

     <Footer/>
    </Router>
  );
}

export default App;
