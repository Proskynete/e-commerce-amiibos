import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../config/constants';

const initialState = {
	user_data: {},
	has_login: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
		case LOGOUT_SUCCESS:
			return {
				...state,
				user_data: action.payload.user_data,
				has_login: action.payload.has_login,
			};
		default:
			return state;
	}
};
