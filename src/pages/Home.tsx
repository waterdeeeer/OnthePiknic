import React from 'react';
import Filter from '../components/style/Filter';
import Layout from '../components/style/Layout';
import COLORS from '../components/utils/colors';
import Header from '../components/Header/Header'


const Home: React.FC = () => {
	return (
		<Layout backgroundColor={COLORS.YELLOW}>
			<Filter zIndex={1}></Filter>
			<Header />
		</Layout>
	);
};

export default Home;
