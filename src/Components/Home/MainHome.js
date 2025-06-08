import React, { useEffect } from 'react';
import Herosection from './Herosection';
import Homeservices from './Homeservices';
import Progress from './Progress';
import JourneyPage from './JourneyPage';
import HomeSection from './HomeSection';

const MainHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Herosection />
      <Homeservices />
      <Progress />
      <JourneyPage />
      <HomeSection/>
    </>
  );
};

export default MainHome;
