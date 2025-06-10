import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaUserTie,
  FaUsers,
  FaClipboardCheck,
  FaMoneyCheckAlt,
  FaFileSignature,
  FaUserCheck,
  FaAddressCard,
  FaRegClock,
  FaSearch,
  FaHandshake,
  FaCalculator,
  FaGavel
} from 'react-icons/fa';

const HrServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => AOS.init({ duration: 1200, once: true, offset: 100 }), 100);
  }, []);

  const hrFeatures = [
    {
      icon: <FaUserTie size={40} className="text-warning mb-3" />,
      title: 'Talent Acquisition & Hiring',
      desc: 'Our end-to-end talent acquisition solution covers everything from meticulous job profiling and strategic sourcing to thorough candidate screening, interview coordination, offer management, and seamless onboarding. We leverage a vast network and advanced tools to identify and attract top-tier talent, ensuring a perfect fit for your organizational culture and business objectives across various industries.'
    },
    {
      icon: <FaUsers size={40} className="text-success mb-3" />,
      title: 'Staffing',
      desc: 'We provide flexible and scalable staffing models, offering both contractual and permanent placements tailored specifically for sectors like IT, BPO, Retail, Manufacturing, and MSMEs. All candidates undergo rigorous background verification and skill assessments, ensuring you receive qualified and reliable professionals while maintaining complete compliance with labor laws and industry regulations.'
    },
    {
      icon: <FaClipboardCheck size={40} className="text-warning mb-3" />,
      title: 'Payroll Management',
      desc: 'Our comprehensive payroll management services automate your entire payroll process, from accurate salary computation and tax deductions (TDS) to timely PF/ESIC contributions, professional payslip generation, and seamless bank transfers. We ensure compliance with all statutory regulations, reducing administrative burden and minimizing errors for your organization.'
    },
    {
      icon: <FaFileSignature size={40} className="text-success mb-3" />,
      title: 'Statutory Compliance',
      desc: 'Navigating India\'s complex labor laws can be challenging. We guarantee full adherence to all critical statutory compliances, including EPFO, ESIC, Minimum Wages Act, Payment of Gratuity Act, Shops and Establishments Act, and other applicable local and national labor laws across all states. Our proactive approach helps you mitigate risks and avoid penalties.'
    },
    {
      icon: <FaUserCheck size={40} className="text-warning mb-3" />,
      title: 'Background Verification (BGV)',
      desc: 'Our robust background verification services are essential for secure hiring. We conduct comprehensive checks, including criminal record checks, detailed educational qualifications verification, previous employment history validation, and social identity screening. This thorough process provides you with confidence in your hiring decisions for all levels of employees.'
    },
    // The following features were in your original code but not in your new content,
    // so I've kept them to maintain the original structure.
    {
      icon: <FaMoneyCheckAlt size={40} className="text-success mb-3" />,
      title: 'Compensation & Benefits Structuring',
      desc: 'We design customized compensation and benefits strategies that are directly aligned with your business\'s performance KPIs, organizational hierarchy, and industry benchmarks. This includes crafting competitive salary structures, incentive programs, and employee welfare schemes to attract, motivate, and retain your most valuable assets while ensuring full compliance with relevant regulations.'
    },
    {
      icon: <FaAddressCard size={40} className="text-warning mb-3" />,
      title: 'Onboarding & Exit Formalities',
      desc: 'We streamline the entire employee lifecycle with efficient digital onboarding kits, secure document management, effective induction tracking, and structured exit formalities complete with valuable feedback loops. Our services ensure a smooth transition for employees joining and leaving your organization, maintaining positive employer branding.'
    },
    {
      icon: <FaRegClock size={40} className="text-success mb-3" />,
      title: 'HR Operations Outsourcing',
      desc: 'Free up your internal teams by outsourcing your HR operations to us. We offer fully managed services covering daily employee query management, efficient HRMS handling, comprehensive data reporting and analytics, and crucial audit assistance. This allows your organization to focus on core business strategies while we handle the operational complexities.'
    },
  ];

  return (
    <div style={{ backgroundColor: '#2A4E5E', color: '#fff' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ backgroundColor: '#1C3B4A' }}>
        <div className="container" style={{ maxWidth: '85%' }}>
          <div className="row align-items-center">
            <div className="col-md-7 text-center text-md-start" data-aos="fade-right" data-aos-easing="ease-in-sine">
              <h1 className="fw-bold display-5 text-warning mb-3">End-to-End HR Solutions for Your Business Growth</h1>
              <p className="lead text-light mb-4">
                We provide comprehensive and strategic HR services, meticulously covering every aspect of the employee lifecycle—from expert talent acquisition and flexible staffing to seamless payroll management, robust compliance, and efficient HR operations outsourcing.
              </p>
              <a
                href="/contact"
                className="btn btn-lg rounded-pill"
                style={{ backgroundColor: '#03CB58', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
                data-aos="fade-up" data-aos-delay="200"
              >
                Get Tailored HR Support
              </a>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="300">
              <FaUsers size={140} className="text-warning" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-white mb-5" data-aos="fade-up">Our Comprehensive HR Service Portfolio</h2>
          <div className="row g-4">
            {hrFeatures.map((item, idx) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={item.title}
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={idx * 100}
              >
                <div className="p-4 rounded-4 shadow bg-dark h-100 text-center d-flex flex-column justify-content-between align-items-center">
                  {item.icon}
                  <h5 className="fw-bold text-white mb-2 mt-3">{item.title}</h5>
                  <p className="text-light fs-6 mt-2" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive into Recruitment Services */}
      <section className="py-5" style={{ backgroundColor: '#1C3B4A' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 text-center text-md-start" data-aos="fade-left" data-aos-easing="ease-out-quad">
              <h2 className="fw-bold text-warning mb-3">Recruitment (R) Services: Finding Your Next Star</h2>
              <p className="text-light mb-4">
                Our recruitment process is designed to be highly effective and efficient, ensuring you get the best talent while minimizing your time and resources.
              </p>
              <ul className="list-unstyled text-light">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100"><FaSearch className="me-2 text-success" /> <span className="fw-bold">Strategic Sourcing:</span> Utilizing a blend of traditional and digital channels, including job boards, professional networks, social media, and our extensive talent database.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200"><FaHandshake className="me-2 text-success" /> <span className="fw-bold">Rigorous Screening & Assessment:</span> Beyond resumes, we conduct in-depth interviews, skill assessments, and psychometric evaluations to gauge true potential and cultural fit.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300"><FaClipboardCheck className="me-2 text-success" /> <span className="fw-bold">Offer Management & Negotiation:</span> Expertly managing the offer process to ensure a smooth transition from candidate to employee, handling negotiations with professionalism.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400"><FaAddressCard className="me-2 text-success" /> <span className="fw-bold">Seamless Onboarding Support:</span> Assisting with the initial steps of integrating new hires into your team, including digital documentation and introductory processes.</li>
              </ul>
            </div>
            <div className="col-md-6 order-md-1 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
              <FaSearch size={140} className="text-success" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive into Payroll Services */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start" data-aos="fade-right" data-aos-easing="ease-out-quad">
              <h2 className="fw-bold text-warning mb-3">Payroll Management: Accuracy, Compliance & Peace of Mind</h2>
              <p className="text-light mb-4">
                Managing payroll accurately and compliantly is critical. Our services ensure your employees are paid on time, every time, with full adherence to statutory requirements.
              </p>
              <ul className="list-unstyled text-light">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100"><FaCalculator className="me-2 text-warning" /> <span className="fw-bold">Automated Salary Processing:</span> Precision in calculating salaries, wages, bonuses, and commissions, factoring in attendance and leave.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200"><FaMoneyCheckAlt className="me-2 text-warning" /> <span className="fw-bold">Tax & Deductions Management:</span> Expert handling of TDS, PF, ESIC, and other statutory deductions, ensuring timely submission and accurate reporting.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300"><FaFileSignature className="me-2 text-warning" /> <span className="fw-bold">Payslip Generation & Distribution:</span> Automated generation and secure distribution of detailed, compliant payslips to all employees.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400"><FaClipboardCheck className="me-2 text-warning" /> <span className="fw-bold">Reconciliation & Reporting:</span> Comprehensive reconciliation of payroll data and generation of insightful reports for internal review and audit purposes.</li>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
              <FaCalculator size={140} className="text-warning" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive into Statutory Compliance */}
      <section className="py-5" style={{ backgroundColor: '#1C3B4A' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2 text-center text-md-start" data-aos="fade-left" data-aos-easing="ease-out-quad">
              <h2 className="fw-bold text-warning mb-3">Statutory Compliance: Navigating India's Complex Labor Laws</h2>
              <p className="text-light mb-4">
                Staying compliant with India's ever-evolving labor laws is crucial to avoid legal complications and penalties. We offer end-to-end compliance management.
              </p>
              <ul className="list-unstyled text-light">
                <li className="mb-3" data-aos="fade-up" data-aos-delay="100"><FaGavel className="me-2 text-success" /> <span className="fw-bold">EPFO & ESIC Management:</span> Timely registration, contribution, and filing under the Employees' Provident Fund Organization and Employees' State Insurance Corporation.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="200"><FaFileSignature className="me-2 text-success" /> <span className="fw-bold">Minimum Wages Act Adherence:</span> Ensuring all employees are paid as per the latest minimum wage regulations across different states and industries.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="300"><FaClipboardCheck className="me-2 text-success" /> <span className="fw-bold">Shops & Establishments Act:</span> Compliance with local regulations concerning working hours, holidays, leave, and other conditions of employment.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="400"><FaAddressCard className="me-2 text-success" /> <span className="fw-bold">Labor Law Advisory:</span> Providing expert guidance on various labor laws, including industrial disputes, contract labor, and other relevant statutes.</li>
                <li className="mb-3" data-aos="fade-up" data-aos-delay="500"><FaUserCheck className="me-2 text-success" /> <span className="fw-bold">Audit & Due Diligence Support:</span> Assisting with internal and external audits to ensure all compliance records are accurate and up-to-date.</li>
              </ul>
            </div>
            <div className="col-md-6 order-md-1 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
              <FaGavel size={140} className="text-success" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold text-warning mb-3">Why Partner With Us for Your HR Needs?</h2>
          <p className="lead text-light mb-4">
            We are more than just an HR service provider; we are your strategic partner in building a productive and compliant workforce.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 rounded-4 shadow bg-dark h-100 d-flex flex-column justify-content-between align-items-center">
                <h5 className="fw-bold text-white mb-2">Expertise & Experience</h5>
                <p className="text-light fs-6">Years of industry experience with a team of seasoned HR professionals who understand the nuances of various sectors.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 rounded-4 shadow bg-dark h-100 d-flex flex-column justify-content-between align-items-center">
                <h5 className="fw-bold text-white mb-2">Customized Solutions</h5>
                <p className="text-light fs-6">We don't believe in one-size-fits-all. Our services are tailored to meet your unique business requirements and challenges.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="p-4 rounded-4 shadow bg-dark h-100 d-flex flex-column justify-content-between align-items-center">
                <h5 className="fw-bold text-white mb-2">Technology-Driven Processes</h5>
                <p className="text-light fs-6">Leveraging advanced HRMS and automation tools for efficiency, accuracy, and real-time insights.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="p-4 rounded-4 shadow bg-dark h-100 d-flex flex-column justify-content-between align-items-center">
                <h5 className="fw-bold text-white mb-2">Compliance Assurance</h5>
                <p className="text-light fs-6">Proactive monitoring and expert guidance to ensure your business remains fully compliant with all labor laws and regulations.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
              <div className="p-4 rounded-4 shadow bg-dark h-100 d-flex flex-column justify-content-between align-items-center">
                <h5 className="fw-bold text-white mb-2">Cost-Effectiveness</h5>
                <p className="text-light fs-6">Optimize your HR budget by outsourcing, reducing overheads, and enhancing operational efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Companies */}
      <section className="py-5 bg-black text-center" data-aos="fade-up" data-aos-easing="ease-in-out">
        <div className="container">
          <h2 className="fw-bold text-warning mb-3">Trusted by Growing Teams Across India</h2>
          <p className="text-light mb-0">
            We proudly support a diverse range of organizations, including startups, established enterprises, NGOs, and government agencies, with agile, reliable, and highly effective HR services tailored to the Indian market.
          </p>
        </div>
      </section>

      {/* Call to Action Footer Strip */}
      <section className="py-5 text-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="container">
          <h2 className="fw-bold text-warning mb-4">One Partner. All Your HR Needs. Simplified.</h2>
          <p className="fs-5 text-light mb-4">
            From the initial stages of employee acquisition to their seamless integration and even structured exit formalities—we manage every aspect of your human resources with unmatched precision, unwavering security, and genuine care.
          </p>
          <a
            href="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#03CB58', color: '#fff', padding: '12px 36px', fontWeight: 600 }}
            data-aos="fade-up" data-aos-delay="200"
          >
            Schedule a Consultation Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default HrServices;