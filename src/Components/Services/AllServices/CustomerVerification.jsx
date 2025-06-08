// ✅ CustomerVerification.jsx — Unique, Beautiful Hero + Fixed Scroll + Animated Layout

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkedAlt, FaUserShield, FaAddressCard, FaFingerprint } from 'react-icons/fa';

const CustomerVerification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <FaAddressCard className="text-warning mb-3" size={40} />,
      title: 'KYC Verification',
      desc: 'Instant document parsing, digital signature capture, and biometric matching for secure onboarding.'
    },
    {
      icon: <FaMapMarkedAlt className="text-success mb-3" size={40} />,
      title: 'Address Validation',
      desc: 'Live GPS-tagged verification with agent photo logs and timestamped delivery slips.'
    },
    {
      icon: <FaUserShield className="text-success mb-3" size={40} />,
      title: 'Enterprise Compliance',
      desc: 'Business verification via government registries, bank statements, and physical vetting.'
    },
    {
      icon: <FaFingerprint className="text-warning mb-3" size={40} />,
      title: 'Fraud Pattern Alerts',
      desc: 'Cross-check users in real time using AI red-flag detection models trained on fraud patterns.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#2A4E5E', color: '#fff' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ backgroundColor: '#1C3B4A' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between" style={{ maxWidth: '80%' }}>
          <div className="text-md-start text-center" data-aos="fade-right">
            <h1 className="fw-bold display-5 text-warning mb-3">Customer Verification Made Seamless</h1>
            <p className="lead text-light mb-4">
              Empower your onboarding with AI-driven KYC, address validation, and fraud detection — all in one platform.
            </p>
            <a
              href="/contact"
              className="btn btn-lg rounded-pill"
              style={{ backgroundColor: '#03CB58', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
            >
              Get Started
            </a>
          </div>
          <div className="mt-5 mt-md-0 ms-md-5" data-aos="zoom-in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
              alt="Verification Illustration"
              className="img-fluid"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((item, i) => (
              <div
                className="col-12 col-md-6 col-lg-6"
                key={item.title}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="p-4 rounded-4 shadow bg-dark h-100">
                  <div className="text-center">
                    {item.icon}
                    <h5 className="fw-bold text-white">{item.title}</h5>
                    <p className="text-light fs-6 mt-2" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Block */}
      <section className="py-5 text-center bg-black" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-warning mb-3">Why Choose Us?</h2>
          <p className="text-light mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Reduce onboarding time by 60% with seamless integration, low error rates, and quick verification flows.
            Trusted across fintech, eCommerce, and enterprise sectors.
          </p>
        </div>
      </section>

      {/* Bottom Tagline */}
      <section className="py-5 text-center" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">Trusted Across Industries</h2>
          <p className="fs-6 text-light mb-0">Fintech • Insurance • Telecom • eCommerce • Logistics • Real Estate</p>
        </div>
      </section>
    </div>
  );
};

export default CustomerVerification;
