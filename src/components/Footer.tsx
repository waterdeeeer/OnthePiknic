import React from 'react';
import { IMAGE_BASE_URL } from '../api';
import Container from './style/Container';
import Image from './style/Image';
import Text from './style/Text';
import COLORS from './utils/colors';

interface FooterProps {
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  bottom?: number;
  color?: COLORS;
  fontFamily?: string;
}

const Footer: React.FC<FooterProps> = ({
  position,
  bottom,
  color,
  fontFamily,
}) => {
  return (
    <Container
      position={position}
      bottom={bottom}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container flexDirection="row" display="flex" alignItems="center">
        <Container
          width="90vw"
          flexDirection="row"
          display="flex"
          alignItems="center"
        >
          <Container
            width="50%"
            backgroundColor={color}
            height={1}
            margin="0 15px 0 0"
            zIndex={0}
          ></Container>
          <Image
            width="70px"
            height="70px"
            backgroundImage={`url(${IMAGE_BASE_URL + '/logo.png'})`}
            transform="translateX(-3px)"
          ></Image>
          <Container
            width="50%"
            margin="0 0 0 0px "
            backgroundColor={color}
            height={1}
          ></Container>
        </Container>
      </Container>
      <Text
        color={color}
        fontSize={18}
        fontFamily="LoveCraft"
        letterSpacing={0.6}
        textAlign="center"
      >
        onthepiknic
      </Text>
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="90vw"
      >
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex={1}
        >
          <Text
            color={color}
            fontSize={11}
            textAlign="center"
            margin="15px 0 0 0"
            fontFamily={fontFamily}
          >
            Copyright @2021
          </Text>
          <Text
            color={color}
            fontSize={11}
            textAlign="center"
            margin="5px 0 0 0"
            fontFamily={fontFamily}
          >
            All right reserved by PotatoJoayo
          </Text>
        </Container>

        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Text
            color={color}
            fontSize={11}
            textAlign="center"
            margin="15px 0 0 0"
            lineHeight={1.5}
            fontFamily={fontFamily}
          >
            315, Cheonsu-ro, Jinju-si, Gyeongsangnam-do
          </Text>
          <Text
            color={color}
            fontSize={11}
            textAlign="center"
            margin="5px 0 0 0"
            fontFamily={fontFamily}
          >
            moongioh1@naver.com | 010 - 2041 - 2650
          </Text>
        </Container>
        <Container flex={1} />
      </Container>
      <Container minHeight={50}></Container>
    </Container>
  );
};

export default Footer;
