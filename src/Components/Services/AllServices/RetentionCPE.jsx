import React, { useState, useEffect } from 'react';
import { FaBox, FaTruck, FaTools, FaRecycle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpe from '../../Assets/cpe2.png';

const RetentionCPE = () => {
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ duration: 1000, once: true });
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleService = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const services = [
    {
      name: 'Asset Recovery',
      icon: <FaBox size={40} style={{ color: '#FFD700' }} />,
      description: 'Secure recovery of routers, modems & more post-service termination.',
      details: 'Our field teams retrieve customer devices with real-time verification and secure tracking, ensuring minimal loss and quick return to warehouse.'
    },
    {
      name: 'Logistics & Tracking',
      icon: <FaTruck size={40} style={{ color: '#03CB58' }} />,
      description: 'Live GPS and RFID system to track every device door-to-door.',
      details: 'Every device collected is logged, barcoded, and tracked throughout the journey with updates to the central portal and client dashboard.'
    },
    {
      name: 'Refurbishment & QA',
      icon: <FaTools size={40} style={{ color: '#03CB58' }} />,
      description: 'Deep diagnostics, repairs, cleaning & grading for reuse.',
      details: 'Recovered CPEs are professionally tested, cleaned, firmware updated, and passed through multi-level QA before redeployment or inventory placement.'
    },
    {
      name: 'Sustainable Process',
      icon: <FaRecycle size={40} style={{ color: '#FFD700' }} />,
      description: 'Eco-friendly practices & certified e-waste disposal.',
      details: 'Non-repairable devices are sent to certified e-waste recyclers. Reports and compliance documentation are shared with clients monthly.'
    }
  ];

  const styles = {
    page: {
      backgroundColor: '#2A4E5E',
      color: '#fff',
      fontFamily: 'Segoe UI',
    },
    hero: {
      padding: '0px 20px 60px', // Removed top padding as discussed
      minHeight: '100vh', // Optionally, make hero full height for a more impactful initial view
      display: 'flex',
      alignItems: 'center', // Vertically center content within the hero if minHeight is used
    },
    heroFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px'
    },
    heroText: {
      flex: 1,
      minWidth: '300px',
      maxWidth: '600px',
      textAlign: 'left',
    },
    heroImageWrapper: {
      flex: 1,
      minWidth: '250px',
      textAlign: 'center',
    },
    gearImage: {
      width: '100%',
      maxWidth: '380px',
      animation: 'spin 6s linear infinite',
    },
    spinKeyframes: `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`,
    card: (expanded) => ({
      backgroundColor: '#1E3E4A',
      border: expanded ? '2px solid #03CB58' : '1px solid #3b5f6c',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      padding: '24px',
      borderRadius: '12px'
    }),
  };

  return (
    <div style={styles.page}>
      <style>{styles.spinKeyframes}</style>

      {/* Hero Section */}
      <section className="container" style={styles.hero} data-aos="fade-up">
        <div style={styles.heroFlex}>
          <div style={styles.heroText}>
            <h1 className="display-5 fw-bold" style={{ color: '#FFD700' }}>
              Retention & CPE Recovery
            </h1>
            <p className="lead mt-3" style={{ color: '#f8f9fa' }}>
              Maximizing asset lifecycle with modern tracking, refurbishment, and responsible recovery.
            </p>
          </div>
          <div style={styles.heroImageWrapper}>
            <img src={cpe} alt="CPE Gear" style={styles.gearImage} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-5 pt-3" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <p className="fs-5" style={{ lineHeight: '1.8', color: '#dee2e6' }}>
                We offer end-to-end CPE recovery services to reduce capital expenditure, extend hardware lifecycle, and ensure sustainable practices with real-time tracking and certified logistics workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-5 pt-3">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#FFD700' }} data-aos="fade-up">
            Key Services
          </h2>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6" key={s.name} data-aos="fade-up">
                <div
                  style={styles.card(expandedService === s.name)}
                  onClick={() => toggleService(s.name)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      {s.icon}
                      <h5 className="fw-bold text-white mb-0">{s.name}</h5>
                    </div>
                    {expandedService === s.name ? (
                      <FaChevronUp color="#FFD700" />
                    ) : (
                      <FaChevronDown color="#FFD700" />
                    )}
                  </div>
                  <p className="mt-3 mb-2" style={{ color: '#ced4da' }}>{s.description}</p>
                  {expandedService === s.name && (
                    <p className="small text-light mt-2" style={{ lineHeight: '1.6' }}>{s.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold" style={{ color: '#FFD700' }}>Partner With Us Today</h2>
          <p className="mb-4" style={{ maxWidth: '720px', margin: '0 auto', color: '#e2e6ea' }}>
            Ready to streamline your equipment recovery and redeployment operations? Let our expert team help.
          </p>
          <a
            href="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#03CB58', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default RetentionCPE;