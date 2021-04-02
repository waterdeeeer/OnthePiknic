import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { moveIndex } from "../../store/listview/action";

import { Product, RootState } from "../../types";

import useWindowSize from "../../hooks/useWindowSize";

import Image from "../style/Image";
import { IMAGE_BASE_URL } from "../../api";
import Container from "../style/Container";
import { ListviewState } from "../../store/listview/reducer";

export interface ListItemProps {
  product: Product;
  idx: number;
}
function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const ListItem: React.FC<ListItemProps> = ({ product, idx }) => {
  const dispatch = useDispatch();
  const windowSize = useWindowSize();
  const listviewState: ListviewState = useSelector(
    (state: RootState) => state.listview
  );
  const [translateXValue, setTranslateXValue] = useState(0);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const unitWidth = windowSize.width / 2;
    const order = mod(
      idx -
        listviewState.currentIndex +
        Math.round(listviewState.itemList.length / 2) -
        1,
      5
    );
    let op = 1;
    if (order == 0 || order == listviewState.itemList.length - 1) op = 0;
    setOpacity(op);
    setTranslateXValue(order * unitWidth);
  }, [
    listviewState.currentIndex,
    windowSize.width,
    idx,
    listviewState.itemList.length,
  ]);
  if (!product) {
    return <div>LOADING...</div>;
  } else {
    const repClothImage = product.images.filter((image) => image.is_rep);
    return (
      <Container
        width={500}
        height={500}
        position="absolute"
        display="inline-block"
        left={idx * 500}
        zIndex={2}
        onClick={(e) => {
          e.preventDefault();
          dispatch(moveIndex(idx));
        }}
        transform={`translateX(${translateXValue}px)`}
        cursor="pointer"
        opacity={opacity}
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
          transition="opacity ease-in .3s"
          opacity={idx === listviewState.currentIndex ? 1 : 0}
        ></Image>
        <Image
          backgroundImage={`url(${
            IMAGE_BASE_URL + product.cooperation.logo_src
          })`}
          width={300}
          height={200}
          backgroundSize="contain"
          position="relative"
          top={-750}
          left={-50}
          transition="opacity ease-in .3s"
          opacity={idx === listviewState.currentIndex ? 1 : 0}
        ></Image>
      </Container>
    );
  }
};

export default ListItem;
