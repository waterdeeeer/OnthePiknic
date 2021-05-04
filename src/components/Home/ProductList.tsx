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
	const [renderedColumns, setRenderedColumns] = useState<JSX.Element[]>([])
	useEffect(() => {
		let totalColumnCount = 0;
		if (windowSize.width >= DISPLAY_SIZE.DESKTOP) {
			totalColumnCount = 4;
		} else if (windowSize.width >= DISPLAY_SIZE.TABLET) {
			totalColumnCount = 3;
		} else {
			totalColumnCount = 2;
		}
		const columns = [];
		let i = 0;
		for (; i < totalColumnCount; i++) {
			columns.push(
				<ProductListColumn
					products={allProduct}
					totalColumnCount={totalColumnCount}
					columnNumber={i}
					key={i}
				></ProductListColumn>
			);
		}
		setRenderedColumns(columns)
	}, [windowSize.width, allProduct])
	return (
		<Container display="flex" width="90vw" height="90vh" margin="30px 0 0 0">
			{renderedColumns}
		</Container>
	);
};

export default ProductList;
