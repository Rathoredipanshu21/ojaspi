// ✅ MegaHomePage.jsx — Comprehensive & Engaging Homepage with AOS, Icons, and Full Responsive Design

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import {
  FaHandshake, FaSmile, FaUsers, FaLaptopCode, FaUserShield,
  FaBriefcase, FaChartLine, FaBullhorn, FaUserCheck, FaLightbulb,
  FaEye, FaBullseye, FaCode, FaStar, FaArrowRight,
  FaHistory, FaGem, FaHeart, FaTools, FaCogs,
  FaQuoteLeft, FaLeaf, FaAward, FaPuzzlePiece, FaRocket,
  FaCubes, FaHeadset, FaMoneyBillWave, FaCheckCircle,
  FaSearchDollar, FaFacebookF, FaChartPie, FaGlobe, FaShoppingCart, FaServer
} from 'react-icons/fa'; // Importing all necessary icons

const HomeSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
    AOS.init({
      duration: 1200,    // Animation duration
      once: true,        // Only animate once per element
      offset: 150,       // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-out-cubic', // Smoother easing function
    });
  }, []);

  const coreValues = [
    {
      icon: <FaHeart size={40} className="text-pink-passion mb-3" />,
      title: 'Client-Centricity',
      description: 'Your success is our top priority. We listen, understand, and tailor solutions to meet your unique needs.'
    },
    {
      icon: <FaLightbulb size={40} className="text-warning-light mb-3" />, // Adjusted to warning-light
      title: 'Innovation & Adaptability',
      description: 'We embrace new technologies and creative approaches, constantly evolving to provide cutting-edge solutions.'
    },
    {
      icon: <FaHandshake size={40} className="text-info-light mb-3" />,
      title: 'Integrity & Trust',
      description: 'We operate with unwavering honesty and transparency, building lasting relationships based on mutual respect.'
    }
  ];

  const servicesFullList = [
    {
      icon: <FaHeadset size={50} className="text-info-light mb-3" />,
      title: 'Customer Retention & CPE',
      description: 'Maximize customer lifetime value by enhancing satisfaction and loyalty with personalized engagement.'
    },
    {
      icon: <FaCheckCircle size={50} className="text-success-light mb-3" />, // Adjusted to success-light
      title: 'Customer Verification Services',
      description: 'Ensure secure and seamless onboarding with robust verification processes to mitigate fraud risks.'
    },
    {
      icon: <FaMoneyBillWave size={50} className="text-warning-light mb-3" />, // Adjusted to warning-light
      title: 'Comprehensive Financial Services',
      description: 'Navigate complex financial landscapes with expert advisory, meticulous accounting, and proactive compliance.'
    },
    {
      icon: <FaUsers size={50} className="text-primary-blue mb-3" />,
      title: 'End-to-End HR Services',
      description: 'Optimize human resources with talent acquisition, flexible staffing, accurate payroll, and statutory compliance.'
    },
    {
      icon: <FaGlobe size={50} className="text-gold mb-3" />,
      title: 'Web & Software Development',
      description: 'Transform digital presence with custom websites, e-commerce solutions, and robust software applications.'
    },
    {
      icon: <FaChartLine size={50} className="text-danger-light mb-3" />, // Adjusted to danger-light
      title: 'Results-Driven Digital Marketing',
      description: 'Amplify brand reach and engagement with data-backed strategies, specializing in Meta Ads and SEO.'
    },
  ];

  const testimonials = [
    {
      quote: "Partnering with them was a game-changer for our business. Their digital marketing strategies brought us unprecedented growth!",
      author: "Jane Doe, CEO of InnovateCorp"
    },
    {
      quote: "The custom software solution they developed streamlined our operations beautifully. Professional, efficient, and truly understood our needs.",
      author: "John Smith, COO of GlobalConnect"
    },
    {
      quote: "Their HR services are invaluable. They handled everything from recruitment to compliance, allowing us to focus on our core business.",
      author: "Emily White, HR Director at FutureEdge"
    }
  ];

  return (
    <div style={{ backgroundColor: '#1A232F', color: '#E0E0E0', minHeight: '100vh' }}>

      {/* 1. Hero Section - Modern & Engaging */}
      <section className="py-5 text-center text-md-start hero-section" style={{ borderBottom: '6px solid #4A90E2' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right" data-aos-delay="100">
              <h1 className="fw-bold display-4 text-white mb-3 text-shadow-lg">
                Your Strategic Partner for Digital Transformation & Growth
              </h1>
              <p className="lead text-light-gray mb-4 text-shadow-sm">
                Empowering businesses with innovative HR, Financial, Digital Marketing, and bespoke Software Solutions.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start mb-4 flex-wrap">
                <Link
                  to="/services"
                  className="btn btn-lg rounded-pill me-md-3 mb-3 mb-md-0 btn-primary-gradient"
                  data-aos="fade-up" data-aos-delay="300"
                >
                  Explore Our Services
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-lg rounded-pill btn-outline-gold"
                  data-aos="fade-up" data-aos-delay="400"
                >
                  Get a Free Consultation <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <FaBriefcase size={200} className="text-info-light animate-float icon-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Differentiators / Why Choose Us */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Why Choose Us? Your Success, Our Priority
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaCubes size={50} className="text-gold mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Holistic Solutions</h4>
                  <p className="card-text text-light-gray">
                    Integrated HR, financial, marketing, and tech services for complete business transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaPuzzlePiece size={50} className="text-primary-blue mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Tailored Strategies</h4>
                  <p className="card-text text-light-gray">
                    Bespoke solutions crafted to perfectly align with your unique business goals and challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaHandshake size={50} className="text-info-light mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Unrivaled Support</h4>
                  <p className="card-text text-light-gray">
                    Exceptional post-implementation support and ongoing guidance ensure your continuous success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Values (Previously Section 5) */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Values That Drive Our Excellence
          </h2>
          <div className="row g-4 justify-content-center">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
              >
                <div className="p-4 rounded-4 shadow bg-dark-card h-100 text-center service-card-hover d-flex flex-column">
                  <div className="flex-grow-1">
                    {React.cloneElement(value.icon, { className: `${value.icon.props.className} icon-glow-sm` })}
                    <h5 className="fw-bold text-white mt-3 mb-2">{value.title}</h5>
                    <p className="text-light-gray fs-6" style={{ lineHeight: '1.7' }}>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work / Our Process (Previously Section 6) */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Our Streamlined Project Process
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            We follow a proven methodology to ensure clarity, efficiency, and exceptional results for every project.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaEye size={60} className="text-info-light mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">1. Discover & Define</h5>
                <p className="text-light-gray">In-depth understanding of your vision and project requirements.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaCogs size={60} className="text-success-light mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">2. Design & Develop</h5>
                <p className="text-light-gray">Crafting innovative solutions with agile methodologies and regular feedback.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaRocket size={60} className="text-warning-light mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">3. Deploy & Optimize</h5>
                <p className="text-light-gray">Seamless launch, continuous monitoring, and ongoing optimization for peak performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials Carousel (Previously Section 7) */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            What Our Clients Say About Us
          </h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-delay="200">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="d-flex flex-column align-items-center text-center p-4 bg-dark-card rounded-4 shadow-lg mx-auto" style={{ maxWidth: '700px' }}>
                    <FaQuoteLeft size={50} className="text-gold mb-3 icon-glow" />
                    <p className="fs-5 fst-italic text-light-gray mb-4">"{testimonial.quote}"</p>
                    <p className="fw-bold text-white">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Call to Action - Services Page (Previously Section 8) */}
      <section className="py-5 text-center cta-section" style={{ backgroundColor: '#202C39' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-white mb-4 text-shadow-lg">
            Ready to See How We Can Help Your Business Grow?
          </h2>
          <p className="lead text-light-gray mb-5 text-shadow-sm">
            Dive deeper into our specialized services and discover the perfect solution for your unique challenges.
          </p>
          <Link
            to="/services"
            className="btn btn-lg rounded-pill btn-primary-gradient-lg"
            data-aos="zoom-in" data-aos-delay="200"
          >
            View All Services <FaArrowRight className="ms-3" />
          </Link>
        </div>
      </section>

      {/* 7. Technology Stack / Expertise Highlight (Previously Section 9) */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Powered by Modern Technologies
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            We leverage cutting-edge technologies and robust frameworks to build scalable, secure, and high-performance solutions.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaLaptopCode size={50} className="text-primary-blue mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Frontend & Backend</h4>
                <p className="card-text text-light-gray">
                  React, Node.js, Python, PHP, .NET – building responsive interfaces and powerful server-side logic.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaServer size={50} className="text-success-light mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Cloud & DevOps</h4>
                <p className="card-text text-light-gray">
                  AWS, Azure, Docker, Kubernetes – for scalable infrastructure and seamless deployments.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaChartPie size={50} className="text-warning-light mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Data & AI/ML</h4>
                <p className="card-text text-light-gray">
                  Data analytics, machine learning integrations for intelligent insights and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Fun Facts / Achievements (Dynamic Stats) (Previously Section 10) */}
      <section className="py-5 text-center bg-black" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-gold mb-3">Impactful Results, Proven Track Record</h2>
          <p className="text-light-gray mx-auto mb-5" style={{ maxWidth: '750px' }}>
            Our commitment to excellence translates into measurable success for our clients across various industries.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
              <FaUsers size={60} className="text-info-light mb-2 icon-glow-sm" />
              <h3 className="text-white fw-bold mb-1">1500+</h3>
              <p className="text-light-gray small">Clients Served Globally</p>
            </div>
            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
              <FaSmile size={60} className="text-success-light mb-2 icon-glow-sm" />
              <h3 className="text-white fw-bold mb-1">98%</h3>
              <p className="text-light-gray small">Client Satisfaction Rate</p>
            </div>
            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
              <FaRocket size={60} className="text-warning-light mb-2 icon-glow-sm" />
              <h3 className="text-white fw-bold mb-1">500+</h3>
              <p className="text-light-gray small">Successful Projects Completed</p>
            </div>
            <div className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
              <FaChartLine size={60} className="text-danger-light mb-2 icon-glow-sm" />
              <h3 className="text-white fw-bold mb-1">30%+</h3>
              <p className="text-light-gray small">Average Client Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industry Focus / Expertise Areas (Optional, if applicable) (Previously Section 11) */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Serving Diverse Industries
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Our solutions are adaptable and have driven success across a wide range of sectors.
          </p>
          <div className="row g-4 justify-content-center">
            {['Finance', 'Healthcare', 'E-commerce', 'Tech Startups', 'Education', 'Logistics'].map((industry, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2" data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
                <div className="bg-dark-card p-3 rounded-3 shadow h-100 d-flex align-items-center justify-content-center flex-column service-card-hover">
                  <FaBriefcase size={35} className="text-info-light mb-2 icon-glow-sm" />
                  <p className="fw-bold text-white mb-0">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Blog/Insights Snippet (Previously Section 12) */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Latest Insights & Resources
          </h2>
          <div className="row g-4 justify-content-center">
            {[{
              title: 'The Future of AI in Digital Marketing',
              desc: 'Explore how artificial intelligence is reshaping marketing strategies and consumer engagement.',
              link: '/blog/ai-digital-marketing'
            }, {
              title: 'Hiring Trends for 2025: What You Need to Know',
              desc: 'Stay ahead in talent acquisition with insights into the latest hiring trends and best practices.',
              link: '/blog/hiring-trends-2025'
            }, {
              title: 'Boosting Customer Retention with Smart Tech',
              desc: 'Learn practical strategies and technologies to keep your customers loyal and engaged.',
              link: '/blog/customer-retention-tech'
            }].map((article, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="fw-bold text-white mb-2">{article.title}</h5>
                    <p className="card-text text-light-gray small">{article.desc}</p>
                    <Link
                      to={article.link}
                      className="btn btn-outline-light mt-3 rounded-pill stretched-link btn-outline-gold-sm"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
            <Link to="/blog" className="btn btn-primary-gradient rounded-pill">
              View All Insights <FaArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action - Contact Us (Previously Section 13) */}
      <section className="py-5 text-center cta-section" style={{ backgroundColor: '#202C39' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-white mb-4 text-shadow-lg">
            Ready to Begin Your Growth Journey?
          </h2>
          <p className="lead text-light-gray mb-5 text-shadow-sm">
            Let's connect and discuss how our expertise can drive your business forward. We're eager to hear from you!
          </p>
          <Link
            to="/contact"
            className="btn btn-lg rounded-pill btn-primary-gradient-lg"
            data-aos="zoom-in" data-aos-delay="200"
          >
            Get In Touch Today!
          </Link>
        </div>
      </section>

      {/* 12. Footer (Previously Section 14) */}
    

      {/* Custom Styles */}
      <style jsx>{`
        /* Color Palette */
        .text-gold { color: #FFD700 !important; } /* Primary Accent Gold */
        .text-white { color: #FFFFFF !important; } /* Pure White for contrast */
        .text-light-gray { color: #E0E0E0 !important; } /* Soft White for general text */
        .text-light-gray-50 { color: rgba(224, 224, 224, 0.7) !important; } /* Muted White for footers */
        .text-info-light { color: #87CEEB !important; } /* Lighter Sky Blue */
        .text-success-light { color: #8BC34A !important; } /* Lighter Green */
        .text-warning-light { color: #FFEB3B !important; } /* Lighter Yellow/Amber */
        .text-danger-light { color: #EF5350 !important; } /* Lighter Red */
        .text-pink-passion { color: #ff69b4 !important; } /* Custom Pink */
        .text-primary-blue { color: #4A90E2 !important; } /* Primary Blue for buttons/accents */

        /* Backgrounds */
        .hero-section {
          background: linear-gradient(135deg, #1A232F 0%, #202C39 100%) !important;
          position: relative; /* Needed for pseudo-elements */
          overflow: hidden; /* Hide overflowing gradients */
        }
        .hero-section::before {
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
        .bg-darker-card { background-color: #263238 !important; }
        .bg-black { background-color: #000000 !important; }

        /* Buttons */
        .btn-primary-gradient {
          background: linear-gradient(45deg, #4A90E2, #6090E2);
          border: none;
          color: #fff;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
        .btn-outline-gold {
          border-color: #FFD700 !important;
          color: #FFD700 !important;
          transition: all 0.3s ease-in-out;
        }
        .btn-outline-gold:hover {
          background-color: #FFD700 !important;
          color: #1A232F !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 12px rgba(255, 215, 0, 0.3);
        }
        .btn-outline-gold-sm {
          border-color: #FFD700 !important;
          color: #FFD700 !important;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          font-size: 0.9rem; /* Smaller font for card buttons */
          padding: 8px 20px; /* Adjust padding */
        }
        .btn-outline-gold-sm:hover {
          background-color: #FFD700 !important;
          color: #1A232F !important;
        }


        /* Animations */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .service-card-hover, .team-card-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          border: 1px solid transparent;
        }
        .service-card-hover:hover, .team-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: #FFD700;
        }

        .icon-glow {
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.6));
            transition: filter 0.3s ease;
        }
        .icon-glow-sm {
            filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.4));
            transition: filter 0.3s ease;
        }
        .service-card-hover:hover .icon-glow-sm, .team-card-hover:hover .icon-glow {
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
        }

        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-sm {
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(255, 215, 0, 0.7);
          border-radius: 50%;
          padding: 10px;
        }
        .carousel-indicators [data-bs-target] {
            background-color: #FFD700;
            border: 1px solid #FFD700;
        }

        @keyframes background-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        /* Responsive Adjustments */
        @media (max-width: 767.98px) {
          .display-4 {
            font-size: 2.5rem !important; /* Smaller hero title on small screens */
          }
          .btn-lg {
            padding: 10px 25px !important;
            font-size: 1rem !important;
          }
          .btn-primary-gradient-lg {
            padding: 12px 30px !important;
            font-size: 1.1rem !important;
          }
          .d-flex.flex-wrap > .btn {
            width: 100%;
            margin-bottom: 10px !important; /* Add spacing between stacked buttons */
            margin-right: 0 !important; /* Remove right margin when stacked */
          }
          .text-md-start {
            text-align: center !important; /* Center text on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;