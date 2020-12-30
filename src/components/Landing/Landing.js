import React, { useEffect, useState } from 'react';

import Container from '@material-ui/core/Container';

import getDataByIP from '../../utils/ipLocation';

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
      <Container>
        <div className="">LandingPage</div>
        {ipData?.location?.city && <h2>{ipData.location?.city}</h2>}
      </Container>
    </div>
  );
};

export default Landing;
