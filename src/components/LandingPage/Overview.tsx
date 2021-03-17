import React from 'react';

import Layout from '../style/Layout';
import COLORS from '../utils/colors';
import Filter from '../style/Filter';

const Overview: React.FC = () => {
  return (
    <Layout backgroundColor={COLORS.BLUE}>
      <Filter zIndex={1} />
    </Layout>
  );
};

export default Overview;
