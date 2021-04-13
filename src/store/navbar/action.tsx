import {NAVBAR_ACTION_TYPE} from './action_type'

export interface NavbarAction {
	type: NAVBAR_ACTION_TYPE;
	payload?: number
}

export const openMenu = (index: number): NavbarAction => {
	return {
		type: NAVBAR_ACTION_TYPE.OPEN_MENU,
		payload: index
	}
}


