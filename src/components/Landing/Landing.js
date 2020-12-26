import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';

import getDataByIP from '../../utils/ipLocation';

const Landing = (props) => {
  const [ipData, setIpData] = useState();

  const setLocationData = async () => {
    const data = await getDataByIP();
    setIpData(data);
  };

  useEffect(() => {
    setLocationData();
  }, []);

  return (
    <div className="landing-page">
      <Container>
        <div className="">LandingPage</div>
        {ipData?.geo?.city && <h2>{ipData.geo?.city}</h2>}
      </Container>
    </div>
  );
};

export default Landing;
