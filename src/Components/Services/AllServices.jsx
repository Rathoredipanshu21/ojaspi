import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

import {
  FaLaptopCode,
  FaChartLine,
  FaUserShield,
  FaMoneyBillWave,
  FaUserTie,
  FaBullhorn,
  FaHandshake,
  FaArrowRight,
  // Main service icons (for overview cards)
  FaHeadset, // Customer Retention & CPE
  FaCheckCircle, // Customer Verification
  FaCalculator, // Financial Services
  FaUsers, // HR Services
  FaGlobe, // Web Development
  FaRegChartBar, // Digital Marketing

  // Detailed feature icons (for lists within detailed sections)
  FaHourglassHalf, // Retention: Personalized Follow-ups
  FaUserCog, // Retention: Customer Experience Enhancement
  FaGift, // Retention: Loyalty Program Integration
  FaComments, // Retention: Feedback & Survey Management
  FaShieldAlt, // Retention: Churn Prediction & Prevention - Confirmed imported

  FaFingerprint, // Verification: Real-time KYC
  FaBriefcase, // Verification: Background Verification
  FaFileAlt, // Verification: Address & Document Validation
  FaLock, // Verification: Fraud Detection & Prevention
  FaMobileAlt, // Verification: Biometric Verification

  FaGavel, // Financial: Debt Recovery Solutions
  FaCreditCard, // Financial: EMI Collection & Management
  FaBuilding, // Financial: Financial B2B/B2C Solutions
  FaDatabase, // Financial: Accounting & Bookkeeping - Confirmed imported
  FaBalanceScale, // Financial: Compliance & Advisory

  FaClipboardList, // HR: Talent Acquisition & Recruitment
  FaUserFriends, // HR: Contractual & Permanent Staffing
  FaMoneyBillAlt, // HR: Payroll Management
  FaFileSignature, // HR: Statutory Compliance
  FaIdCard, // HR: Background Verification - Confirmed imported

  FaCogs, // Web Dev: Custom Software Development - Confirmed imported
  FaDesktop, // Web Dev: Dynamic Website Design & Development
  FaShoppingCart, // Web Dev: E-commerce Platforms - Confirmed imported
  FaCode, // Web Dev: PHP, React, MERN Stack Development
  FaBrush, // Web Dev: Mobile-First & Responsive Design

  FaFacebookF, // Digital Marketing: Meta Ads - Confirmed imported
  FaInstagram, // Digital Marketing: Instagram Boosts - Confirmed imported
  FaSearchDollar, // Digital Marketing: SEO & Search Engine Marketing
  FaShareAlt, // Digital Marketing: Social Media Management
  FaChartPie, // Digital Marketing: Performance Marketing & Analytics

  // General icons (for "Why Choose Us" and other generic sections)
  FaLightbulb, // Innovative Solutions
  FaRocket, // Growth
  FaServer, // Backend/cloud type for general tech
  FaCubes, // General for solutions/structure
  FaStar, // For quality/excellence
  FaCoins // Confirmed imported and specifically checked
} from 'react-icons/fa';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS with engaging options
    setTimeout(() => AOS.init({
      duration: 1200, // Animation duration
      once: true,    // Only animate once per element
      offset: 150,   // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-out-cubic', // Smoother easing function
    }), 100);
  }, []);

  const serviceCategories = [
    {
      icon: <FaHeadset size={50} className="text-info mb-3" />,
      detailIcon: <FaComments size={50} className="text-info mb-3" />, // Different icon for detail section
      title: 'Customer Retention & CPE',
      description: 'Maximize customer lifetime value by enhancing satisfaction and loyalty. Our strategies focus on personalized engagement, feedback loops, and proactive support to build lasting relationships.',
      link: '/retention-cpe',
      details: [
        { feature: 'Personalized Follow-ups', icon: <FaHourglassHalf className="me-2 text-gold" /> },
        { feature: 'Customer Experience Enhancement', icon: <FaUserCog className="me-2 text-gold" /> },
        { feature: 'Loyalty Program Integration', icon: <FaGift className="me-2 text-gold" /> },
        { feature: 'Feedback & Survey Management', icon: <FaComments className="me-2 text-gold" /> },
        { feature: 'Churn Prediction & Prevention', icon: <FaShieldAlt className="me-2 text-gold" /> }
      ],
    },
    {
      icon: <FaCheckCircle size={50} className="text-success mb-3" />,
      detailIcon: <FaUserShield size={50} className="text-success mb-3" />, // Different icon for detail section
      title: 'Customer Verification Services',
      description: 'Ensure secure and seamless onboarding with robust verification processes. We mitigate fraud risks, enhance compliance, and streamline identity checks for a trustworthy customer base.',
      link: '/customer-verification',
      details: [
        { feature: 'Real-time KYC & Identity Verification', icon: <FaFingerprint className="me-2 text-gold" /> },
        { feature: 'Background Verification', icon: <FaBriefcase className="me-2 text-gold" /> },
        { feature: 'Address & Document Validation', icon: <FaFileAlt className="me-2 text-gold" /> },
        { feature: 'Fraud Detection & Prevention', icon: <FaLock className="me-2 text-gold" /> },
        { feature: 'Biometric Verification', icon: <FaMobileAlt className="me-2 text-gold" /> }
      ],
    },
    {
      icon: <FaMoneyBillWave size={50} className="text-warning mb-3" />,
      detailIcon: <FaCoins size={50} className="text-warning mb-3" />, // Different icon for detail section. FaCoins is used here.
      title: 'Comprehensive Financial Services',
      description: 'Navigate complex financial landscapes with expert advisory, meticulous accounting, and proactive compliance management. From audits to strategic planning, we safeguard your financial health.',
      link: '/financial-services',
      details: [
        { feature: 'Debt Recovery Solutions', icon: <FaGavel className="me-2 text-gold" /> },
        { feature: 'EMI Collection & Management', icon: <FaCreditCard className="me-2 text-gold" /> },
        { feature: 'Financial B2B/B2C Solutions', icon: <FaBuilding className="me-2 text-gold" /> },
        { feature: 'Accounting & Bookkeeping', icon: <FaDatabase className="me-2 text-gold" /> },
        { feature: 'Compliance & Advisory', icon: <FaBalanceScale className="me-2 text-gold" /> }
      ],
    },
    {
      icon: <FaUserTie size={50} className="text-light-blue mb-3" />,
      detailIcon: <FaUsers size={50} className="text-light-blue mb-3" />, // Different icon for detail section
      title: 'End-to-End HR Services',
      description: 'Optimize your human resources with our full suite of services, including talent acquisition, flexible staffing, accurate payroll management, and comprehensive statutory compliance.',
      link: '/hr-services',
      details: [
        { feature: 'Talent Acquisition & Recruitment', icon: <FaClipboardList className="me-2 text-gold" /> },
        { feature: 'Contractual & Permanent Staffing', icon: <FaUserFriends className="me-2 text-gold" /> },
        { feature: 'Payroll Management', icon: <FaMoneyBillAlt className="me-2 text-gold" /> },
        { feature: 'Statutory Compliance', icon: <FaFileSignature className="me-2 text-gold" /> },
        { feature: 'Background Verification (BGV)', icon: <FaIdCard className="me-2 text-gold" /> }
      ],
    },
    {
      icon: <FaGlobe size={50} className="text-gold mb-3" />,
      detailIcon: <FaLaptopCode size={50} className="text-gold mb-3" />, // Different icon for detail section
      title: 'Web & Software Development',
      description: 'Transform your digital presence with custom-built websites, e-commerce solutions, and robust software applications. We use cutting-edge technologies to bring your vision to life with dynamic, scalable solutions.',
      link: '/web-development',
      details: [
        { feature: 'Custom Software Development (ERP, CRM)', icon: <FaCogs className="me-2 text-gold" /> },
        { feature: 'Dynamic Website Design & Development', icon: <FaDesktop className="me-2 text-gold" /> },
        { feature: 'E-commerce Platforms (WordPress, Shopify)', icon: <FaShoppingCart className="me-2 text-gold" /> },
        { feature: 'PHP, React, MERN Stack Development', icon: <FaCode className="me-2 text-gold" /> },
        { feature: 'Mobile-First & Responsive Design', icon: <FaBrush className="me-2 text-gold" /> }
      ],
    },
    {
      icon: <FaRegChartBar size={50} className="text-danger mb-3" />,
      detailIcon: <FaBullhorn size={50} className="text-danger mb-3" />, // Different icon for detail section
      title: 'Results-Driven Digital Marketing',
      description: 'Amplify your brand\'s reach and engagement with data-backed digital marketing strategies. Specializing in Meta Ads and Instagram boosts, we drive targeted traffic and convert leads into loyal customers.',
      link: '/digital-marketing',
      details: [
        { feature: 'Meta Ads (Facebook & Instagram)', icon: <FaFacebookF className="me-2 text-gold" /> },
        { feature: 'Instagram Boosts & Organic Growth', icon: <FaInstagram className="me-2 text-gold" /> },
        { feature: 'SEO & Search Engine Marketing', icon: <FaSearchDollar className="me-2 text-gold" /> },
        { feature: 'Social Media Management', icon: <FaShareAlt className="me-2 text-gold" /> },
        { feature: 'Performance Marketing & Analytics', icon: <FaChartPie className="me-2 text-gold" /> }
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: '#1A232F', color: '#E0E0E0', minHeight: '100vh' }}>

      {/* Hero Section */}
      <section className="py-5 text-center text-md-start" style={{ backgroundColor: '#1A232F', borderBottom: '6px solid #FFD700' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right" data-aos-delay="100">
              <h1 className="fw-bold display-4 text-gold mb-3">
                Your Partner for Digital Growth & Business Excellence
              </h1>
              <p className="lead text-light-gray mb-4">
                Explore our comprehensive range of services designed to empower your business, streamline operations, and accelerate your success in the digital age.
              </p>
              <Link
                to="/contact"
                className="btn btn-lg rounded-pill"
                style={{ backgroundColor: '#FFD700', color: '#1A232F', padding: '14px 40px', fontWeight: 700, fontSize: '1.1rem' }}
                data-aos="fade-up" data-aos-delay="300"
              >
                Get a Personalized Consultation
              </Link>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <FaHandshake size={200} className="text-gold animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* All Services Grid Overview */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Our Core Service Offerings
          </h2>
          <div className="row g-4 justify-content-center">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <div className="p-4 rounded-4 shadow bg-dark-card h-100 text-center service-card-hover d-flex flex-column">
                  <div className="flex-grow-1">
                    {service.icon}
                    <h5 className="fw-bold text-white mt-3 mb-2">{service.title}</h5>
                    <p className="text-light-gray fs-6" style={{ lineHeight: '1.7' }}>{service.description}</p>
                  </div>
                  <Link
                    to={service.link}
                    className="btn btn-outline-light mt-4 rounded-pill stretched-link"
                    style={{ borderColor: '#FFD700', color: '#FFD700', fontWeight: 'bold' }}
                  >
                    Learn More <FaArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Detailed Service Sections */}
      {serviceCategories.map((service, index) => (
        <section
          key={`detail-${index}`}
          className="py-5"
          style={{ backgroundColor: index % 2 === 0 ? '#1A232F' : '#202C39' }}
        >
          <div className="container">
            <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
              {service.title} - In Detail
            </h2>
            <div className={`row align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'} mb-5`}>
              <div
                className="col-md-6 text-center text-md-start"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay="100"
              >
                {/* Dynamically render a large icon with styling instead of image */}
                <div className="service-icon-display rounded-circle d-flex align-items-center justify-content-center mx-auto mx-md-0 mb-4 shadow-lg"
                     style={{
                       width: '180px',
                       height: '180px',
                       backgroundColor: index % 2 === 0 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 188, 212, 0.1)',
                       marginBottom: '1.5rem',
                       transition: 'background-color 0.3s ease'
                     }}
                     data-aos="zoom-in" data-aos-delay="150"
                >
                  {React.cloneElement(service.icon, { size: 100, className: `service-large-icon ${service.icon.props.className.replace('mb-3', '')}` })}
                </div>

                <h3 className="fw-bold text-white mb-3">{service.title}</h3>
                <p className="text-light-gray mb-4">
                  {/* Dynamic description based on service type */}
                  {service.title === 'Customer Retention & CPE' && 'Dive deeper into how our expertise in Customer Retention & CPE can transform your business. We go beyond basic services to deliver comprehensive solutions tailored to your unique challenges.'}
                  {service.title === 'Customer Verification Services' && 'Our Customer Verification Services are designed to create a secure and trusted environment for your operations. Explore the various layers of verification we implement to protect your business and customers.'}
                  {service.title === 'Comprehensive Financial Services' && 'Gain complete control and clarity over your finances with our Comprehensive Financial Services. We offer a strategic approach to financial management, ensuring compliance and optimizing your fiscal performance.'}
                  {service.title === 'End-to-End HR Services' && 'Unlock the full potential of your workforce with our End-to-End HR Services. From attracting top talent to ensuring seamless daily operations and compliance, we handle every HR aspect with precision.'}
                  {service.title === 'Web & Software Development' && 'Revolutionize your digital footprint with our Web & Software Development services. We build powerful online experiences and intelligent software, turning your ideas into tangible, high-performing assets.'}
                  {service.title === 'Results-Driven Digital Marketing' && 'Make significant noise in your market with our Results-Driven Digital Marketing. We specialize in strategic campaigns that not only boost your visibility but also drive direct conversions and build a loyal customer base.'}
                </p>
                <ul className="list-unstyled text-light-gray small-text">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="mb-2" data-aos="fade-up" data-aos-delay={dIdx * 100 + 200}>
                      {detail.icon} {detail.feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="btn btn-outline-light mt-4 rounded-pill"
                  style={{ borderColor: service.icon.props.className.includes('text-info') ? '#00BCD4' : service.icon.props.className.includes('text-success') ? '#4CAF50' : service.icon.props.className.includes('text-warning') ? '#FFC107' : service.icon.props.className.includes('text-light-blue') ? '#00BFFF' : service.icon.props.className.includes('text-gold') ? '#FFD700' : '#F44336', color: service.icon.props.className.includes('text-info') ? '#00BCD4' : service.icon.props.className.includes('text-success') ? '#4CAF50' : service.icon.props.className.includes('text-warning') ? '#FFC107' : service.icon.props.className.includes('text-light-blue') ? '#00BFFF' : service.icon.props.className.includes('text-gold') ? '#FFD700' : '#F44336', fontWeight: 'bold' }}
                  data-aos="fade-up" data-aos-delay={service.details.length * 100 + 300}
                >
                  Discover More about {service.title} <FaArrowRight className="ms-2" />
                </Link>
              </div>
              <div
                className="col-md-6 text-center mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                {/* Using a different large icon for the visual representation */}
                <div className="service-icon-display-large rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-lg"
                     style={{
                       width: '280px', // Larger size
                       height: '280px', // Larger size
                       backgroundColor: index % 2 === 0 ? 'rgba(255, 215, 0, 0.15)' : 'rgba(0, 188, 212, 0.15)', // Slightly more opaque
                       boxShadow: '0 0 25px rgba(255, 215, 0, 0.3)', // Enhanced glow
                       transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
                     }}
                     data-aos="zoom-in" data-aos-delay="250"
                >
                  {React.cloneElement(service.detailIcon, { size: 150, className: `service-large-icon ${service.detailIcon.props.className.replace('mb-3', '')}` })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- */}

      {/* Section: Why Choose Our Services (General - Consolidated) */}
      <section className="py-5 bg-dark-card">
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Why We Are Your Ideal Partner
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Our commitment to your success is unwavering. We combine deep industry knowledge with innovative solutions to deliver unmatched value across all our services.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaChartLine size={50} className="text-success mb-3" />
                  <h4 className="fw-bold text-white mb-3">Proven Results</h4>
                  <p className="card-text text-light-gray">
                    We focus on strategies that yield measurable outcomes, ensuring a significant return on your investment and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaLightbulb size={50} className="text-warning mb-3" />
                  <h4 className="fw-bold text-white mb-3">Innovative Solutions</h4>
                  <p className="card-text text-light-gray">
                    Leveraging cutting-edge technologies and creative thinking to solve complex problems and drive efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaHandshake size={50} className="text-info mb-3" />
                  <h4 className="fw-bold text-white mb-3">Client-Centric Partnership</h4>
                  <p className="card-text text-light-gray">
                    Your goals are our priority. We offer transparent communication and dedicated support, building trust every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Final Call to Action */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1A232F' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-gold mb-4">
            Ready to Accelerate Your Business Growth?
          </h2>
          <p className="lead text-light-gray mb-5">
            Our team is ready to collaborate with you to understand your unique challenges and deliver tailored solutions that drive efficiency, engagement, and profitability. Contact us today to begin your transformation.
          </p>
          <Link
            to="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#FFD700', color: '#1A232F', padding: '16px 50px', fontWeight: 700, fontSize: '1.3rem' }}
            data-aos="zoom-in" data-aos-delay="200"
          >
            Start Your Project Today!
          </Link>
        </div>
      </section>

      {/* NO FOOTER SECTION */}

      {/* Custom Styles */}
      <style jsx>{`
        .text-gold { color: #FFD700 !important; } /* Golden color for main headings */
        .text-light-gray { color: #E0E0E0 !important; } /* A softer white */
        .text-light-gray-50 { color: rgba(224, 224, 224, 0.7) !important; } /* For subtle text */
        .text-info { color: #00BCD4 !important; } /* Consistent info blue */
        .text-success { color: #4CAF50 !important; } /* Consistent success green */
        .text-warning { color: #FFC107 !important; } /* Consistent warning yellow */
        .text-danger { color: #F44336 !important; } /* Consistent danger red */
        .text-light-blue { color: #00BFFF !important; } /* Custom for HR Services */
        .bg-dark-card { background-color: #2b3e50 !important; } /* Slightly lighter dark for cards */
        .bg-darker-card { background-color: #263238 !important; } /* Even darker for nested cards */

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-scale {
          animation: scalePulse 2s infinite alternate;
        }
        @keyframes scalePulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .service-card-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          border: 1px solid transparent; /* Initial transparent border */
        }
        .service-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: #FFD700; /* Gold border on hover */
        }

        .small-text li {
            font-size: 0.95rem; /* Slightly smaller font for list items */
        }
        .service-large-icon {
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.6)); /* Enhanced glow effect */
            transition: filter 0.3s ease;
        }
        .service-icon-display {
            border: 2px solid rgba(255, 215, 0, 0.3); /* Subtle gold border */
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.2)); /* Initial glow */
            transition: all 0.3s ease;
        }
        .service-icon-display:hover {
            border-color: #FFD700; /* Solid gold border on hover */
            filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.8)); /* Stronger glow on hover */
        }
        .service-icon-display-large {
          border: 3px solid rgba(255, 215, 0, 0.4); /* Subtle gold border */
          filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.4)); /* Initial glow */
          transition: all 0.3s ease;
        }
        .service-icon-display-large:hover {
          border-color: #FFD700; /* Solid gold border on hover */
          filter: drop-shadow(0 0 35px rgba(255, 215, 0, 1)); /* Stronger glow on hover */
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
