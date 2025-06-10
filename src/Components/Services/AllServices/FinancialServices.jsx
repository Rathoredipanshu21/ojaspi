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
      desc: 'Our robust debt recovery system provides end-to-end management for both ongoing invoices and overdue debtors. We utilize a multi-pronged approach, including automated reminders, strategic field visits, and legal escalation when necessary, all designed to maximize recovery rates efficiently. We specialize in identifying and fixing collection inefficiencies within your organization, transforming your accounts receivable into a healthy revenue stream.'
    },
    {
      icon: <FaHandHoldingUsd className="text-success mb-3" size={40} />,
      title: 'Loan Verification Services',
      desc: 'Ensure the integrity of your loan portfolio with our meticulous loan verification services. We conduct thorough KYC document scrutiny and in-depth background financial analysis for both secured and unsecured loans. Our rigorous process helps you mitigate risk, prevent fraud, and make informed lending decisions, safeguarding your assets and maintaining compliance.'
    },
    {
      icon: <FaUniversity className="text-warning mb-3" size={40} />,
      title: 'Banking & Financial Compliance',
      desc: 'Navigate the complex regulatory landscape of India with confidence. We offer comprehensive documentation compliance and adherence tracking for policies set by the Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and Non-Banking Financial Companies (NBFCs). Our proactive compliance solutions minimize risk, avoid penalties, and ensure your operations are always aligned with the latest legal frameworks.'
    },
    {
      icon: <FaHandshake className="text-success mb-3" size={40} />,
      title: 'B2B Collections',
      desc: 'Streamline your business-to-business collections with our white-labeled solutions. We integrate seamlessly with your existing processes, offering expert dispute resolution and efficient settlement workflows. Our approach preserves client relationships while effectively recovering outstanding dues, enhancing your cash flow and operational stability.'
    },
    {
      icon: <FaPiggyBank className="text-warning mb-3" size={40} />,
      title: 'Non-Banking Finance Services',
      desc: 'We provide specialized support for Non-Banking Financial Companies (NBFCs) with custom-tailored solutions for collections, borrower assessment, and risk evaluation modules. Our services are designed to address the unique challenges and opportunities within the NBFC sector, helping you optimize operations, manage portfolios effectively, and drive sustainable growth.'
    },
    {
      icon: <FaChartLine className="text-success mb-3" size={40} />,
      title: 'Credit Scoring Integration',
      desc: 'Empower your lending decisions with automated borrower credibility analysis. We facilitate seamless integration with major credit bureaus like CIBIL, Experian, and CRIF. This allows for real-time access to comprehensive credit reports and scores, enabling faster, more accurate risk assessments and enhancing the efficiency of your loan origination process.'
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
                Tailored services for Banking, NBFCs, and FinTech — from comprehensive debt recovery to real-time credit scoring and meticulous compliance. We help you secure your financial operations and accelerate growth.
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
                <div className="p-4 rounded-4 shadow bg-dark h-100 text-center d-flex flex-column justify-content-between">
                  {item.icon}
                  <h5 className="fw-bold text-white mb-2">{item.title}</h5>
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
            Our financial solutions are designed for **regulatory-grade stability** and **intelligent automation** — trusted by over 50 leading institutions across India. We provide the tools you need to operate securely and efficiently.
          </p>
        </div>
      </section>

      {/* Bottom Industry Strip */}
      <section className="py-5 text-center" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">Industries We Serve</h2>
          <p className="fs-6 text-light mb-0">
            **FinTech** • **Microfinance** • **Insurance** • **Co-operative Banks** • **NBFCs** • **Credit Agencies**
          </p>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;