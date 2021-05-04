import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import {RootState} from "../../store";

import Container from "../style/Container";
import {DISPLAY_SIZE} from "../utils/media_query";
import ProductListColumn from "./ProductListColumn";
interface ProductListProps {
	categoryName: string;
}
const ProductList: React.FC<ProductListProps> = () => {
	const allProduct = useSelector((state: RootState) => state.db).all!;
	const windowSize = useWindowSize();
	const [totalColumnCount, setTotalColumnCount] = useState(4)
	const [renderedColumns, setRenderedColumns] = useState<JSX.Element[]>([])
	useEffect(() => {
		if (windowSize.width >= DISPLAY_SIZE.DESKTOP) {
			setTotalColumnCount(4)
		} else if (windowSize.width >= DISPLAY_SIZE.TABLET) {
			setTotalColumnCount(3)
		} else {
			setTotalColumnCount(2)
		}
	}, [windowSize.width])
	let i = 0;
	for (; i < totalColumnCount; i++) {
		renderedColumns.push(
			<ProductListColumn
				products={allProduct}
				totalColumnCount={totalColumnCount}
				columnNumber={i}
				key={i}
			></ProductListColumn>
		);
	}
	return (
		<Container display="flex" width="90vw" height="90vh" margin="30px 0 0 0">
			{renderedColumns}
		</Container>
	);
};

export default ProductList;
