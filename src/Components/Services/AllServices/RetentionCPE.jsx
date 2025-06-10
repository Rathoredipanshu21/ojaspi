import React, { useState, useEffect } from 'react';
import { FaBox, FaTruck, FaTools, FaRecycle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cpe from '../../Assets/cpe2.png';

const RetentionCPE = () => {
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  const toggleService = (serviceName) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const services = [
    {
      name: 'Asset Recovery',
      icon: <FaBox size={40} style={{ color: '#FFD700' }} />,
      description: 'Secure collection of equipment after service termination.',
      details: 'Our field teams retrieve devices with real-time verification and secure tracking, ensuring minimal loss and quick return to the warehouse.'
    },
    {
      name: 'Logistics & Tracking',
      icon: <FaTruck size={40} style={{ color: '#03CB58' }} />,
      description: 'Live GPS and RFID system to track every device end-to-end.',
      details: 'Every recovered unit is logged, barcoded, and tracked throughout the journey with continuous updates to the central portal and client dashboard.'
    },
    {
      name: 'Refurbishment & QA',
      icon: <FaTools size={40} style={{ color: '#03CB58' }} />,
      description: 'Testing, cleaning & grading for reuse or redeployment.',
      details: 'Recovered equipment is inspected, cleaned, firmware updated, and passed through multiple QA checks before returning to inventory.'
    },
    {
      name: 'Sustainable Process',
      icon: <FaRecycle size={40} style={{ color: '#FFD700' }} />,
      description: 'Eco-friendly workflows & certified e-waste disposal.',
      details: 'Non-reusable items are sent to certified recyclers. Monthly reports and compliance certificates are provided for sustainability records.'
    }
  ];

  const styles = {
    page: {
      backgroundColor: '#2A4E5E',
      color: '#fff',
      fontFamily: 'Segoe UI',
    },
    hero: {
      padding: '0px 20px 60px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
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
              Equipment Recovery
            </h1>
            <p className="lead mt-3" style={{ color: '#f8f9fa' }}>
              Maximizing hardware lifecycle with modern tracking, refurbishment, and responsible collection processes.
            </p>
          </div>
          <div style={styles.heroImageWrapper}>
            <img src={cpe} alt="Recovery Process" style={styles.gearImage} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-5 pt-3" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <p className="fs-5" style={{ lineHeight: '1.8', color: '#dee2e6' }}>
                We offer end-to-end equipment recovery services to reduce capital expenditure, extend device lifecycle, and ensure sustainable practices with real-time tracking and certified logistics workflows.
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
