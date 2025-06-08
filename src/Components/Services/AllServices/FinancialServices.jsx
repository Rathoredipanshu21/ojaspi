// ✅ FinancialServices.jsx — AOS Fixed + Unique Hero + Responsive Layout

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaUniversity,
  FaHandshake,
  FaPiggyBank,
  FaChartLine
} from 'react-icons/fa';

const FinancialServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      AOS.init({ duration: 1000, once: true });
    }, 50); // Small delay to fix refresh-triggered AOS bug
  }, []);

  const services = [
    {
      icon: <FaMoneyCheckAlt className="text-warning mb-3" size={40} />,
      title: 'Debt Recovery (B2B & B2C)',
      desc: 'End-to-end recovery management system with legal escalation, field visits and automated reminders.'
    },
    {
      icon: <FaHandHoldingUsd className="text-success mb-3" size={40} />,
      title: 'Loan Verification Services',
      desc: 'KYC document scrutiny and background financial analysis for secured and unsecured loans.'
    },
    {
      icon: <FaUniversity className="text-warning mb-3" size={40} />,
      title: 'Banking Compliance',
      desc: 'Documentation compliance and adherence tracking for RBI/SEBI/NBFC policies.'
    },
    {
      icon: <FaHandshake className="text-success mb-3" size={40} />,
      title: 'B2B Collections',
      desc: 'White-labelled collection solutions with dispute resolution and settlement workflows.'
    },
    {
      icon: <FaPiggyBank className="text-warning mb-3" size={40} />,
      title: 'Non-Banking Finance Services',
      desc: 'We serve NBFCs with custom collection, assessment, and risk evaluation modules.'
    },
    {
      icon: <FaChartLine className="text-success mb-3" size={40} />,
      title: 'Credit Scoring Integration',
      desc: 'Integrate with CIBIL, Experian or CRIF to automate borrower credibility analysis.'
    },
  ];

  return (
    <div style={{ backgroundColor: '#2A4E5E', color: '#fff' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ backgroundColor: '#1C3B4A' }}>
        <div className="container" style={{ maxWidth: '85%' }}>
          <div className="row align-items-center" data-aos="fade-right">
            <div className="col-md-7 text-center text-md-start">
              <h1 className="fw-bold display-5 text-warning mb-3">Empowering Finance & Recovery</h1>
              <p className="lead text-light mb-4">
                Tailored services for Banking, NBFCs, and FinTech — from debt recovery to real-time credit scoring.
              </p>
              <a
                href="/contact"
                className="btn btn-lg rounded-pill"
                style={{ backgroundColor: '#03CB58', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
              >
                Request a Demo
              </a>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in">
              <FaUniversity size={140} className="text-warning" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((item, i) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={item.title}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="p-4 rounded-4 shadow bg-dark h-100 text-center">
                  {item.icon}
                  <h5 className="fw-bold text-white">{item.title}</h5>
                  <p className="text-light fs-6 mt-2" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-5 text-center bg-black" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold text-warning mb-3">Secure. Scalable. Smart.</h2>
          <p className="text-light mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Designed for regulatory-grade stability and intelligent automation — trusted by 50+ institutions across India.
          </p>
        </div>
      </section>

      {/* Bottom Industry Strip */}
      <section className="py-5 text-center" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">Industries We Serve</h2>
          <p className="fs-6 text-light mb-0">
            FinTech • Microfinance • Insurance • Co-operative Banks • NBFCs • Credit Agencies
          </p>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;
