import React from "react";
import {usePalette} from 'react-palette'

import Container from "../style/Container";
import Image from "../style/Image";
import {ProductModel} from "../../types";
import {IMAGE_BASE_URL} from "../../api";

interface ProductListItemProps {
	product: ProductModel;
}
const ProductListItem: React.FC<ProductListItemProps> = ({
	product,
}) => {
	const {data} = usePalette(`${IMAGE_BASE_URL}${product.image![0].src}`)
	console.log(data)
	return (
		<Container
			width="100%"
			height="400px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			position="relative"
			backgroundColor={data.lightMuted}
			margin="30px 0 0"
			boxShadow="5px 5px 3px rgba(0,0,0,0.3)"
		>
			<Image
				width="85%"
				height="80%"
				backgroundImage=
				{`url(${IMAGE_BASE_URL}${product.image![0].src})`}
				backgroundSize="contain"
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				position="relative"
				zIndex={1}
			></Image>
		</Container>
	);
};

export default ProductListItem;
