import React, { useEffect } from 'react';
import {
  FaChartBar,
  FaShieldAlt,
  FaHammer,
  FaNetworkWired,
  FaTools,
  FaUsers,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Homeservices.css';

const services = [
  {
    icon: <FaChartBar className="icon text-info" />,
    title: 'CPE Recovery Process',
    description:
      'We undertake Equipment Recovery and Refurbishment activity for multiple Internet Service Providers like Airtel, ACT, DEN etc.',
    animation: 'flip-left',
  },
  {
    icon: <FaUsers className="icon text-danger" />,
    title: 'Collection & Retentions',
    description:
      'Collection and Retentions for Internet Service Providers like Den, Hathway, Airtel, SitiCable',
    animation: 'zoom-in',
  },
  {
    icon: <FaShieldAlt className="icon text-primary" />,
    title: 'Customer Verification Activity',
    description:
      'We also have experience of doing Periodic Verification of Enterprise Accounts.',
    animation: 'flip-left',
  },
  {
    icon: <FaTools className="icon text-warning" />,
    title: 'Service delivery FTTH',
    description:
      'Preferred Vendor for FTTH Installation process and Site layout diagrams, Planning for FTTH Network for Airtel, Tata, Starlite',
    animation: 'zoom-in',
  },
  {
    icon: <FaHammer className="icon text-secondary" />,
    title: 'Service Delivery I&FR',
    description:
      'Installation & Fault Repair activity also undertaken by our teams currently in Delhi NCR locations.',
    animation: 'flip-left',
  },
  {
    icon: <FaNetworkWired className="icon text-success" />,
    title: 'Network Creation projects',
    description:
      'We work in Site acquisition, Creation of Foundation & Base – Building for Network.',
    animation: 'zoom-in',
  },
];

const Homeservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5 homeservices-section">
      <h2 className="text-center text-primary fw-bold mb-4 display-5">Our Services</h2>
      <p className="text-center mb-5 fs-5 text-muted">
        We Provide a Wide range of Telecom Solutions and Services
      </p>

      <div className="row">
        {services.map((service, index) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            data-aos={service.animation}
            key={index}
          >
            <div className="card service-card h-100">
              <div className="card-body text-center">
                <div className="mb-3">{service.icon}</div>
                <h5 className="card-title fw-bold fs-4">{service.title}</h5>
                <p className="card-text fs-6">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homeservices;
