import React from 'react';

const MainAbout = () => {
  return (
    <>
      <style>
        {`
      

          .under-construction-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            min-height: 100vh;
            width: 100%;
            background: #2B5262;
            color: #fff;
            text-align: center;
            padding: 2rem;
          }

          .under-construction-container h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .under-construction-container p {
            font-size: 1.2rem;
            max-width: 600px;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .construction-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            animation: pulse 1.5s infinite;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @media (max-width: 768px) {
            .under-construction-container h1 {
              font-size: 2rem;
            }
            .under-construction-container p {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="under-construction-container">
        <div className="construction-icon">🚧</div>
        <h1>Page Under Construction</h1>
        <p>We're working hard to bring you something amazing. This page is currently under development. Please check back soon!</p>
      </div>
    </>
  );
};

export default MainAbout;
