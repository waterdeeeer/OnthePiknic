import React from 'react';
import { useDispatch } from 'react-redux';

import { Product } from '../../types';

import Image from '../style/Image';
import Container from '../style/Container';

import { getLandingPageProductsAsync } from '../../store/db/action';

interface ListItemProps {
  product: Product;
}

const ListItem: React.FC<ListItemProps> = ({ product }) => {
  const repClothImage = product.images.filter((image) => image.is_rep);
  return (
    <Container height={450} width={450}>
      <Image backgroundImage={repClothImage[0].src} width={100} height={100} />
      <Image
        backgroundImage={product.brand.logo_src}
        width={100}
        height={100}
      />
      <Image
        backgroundImage={product.cooperation.logo_src}
        width={100}
        height={100}
      />
    </Container>
  );
};

export default ListItem;
