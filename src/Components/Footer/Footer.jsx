import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          /* ALL your previous styles pasted here unchanged for brevity */
          .footer {
            background-color: #0C152C;
            color: #ffffff;
            padding: 40px 20px;
            font-family: 'Inter', sans-serif;
            box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3);
            line-height: 1.6;
            border-radius: 8px;
            overflow: hidden;
          }

          .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1280px;
            margin: 0 auto;
            gap: 30px;
          }

          .footer-section {
            flex: 1;
            min-width: 280px;
            margin-bottom: 20px;
            padding: 0 10px;
          }

          .footer-section h2 {
            font-size: 1.6em;
            margin-bottom: 25px;
            color: #E0E0E0;
            position: relative;
            padding-bottom: 8px;
            letter-spacing: 0.5px;
          }

          .footer-section h2::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 60px;
            height: 4px;
            background-color: #FFD700;
            border-radius: 2px;
            transition: width 0.4s ease-in-out;
          }

          .footer-section h2:hover::after {
            width: 100px;
          }

          .footer-section p {
            font-size: 0.98em;
            color: #B0B0B0;
            margin-bottom: 15px;
          }

          .footer-section ul {
            list-style: none;
            padding: 0;
          }

          .footer-section ul li {
            margin-bottom: 12px;
          }

          .footer-section ul li a {
            color: #B0B0B0;
            text-decoration: none;
            font-size: 0.98em;
            transition: color 0.3s ease, transform 0.3s ease, letter-spacing 0.3s ease;
            display: inline-block;
            padding-left: 5px;
          }

          .footer-section ul li a:hover {
            color: #FFD700;
            transform: translateX(8px);
            letter-spacing: 0.8px;
          }

          .social-icons {
            margin-top: 25px;
            display: flex;
            gap: 20px;
          }

          .social-icons a {
            color: #ffffff;
            font-size: 1.6em;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          }

          .social-icons a:hover {
            background-color: #FFD700;
            transform: translateY(-7px) scale(1.15);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
          }

          .footer-section.contact-info p {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .footer-section.contact-info p i {
            color: #FFD700;
            font-size: 1.25em;
            padding-top: 2px;
          }

          .newsletter-form {
            display: flex;
            margin-top: 25px;
            width: 100%;
            max-width: 350px;
          }

          .newsletter-form input[type="email"] {
            flex-grow: 1;
            padding: 14px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px 0 0 8px;
            font-size: 0.95em;
            background-color: rgba(255, 255, 255, 0.08);
            color: #ffffff;
            outline: none;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .newsletter-form input[type="email"]::placeholder {
            color: #A0A0A0;
          }

          .newsletter-form button {
            padding: 14px 22px;
            background-color: #FFD700;
            color: #0C152C;
            border: none;
            border-radius: 0 8px 8px 0;
            cursor: pointer;
            font-size: 0.95em;
            font-weight: bold;
            letter-spacing: 0.5px;
            transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
            text-transform: uppercase;
          }

          .newsletter-form button:hover {
            background-color: #E6C200;
            transform: scale(1.02);
            box-shadow: 0 6px 15px rgba(255, 215, 0, 0.5);
          }

          .footer-bottom {
            text-align: center;
            margin-top: 50px;
            padding-top: 25px;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            font-size: 0.88em;
            color: #A0A0A0;
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We are a leading provider of innovative solutions, committed to
              delivering excellence and exceeding expectations in the digital landscape.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/portfolio">Our Portfolio</a></li>
              <li><a href="/team">Meet The Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Our Blog</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section support">
            <h2>Support</h2>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/site-map">Site Map</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h2>Contact Info</h2>
            <p><i className="fas fa-map-marker-alt"></i> 123 Digital Avenue, Tech City, State 12345, India</p>
            <p><i className="fas fa-phone"></i> +91 987 654 3210</p>
            <p><i className="fas fa-envelope"></i> contact@innovativesolutions.com</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email for updates" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Innovative Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
