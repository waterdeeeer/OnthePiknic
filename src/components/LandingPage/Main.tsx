import React, {useRef} from 'react';

import {Link} from 'react-router-dom';

import Layout from '../style/Layout';
import Image from '../style/Image';
import {IMAGE_BASE_URL} from '../../api';

const Main: React.FC = () => {
	const mainImage = useRef(HTMLDivElement.prototype);

	return (
		<Layout flexDirection="column">
			<Link to="/home">
				<Image
					position="relative"
					zIndex={100}
					ref={mainImage}
					backgroundImage={`url(${IMAGE_BASE_URL + '/landing_page/onthepiknic.png)'
						}`}
					height={450}
					width={450}
				/>
				<Image
					backgroundImage={`url(${IMAGE_BASE_URL + '/logo.png)'}`}
					height={85}
					width={85}
					position="absolute"
					top={20}
					right={20}
					cursor="pointer"
					mobile={{
						width: 70,
						height: 70,
					}}
					tablet={{
						width: 70,
						height: 70,
					}}
					zIndex={2}
				/>
			</Link>
		</Layout>
	);
};

export default Main;
