import React from 'react'
import COLORS from '../utils/colors'
import Container from '../style/Container'
import NavBarItem from './NavBarItem'

const NavBar: React.FC = () => {
	const categories = [
		"All",
		"Brand",
		"Clothes",
		"Acc",
		"Picnic",
		"Museum",
		"University",
	];



	const nav_itmes = categories.map((item, index) => {
		return <NavBarItem category_name={item}
			key={index}
			sub_categories={['cloth', 'brand', 'cloths']}
			index={index}
		>
		</NavBarItem>
	})



	return <Container
		backgroundColor={COLORS.BROWN}
		width='100%'
		height='50px'
		margin='10px 0px 0px 0px'
		display='flex'
		justifyContent='space-around'
		alignItems='start'
		borderRadius={5}
		position='relative'
		fontSize={20}
	>
		{nav_itmes}
	</Container>;
}

export default NavBar;
