import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import {
  FaBars, // Keep FaBars for the mobile menu toggle
  FaTimes, // Keep FaTimes for closing the mobile menu
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavbarComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close drawer if resized to desktop view
      if (window.innerWidth > 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg" data-aos="fade-down">
        <div className="container-fluid d-flex justify-content-between align-items-center px-4">
          <div className="navbar-brand">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </NavLink>
          </div>

          {isMobile ? (
            <>
              <div className="menu-toggle" onClick={toggleDrawer}>
                {isDrawerOpen ? (
                  <FaTimes size={26} color="#fff" />
                ) : (
                  <FaBars size={26} color="#fff" />
                )}
              </div>

              {/* MOBILE DRAWER */}
              <div className={`mobile-drawer-wrapper ${isDrawerOpen ? 'open' : ''}`}>
                <ul className="mobile-drawer">
                  <li onClick={toggleDrawer}>
                    <NavLink exact to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li onClick={toggleDrawer}>
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </li>
                  <li onClick={toggleDrawer}>
                    <NavLink to="/services" activeClassName="active">
                      Services
                    </NavLink>
                  </li>
                  <li onClick={toggleDrawer}>
                    <NavLink to="/career" activeClassName="active">
                      Careers
                    </NavLink>
                  </li>
                  <li onClick={toggleDrawer}>
                    <NavLink to="/contact" activeClassName="active">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/career" activeClassName="active">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Inline styles for demonstration. Ideally, these would be in Navbar.css */}
      <style>{`
        /* Import Google Font - Playfair Display and Montserrat */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        #navbar {
          background: linear-gradient(to right, #0a1128, #0f1931); /* Deeper, more sophisticated gradient */
          padding: 15px 0; /* Slightly more padding */
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
          transition: 0.4s ease; /* Smoother transition */
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Initial subtle shadow */
        }

        .sticky {
          box-shadow: 0 4px 15px rgba(0, 255, 100, 0.3); /* More pronounced shadow when sticky */
          background: linear-gradient(to right, #1a223a, #2a354d); /* Slightly different sticky background */
        }

        .navbar-logo {
          height: 55px; /* Slightly larger logo */
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 255, 100, 0.4); /* Glow effect on logo */
          transition: transform 0.3s ease-in-out;
        }

        .navbar-logo:hover {
          transform: scale(1.05); /* Slight scale on logo hover */
        }

        .navbar-nav li a {
          color: #e0e0e0; /* Softer white */
          text-decoration: none;
          font-weight: 500;
          font-size: 1.05rem; /* Slightly larger font */
          transition: 0.3s ease-in-out;
          padding: 8px 15px; /* Refined padding */
          position: relative; /* For underline effect */
        }

        .navbar-nav li a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #00ff64; /* Vibrant green underline */
          transition: width 0.3s ease-in-out;
        }

        .navbar-nav li a:hover::after,
        .navbar-nav li a.active::after {
          width: 100%;
        }

        .navbar-nav li a.active,
        .navbar-nav li a:hover {
          color: #00ff64; /* Vibrant green for active/hover */
          transform: translateY(-3px); /* More noticeable lift */
        }

        .menu-toggle {
          cursor: pointer;
          z-index: 1000;
          padding: 10px; /* Make the click area larger */
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .menu-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* FULL SCREEN MOBILE DRAWER */
        .mobile-drawer-wrapper {
          position: fixed;
          top: 0;
          right: 0;
          width: 0;
          height: 100vh;
          background: rgba(10, 17, 40, 0.98); /* Nearly opaque background */
          z-index: 998;
          overflow-x: hidden;
          transition: width 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce effect transition */
          box-shadow: -8px 0 20px rgba(0, 0, 0, 0.6); /* Stronger shadow */
        }

        .mobile-drawer-wrapper.open {
          width: 80%; /* Wider drawer for mobile */
        }

        .mobile-drawer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 100px 30px 20px 30px; /* More top padding for content */
          gap: 25px; /* More space between items */
          height: 100%;
        }

        .mobile-drawer li {
            width: 100%;
        }

        .mobile-drawer li a {
          color: #f0f0f0; /* Soft white */
          text-decoration: none;
          font-size: 1.4rem; /* Larger font for readability */
          padding: 18px 25px; /* Increased padding */
          width: 100%;
          display: flex;
          align-items: center;
          border-radius: 10px; /* More pronounced rounded corners */
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease-out;
          font-weight: 600; /* Slightly bolder */
          letter-spacing: 0.5px; /* A little letter spacing */
        }

        .mobile-drawer li a.active {
          font-weight: 700; /* Even bolder for active */
          color: #00ff64; /* Vibrant green active */
          background-color: rgba(0, 255, 100, 0.1); /* Subtle green tint */
          border-left: 6px solid #00ff64; /* Thicker, vibrant border */
          transform: translateX(5px); /* Slight slide to the right for active */
        }

        .mobile-drawer li a:hover {
          color: #00ff64;
          background-color: rgba(255, 255, 255, 0.05);
          transform: translateX(3px); /* Slight slide on hover */
        }

        @media (max-width: 768px) {
          .navbar-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarComponent;