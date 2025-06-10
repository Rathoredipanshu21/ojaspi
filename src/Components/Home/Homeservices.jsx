import React, { useEffect } from 'react';
import {
  FaBoxOpen,
  FaUserCheck,
  FaUniversity,
  FaLaptopCode,
  FaBullhorn,
  FaUserTie,
  FaMoneyCheckAlt,
  FaBriefcase,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homeservices.css';
import { Link } from 'react-router-dom';

const services = [
 {
  icon: <FaBoxOpen className="icon text-warning" />,
  title: 'Equipment Recovery',
  description: 'Asset recovery of customer premise equipment with proper tracking.',
  animation: 'flip-left',
  path: '/retention-cpe',
}


,
  {
    icon: <FaUserCheck className="icon text-success" />,
    title: 'Customer Verification',
    description: 'Trusted process to verify customer identity and enterprise accounts.',
    animation: 'zoom-in',
    path: '/customer-verification',
  },
  {
    icon: <FaUniversity className="icon text-danger" />,
    title: 'Financial Services',
    description: 'Debt collection and recovery for both B2B and B2C finance sectors.',
    animation: 'flip-left',
    path: '/financial-services',
  },
 {
  icon: <FaLaptopCode className="icon text-primary" />,
  title: 'Web & Software Development',
  description: 'Web solutions, portals, and custom software tailored to your business.',
  animation: 'zoom-in',
  path: '/web-development',
}
,
  {
    icon: <FaBullhorn className="icon text-info" />,
    title: 'Digital Marketing',
    description: 'Grow your brand online through SEO, social media & PPC.',
    animation: 'flip-left',
    path: '/digital-marketing',
  },
 {
  icon: <FaUserTie className="icon text-secondary" />,
  title: 'HR Services',
  description: 'Hiring, Staffing, Payroll, Compliance, and Background Verification (BGV).',
  animation: 'zoom-in',
  path: '/hr-services',
}

  ,
];

const Homeservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5 homeservices-section">
      <h2 className="text-center text-primary fw-bold mb-4 display-5">Our Services</h2>
      <p className="text-center mb-5 fs-5 text-muted">
        Your one-stop solution for Telecom, Finance, HR, IT & Verification Services
      </p>

      <div className="row">
        {services.map((service, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            data-aos={service.animation}
            key={index}
          >
            <Link to={service.path} className="text-decoration-none text-dark">
              <div className="card service-card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="mb-3 display-4">{service.icon}</div>
                  <h5 className="card-title fw-bold fs-4">{service.title}</h5>
                  <p className="card-text fs-6">{service.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homeservices;
