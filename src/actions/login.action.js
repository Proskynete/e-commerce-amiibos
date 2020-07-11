import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../config/constants';

export const loginAction = (dispatch) => (data) => {
	const obj = {
		id: '1',
		email: data.email,
		name: 'Eduardo',
		lastname: 'Alvarez',
	};

	setTimeout(() => {
		localStorage.setItem('user', JSON.stringify(obj));

		return dispatch({
			type: LOGIN_SUCCESS,
			payload: {
				user_data: obj,
				has_login: true,
			},
		});
	}, 2000);
};

export const logoutAction = (dispatch) => () => {
	localStorage.removeItem('user');
	return dispatch({
		type: LOGOUT_SUCCESS,
		payload: {
			user_data: {},
			has_login: false,
		},
	});
};
