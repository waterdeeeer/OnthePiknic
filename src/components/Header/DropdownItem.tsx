import React from 'react'
import COLORS from '../utils/colors'
import Button from '../style/Button'
import Filter from '../style/Filter'


interface DropdownItemProps {
	subCategory: string;
	isLast: boolean
}

const DropdownItem: React.FC<DropdownItemProps> = ({subCategory, isLast}) => {
	return <Button
		width='100px'
		backgroundColor={COLORS.BROWN}
		justifyContent='start'
		padding='5px 10px'
		color={COLORS.YELLOW}
		position='relative'
		zIndex={2}
		margin='.5px'
		fontFamily='Meslo'
		fontSize={17}
		borderRadius={isLast ? '0 0 10px 10px' : ''}
	>
		{subCategory}
		<Filter />
	</Button>
}

export default DropdownItem;
