import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DBState, RootState } from "../../types";

import Layout from "../style/Layout";
import COLORS from "../utils/colors";
import Filter from "../style/Filter";
import ListItem from "./ListItem";
import ListView from "../style/ListVIew";

import { getLandingPageProductsAsync } from "../../store/db/action";
import { ListviewState } from "../../store/listview/reducer";
import { addList } from "../../store/listview/action";
import useWindowSize from "../../hooks/useWindowSize";
import Footer from "../Footer";

const Overview: React.FC = () => {
  const dispatch = useDispatch();
  const windowSize = useWindowSize();
  const db: DBState = useSelector((state: RootState) => state.db);
  const listviewState: ListviewState = useSelector(
    (state: RootState) => state.listview
  );
  useEffect(() => {
    if (db.product.length === 0) dispatch(getLandingPageProductsAsync());
    if (listviewState.itemList.length === 0 && db.product.length > 0) {
      const itemList: JSX.Element[] = db.product.map((item, idx) => {
        return <ListItem product={item} key={item.id} idx={idx} />;
      });
      dispatch(addList(itemList));
    }
  }, [dispatch, db.product, listviewState.itemList.length]);
  const midLength = Math.round(listviewState.itemList.length / 2) - 1;
  return (
    <>
      <Layout
        backgroundColor={COLORS.BLUE}
        overflow="hidden"
        position="relative"
        padding="0 0 200px 0"
      >
        <Filter zIndex={1} padding="0 0 200px 0 " />
        <ListView
          width="100%"
          position="relative"
          left={-(midLength - 1 / 2) * 500 - windowSize.width / 2 + 500}
          height="500px"
          zIndex={2}
        >
          {listviewState.itemList}
        </ListView>
        <Footer color={COLORS.YELLOW}></Footer>
      </Layout>
    </>
  );
};

export default Overview;
