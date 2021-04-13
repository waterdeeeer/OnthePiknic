import {NAVBAR_ACTION_TYPE} from './action_type'
import {NavbarAction} from './action'

export interface NavbarState {
	isOpen: boolean[]
}

const categories = [
	"All",
	"Brand",
	"Clothes",
	"Acc",
	"Picnic",
	"Museum",
	"University",
];

const initialState: NavbarState = {
	isOpen: Array(categories.length).fill(false)
}

const navbarReducer =
	(state: NavbarState = initialState, action: NavbarAction): NavbarState => {
		switch (action.type) {
			case NAVBAR_ACTION_TYPE.OPEN_MENU:
				if (state.isOpen[action.payload!]) {
					return {
						...state,
						isOpen: [...state.isOpen].fill(false)
					}
				}
				const _isOpen: boolean[] = [...state.isOpen];
				_isOpen.fill(false);
				_isOpen[action.payload!] = true;
				return {
					...state,
					isOpen: _isOpen
				}
			default:
				return state;
		}
	}

export default navbarReducer;
