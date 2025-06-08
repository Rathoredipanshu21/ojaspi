import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaSearchDollar,
  FaBullhorn,
  FaChartPie,
  FaUsers,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaBullseye,
  FaLightbulb,
  FaDollarSign,
  FaUserFriends,
  FaChartLine,
  FaMagic,
  FaEdit,
  FaLaptopCode,
  FaHandshake, // Added FaHandshake import
  FaRocket     // Added FaRocket import
} from 'react-icons/fa';

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize AOS with more engaging options for a dynamic feel
    setTimeout(() => AOS.init({
      duration: 1200, // Animation duration
      once: true,    // Only animate once per element
      offset: 150,   // Offset (in px) from the top of the screen to trigger animation
      easing: 'ease-out-cubic', // Smoother easing function
    }), 100);
  }, []);

  // Define core digital marketing services with expanded descriptions
  const coreServices = [
    {
      icon: <FaSearchDollar className="text-info mb-3" size={40} />,
      title: 'SEO & Search Engine Marketing',
      desc: 'Significantly enhance your website visibility on search engines. Our strategies combine organic SEO optimizations with targeted SEM campaigns to capture high-intent traffic and dominate search results.'
    },
    {
      icon: <FaBullhorn className="text-success mb-3" size={40} />,
      title: 'Brand Promotion & Awareness',
      desc: 'Build a powerful online brand presence through compelling storytelling, engaging video ads, and strategic influencer collaborations. We craft campaigns that resonate and create lasting impressions.'
    },
    {
      icon: <FaChartPie className="text-warning mb-3" size={40} />,
      title: 'Marketing Analytics & Reporting',
      desc: 'Gain crystal-clear insights into your campaign performance. We implement robust tracking, analyze key metrics, and provide intuitive dashboards to optimize your marketing spend and demonstrate clear ROI.'
    },
    {
      icon: <FaUsers className="text-light-blue mb-3" size={40} />, // Custom color
      title: 'Comprehensive Social Media Management',
      desc: 'From captivating Reels to strategic posts and engaging stories, we manage your presence across Facebook, Instagram, LinkedIn, and more, fostering community and driving brand loyalty.'
    },
    {
      icon: <FaEnvelopeOpenText className="text-danger mb-3" size={40} />,
      title: 'Targeted Email Marketing',
      desc: 'Execute highly effective bulk and automated email campaigns. We focus on advanced segmentation, personalized content, visually appealing templates, and detailed performance reports to nurture leads and drive conversions.'
    },
    {
      icon: <FaGoogle className="text-orange mb-3" size={40} />, // Custom color
      title: 'Google Ads Certified Expertise',
      desc: 'As certified Google Ads professionals, we expertly run search, display, shopping, and video ads on the Google platform, ensuring maximum reach and optimal conversion rates for your budget.'
    },
  ];

  return (
    <div style={{ backgroundColor: '#1A232F', color: '#E0E0E0' }}>

      {/* Hero Section */}
      <section className="py-5 text-center text-md-start" style={{ backgroundColor: '#1A232F', borderBottom: '6px solid #FFD700' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-md-7" data-aos="fade-right" data-aos-delay="100">
              <h1 className="fw-bold display-4 text-gold mb-3">
                Digital Marketing That Makes Your Business Roar!
              </h1>
              <p className="lead text-light-gray mb-4">
                Dominate your market with cutting-edge digital strategies. We specialize in Meta Ads and Instagram boosts to amplify your brand, engage your audience, and drive unparalleled growth.
              </p>
              <a
                href="/contact"
                className="btn btn-lg rounded-pill"
                style={{ backgroundColor: '#FFD700', color: '#1A232F', padding: '14px 40px', fontWeight: 700, fontSize: '1.1rem' }}
                data-aos="fade-up" data-aos-delay="300"
              >
                Claim Your Free Digital Audit Today!
              </a>
            </div>
            <div className="col-md-5 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <FaBullhorn size={200} className="text-gold animate-bounce" /> {/* Custom animation class */}
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Introduction to Our Approach */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-gold mb-4" data-aos="fade-up">
            Beyond Clicks: Driving Real Business Impact
          </h2>
          <p className="lead text-light-gray mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            In today's competitive digital landscape, mere visibility isn't enough. We design and execute campaigns that not only get your business seen but also convert interest into tangible results. Our focus is on strategic engagement and measurable ROI.
          </p>
          <div className="row g-4 justify-content-center">
            {coreServices.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                <div className="p-4 rounded-4 shadow bg-dark-card h-100 text-center service-card-hover">
                  {service.icon}
                  <h5 className="fw-bold text-white mt-3 mb-2">{service.title}</h5>
                  <p className="text-light-gray fs-6" style={{ lineHeight: '1.7' }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Deep Dive: Meta Ads (Facebook & Instagram Ads) */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Mastering Meta Ads: Unleash Your Brand's Potential on Facebook & Instagram
          </h2>
          <p className="lead text-light-gray text-center mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Meta's advertising platforms (Facebook Ads and Instagram Ads) offer unparalleled targeting capabilities and reach. We leverage these powerful tools to connect you with your ideal customers where they spend their time, turning impressions into conversions.
          </p>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center text-md-start" data-aos="fade-right" data-aos-delay="200">
              <FaFacebookF size={100} className="text-light-blue mb-4 animate-scale" />
              <h3 className="fw-bold text-white mb-3">Precision Targeting & Massive Reach</h3>
              <p className="text-light-gray mb-4">
                Meta's robust audience insights allow us to pinpoint your exact demographic, interests, and behaviors. We create highly segmented campaigns that reach millions of potential customers, ensuring your message lands with the right people at the right time.
              </p>
              <ul className="list-unstyled text-light-gray small-text">
                <li className="mb-2" data-aos="fade-up" data-aos-delay="300"><FaBullseye className="me-2 text-gold" /> Demographics, Interests & Behaviors</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="400"><FaUserFriends className="me-2 text-gold" /> Custom & Lookalike Audiences</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="500"><FaChartLine className="me-2 text-gold" /> Extensive Global & Local Reach</li>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://placehold.co/600x400/34495e/ffffff?text=Meta+Ads+Visual"
                alt="Meta Ads Campaign Visual"
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/34495e/ffffff?text=Meta+Ads+Visual'} // Fallback
                data-aos="fade-left" data-aos-delay="600"
              />
            </div>
          </div>

          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 text-center text-md-start" data-aos="fade-left" data-aos-delay="200">
              <FaLightbulb size={100} className="text-gold mb-4 animate-scale" />
              <h3 className="fw-bold text-white mb-3">Creative Ad Development & Optimization</h3>
              <p className="text-light-gray mb-4">
                Our experts craft compelling ad creatives, from eye-catching images and dynamic videos to persuasive ad copy, designed to stop the scroll. We continuously A/B test and optimize campaigns for maximum performance and return on ad spend.
              </p>
              <ul className="list-unstyled text-light-gray small-text">
                <li className="mb-2" data-aos="fade-up" data-aos-delay="300"><FaMagic className="me-2 text-success" /> Engaging Visuals & Video Ads</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="400"><FaEdit className="me-2 text-success" /> Persuasive Ad Copy & Calls to Action</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="500"><FaChartPie className="me-2 text-success" /> Continuous A/B Testing & Optimization</li>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://placehold.co/600x400/34495e/ffffff?text=Ad+Creative+Example"
                alt="Ad Creative Example"
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/34495e/ffffff?text=Ad+Creative+Example'} // Fallback
                data-aos="fade-right" data-aos-delay="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Deep Dive: Instagram Boosts & Organic Growth */}
      <section className="py-5" style={{ backgroundColor: '#202C39' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Igniting Your Instagram: Boosts, Engagement & Organic Virality
          </h2>
          <p className="lead text-light-gray text-center mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-delay="100">
            Instagram is a visual powerhouse for brand building and direct engagement. We don't just boost posts; we craft a holistic strategy to cultivate a vibrant community, drive organic reach, and amplify your key messages with precision-targeted boosts.
          </p>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center text-md-start" data-aos="fade-right" data-aos-delay="200">
              <FaInstagram size={100} className="text-pink-insta mb-4 animate-scale" /> {/* Custom color */}
              <h3 className="fw-bold text-white mb-3">Strategic Instagram Boosts</h3>
              <p className="text-light-gray mb-4">
                Beyond standard promotions, we strategically boost your best-performing content to reach a wider, yet highly relevant audience. This method is cost-effective for increasing post visibility, driving website traffic, and gathering initial lead interest directly from your engaging content.
              </p>
              <ul className="list-unstyled text-light-gray small-text">
                <li className="mb-2" data-aos="fade-up" data-aos-delay="300"><FaBullhorn className="me-2 text-gold" /> Extend Reach of Key Content</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="400"><FaChartLine className="me-2 text-gold" /> Drive Profile Visits & Website Clicks</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="500"><FaDollarSign className="me-2 text-gold" /> Cost-Effective Engagement Campaigns</li>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://placehold.co/600x400/34495e/ffffff?text=Instagram+Boost+Visual"
                alt="Instagram Boost Visual"
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/34495e/ffffff?text=Instagram+Boost+Visual'} // Fallback
                data-aos="fade-left" data-aos-delay="600"
              />
            </div>
          </div>

          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 text-center text-md-start" data-aos="fade-left" data-aos-delay="200">
              <FaUserFriends size={100} className="text-gold mb-4 animate-scale" />
              <h3 className="fw-bold text-white mb-3">Cultivating Organic Instagram Growth</h3>
              <p className="text-light-gray mb-4">
                While boosts provide immediate reach, we focus on building sustainable organic growth. This includes developing a content strategy that resonates with your audience, fostering genuine interactions, leveraging trending formats like Reels, and optimizing your profile for discoverability.
              </p>
              <ul className="list-unstyled text-light-gray small-text">
                <li className="mb-2" data-aos="fade-up" data-aos-delay="300"><FaEdit className="me-2 text-success" /> Engaging Content Strategy (Reels, Stories, Posts)</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="400"><FaLightbulb className="me-2 text-success" /> Hashtag Research & Trend Leveraging</li>
                <li className="mb-2" data-aos="fade-up" data-aos-delay="500"><FaUsers className="me-2 text-success" /> Community Engagement & Interaction</li>
              </ul>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://placehold.co/600x400/34495e/ffffff?text=Organic+Growth+Visual"
                alt="Organic Growth Visual"
                className="img-fluid rounded-4 shadow-lg"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/34495e/ffffff?text=Organic+Growth+Visual'} // Fallback
                data-aos="fade-right" data-aos-delay="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Why Choose Us Section */}
      <section className="py-5 bg-dark-card">
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Why Partner With Us for Your Digital Marketing?
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4" data-aos="fade-right" data-aos-delay="100">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaChartLine size={50} className="text-success mb-3" />
                  <h4 className="fw-bold text-white mb-3">Results-Driven Strategy</h4>
                  <p className="card-text text-light-gray">
                    Our campaigns are built on data-backed insights, ensuring every penny you spend drives measurable outcomes and significant return on investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaLightbulb size={50} className="text-warning mb-3" />
                  <h4 className="fw-bold text-white mb-3">Creative & Innovative Campaigns</h4>
                  <p className="card-text text-light-gray">
                    We push the boundaries of creativity, developing unique ad creatives and compelling content that capture attention and stand out in crowded feeds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="card h-100 shadow-lg border-0 bg-darker-card text-light-gray p-4 rounded-4 service-card-hover">
                <div className="card-body text-center d-flex flex-column justify-content-between">
                  <FaHandshake size={50} className="text-info mb-3" />
                  <h4 className="fw-bold text-white mb-3">Transparent Reporting & Support</h4>
                  <p className="card-text text-light-gray">
                    Receive clear, actionable reports and enjoy dedicated support from our team. We keep you informed every step of the way, fostering a partnership built on trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Our Process Section */}
      <section className="py-5" style={{ backgroundColor: '#1A232F' }}>
        <div className="container">
          <h2 className="text-center fw-bold text-gold mb-5" data-aos="fade-up">
            Our Streamlined Digital Marketing Process
          </h2>
          <div className="row g-4 text-center">
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step p-4 rounded-4 bg-dark-card h-100 shadow-sm process-step-hover">
                <FaChartPie size={50} className="text-success mb-3" />
                <h5 className="fw-bold text-white">1. Discover & Strategize</h5>
                <p className="text-light-gray-50">Deep dive into your brand, audience, and goals to craft a winning strategy.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step p-4 rounded-4 bg-dark-card h-100 shadow-sm process-step-hover">
                <FaLaptopCode size={50} className="text-warning mb-3" />
                <h5 className="fw-bold text-white">2. Develop & Launch</h5>
                <p className="text-light-gray-50">Create compelling creatives and launch your campaigns with precision.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="process-step p-4 rounded-4 bg-dark-card h-100 shadow-sm process-step-hover">
                <FaSearchDollar size={50} className="text-info mb-3" />
                <h5 className="fw-bold text-white">3. Optimize & Scale</h5>
                <p className="text-light-gray-50">Continuously monitor, analyze, and refine campaigns for maximum ROI.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div className="process-step p-4 rounded-4 bg-dark-card h-100 shadow-sm process-step-hover">
                <FaRocket size={50} className="text-danger mb-3" />
                <h5 className="fw-bold text-white">4. Report & Grow</h5>
                <p className="text-light-gray-50">Provide transparent reports and plan next steps for sustained growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Final Call to Action */}
      <section className="py-5 text-center" style={{ backgroundColor: '#202C39' }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold display-5 text-gold mb-4">
            Ready to See Your Business Thrive Online?
          </h2>
          <p className="lead text-light-gray mb-5">
            Let's craft a powerful digital marketing strategy tailored to your unique goals. From boosting your Instagram presence to running high-converting Meta Ad campaigns, we're here to amplify your message and drive real business growth.
          </p>
          <a
            href="/contact"
            className="btn btn-lg rounded-pill"
            style={{ backgroundColor: '#FFD700', color: '#1A232F', padding: '16px 50px', fontWeight: 700, fontSize: '1.3rem' }}
            data-aos="zoom-in" data-aos-delay="200"
          >
            Get Your Custom Marketing Plan
          </a>
        </div>
      </section>

      {/* Footer Strip */}
      <section className="py-4 text-center" style={{ backgroundColor: '#1A232F', borderTop: '1px solid rgba(255,215,0,0.2)' }} data-aos="fade-up">
        <div className="container">
          <p className="mb-0 text-light-gray-50">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved. | Empowering Businesses Digitally.</p>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .text-gold { color: #FFD700 !important; } /* Golden color for main headings */
        .text-light-gray { color: #E0E0E0 !important; } /* A softer white */
        .text-light-gray-50 { color: rgba(224, 224, 224, 0.7) !important; } /* For subtle text */
        .text-info { color: #00BCD4 !important; } /* Consistent info blue */
        .text-success { color: #4CAF50 !important; } /* Consistent success green */
        .text-warning { color: #FFC107 !important; } /* Consistent warning yellow */
        .text-danger { color: #F44336 !important; } /* Consistent danger red */
        .text-light-blue { color: #00BFFF !important; } /* Custom for Facebook */
        .text-pink-insta { background: -webkit-linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #833ab4, #5851db, #405de6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } /* Instagram gradient */
        .text-orange { color: #FF5722 !important; } /* Custom for Google Ads */

        .bg-dark-card { background-color: #2b3e50 !important; } /* Slightly lighter dark for cards */
        .bg-darker-card { background-color: #263238 !important; } /* Even darker for nested cards */

        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-scale {
          animation: scalePulse 2s infinite alternate;
        }
        @keyframes scalePulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .service-card-hover {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .service-card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .process-step-hover {
          border: 1px solid rgba(255,215,0,0.2);
          transition: all 0.3s ease;
        }
        .process-step-hover:hover {
          background-color: #263238 !important; /* Darken on hover */
          border-color: #FFD700; /* Gold border on hover */
          transform: translateY(-5px);
        }

        .small-text li {
            font-size: 0.95rem; /* Slightly smaller font for list items */
        }
      `}</style>
    </div>
  );
};

export default DigitalMarketing;
