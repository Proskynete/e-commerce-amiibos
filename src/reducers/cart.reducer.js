import {
	ADD_AMIIBO_TO_CART,
	REMOVE_AMIIBO_FROM_CART,
} from '../config/constants';

const initialState = {
	amiibos: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_AMIIBO_TO_CART:
			const amiiboSaved = state.amiibos.find(
				(amiibo) => amiibo.tail === action.payload.amiibo.tail,
			);

			if (!amiiboSaved) {
				state.amiibos.push(action.payload.amiibo);
				localStorage.setItem('cart', JSON.stringify(action.payload.amiibo));
			}

			return {
				...state,
			};
		case REMOVE_AMIIBO_FROM_CART:
			return {
				...state,
				amiibos: state.amiibos.filter(
					(amiibo) => amiibo.tail !== action.payload.tail,
				),
			};
		default:
			return state;
	}
};
