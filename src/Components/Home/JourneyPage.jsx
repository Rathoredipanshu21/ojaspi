import React, { useEffect } from 'react';

const JourneyPage = () => {
    useEffect(() => {
        // Initialize AOS library for animations
        // This will only work if the AOS script has been loaded globally (e.g., via CDN in index.html)
        if (window.AOS) { // Check if AOS global object exists
            window.AOS.init({
                duration: 1200, // Slightly longer duration for new animations
                once: true, // Only animate once
                easing: 'ease-out-cubic', // Easing function
            });
        } else {
            console.warn("AOS not found. Ensure AOS script is loaded globally.");
        }
    }, []);

    // Inline CSS for the component
    const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'); /* For titles */

        :root {
            --primary-green: #4CAF50; /* Base green */
            --light-green: #8BC34A; /* Lighter green for highlights/gradients */
            --dark-green: #388E3C; /* Darker green for titles/accents */
            --text-dark: #343a40; /* General text color */
            --background-gradient-start: #f0f0f0; /* Light background */
            --background-gradient-end: #ffffff; /* White background */
            --highlight-line-color: #4CAF50; /* Highlight line color */
            --circle-path-color: #e0e0e0; /* Light gray for the main circle path */
            --milestone-fill: #ffffff; /* White fill for milestone circles */
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom, var(--background-gradient-start), var(--background-gradient-end));
            color: var(--text-dark);
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scroll due to animations */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .journey-container {
            padding: 2rem 1rem; /* Responsive padding */
            max-width: 1400px;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .journey-main-title {
            font-family: 'Montserrat', sans-serif;
            /* Using clamp for fluid font size: min 2.2rem, ideal 8vw, max 3.5rem */
            font-size: clamp(2.2rem, 8vw, 3.5rem);
            font-weight: 700;
            color: var(--dark-green);
            text-align: center;
            margin-bottom: 3.5rem; /* Responsive margin */
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            letter-spacing: 0.125rem; /* Reduced letter spacing */
            line-height: 1.2;
        }

        .journey-content {
            width: 100%;
            align-items: center; /* Center items vertically in the row */
            justify-content: center; /* Center items horizontally */
        }

        /* Left Side: Key Highlights */
        .journey-highlights {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem; /* Reduced margin */
        }

        .highlight-line {
            width: 0.3125rem; /* 5px */
            height: 2.5rem; /* 40px */
            background-color: var(--highlight-line-color);
            margin-right: 0.9375rem; /* 15px */
            border-radius: 0.125rem; /* 2px */
            flex-shrink: 0; /* Prevent line from shrinking */
        }

        .highlight-item p {
            /* Using clamp for fluid font size: min 1rem, ideal 3vw, max 1.2rem */
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 600;
            margin: 0;
            color: var(--text-dark);
            line-height: 1.4;
        }

        /* Right Side: Circular Infographic */
        .journey-visual-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            min-height: 450px; /* Ensure enough height for the circle */
        }

        .journey-circle-svg {
            width: 100%;
            height: auto;
            max-width: 600px; /* Max width for the SVG circle */
            display: block;
        }

        /* Keyframe animation for the dashed line */
        @keyframes dash {
            to {
                stroke-dashoffset: -1000; /* Adjust value based on path length for continuous movement */
            }
        }

        .circle-path-animated {
            stroke-dasharray: 50 150; /* Length of dashes and gaps */
            animation: dash 30s linear infinite; /* Adjust duration for speed */
            stroke-linecap: round;
        }

        /* --- Responsive Adjustments for smaller screens --- */
        @media (max-width: 991.98px) { /* Tablet and below */
            .journey-main-title { margin-bottom: 2.5rem; }
            .journey-highlights { align-items: center; text-align: center; padding: 1rem 0; }
            .highlight-item { flex-direction: column; margin-bottom: 1.25rem; }
            .highlight-line { width: 2.5rem; height: 0.25rem; margin: 0 0 0.625rem 0; }
            .journey-visual-wrapper { margin-top: 2.5rem; min-height: 350px; }
        }

        @media (max-width: 767.98px) { /* Small tablet and below */
            /* No specific adjustments needed here after removing milestone text/lines */
        }

        @media (max-width: 575.98px) { /* Extra small devices (phones) */
            .journey-container { padding: 1.5rem 0.5rem; }
            .journey-main-title { margin-bottom: 2rem; }
            .journey-visual-wrapper { min-height: 300px; }
        }

        /* Very narrow screens / landscape phone */
        @media (max-width: 400px) {
            .journey-main-title { font-size: clamp(1.8rem, 10vw, 2.2rem); }
            .highlight-item p { font-size: clamp(0.9rem, 4vw, 1rem); }
        }
    `;

    return (
        <div className="journey-container">
            {/* Embed styles */}
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <h1 className="journey-main-title" data-aos="fade-down">
                OUR JOURNEY
            </h1>

            <div className="journey-content row align-items-center">
                {/* Left Side: Key Highlights */}
                <div className="col-12 col-lg-5 journey-highlights">
                    <div className="highlight-item" data-aos="fade-right" data-aos-delay="200">
                        <span className="highlight-line"></span>
                        <p>4 Years Of Experience</p>
                    </div>
                    <div className="highlight-item" data-aos="fade-right" data-aos-delay="400">
                        <span className="highlight-line"></span>
                        <p>200+ Successful Projects</p>
                    </div>
                    <div className="highlight-item" data-aos="fade-right" data-aos-delay="600">
                        <span className="highlight-line"></span>
                        <p>More Than 15 Industries Serve</p>
                    </div>
                    <div className="highlight-item" data-aos="fade-right" data-aos-delay="800">
                        <span className="highlight-line"></span>
                        <p>We Believe In The Strength Of Communication</p>
                    </div>
                </div>

                {/* Right Side: Circular Infographic */}
                <div className="col-12 col-lg-7 journey-visual-wrapper">
                    {/* SVG for the circular path */}
                    <svg viewBox="0 0 800 600" className="journey-circle-svg">
                        {/* Filters and Gradients */}
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.3)"/>
                            </filter>
                            {/* Gradient for the animated circle path with a shadow */}
                            <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#007bff" />    {/* Blue */}
                                <stop offset="25%" stopColor="#28a745" />   {/* Green */}
                                <stop offset="50%" stopColor="#ffc107" />   {/* Yellow */}
                                <stop offset="75%" stopColor="#dc3545" />   {/* Red */}
                                <stop offset="100%" stopColor="#007bff" />  {/* Blue again for seamless loop */}
                            </linearGradient>
                        </defs>

                        {/* Static Circle Path (background) */}
                        <circle
                            cx="400" cy="300" r="250"
                            fill="none"
                            stroke="var(--circle-path-color)"
                            strokeWidth="10"
                            filter="url(#shadow)"
                        />
                        {/* Animated Dashed Circle Path (foreground) */}
                        <circle
                            cx="400" cy="300" r="250"
                            fill="none"
                            stroke="url(#animatedGradient)" // Use the animated gradient
                            strokeWidth="10"
                            className="circle-path-animated"
                            data-aos="zoom-in" data-aos-delay="1000"
                            filter="url(#shadow)" // Apply shadow to the moving circle
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default JourneyPage;