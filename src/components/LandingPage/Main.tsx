import React, { useRef } from 'react';

import Layout from '../style/Layout';
import Image from '../style/Image';
import COLORS from '../utils/colors';
import Filter from '../style/Filter';

const Main: React.FC = () => {
  const mainImage = useRef(HTMLDivElement.prototype);

  return (
    <Layout backgroundColor={COLORS.BLUE} flexDirection="column">
      <Filter zIndex={1} />
      <Image
        position="relative"
        zIndex={100}
        ref={mainImage}
        backgroundImage="url(https://assets.potatojoayo.com/landing_page/onthepiknic.png)"
        height={450}
        width={450}
      />
      <Image
        backgroundImage="url(https://assets.potatojoayo.com/logo.png)"
        height={85}
        width={85}
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
