import React from "react";
import { Product } from "../../types";
import Container from "../style/Container";
import ProductListItem from "./ProductListItem";

interface ProductListColumnProps {
  products: Product[];
  totalColumnCount: number;
  columnNumber: number;
}

const ProductListColumn: React.FC<ProductListColumnProps> = ({
  products,
  totalColumnCount,
  columnNumber,
}) => {
  const filteredItems = products.filter(
    (_, index) => columnNumber === index % totalColumnCount
  );
  const renderedItems = filteredItems.map((item, i) => {
    return <ProductListItem product={item} key={i}></ProductListItem>;
  });
  return (
    <Container width={`calc(${100 / totalColumnCount}% - 10px)`margin="30px"}>
      {renderedItems}
    </Container>
  );
};

export default ProductListColumn;
