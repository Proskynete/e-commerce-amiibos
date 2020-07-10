import { GET_AMIIBOS_PAGINATED } from '../config/constants';

const initialState = {
	amiibos: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_AMIIBOS_PAGINATED:
			return {
				...state,
				amiibos: action.payload.amiibos,
			};
		default:
			return state;
	}
};
