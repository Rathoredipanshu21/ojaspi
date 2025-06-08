// ✅ Contact.jsx — Stylish Contact Page with AOS, Icons, Bootstrap

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane,
  FaHeadset, FaCommentDots, FaClock, FaCalendarAlt, FaShieldAlt,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, // Added FaYoutube
  FaRocket // New icon for hero section
} from 'react-icons/fa'; // React Icons import

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Only animate once per element
      offset: 150,    // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-out-cubic', // Smoother easing function
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#0D152D', color: '#E0E0E0', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="py-5 text-center hero-section-contact position-relative" style={{ borderBottom: '6px solid #4A90E2', overflow: 'hidden' }}>
        <div className="container" data-aos="fade-down">
          <div className="row align-items-center justify-content-center">
            {/* Text Content */}
            <div className="col-lg-8 col-md-10 order-2 order-md-1"> {/* Adjusted order for smaller screens */}
              <h1 className="display-4 fw-bold text-white mb-3 text-shadow-lg">
                Connect With OJASPI
              </h1>
              <p className="lead text-light-gray mx-auto mb-4 text-shadow-sm" style={{ maxWidth: '800px' }}>
                We're eager to hear from you! Reach out for inquiries, support, or partnership opportunities.
              </p>
            </div>
            {/* Icon for Desktop (appears on the right) */}
            <div className="col-lg-4 col-md-2 d-none d-md-flex justify-content-center align-items-center order-1 order-md-2 mb-4 mb-md-0"> {/* Visible only on md and up, order changed */}
              <FaRocket className="hero-icon-right" data-aos="zoom-in" data-aos-delay="500" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Info & Form */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* Contact Information */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right" data-aos-delay="100">
              <h2 className="fw-bold text-gold mb-4">Get in Touch Directly</h2>
              <p className="text-light-gray mb-4">
                Our team is ready to assist you. Feel free to contact us via phone, email, or visit our office.
              </p>

              <ul className="list-unstyled contact-info-list">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200">
                  <FaPhone className="me-3 contact-icon-lg text-success-light" />
                  <div>
                    <span className="info-label">Phone Support:</span><br />
                    <a href="tel:+919876543210" className="info-value text-white-link">+91 98765 43210</a>
                  </div>
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300">
                  <FaEnvelope className="me-3 contact-icon-lg text-warning-light" />
                  <div>
                    <span className="info-label">Email Us:</span><br />
                    <a href="mailto:info@ojaspi.com" className="info-value text-white-link">info@ojaspi.com</a>
                  </div>
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400">
                  <FaMapMarkerAlt className="me-3 contact-icon-lg text-primary-blue" />
                  <div>
                    <span className="info-label">Visit Our Office:</span><br />
                    <address className="info-value mb-0">
                      123 Business Hub, Sector 18,<br />
                      Dwarka, Delhi - 110078, India
                    </address>
                  </div>
                </li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="500">
                  <FaClock className="me-3 contact-icon-lg text-info-light" />
                  <div>
                    <span className="info-label">Business Hours:</span><br />
                    <span className="info-value">Mon - Fri: 9:00 AM - 6:00 PM (IST)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
              <div className="bg-dark-card p-4 rounded-4 shadow-lg contact-form-card">
                <h3 className="fw-bold text-white mb-4 text-center">Send Us a Message</h3>
                <form>
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="fullName" className="form-label text-light-gray">Full Name</label>
                    <input type="text" className="form-control contact-input" id="fullName" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="300">
                    <label htmlFor="emailAddress" className="form-label text-light-gray">Email Address</label>
                    <input type="email" className="form-control contact-input" id="emailAddress" placeholder="Enter your email" required />
                  </div>
                  <div className="mb-3" data-aos="fade-up" data-aos-delay="400">
                    <label htmlFor="subject" className="form-label text-light-gray">Subject</label>
                    <input type="text" className="form-control contact-input" id="subject" placeholder="Subject of your inquiry" />
                  </div>
                  <div className="mb-4" data-aos="fade-up" data-aos-delay="500">
                    <label htmlFor="message" className="form-label text-light-gray">Your Message</label>
                    <textarea className="form-control contact-input" id="message" rows="5" placeholder="Type your message here..." required></textarea>
                  </div>
                  <div className="text-center" data-aos="fade-up" data-aos-delay="600">
                    <button type="submit" className="btn btn-primary-gradient rounded-pill px-5 py-3 fw-bold">
                      <FaPaperPlane className="me-2" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5" style={{ backgroundColor: '#0D152D' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Find Us on the Map
          </h2>
          <div className="map-container rounded-4 shadow-lg" data-aos="zoom-in" data-aos-delay="100">
            {/* Embedded Google Map iframe */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.664426501235!2d77.05436327538234!3d28.54924737571392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b11b9a9b139%3A0xb30491d9e2c6e6b5!2sSector%2018%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717805126135!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* Quick FAQ / Support Channels */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Have a Quick Question?
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaHeadset size={50} className="text-info-light mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Live Chat Support</h4>
                  <p className="card-text text-light-gray">
                    Get instant answers from our support team during business hours.
                  </p>
                  <button className="btn btn-outline-gold-sm mt-3">Start Chat</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaCommentDots size={50} className="text-success-light mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Read Our FAQ</h4>
                  <p className="card-text text-light-gray">
                    Find immediate answers to common questions in our comprehensive FAQ section.
                  </p>
                  <Link to="/faq" className="btn btn-outline-gold-sm mt-3">View FAQ</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaShieldAlt size={50} className="text-primary-blue mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Data Privacy</h4>
                  <p className="card-text text-light-gray">
                    Learn how we protect your information and ensure data security.
                  </p>
                  <Link to="/privacy-policy" className="btn btn-outline-gold-sm mt-3">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section (New) */}
      <section className="py-5" style={{ backgroundColor: '#0D152D' }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold text-gold mb-4">Connect With Us on Social Media</h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '700px' }}>
            Follow us to stay updated on our latest news, insights, and career opportunities.
          </p>
          <div className="d-flex justify-content-center gap-4 social-icons-large">
            <a href="https://www.instagram.com/ojaspiservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon-large"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/ojas-pi-51a294368/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon-large"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/profile.php?id=61576385294921" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon-large"><FaFacebookF /></a>
            <a href="https://www.youtube.com/channel/UC-YOUR-YOUTUBE-CHANNEL-ID" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-icon-large"><FaYoutube /></a> {/* Updated YouTube link */}
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-icon-large"><FaTwitter /></a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-5 text-center cta-section" style={{ backgroundColor: '#1A232F' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-gold mb-4 text-shadow-lg">
            Let's Start a Conversation Today!
          </h2>
          <p className="lead text-light-gray mb-5 text-shadow-sm">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
          <button
            type="button"
            className="btn btn-lg rounded-pill btn-primary-gradient-lg"
            data-aos="zoom-in" data-aos-delay="200"
            onClick={() => window.location.href = '#contact-form-section'}
          >
            Send Your Inquiry <FaPaperPlane className="ms-3" />
          </button>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        /* Color Palette */
        .text-gold { color: #FFD700 !important; }
        .text-white { color: #FFFFFF !important; }
        .text-light-gray { color: #E0E0E0 !important; }
        .text-info-light { color: #87CEEB !important; }
        .text-success-light { color: #8BC34A !important; }
        .text-warning-light { color: #FFEB3B !important; }
        .text-primary-blue { color: #4A90E2 !important; }

        /* Backgrounds */
        .hero-section-contact {
          background: linear-gradient(135deg, #0D152D 0%, #1A232F 100%) !important;
          position: relative;
          overflow: hidden;
        }
        .hero-section-contact::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 10% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
          z-index: 0;
          opacity: 0.7;
          animation: background-pan 20s linear infinite alternate;
        }

        .bg-dark-card { background-color: #2b3e50 !important; }
        .contact-input {
          background-color: #1A232F !important;
          border: 1px solid #4A90E2 !important;
          color: #E0E0E0 !important;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
        }
        .contact-input::placeholder {
          color: rgba(224, 224, 224, 0.6) !important;
        }
        .contact-input:focus {
          background-color: #1A232F !important;
          border-color: #FFD700 !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.25) !important;
          color: #E0E0E0 !important;
        }


        /* Text Shadows */
        .text-shadow-lg { text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); }
        .text-shadow-sm { text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4); }

        /* Buttons */
        .btn-primary-gradient {
          background: linear-gradient(45deg, #4A90E2, #6090E2);
          border: none;
          color: #fff;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          font-weight: 600;
        }
        .btn-primary-gradient:hover {
          background: linear-gradient(45deg, #6090E2, #4A90E2);
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
        }
        .btn-primary-gradient-lg {
          padding: 16px 50px !important;
          font-weight: 700 !important;
          font-size: 1.3rem !important;
        }
        .btn-outline-gold-sm {
          border-color: #FFD700 !important;
          color: #FFD700 !important;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          font-size: 0.9rem;
          padding: 8px 20px;
        }
        .btn-outline-gold-sm:hover {
          background-color: #FFD700 !important;
          color: #1A232F !important;
        }

        /* Contact Info List */
        .contact-info-list li {
          display: flex;
          align-items: flex-start;
          font-size: 1.1rem;
          color: #E0E0E0;
          margin-bottom: 20px;
        }
        .contact-icon-lg {
          font-size: 2.5rem;
          margin-right: 15px;
          flex-shrink: 0;
          filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.3));
        }
        .info-label {
          font-weight: bold;
          color: #FFD700;
          display: block;
          margin-bottom: 3px;
        }
        .info-value {
          color: #FFFFFF;
          text-decoration: none;
        }
        .text-white-link {
          color: #FFFFFF !important;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .text-white-link:hover {
          color: #FFD700 !important;
        }

        /* Contact Form */
        .contact-form-card {
          border: 1px solid rgba(255, 215, 0, 0.1);
        }
        /* Map Section */
        .map-container {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .map-container iframe,
        .map-container img {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
          border: 0;
        }

        /* Social Icons (New) */
        .social-icons-large a {
          color: #fff;
          font-size: 2.5rem; /* Larger icons */
          transition: transform 0.3s ease, color 0.3s ease, filter 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 5px rgba(0,0,0,0.3)); /* Initial subtle shadow */
        }
        .social-icons-large a:hover {
          color: #FFD700; /* Gold on hover */
          transform: translateY(-5px) scale(1.1);
          filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.7)); /* Stronger glow on hover */
        }

        /* Hero Icon */
        .hero-icon-right {
          font-size: 8rem; /* Large size for the hero icon */
          color: rgba(74, 144, 226, 0.8); /* Primary blue with some transparency */
          filter: drop-shadow(0 0 20px rgba(74, 144, 226, 0.6)); /* Glow effect */
          animation: pulse-glow 3s infinite alternate; /* Animation */
        }
        @keyframes pulse-glow {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(74, 144, 226, 0.6));
            opacity: 0.8;
          }
          100% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 30px rgba(74, 144, 226, 0.9));
            opacity: 1;
          }
        }


        /* Animations */
        @keyframes background-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .service-card-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          border: 1px solid transparent;
        }
        .service-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: #FFD700;
        }
        .icon-glow-sm {
            filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.4));
            transition: filter 0.3s ease;
        }
        .service-card-hover:hover .icon-glow-sm {
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
        }

        /* Responsive Adjustments */
        @media (max-width: 767.98px) {
          .display-4 { font-size: 2.5rem !important; }
          .display-5 { font-size: 2rem !important; }
          .lead { font-size: 1rem !important; }
          .btn-lg { padding: 10px 25px !important; font-size: 1rem !important; }
          .btn-primary-gradient-lg { padding: 12px 30px !important; font-size: 1.1rem !important; }
          .contact-info-list li {
            font-size: 1rem;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .contact-icon-lg {
            margin-right: 0;
            margin-bottom: 10px;
          }
          .social-icons-large {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
          .footer-social-icon-large {
            font-size: 2rem;
          }
          .hero-icon-right { /* Hide or adjust for smaller screens */
            display: none !important; /* Hide on small screens by default */
          }
        }

        /* Specific adjustment for medium screens (md) to show icon */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .hero-icon-right {
                font-size: 6rem; /* Smaller icon on medium screens */
            }
        }
      `}</style>
    </div>
  );
};

export default Contact;