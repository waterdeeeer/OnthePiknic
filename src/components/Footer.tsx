import React from "react";
import { IMAGE_BASE_URL } from "../api";
import Container from "./style/Container";
import Image from "./style/Image";
import Text from "./style/Text";

interface FooterProps {
  color: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <Container
      width="100vw"
      height={200}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      bottom={0}
    >
      <Container
        width="100vw"
        height="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom={0}
        padding="50px 0"
      >
        <Container width="40vw" height={1} backgroundColor={color}></Container>
        <Container
          width="auto"
          height="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            width={100}
            height={100}
            backgroundImage={`url(${IMAGE_BASE_URL}/logo.png)`}
            margin="10px 0px 10px 20px"
          ></Image>
        </Container>
        <Container width="40vw" height={1} backgroundColor={color}></Container>
      </Container>
      <Container
        width="100vw"
        height="auto"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        bottom={0}
      >
        <Text fontSize={16} color={color} margin="0 0 0 6.5%">
          Copyright &#169;2021
          <br /> Made by Someone
        </Text>
        <Text
          fontSize={24}
          fontFamily="LoveCraft"
          color={color}
          margin="0 0 30px 80px"
        >
          Onthepiknik
        </Text>
        <Text fontSize={16} color={color} margin="0 6.5% 0 0">
          19802 1245 E 16th Street, <br />
          PA00452, WILMINGTON, DE, <br />
          United States
        </Text>
      </Container>
    </Container>
  );
};
export default Footer;
