import React from 'react';

import Main from '../components/LandingPage/Main';
import Overview from '../components/LandingPage/Overview';
import Container from '../components/style/Container';
import Filter from '../components/style/Filter';
import COLORS from '../components/utils/colors';
const LandingPage: React.FC = () => {
	return (
		<Container backgroundColor={COLORS.BLUE} position="relative">
			<Filter></Filter>
			<Main></Main>
			<Overview></Overview>
		</Container>
	);
};
export default LandingPage;
