import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { moveIndex } from "../../store/listview/action";
import { LISTITEM_SIZE } from "../utils/size";

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
        listviewState.currentIndex! +
        Math.round(listviewState.itemList!.length / 2) -
        1,
      5
    );
    let op = 1;
    if (order === 0 || order === listviewState.itemList!.length - 1) op = 0;
    setOpacity(op);
    setTranslateXValue(order * unitWidth);
  }, [
    listviewState.currentIndex,
    windowSize.width,
    idx,
    listviewState.itemList!.length,
  ]);
  if (!product) {
    return <div>LOADING...</div>;
  } else {
    const repClothImage = product.image.filter((image) => image.is_rep);
    return (
      <Container
        width={LISTITEM_SIZE.ITEMWIDTH}
        height={LISTITEM_SIZE.ITEMHEIGHT}
        position="absolute"
        display="inline-block"
        zIndex={2}
        borderRadius={20}
        onClick={(e) => {
          e.preventDefault();
          dispatch(moveIndex(idx));
        }}
        transform={`translateX(${translateXValue}px)`}
        transition="transform cubic-bezier(.5,.7,.1,1.2) .5s, opacity ease-in .3s"
        cursor="pointer"
        opacity={opacity}
        backgroundColor={idx === listviewState.currentIndex! ? "#ffffff99" : ""}
        boxShadow={
          idx === listviewState.currentIndex!
            ? "7px 15px 5px rgba(0,0,0,0.3)"
            : ""
        }
        active={
          idx === listviewState.currentIndex!
            ? {
                transform: `translateX(${translateXValue}px) scale(.96)`,
              }
            : {}
        }
      >
        <Image
          backgroundImage={`url(${IMAGE_BASE_URL + repClothImage[0].src})`}
          width={LISTITEM_SIZE.CLOTHIMAGEWIDTH}
          height={LISTITEM_SIZE.CLOTHIMAGEHEIGHT}
          backgroundSize="contain"
          zIndex={10}
        ></Image>
        <Image
          backgroundImage={`url(${IMAGE_BASE_URL + product.brand.logo_src})`}
          width={LISTITEM_SIZE.BRANDLOGOWIDTH}
          height={LISTITEM_SIZE.BRANDLOGOHEIGHT}
          position="relative"
          backgroundSize="contain"
          top={-150}
          left={50}
          transition="opacity ease-in .3s"
          opacity={idx === listviewState.currentIndex! ? 1 : 0}
          zIndex={0}
        ></Image>
        <Image
          backgroundImage={`url(${
            IMAGE_BASE_URL + product.cooperation.logo_src
          })`}
          width={LISTITEM_SIZE.COOPERLOGOWIDTH}
          height={LISTITEM_SIZE.COOPERLOGOHEIGHT}
          backgroundSize="contain"
          position="relative"
          top={-750}
          left={10}
          transition="opacity ease-in .3s"
          opacity={idx === listviewState.currentIndex! ? 1 : 0}
          zIndex={-1}
        ></Image>
      </Container>
    );
  }
};

export default ListItem;
