import React from 'react';
import {useDispatch} from 'react-redux'

import {openMenu} from '../store/navbar/action'
import Filter from '../components/style/Filter';
import Layout from '../components/style/Layout';
import COLORS from '../components/utils/colors';
import Header from '../components/Header/Header'


const Home: React.FC = () => {
	const dispatch = useDispatch()
	return (
		<Layout
			backgroundColor={COLORS.YELLOW}
			onClick={(e) => {
				e.preventDefault()
				dispatch(openMenu(-1))
			}}
		>
			<Filter zIndex={1}></Filter>
			<Header
			/>
		</Layout>
	);
};

export default Home;
