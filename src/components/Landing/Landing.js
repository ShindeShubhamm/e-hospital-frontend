import React, { useEffect, useState } from 'react';

import getDataByIP from '../../utils/ipLocation';
import Intro from './sections/Intro';
import PatientsSay from './sections/PatientsSay';
import Services from './sections/Services';
import Stats from './sections/Stats';

const Landing = (props) => {
  const [ipData, setIpData] = useState();

  useEffect(() => {
    let isActive = true;
    (async () => {
      const data = await getDataByIP();
      if (isActive) {
        setIpData(data);
      }
    })();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="landing-page">
      <Intro />
      <Services />
      <PatientsSay />
      <Stats />
    </div>
  );
};

export default Landing;
