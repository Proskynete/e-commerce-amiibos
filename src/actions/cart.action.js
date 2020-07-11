import {
	ADD_AMIIBO_TO_CART,
	REMOVE_AMIIBO_FROM_CART,
} from '../config/constants';

export const addAmiiboToCartAction = (dispatch) => (amiibo) => {
	return dispatch({
		type: ADD_AMIIBO_TO_CART,
		payload: {
			amiibo,
		},
	});
};

export const removeAmiiboFromCartAction = (dispatch) => (tail) => {
	return dispatch({
		type: REMOVE_AMIIBO_FROM_CART,
		payload: {
			tail,
		},
	});
};
