// Reduced Career.jsx - Aiming for ~500 lines

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaLaptopCode, FaMapMarkedAlt, FaPhoneAlt,
  FaBullhorn, FaBriefcase, FaGraduationCap, FaUsers, FaMedal,
  FaBuilding, FaTools, FaFileAlt, FaUserCheck
} from 'react-icons/fa'; // Only essential icons

// Simplified Vacancies Data
const vacancies = [
  {
    title: 'Telecaller Executive',
    department: 'Customer Engagement',
    location: 'Remote / On-site',
    icon: <FaPhoneAlt size={25} className="text-warning" />,
    shortDesc: 'Engage with potential customers, present services.',
    skills: ['Communication', 'Problem-solving'],
  },
  {
    title: 'Field Executive',
    department: 'Operations',
    location: 'On-site (Regional)',
    icon: <FaMapMarkedAlt size={25} className="text-success" />,
    shortDesc: 'Conduct on-site document verification and collections.',
    skills: ['Travel', 'Reporting'],
  },
  {
    title: 'Junior Software Developer',
    department: 'Technology',
    location: 'On-site / Hybrid',
    icon: <FaLaptopCode size={25} className="text-primary" />,
    shortDesc: 'Develop web applications using MERN Stack.',
    skills: ['MERN', 'APIs'],
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    icon: <FaBullhorn size={25} className="text-danger" />,
    shortDesc: 'Plan and execute digital marketing campaigns.',
    skills: ['SEO', 'Meta Ads'],
  },
  {
    title: 'HR Coordinator',
    department: 'Human Resources',
    location: 'On-site',
    icon: <FaBriefcase size={25} className="text-info" />,
    shortDesc: 'Support HR functions like recruitment, onboarding.',
    skills: ['HR Admin', 'Employee Relations'],
  },
];

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#1A232F', color: '#E0E0E0', minHeight: '100vh' }}>

      {/* 1. Hero Section */}
      <section className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1A232F 0%, #202C39 100%)', borderBottom: '4px solid #4A90E2' }}>
        <div className="container" data-aos="fade-down">
          <h1 className="display-5 fw-bold text-white mb-3">
            Join Our Team
          </h1>
          <p className="lead text-light-gray mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Ready to make an impact? Explore exciting career opportunities with us.
          </p>
          <Link
            to="#vacancies"
            className="btn btn-lg rounded-pill"
            style={{ background: 'linear-gradient(45deg, #4A90E2, #6090E2)', color: '#fff', border: 'none' }}
            data-aos="fade-up" data-aos-delay="100"
          >
            See Open Positions <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </section>

      {/* 2. Why Join Us Section - Simplified */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Why Work With Us?
          </h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: <FaGraduationCap size={40} className="text-info mb-2" />,
                title: 'Growth & Learning',
                desc: 'Invest in your continuous development.'
              },
              {
                icon: <FaUsers size={40} className="text-success mb-2" />,
                title: 'Collaborative Culture',
                desc: 'Work in a supportive, idea-sharing environment.'
              },
              {
                icon: <FaMedal size={40} className="text-warning mb-2" />,
                title: 'Meaningful Impact',
                desc: 'Contribute to projects that matter.'
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="p-4 rounded-3 text-center" style={{ backgroundColor: '#2b3e50', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                  {item.icon}
                  <h5 className="fw-bold text-white mt-2 mb-1">{item.title}</h5>
                  <p className="text-light-gray small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Current Job Vacancies - Highly Simplified */}
      <section id="vacancies" className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Current Open Positions
          </h2>
          <div className="row g-4">
            {vacancies.map((job, i) => (
              <div
                key={job.title}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#2b3e50', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                  <div className="d-flex align-items-center mb-3">
                    {job.icon}
                    <h5 className="ms-3 mb-0 text-white fw-bold">{job.title}</h5>
                  </div>
                  <p className="text-light-gray small mb-2">{job.shortDesc}</p>
                  <p className="text-gold mb-1 small"><FaBuilding className="me-2" />Dept: <span className="text-light-gray">{job.department}</span></p>
                  <p className="text-gold mb-1 small"><FaMapMarkedAlt className="me-2" />Loc: <span className="text-light-gray">{job.location}</span></p>
                  <p className="text-gold mb-2 small"><FaTools className="me-2" />Skills: <span className="text-light-gray">{job.skills.join(', ')}</span></p>

                  <div className="mt-3 text-center">
                    <Link
                      to={`/apply?job=${encodeURIComponent(job.title)}`}
                      className="btn btn-sm rounded-pill"
                      style={{ background: 'linear-gradient(45deg, #4A90E2, #6090E2)', color: '#fff', border: 'none' }}
                    >
                      Apply <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
            <p className="lead text-light-gray">Can't find a suitable role?</p>
            <Link to="/contact" className="btn btn-outline-warning rounded-pill">
              Submit Resume <FaArrowRight className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

    

      {/* Minimal Custom Styles for color consistency */}
      <style jsx>{`
        .text-gold { color: #FFD700 !important; }
        .text-light-gray { color: #E0E0E0 !important; }
        .text-primary { color: #4A90E2 !important; }
        .text-success { color: #8BC34A !important; }
        .text-warning { color: #FFEB3B !important; }
        .text-danger { color: #EF5350 !important; }
        .text-info { color: #87CEEB !important; }

        .btn-outline-warning {
          border-color: #FFD700 !important;
          color: #FFD700 !important;
          transition: all 0.3s ease;
        }
        .btn-outline-warning:hover {
          background-color: #FFD700 !important;
          color: #1A232F !important;
        }

        /* Responsive adjustments */
        @media (max-width: 767.98px) {
          .display-5 { font-size: 2rem !important; }
          .lead { font-size: 1rem !important; }
          .btn-lg { padding: 8px 20px !important; font-size: 1rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Career;