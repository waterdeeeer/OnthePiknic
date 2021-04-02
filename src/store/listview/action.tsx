import { LISTVIEW_ACTION_TYPE } from '../../types';

export interface LISTVIEW_ACTION {
  type: LISTVIEW_ACTION_TYPE;
  payload: number | JSX.Element[];
}

export const moveIndex = (index: number): LISTVIEW_ACTION => {
  return {
    type: LISTVIEW_ACTION_TYPE.MOVE_INDEX,
    payload: index,
  };
};

export const addList = (itemList: JSX.Element[]): LISTVIEW_ACTION => {
  return {
    type: LISTVIEW_ACTION_TYPE.ADD_LIST,
    payload: itemList,
  };
};
