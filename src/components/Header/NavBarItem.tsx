import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Container from '../style/Container';
import Button from '../style/Button'
import COLORS from '../utils/colors'
import DropdownItem from './DropdownItem'
import {RootState} from '../../store';
import {openMenu} from '../../store/navbar/action'

interface NavBarItemProps {
	category_name: string;
	sub_categories?: string[];
	index: number;
}

const NavBarItem: React.FC<NavBarItemProps>
	= ({category_name, sub_categories, index}) => {

		const dropdownItems = sub_categories!.map((item, idx) => {
			return <DropdownItem
				key={idx}
				subCategory={item}
				isLast={(sub_categories!.length - 1) === idx ? true : false} />
		})

		const dispatch = useDispatch()
		const navbarState = useSelector((state: RootState) => state.navbar)


		return <Container
			overflow='hidden'
			maxHiehgt={navbarState.isOpen[index] ?
				'300px' : '50px'}
			transition={navbarState.isOpen[index] ?
				'max-height ease-in .3s' : 'max-height ease .1s'}
		>
			<Container
				display='flex'
				justifyContent='flex-start'
				alignItems='center'
				flexDirection='column'
				zIndex={1}
			>
				<Button
					fontFamily='Meslo'
					color={COLORS.YELLOW}
					height={50}
					justifyContent='start'
					padding='0 10px'
					zIndex={2}
					onClick={
						(e) => {
							e.preventDefault()
							dispatch(openMenu(index))
						}
					}
				>
					{category_name}
				</Button>
				{dropdownItems}
			</Container>
		</Container >
	}

export default NavBarItem;
