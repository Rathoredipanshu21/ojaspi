import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import removeBgImage from "../Assets/hero11.png";

const Herosection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <style>{`
        .section-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          padding: 60px 10%;
          padding-top: 120px;
          min-height: 100vh;
          color: #fff;
        }

        .section-text {
          flex: 1;
          padding-right: 30px;
        }

        .section-text h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #ffd700;
        }

        .section-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #f0f0f0;
        }

        .know-more-btn {
          margin-top: 25px;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          border: none;
          padding: 12px 30px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 114, 255, 0.4);
        }

        .know-more-btn:hover {
          background: linear-gradient(to right, #0072ff, #00c6ff);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 114, 255, 0.6);
        }

        .section-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .section-image img {
          width: 100%;
          max-width: 450px;
          height: auto;
          object-fit: contain;
          animation: fadeInRight 1.5s ease;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
            padding: 40px 20px;
            padding-top: 120px;
            text-align: center;
            min-height: 40vh;
          }

          .section-text {
            padding: 0;
          }

          .section-text h2 {
            font-size: 2rem;
          }

          .section-image {
            margin-top: 20px;
          }

          .know-more-btn {
            width: 100%;
            max-width: 250px;
            font-size: 1rem;
            padding: 12px 20px;
          }
        }
      `}</style>

      <div className="section-container">
        <div className="section-text" data-aos="fade-right">
          <h2>We Build Smart Digital Solutions</h2>
          <p>
            At OJASPI, we focus on delivering elegant solutions with cutting-edge technology. 
            Whether it's automating workflows, visualizing data, or building intelligent interfaces,
            we make it seamless and effective.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>

        <div className="section-image" data-aos="fade-left">
          <img src={removeBgImage} alt="Smart Solutions" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
