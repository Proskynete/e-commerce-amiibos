import { SHOW_MODAL, HIDE_MODAL } from '../config/constants';

const initialState = {
	show: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
		case HIDE_MODAL:
			return {
				...state,
				show: action.payload.show,
			};

		default:
			return state;
	}
};
