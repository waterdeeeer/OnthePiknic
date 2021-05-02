import React from "react";

import Container from "../style/Container";
import Image from "../style/Image";
import { ProductModel } from "../../types";
import { IMAGE_BASE_URL } from "../../api";

interface ProductListItemProps {
  product: ProductModel;
  index: number;
}
const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  index,
}) => {
  const colorList = ["red", "blue", "purple", "pink", "yellow"];
  console.log(product);
  return (
    <Container
      width="100%"
      height="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      backgroundColor={colorList[index]}
      margin="30px 0 0"
      boxShadow="10px 10px 10px black"
    >
      <Image
        width="85%"
        height="80%"
        backgroundImage={`url(${IMAGE_BASE_URL}/${product.image![0].src})`}
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
