import React, {useState, useEffect} from 'react'
import API from '../../api'
import ParentCategory from '../../model/ParentCategory'
import COLORS from '../utils/colors'
import Container from '../style/Container'
import NavBarItem from './NavBarItem'


const NavBar: React.FC = () => {

	const [parentCategory, setParentCategory] = useState<ParentCategory[]>([])
	const api = API.getInstance()

	useEffect(() => {

		const getParentCategory = async () => {
			const response = await api.parentCategory.getAll()
			setParentCategory(response.data)
		}
		getParentCategory()

	}, [api.parentCategory])




	const nav_itmes = parentCategory.map((item, index) => {
		return <NavBarItem parentCategory={item}
			key={index}
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
		id='nav-bar'
	>
		{nav_itmes}
	</Container>;
}

export default NavBar;
