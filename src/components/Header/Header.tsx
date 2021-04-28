import React from 'react';
import {IMAGE_BASE_URL} from '../../api';
import Container from '../style/Container';
import Image from '../style/Image';
import Input from '../style/Input'
import Text from '../style/Text';
import COLORS from '../utils/colors'
import NavBar from './NavBar'

const Header: React.FC = () => {
	return (
		<Container
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			width='90vw'
		>
			<Image width='70px' height='70px'
				backgroundImage={`url(${IMAGE_BASE_URL}/logo_brown.png)`} />
			<Container
				display='flex'
				alignItems='center'
				justifyContent='space-between'
				width='100%'
			>
				<Container flex={1}
					alignItems='center'
					display='flex'

				>
					<Image
						width={20}
						height={20}
						backgroundImage
						={`url(${IMAGE_BASE_URL}/icons/magnify.png)`}
					/>
					<Input
						backgroundColor={COLORS.BROWN}
						height='90%'
						width='60%'
						zIndex={3}
						margin='0 0 0 10px'
						color={COLORS.YELLOW}
						padding='5px 10px'
						borderRadius='3px'
						fontFamily='Meslo'
					>
					</Input>
				</Container>
				<Container
					flex={1}
					display='flex'
					justifyContent='center'
				>
					<Text
						fontSize={20}
						fontFamily='LoveCraft'
						color={COLORS.BROWN}
						margin='5px 0 0 0'
					>
						onthepiknic
					</Text>
				</Container>
				<Container
					flex={1}
					flexDirection='row'
					justifyContent='flex-end'
					display='flex'
				>
					<Image
						width={30}
						height={30}
						backgroundImage
						={`url(${IMAGE_BASE_URL}/icons/user.png)`}
					/>
					<Image
						width={30}
						height={30}
						backgroundImage
						={`url(${IMAGE_BASE_URL}/icons/cart.png)`}
					/>
				</Container>
			</Container>
			<NavBar />
		</Container>
	)
}

export default Header;
