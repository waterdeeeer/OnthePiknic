import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../store";
import Filter from "../components/style/Filter";
import {getAllProductsAsync} from "../store/db/action";
import Layout from "../components/style/Layout";
import COLORS from "../components/utils/colors";
import Header from "../components/Header/Header";
import ProductList from "../components/Home/ProductList";
import {Product} from "../types";

const Home: React.FC = () => {
	const allProduct: Product[] = useSelector((state: RootState) => state.db)
		.all!;
	const dispatch = useDispatch();
	useEffect(() => {
		if (allProduct.length === 0) {
			dispatch(getAllProductsAsync());
		}
	}, [allProduct.length, dispatch]);

	return (
		<Layout backgroundColor={COLORS.YELLOW} flexDirection="column">
			<Filter zIndex={1}></Filter>
			<Header />
			<ProductList categoryName="All"></ProductList>
		</Layout>
	);
};

export default Home;
