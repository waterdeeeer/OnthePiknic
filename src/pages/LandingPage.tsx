import React from 'react';

import Main from '../components/LandingPage/Main';
import Overview from '../components/LandingPage/Overview';
import Container from '../components/style/Container';
const LandingPage: React.FC = () => {
  return (
    <Container>
      <Main></Main>
      <Overview></Overview>
    </Container>
  );
};
export default LandingPage;
