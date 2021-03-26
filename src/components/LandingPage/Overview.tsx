import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DBState, RootState } from '../../types';

import Layout from '../style/Layout';
import COLORS from '../utils/colors';
import Filter from '../style/Filter';
import ListItem from './ListItem';
import ListView from '../style/ListVIew';

import { getLandingPageProductsAsync } from '../../store/db/action';

const Overview: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLandingPageProductsAsync());
  }, [dispatch]);
  const db: DBState = useSelector((state: RootState) => state.db);
  const itemList: JSX.Element[] = db.product.map((item) => {
    return <ListItem product={item} key={item.id} />;
  });
  return (
    <Layout backgroundColor={COLORS.BLUE}>
      <Filter zIndex={1} />
      <ListView width="100vw" height="500px">
        {itemList}
      </ListView>
    </Layout>
  );
};

export default Overview;
