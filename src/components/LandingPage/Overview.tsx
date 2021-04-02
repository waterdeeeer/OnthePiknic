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

const Overview: React.FC = () => {
  const dispatch = useDispatch();
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
  }, [dispatch, db.product]);
  return (
    <Layout backgroundColor={COLORS.BLUE}>
      <Filter zIndex={1} />
      <ListView
        width="100vw"
        height="500px"
        transition="transform cubic-bezier(.5,.7,.1,1.2) 0.5s"
        zIndex={2}
        position="relative"
      >
        {listviewState.itemList}
      </ListView>
    </Layout>
  );
};

export default Overview;
