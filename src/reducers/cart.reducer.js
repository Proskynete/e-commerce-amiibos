import { ADD_AMIIBO_TO_CART } from '../config/constants';

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
		default:
			return state;
	}
};
