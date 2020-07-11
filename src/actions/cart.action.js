import { ADD_AMIIBO_TO_CART } from '../config/constants';

export const addAmiiboToCartAction = (dispatch) => (amiibo) => {
	return dispatch({
		type: ADD_AMIIBO_TO_CART,
		payload: {
			amiibo,
		},
	});
};
