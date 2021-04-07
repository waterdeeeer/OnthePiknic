import React, { useRef } from "react";
// import {BrowseRouter} from 'react-router'

import Layout from "../style/Layout";
import Image from "../style/Image";
import COLORS from "../utils/colors";
import Filter from "../style/Filter";
import { MAINITEMSIZE } from "../utils/size";
import { IMAGE_BASE_URL } from "../../api";

const Main: React.FC = () => {
  const mainImage = useRef(HTMLDivElement.prototype);
  const {
    MAINIMAGEHEIGHT,
    MAINIMAGEWIDTH,
    LOGOIMAGEHEIGHT,
    LOGOIMAGEWIDTH,
  } = MAINITEMSIZE;
  return (
    <Layout backgroundColor={COLORS.BLUE} flexDirection="column">
      <Filter zIndex={1} />
      <Image
        position="relative"
        zIndex={100}
        ref={mainImage}
        backgroundImage={`url(${IMAGE_BASE_URL}/landing_page/onthepiknic.png)`}
        height={MAINIMAGEWIDTH}
        width={MAINIMAGEHEIGHT}
      />
      <Image
        backgroundImage={`url(${IMAGE_BASE_URL}/logo.png)`}
        height={LOGOIMAGEWIDTH}
        width={LOGOIMAGEHEIGHT}
        position="absolute"
        top={20}
        right={20}
        cursor="pointer"
        mobile={{
          width: 70,
          height: 70,
        }}
        tablet={{
          width: 70,
          height: 70,
        }}
        zIndex={2}
      />
      {/* <Image
        position="absolute"
        right={50}
        top={50}
        backgroundImage="url(https://assets.potatojoayo.com/landing_page/line.png)"
        width={(size.width - 450) / 2 - 40}
        height={size.height / 2 + 225 - 70}
        backgroundSize={`${(size.width - 450) / 2}px ${
          size.height / 2 + 225 - 70
        }px`}
        tablet={{
          width: 0,
          height: 0,
        }}
        mobile={{
          width: 0,
          height: 0,
        }}
      /> */}
    </Layout>
  );
};

export default Main;
