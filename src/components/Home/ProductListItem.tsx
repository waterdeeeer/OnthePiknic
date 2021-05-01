import React from "react";

import Container from "../style/Container";
import Image from "../style/Image";
import { ProductModel } from "../../types";
import { IMAGE_BASE_URL } from "../../api";

interface ProductListItemProps {
  product: ProductModel;
}
const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  console.log(product);
  return (
    <Container
      width="100%"
      height="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        width="85%"
        height="80%"
        backgroundImage={`url(${IMAGE_BASE_URL}/${product.image![0].src})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      ></Image>
    </Container>
  );
};

export default ProductListItem;
