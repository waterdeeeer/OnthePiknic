import React, { useRef } from 'react';

import { Product } from '../../types';

import useWindowSize from '../../hooks/useWindowSize';

import Image from '../style/Image';
import { IMAGE_BASE_URL } from '../../api';
import Container from '../style/Container';
import Box from '../style/Box';

interface ListItemProps {
  product: Product;
}

const ListItem: React.FC<ListItemProps> = ({ product }) => {
  const container = useRef(HTMLDivElement.prototype);
  const windowSize = useWindowSize();
  if (!product) {
    return <div>LOADING...</div>;
  } else {
    const repClothImage = product.images.filter((image) => image.is_rep);
    return (
      <>
        <Box
          minWidth={(windowSize.width - 500) / 2 - 250}
          minHeight={500}
        ></Box>
        <Container
          ref={container}
          width={500}
          height={500}
          display="inline-block"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Image
            backgroundImage={`url(${IMAGE_BASE_URL + repClothImage[0].src})`}
            width={500}
            height={500}
            backgroundSize="contain"
          ></Image>
          <Image
            backgroundImage={`url(${IMAGE_BASE_URL + product.brand.logo_src})`}
            width={400}
            height={200}
            position="relative"
            backgroundSize="contain"
            top={-200}
            left={90}
          ></Image>
          <Image
            backgroundImage={`url(${
              IMAGE_BASE_URL + product.cooperation.logo_src
            })`}
            width={300}
            height={300}
            backgroundSize="contain"
            position="relative"
            top={-800}
          ></Image>
        </Container>
        <Box
          minWidth={(windowSize.width - 500) / 2 - 250}
          minHeight={500}
        ></Box>
      </>
    );
  }
};

export default ListItem;
