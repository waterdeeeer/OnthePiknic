import React, { useState, useEffect } from "react";
import API from "../../api";
import ParentCategory from "../../model/ParentCategory";
import COLORS from "../utils/colors";
import Container from "../style/Container";
import NavBarItem from "./NavBarItem";
import Button from "../style/Button";

const NavBar: React.FC = () => {
  const [parentCategory, setParentCategory] = useState<ParentCategory[]>([]);
  const api = API.getInstance();

  useEffect(() => {
    const getParentCategory = async () => {
      const response = await api.parentCategory.getAll();
      setParentCategory(response.data);
    };
    getParentCategory();
  }, [api.parentCategory]);

  const nav_items = parentCategory.map((item, index) => {
    return (
      <NavBarItem parentCategory={item} key={index} index={index}></NavBarItem>
    );
  });
  nav_items.unshift(
    <Button
      fontFamily="Meslo"
      color={COLORS.YELLOW}
      height={50}
      justifyContent="start"
      padding="0 10px"
      zIndex={2}
      key={100}
    >
      All
    </Button>
  );

  return (
    <Container
      backgroundColor={COLORS.BROWN}
      width="100%"
      height="50px"
      margin="10px 0px 0px 0px"
      display="flex"
      justifyContent="space-around"
      alignItems="start"
      borderRadius={5}
      position="relative"
      fontSize={20}
      id="nav-bar"
    >
      {nav_items}
    </Container>
  );
};

export default NavBar;
