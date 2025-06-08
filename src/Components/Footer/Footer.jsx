import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4 footer-bg">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start g-4">

          {/* Brand Info & Social Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gradient-warning-footer">
              OJASPI
            </h5>
            <p className="footer-description">
              We deliver a full suite of services including HR, customer verification, web solutions, and digital marketing tailored to meet business goals.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 social-icons mt-4">
              <a href="https://www.facebook.com/profile.php?id=61576385294921" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon"><FaFacebookF /></a>
              <a href="https://www.youtube.com/channel/UCRNwiIlyHffyEt6rk8sqrQQ" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-icon"><FaTwitter /></a>
              <a href="https://www.instagram.com/ojaspiservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/ojas-pi-51a294368/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gradient-warning-footer">
              Services
            </h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/retention-cpe">Retention & CPE</Link></li>
              <li><Link to="/customer-verification">Customer Verification</Link></li>
              <li><Link to="/financial-services">Financial Services</Link></li>
              <li><Link to="/hr-services">HR Services</Link></li>
              <li><Link to="/web-development">Web Development</Link></li>
              <li><Link to="/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services">All Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gradient-warning-footer">
              Quick Links
            </h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-gradient-warning-footer">
              Contact & Newsletter
            </h5>
            <p className="contact-info-item">
              <FaMapMarkerAlt className="me-2 footer-icon" /> Delhi, India
            </p>
            <p className="contact-info-item">
              <FaEnvelope className="me-2 footer-icon" /> info@ojaspi.com
            </p>
            <p className="contact-info-item">
              <FaPhoneAlt className="me-2 footer-icon" /> +91 98765 43210
            </p>

            <h6 className="text-white mt-4 mb-3">Stay Updated!</h6>
            <div className="input-group mb-3 newsletter-input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                aria-label="Your Email"
                aria-describedby="button-addon2"
                style={{ backgroundColor: '#28506C', borderColor: '#28506C', color: '#fff' }}
              />
              <button className="btn btn-outline-warning newsletter-btn" type="button" id="button-addon2">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4 footer-divider" />

        {/* Footer Bottom - Copyright */}
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <p className="mb-0 copyright-text">
              © {new Date().getFullYear()} OJASPI. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .footer-bg {
          background-color: #0C152C; /* Updated Dark Blue-Green */
          border-top: 5px solid #28506C;
          box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.4);
          font-family: 'Arial', sans-serif;
        }

        .text-gradient-warning-footer {
          color: #FFD700;
          font-weight: 700;
          letter-spacing: 0.05em;
          position: relative;
          display: inline-block;
          padding-bottom: 5px;
        }
        .text-gradient-warning-footer::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border-radius: 2px;
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }

        .social-icons a {
          color: #fff;
          font-size: 1.4rem;
          transition: transform 0.3s ease, color 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-icons a:hover {
          color: #FFD700;
          transform: translateY(-3px) scale(1.1);
          border-color: #FFD700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
        }

        .footer-links li {
          margin-bottom: 8px;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease, transform 0.2s ease;
          position: relative;
          padding-left: 15px;
        }
        .footer-links a::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #FFD700;
          font-size: 1.1em;
          line-height: 1;
        }
        .footer-links a:hover {
          color: #FFD700;
          transform: translateX(5px);
        }

        .contact-info-item {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        .footer-icon {
          color: #FFD700;
          font-size: 1.1rem;
        }

        .newsletter-input-group .form-control {
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }
        .newsletter-btn {
          border-top-right-radius: 0.5rem !important;
          border-bottom-right-radius: 0.5rem !important;
          background-color: #FFD700;
          color: #1C3B4A;
          border-color: #FFD700;
          transition: all 0.3s ease;
        }
        .newsletter-btn:hover {
          background-color: #FFA500 !important;
          border-color: #FFA500 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
        }

        .footer-divider {
          border-color: rgba(255, 255, 255, 0.15);
          margin-top: 3rem;
          margin-bottom: 2rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Responsive Adjustments */
        @media (max-width: 767.98px) {
          .text-md-start {
            text-align: center !important;
          }
          .justify-content-md-start {
            justify-content: center !important;
          }
          .footer-links li {
            text-align: center;
          }
          .footer-links a {
            padding-left: 0;
          }
          .footer-links a::before {
            display: none;
          }
          .contact-info-item {
            justify-content: center;
          }
          .newsletter-input-group {
            width: 90%;
            margin: 0 auto;
          }
          .newsletter-input-group .form-control,
          .newsletter-btn {
            border-radius: 0.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;