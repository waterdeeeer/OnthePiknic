import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Container from "../style/Container";
import ProductListColumn from "./ProductListColumn";
interface ProductListProps {
  categoryName: string;
}
const ProductList: React.FC<ProductListProps> = () => {
  const allProduct = useSelector((state: RootState) => state.db).all!;
  let totalColumnNumber = 4;
  let i = 0;
  const renderedColumns: JSX.Element[] = [];
  for (; i < columnNumber; i++) {
    renderedColumns.push(
      <ProductListColumn
        products={allProduct}
        totalColumnCount={totalColumnNumber}
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
