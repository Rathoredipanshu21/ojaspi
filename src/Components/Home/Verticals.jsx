import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaNetworkWired,
  FaBoxes,
  FaShoppingCart,
  FaCity,
  FaUsers,
  FaClock,
} from 'react-icons/fa';

const JourneyTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      year: '2013',
      items: [
        { icon: <FaGlobe />, text: 'Launched website' },
        { icon: <FaMapMarkerAlt />, text: 'Started serving in Bangalore' },
      ],
      aos: 'fade-right',
    },
    {
      year: '2015',
      items: [
        { icon: <FaNetworkWired />, text: 'Expanded Delivery Network to 30 Cities' },
        { icon: <FaBoxes />, text: 'Added 40+ Product Categories' },
        { icon: <FaShoppingCart />, text: 'Clocked Over 100,000 Orders' },
      ],
      aos: 'fade-left',
    },
    {
      year: '2017',
      items: [
        { icon: <FaCity />, text: 'Expanded Delivery Network to 150 cities' },
        { icon: <FaUsers />, text: 'Touched over 3 million customers' },
        { icon: <FaClock />, text: 'Launched Guaranteed Fixed Time Delivery' },
        { icon: <FaGlobe />, text: 'Started Delivery In 3 Countries' },
      ],
      aos: 'fade-right',
    },
  ];

  return (
    <div style={styles.wrapper}>
      <h2 className="text-center fw-bold mb-5 display-5 text-primary">Our Journey</h2>
      <div className="container position-relative" style={styles.timelineWrapper}>
        {/* Dotted vertical line */}
        <div style={styles.dottedLine}></div>

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const align = isLeft ? 'text-start' : 'text-end';
          const colClass = isLeft ? '' : 'order-md-2';

          return (
            <div
              key={index}
              className={`row align-items-center mb-5 ${align}`}
              data-aos={step.aos}
            >
              <div className={`col-12 col-md-6 ${colClass}`}>
                <div style={styles.card}>
                  <h5 className="text-primary fw-bold mb-3">{step.year}</h5>
                  <ul className="list-unstyled mb-0">
                    {step.items.map((item, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center gap-2">
                        <span style={styles.icon}>{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div style={styles.circle}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '3rem 1rem',
    backgroundColor: '#f8f9fa',
    fontFamily: "'Gillroy', 'Poppins', sans-serif",
  },
  timelineWrapper: {
    maxWidth: '1000px',
  },
  dottedLine: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '100%',
    backgroundImage:
      'repeating-linear-gradient(to bottom, #0d6efd, #0d6efd 8px, transparent 8px, transparent 16px)',
    zIndex: 0,
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
    zIndex: 2,
    position: 'relative',
  },
  icon: {
    fontSize: '1.1rem',
    color: '#0d6efd',
    marginTop: '2px',
  },
  circle: {
    width: '24px',
    height: '24px',
    backgroundColor: '#fff',
    border: '5px solid #0d6efd',
    borderRadius: '50%',
    zIndex: 1,
  },
};

export default JourneyTimeline;
