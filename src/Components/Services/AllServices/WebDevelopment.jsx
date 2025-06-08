import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaLaptopCode,
  FaWordpress,
  FaShoppingCart,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaRocket,
  FaTools,
  FaLightbulb,
  FaHandshake,
  FaRupeeSign,
  FaGlobe,
  FaCogs,
  FaClipboardCheck // <--- This was missing!
} from 'react-icons/fa'; // Added more specific icons

const SoftwareServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS with more subtle and engaging options
    setTimeout(() => AOS.init({
      duration: 1200, // Animation duration
      once: true, // Only animate once
      offset: 120, // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-in-out', // Easing function
    }), 100);
  }, []);

  return (
    <div style={{ backgroundColor: '#202C39', color: '#ecf0f1' }}>

      {/* Hero Section */}
      <section className="py-5 text-center text-md-start" style={{ backgroundColor: '#1C2833', borderBottom: '5px solid #28a745' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right" data-aos-delay="100">
              <h1 className="fw-bold display-4 text-primary mb-3">
                Crafting Digital Excellence: Your Vision, Our Code
              </h1>
              <p className="lead text-light mb-4">
                From dynamic websites to robust custom software solutions, we transform your ideas into powerful digital realities. Experience cutting-edge technology, unparalleled support, and solutions designed for your success.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start mb-4">
                <a
                  href="/contact"
                  className="btn btn-lg rounded-pill me-3"
                  style={{ backgroundColor: '#28a745', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
                  data-aos="fade-up" data-aos-delay="300"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#our-services"
                  className="btn btn-outline-light btn-lg rounded-pill"
                  style={{ padding: '12px 36px', fontWeight: 600 }}
                  data-aos="fade-up" data-aos-delay="400"
                >
                  Explore Our Services
                </a>
              </div>
              <p className="fs-5 fw-bold text-info" data-aos="fade-up" data-aos-delay="500">
                Fully Dynamic Solutions starting from <FaRupeeSign />6,999!
              </p>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <FaLaptopCode size={200} className="text-warning animate-float" /> {/* Custom animation class */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section id="our-services" className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5" data-aos="fade-up">Our Expertise in Digital Solutions</h2>
          <div className="row g-4 justify-content-center">

            {/* Web Development */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-dark text-light p-4 rounded-4 service-card hover-lift">
                <div className="card-body text-center">
                  <FaGlobe size={50} className="text-success mb-3" />
                  <h4 className="fw-bold text-white mb-3">Comprehensive Web Development</h4>
                  <p className="card-text text-light">
                    From static informational sites to complex, dynamic web applications, we build fast, secure, and scalable websites that engage your audience. Our solutions are fully responsive, ensuring a perfect experience on any device.
                  </p>
                  <ul className="list-unstyled text-start mt-3 small">
                    <li className="mb-2"><FaReact className="me-2 text-info" /> React.js & Next.js Development</li>
                    <li className="mb-2"><FaPhp className="me-2 text-info" /> PHP Custom Solutions</li>
                    <li className="mb-2"><FaNodeJs className="me-2 text-info" /> MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                    <li><FaCode className="me-2 text-info" /> HTML5, CSS3, JavaScript modern frameworks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Software Development */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark text-light p-4 rounded-4 service-card hover-lift">
                <div className="card-body text-center">
                  <FaCogs size={50} className="text-warning mb-3" />
                  <h4 className="fw-bold text-white mb-3">Tailored Custom Software Solutions</h4>
                  <p className="card-text text-light">
                    Solve your unique business challenges with software built precisely for your needs. We develop robust, efficient, and user-friendly applications that automate processes, improve efficiency, and drive growth.
                  </p>
                  <ul className="list-unstyled text-start mt-3 small">
                    <li className="mb-2"><FaTools className="me-2 text-info" /> Enterprise Resource Planning (ERP)</li>
                    <li className="mb-2"><FaHandshake className="me-2 text-info" /> Customer Relationship Management (CRM)</li>
                    <li className="mb-2"><FaServer className="me-2 text-info" /> Backend & API Development</li>
                    <li><FaMobileAlt className="me-2 text-info" /> Desktop & Mobile Applications (Cross-platform)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* E-commerce & CMS Solutions */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark text-light p-4 rounded-4 service-card hover-lift">
                <div className="card-body text-center">
                  <FaShoppingCart size={50} className="text-danger mb-3" />
                  <h4 className="fw-bold text-white mb-3">E-commerce & CMS Platforms</h4>
                  <p className="card-text text-light">
                    Launch your online store or manage your content with ease. We specialize in building secure, feature-rich e-commerce platforms and user-friendly Content Management Systems.
                  </p>
                  <ul className="list-unstyled text-start mt-3 small">
                    <li className="mb-2"><FaWordpress className="me-2 text-info" /> WordPress Development & Customization</li>
                    <li className="mb-2"><FaShoppingCart className="me-2 text-info" /> Shopify Store Setup & Custom Apps</li>
                    <li className="mb-2"><FaCode className="me-2 text-info" /> Custom E-commerce Solutions</li>
                    <li><FaRocket className="me-2 text-info" /> Payment Gateway Integration & SEO Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Stack Section */}
      <section className="py-5" style={{ backgroundColor: '#1C2833' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5" data-aos="fade-up">Our Advanced Technology Stack</h2>
          <p className="lead text-center text-light mb-5" data-aos="fade-up" data-aos-delay="100">
            We leverage a diverse range of cutting-edge technologies to build scalable, high-performance, and secure applications.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="100">
              <FaReact size={80} className="text-info mb-2" />
              <p className="fw-bold text-white">React.js</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="200">
              <FaNodeJs size={80} className="text-success mb-2" />
              <p className="fw-bold text-white">Node.js</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="300">
              <FaPhp size={80} className="text-purple mb-2" /> {/* Custom color */}
              <p className="fw-bold text-white">PHP</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="400">
              <FaWordpress size={80} className="text-primary mb-2" />
              <p className="fw-bold text-white">WordPress</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="500">
              <FaShoppingCart size={80} className="text-orange mb-2" /> {/* Custom color */}
              <p className="fw-bold text-white">Shopify</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="600">
              <FaServer size={80} className="text-muted mb-2" />
              <p className="fw-bold text-white">MERN Stack</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="700">
              <FaMobileAlt size={80} className="text-pink mb-2" /> {/* Custom color */}
              <p className="fw-bold text-white">Mobile-First Design</p>
            </div>
            <div className="col-6 col-md-3 text-center" data-aos="flip-left" data-aos-delay="800">
              <FaCode size={80} className="text-light mb-2" />
              <p className="fw-bold text-white">Custom APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5" data-aos="fade-up">Why We Are Your Best Software Partner</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-secondary-dark text-light p-4 rounded-4 hover-lift">
                <div className="card-body text-center">
                  <FaRocket size={50} className="text-success mb-3" />
                  <h4 className="fw-bold text-white mb-3">Unmatched Expertise & Support</h4>
                  <p className="card-text text-light">
                    Our team comprises seasoned developers and strategists dedicated to delivering not just code, but comprehensive solutions. We offer unparalleled post-launch support to ensure your system runs flawlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-secondary-dark text-light p-4 rounded-4 hover-lift">
                <div className="card-body text-center">
                  <FaLightbulb size={50} className="text-warning mb-3" />
                  <h4 className="fw-bold text-white mb-3">Fully Dynamic & Scalable Solutions</h4>
                  <p className="card-text text-light">
                    Every solution we build is designed to be fully dynamic, adapting to your evolving business needs. We prioritize scalability, ensuring your software grows seamlessly with your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-secondary-dark text-light p-4 rounded-4 hover-lift">
                <div className="card-body text-center">
                  <FaRupeeSign size={50} className="text-primary mb-3" />
                  <h4 className="fw-bold text-white mb-3">Affordable Excellence, Uncompromised Quality</h4>
                  <p className="card-text text-light">
                    We believe top-tier software doesn't have to break the bank. Our efficient processes and strategic pricing ensure you receive the best possible solution at a highly competitive, low cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-5" style={{ backgroundColor: '#1C2833' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5" data-aos="fade-up">Our Streamlined Development Process</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step p-4 rounded-4 bg-dark h-100 shadow-sm">
                <FaHandshake size={50} className="text-success mb-3" />
                <h5 className="fw-bold text-white">1. Discovery & Planning</h5>
                <p className="text-light-50">Understanding your vision, requirements, and project scope.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step p-4 rounded-4 bg-dark h-100 shadow-sm">
                <FaCode size={50} className="text-warning mb-3" />
                <h5 className="fw-bold text-white">2. Design & Development</h5>
                <p className="text-light-50">Crafting user interfaces and writing clean, efficient code.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="process-step p-4 rounded-4 bg-dark h-100 shadow-sm">
                <FaClipboardCheck size={50} className="text-info mb-3" /> {/* Corrected here */}
                <h5 className="fw-bold text-white">3. Testing & Quality Assurance</h5>
                <p className="text-light-50">Rigorous testing to ensure functionality, security, and performance.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div className="process-step p-4 rounded-4 bg-dark h-100 shadow-sm">
                <FaRocket size={50} className="text-danger mb-3" />
                <h5 className="fw-bold text-white">4. Deployment & Support</h5>
                <p className="text-light-50">Launching your solution and providing ongoing maintenance & support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote/CTA Section */}
      <section className="py-5 bg-gradient-dark text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-primary mb-4">Ready to Build Something Amazing?</h2>
          <p className="lead text-light mb-5">
            Whether it's a dynamic website, a powerful e-commerce store, or a bespoke software application, we're here to turn your ideas into a successful digital reality. Get a personalized quote today!
          </p>
          <a
            href="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#28a745', color: '#fff', padding: '15px 45px', fontWeight: 700, fontSize: '1.2rem' }}
            data-aos="zoom-in" data-aos-delay="200"
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      {/* Footer Strip */}
   

      {/* Custom Styles for better design */}
      <style jsx>{`
        .text-primary { color: #00bcd4 !important; } /* A vibrant light blue */
        .text-success { color: #28a745 !important; }
        .text-warning { color: #ffc107 !important; }
        .text-info { color: #17a2b8 !important; }
        .text-danger { color: #dc3545 !important; }
        .text-purple { color: #8a2be2 !important; } /* Custom purple for PHP */
        .text-orange { color: #fd7e14 !important; } /* Custom orange for Shopify */
        .text-pink { color: #e83e8c !important; } /* Custom pink for Mobile-First */
        .bg-gradient-dark {
          background: linear-gradient(135deg, #202C39 0%, #1C2833 100%);
        }
        .bg-secondary-dark {
          background-color: #2b3e50 !important; /* Slightly lighter dark for cards */
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .service-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        .hover-lift {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .process-step {
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .process-step:hover {
          background-color: #1a232f !important;
          border-color: #00bcd4;
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default SoftwareServices;