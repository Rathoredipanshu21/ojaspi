import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  FaBriefcase,     // General business icon for Hero
  FaLightbulb,     // Innovation/Vision (for hero callout and values)
  FaEye,           // Vision/See future (for Mission/Vision section)
  FaBullseye,      // Mission/Target (for Mission/Vision section)
  FaHandshake,     // Trust/Partnership/Integrity (for hero callout and values)
  FaChartLine,     // Growth/Results (for values)
  FaUsers,         // Team/Community (for team section and values)
  FaCode,          // Expertise/Technology (for values)
  FaStar,          // Excellence/Quality (for values and what sets us apart)
  FaArrowRight,    // Learn More link
  FaHistory,       // History/Story (for Our Story section)
  FaGem,           // Values/Precious (alternative general value icon)
  FaHeart,         // Passion/Client-centric (for values)
  FaTools,         // Solutions/Support (for team section and what sets us apart)
  FaLaptopCode,    // For Technology & Expertise
  FaCogs,          // For Our Approach/Methodology
  FaQuoteLeft,     // For Testimonials
  FaLeaf,          // For Sustainability
  FaAward,         // For Awards & Recognition
  FaPuzzlePiece,   // For tailored solutions
  FaRocket,        // For accelerating growth
  FaCubes,         // For holistic solutions
} from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS with engaging options for a dynamic feel
    setTimeout(() => AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Only animate once per element
      offset: 150,    // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-out-cubic', // Smoother easing function
    }), 100);
  }, []);

  const coreValues = [
    {
      icon: <FaHeart size={40} className="text-pink-passion mb-3" />, // Custom color
      title: 'Client-Centricity',
      description: 'Your success is our top priority. We listen, understand, and tailor solutions to meet your unique needs and exceed expectations.'
    },
    {
      icon: <FaLightbulb size={40} className="text-warning mb-3" />,
      title: 'Innovation & Adaptability',
      description: 'We embrace new technologies and creative approaches, constantly evolving to provide cutting-edge solutions for a dynamic market.'
    },
    {
      icon: <FaHandshake size={40} className="text-info-light mb-3" />, // Changed to info-light for hero consistency
      title: 'Integrity & Trust',
      description: 'We operate with unwavering honesty and transparency, building lasting relationships based on mutual respect and genuine trust.'
    },
    {
      icon: <FaStar size={40} className="text-gold mb-3" />,
      title: 'Excellence in Delivery',
      description: 'We are committed to delivering high-quality services and products, ensuring precision, reliability, and superior performance.'
    },
    {
      icon: <FaChartLine size={40} className="text-success mb-3" />,
      title: 'Results-Driven Focus',
      description: 'Our strategies are designed to achieve measurable outcomes, driving tangible growth and maximizing your return on investment.'
    },
    {
      icon: <FaCode size={40} className="text-primary-blue mb-3" />, // Custom color
      title: 'Expertise & Experience',
      description: 'Leveraging years of industry experience and deep domain knowledge, our expert team provides unparalleled insights and solutions.'
    }
  ];

  const testimonials = [
    {
      quote: "Partnering with them was a game-changer for our business. Their digital marketing strategies brought us unprecedented growth!",
      author: "Jane Doe, CEO of Tech Innovators"
    },
    {
      quote: "The custom software solution they developed streamlined our operations beautifully. Professional, efficient, and truly understood our needs.",
      author: "John Smith, COO of Global Logistics"
    },
    {
      quote: "Their HR services are invaluable. They handled everything from recruitment to compliance, allowing us to focus on our core business.",
      author: "Emily White, HR Director at Future Corp"
    }
  ];

  return (
    <div style={{ backgroundColor: '#1A232F', color: '#E0E0E0', minHeight: '100vh' }}>

      {/* Hero Section */}
      <section className="py-5 text-center text-md-start hero-section" style={{ borderBottom: '6px solid #4A90E2' }}> {/* Changed border color */}
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right" data-aos-delay="100">
              <h1 className="fw-bold display-4 text-white mb-3"> {/* Changed text color to white */}
                Building Tomorrow's Success, Together
              </h1>
              <p className="lead text-light-gray mb-4">
                We are a passionate team dedicated to empowering businesses through innovative digital solutions and strategic services. Discover our journey, values, and what drives us to deliver excellence.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start mb-4">
                <Link
                  to="/contact"
                  className="btn btn-lg rounded-pill me-3"
                  style={{ backgroundColor: '#4A90E2', color: '#FFFFFF', padding: '14px 40px', fontWeight: 700, fontSize: '1.1rem' }} // Blue button
                  data-aos="fade-up" data-aos-delay="300"
                >
                  Connect With Us
                </Link>
                <Link
                  to="#our-values"
                  className="btn btn-outline-light btn-lg rounded-pill"
                  style={{ borderColor: '#FFD700', color: '#FFD700', padding: '14px 40px', fontWeight: 600 }} // Gold outline for contrast
                  data-aos="fade-up" data-aos-delay="400"
                >
                  Our Values <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <FaBriefcase size={200} className="text-info-light animate-float" /> {/* Changed icon color */}
            </div>
          </div>
        </div>
      </section>

         

      {/* Our Story Section */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Our Journey: A Story of Growth and Dedication
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center text-light-gray">
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                Founded with a vision to revolutionize how businesses interact with technology and talent, our journey began with a simple belief: that every organization, regardless of size, deserves access to world-class expertise and solutions.
              </p>
              <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                Since our inception, we have consistently strived to be at the forefront of innovation, adapting to market shifts and evolving client needs. From our humble beginnings, offering specialized services, we have expanded our portfolio to cover a comprehensive range of HR, financial, digital marketing, and software development solutions.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Our growth is a testament to the dedication of our team and the trust of our clients. We take pride in building long-lasting partnerships, celebrating each client's success as our own. We are not just service providers; we are strategic allies committed to your sustained prosperity.
              </p>
              <div className="mt-4" data-aos="zoom-in" data-aos-delay="400">
                <FaHistory size={80} className="text-info-light icon-glow" /> {/* Used info-light */}
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* Mission & Vision Section */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Our Guiding Principles
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body d-flex flex-column justify-content-between">
                  <FaBullseye size={60} className="text-success mb-3 mx-auto icon-glow" />
                  <h4 className="fw-bold text-white mb-3">Our Mission</h4>
                  <p className="card-text text-light-gray">
                    To empower businesses globally by delivering innovative, tailored, and results-driven HR, financial, digital marketing, and software solutions that foster growth, efficiency, and sustained success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body d-flex flex-column justify-content-between">
                  <FaEye size={60} className="text-warning mb-3 mx-auto icon-glow" />
                  <h4 className="fw-bold text-white mb-3">Our Vision</h4>
                  <p className="card-text text-light-gray">
                    To be the leading strategic partner for organizations seeking comprehensive business solutions, recognized for our unwavering commitment to client success, innovation, and ethical practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* Our Values Section */}
      <section id="our-values" className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Values That Define Us
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

         

      {/* Our Approach/Methodology Section */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Our Collaborative Approach
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            We believe in a transparent and agile process. Our methodology ensures that every project, whether big or small, is executed with precision, clear communication, and a focus on delivering maximum value.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaCogs size={60} className="text-info-light mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Discovery & Planning</h5>
                <p className="text-light-gray">In-depth understanding of your goals and meticulous strategy formulation.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaPuzzlePiece size={60} className="text-success mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Execution & Development</h5>
                <p className="text-light-gray">Agile development, regular feedback loops, and high-quality implementation.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaRocket size={60} className="text-warning mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Deployment & Optimization</h5>
                <p className="text-light-gray">Seamless launch, continuous monitoring, and ongoing improvements for peak performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* Technology & Expertise Section */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Our Cutting-Edge Technology & Expertise
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            We harness the power of the latest technologies and methodologies, coupled with deep industry expertise, to deliver solutions that are not just current, but future-proof.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaLaptopCode size={50} className="text-primary-blue mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Modern Web Frameworks</h4>
                <p className="card-text text-light-gray">
                  Expertise in React, Angular, Vue.js for dynamic and responsive web applications.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaCode size={50} className="text-success mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Cloud Solutions & DevOps</h4>
                <p className="card-text text-light-gray">
                  Leveraging AWS, Azure, Google Cloud for scalable, secure, and efficient infrastructure.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaChartLine size={50} className="text-info-light mb-3 icon-glow-sm" />
                <h4 className="fw-bold text-white mb-3">Data Analytics & AI</h4>
                <p className="card-text text-light-gray">
                  Transforming raw data into actionable insights with AI-powered analytics and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* Client Testimonials/Success Stories Section */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Voices of Our Success
          </h2>
          <p className="lead text-light-gray mx-auto mb-5 text-center" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Don't just take our word for it. Hear directly from our satisfied clients about the impact we've made on their businesses.
          </p>
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

         

      {/* Commitment to Sustainability/Community Section */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Our Commitment Beyond Business
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            We believe in building a better future, not just for our clients, but for our planet and communities. Our commitment extends to sustainable practices and active social responsibility.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaLeaf size={60} className="text-success mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Sustainable Practices</h5>
                <p className="text-light-gray">
                  Minimizing our environmental footprint through eco-friendly operations and digital-first initiatives.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaUsers size={60} className="text-info-light mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Community Engagement</h5>
                <p className="text-light-gray">
                  Actively contributing to local communities through volunteer programs and educational initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-5" data-aos="fade-up">
            Awards & Recognition
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Our dedication to excellence has been recognized by industry leaders. Here are some of our achievements:
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaAward size={60} className="text-gold mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Best Digital Agency 2024</h5>
                <p className="text-light-gray">Awarded by [Industry Magazine/Organization]</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaAward size={60} className="text-gold mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Top HR Solutions Provider</h5>
                <p className="text-light-gray">Recognized by [HR Association]</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 service-card-hover">
                <FaAward size={60} className="text-gold mb-3 mx-auto icon-glow-sm" />
                <h5 className="fw-bold text-white mb-2">Innovation in Software Development</h5>
                <p className="text-light-gray">Presented at [Tech Conference]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

         

      {/* Our Team Section */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-4" data-aos="fade-up">
            Meet Our Expert Team
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Behind every successful solution is a team of dedicated professionals. Our experts bring diverse experience and passion, working collaboratively to achieve your business objectives.
          </p>
          <div className="row g-4 justify-content-center">
            {/* Placeholder for team members - can be expanded with actual photos/names */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 team-card-hover">
                <FaUsers size={80} className="text-info-light mb-3 mx-auto icon-glow" />
                <h5 className="fw-bold text-white mb-2">Our Visionaries</h5>
                <p className="text-light-gray">Strategic thinkers and leaders guiding our path to innovation.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 team-card-hover">
                <FaTools size={80} className="text-success mb-3 mx-auto icon-glow" />
                <h5 className="fw-bold text-white mb-2">Our Builders</h5>
                <p className="text-light-gray">Skilled developers and implementers crafting robust solutions.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 shadow-lg border-0 bg-dark-card text-light-gray p-4 rounded-4 team-card-hover">
                <FaHandshake size={80} className="text-warning mb-3 mx-auto icon-glow" />
                <h5 className="fw-bold text-white mb-2">Our Supporters</h5>
                <p className="text-light-gray">Dedicated support staff ensuring seamless operations and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* What Makes Us Different Section */}
      <section className="py-5 bg-dark-card">
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            What Sets Us Apart
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaCubes size={50} className="text-gold mb-3 icon-glow-sm" /> {/* Changed icon to FaCubes */}
                  <h4 className="fw-bold text-white mb-3">Holistic Approach</h4>
                  <p className="card-text text-light-gray">
                    We offer end-to-end solutions, integrating HR, financial, marketing, and tech services for a comprehensive business transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaPuzzlePiece size={50} className="text-primary-blue mb-3 icon-glow-sm" /> {/* Changed icon to FaPuzzlePiece */}
                  <h4 className="fw-bold text-white mb-3">Tailored Solutions</h4>
                  <p className="card-text text-light-gray">
                    No one-size-fits-all. We craft bespoke strategies and applications that perfectly align with your specific business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaHandshake size={50} className="text-info-light mb-3 icon-glow-sm" />
                  <h4 className="fw-bold text-white mb-3">Unrivaled Support</h4>
                  <p className="card-text text-light-gray">
                    Our commitment extends beyond delivery. We provide exceptional post-implementation support and ongoing guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         

      {/* Final Call to Action */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1A232F' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-gold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="lead text-light-gray mb-5">
            Join the growing number of businesses that trust us as their strategic partner. Let's discuss how we can help you achieve your aspirations.
          </p>
          <Link
            to="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#4A90E2', color: '#FFFFFF', padding: '16px 50px', fontWeight: 700, fontSize: '1.3rem' }} // Blue button
            data-aos="zoom-in" data-aos-delay="200"
          >
            Get In Touch Today!
          </Link>
        </div>
      </section>

      {/* NO FOOTER SECTION */}

      {/* Custom Styles */}
      <style jsx>{`
        .text-gold { color: #FFD700 !important; } /* Golden color for main headings */
        .text-light-gray { color: #E0E0E0 !important; } /* A softer white */
        .text-info { color: #00BCD4 !important; } /* Original info blue */
        .text-info-light { color: #87CEEB !important; } /* Lighter info blue for hero/general use */
        .text-success { color: #4CAF50 !important; } /* Consistent success green */
        .text-warning { color: #FFC107 !important; } /* Consistent warning yellow */
        .text-pink-passion { color: #ff69b4 !important; } /* Custom color for client-centricity */
        .text-primary-blue { color: #17a2b8 !important; } /* Custom color for expertise */

        .hero-section {
          background: linear-gradient(135deg, #1A232F 0%, #202C39 100%) !important; /* Subtle gradient for hero */
        }

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

        .service-card-hover, .team-card-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
          border: 1px solid transparent; /* Initial transparent border */
        }
        .service-card-hover:hover, .team-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: #FFD700; /* Gold border on hover */
        }

        .icon-glow {
            filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)); /* General glow for larger icons */
            transition: filter 0.3s ease;
        }
        .icon-glow-sm {
            filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.4)); /* Smaller glow for smaller icons */
            transition: filter 0.3s ease;
        }
        .team-card-hover:hover .icon-glow {
            filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
        }

        .list-unstyled li {
          display: flex;
          align-items: center;
        }
        /* Carousel styles */
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(255, 215, 0, 0.7); /* Goldish background for carousel arrows */
          border-radius: 50%;
          padding: 10px;
        }
        .carousel-indicators [data-bs-target] {
            background-color: #FFD700; /* Gold for active indicator */
            border: 1px solid #FFD700;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;