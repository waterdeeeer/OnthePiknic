import { LISTVIEW_ACTION, LISTVIEW_ACTION_TYPE } from "../../types";

export interface ListviewState {
  currentIndex?: number;
  itemList?: JSX.Element[];
}

const initialState: ListviewState = {
  currentIndex: 1,
  itemList: [],
};

const listviewReducer = (
  state: ListviewState = initialState,
  action: LISTVIEW_ACTION
): ListviewState => {
  switch (action.type) {
    case LISTVIEW_ACTION_TYPE.MOVE_INDEX:
      return {
        ...state,
        currentIndex: action.payload as number,
      };
    case LISTVIEW_ACTION_TYPE.ADD_LIST:
      return {
        ...state,
        itemList: action.payload as JSX.Element[],
        currentIndex:
          Math.round((action.payload as JSX.Element[]).length / 2) - 1,
      };
    default:
      return state;
  }
};

export default listviewReducer;
