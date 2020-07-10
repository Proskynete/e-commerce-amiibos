import {
	GET_AMIIBOS_PAGINATED,
	GET_AMIIBOS_PAGINATED_ERROR,
} from '../config/constants';

const initialState = {
	status: 0,
	message: '',
	amiibos: [],
	pagination: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_AMIIBOS_PAGINATED:
			return {
				...state,
				status: action.payload.status,
				amiibos: action.payload.amiibos,
				pagination: action.payload.pagination,
			};
		case GET_AMIIBOS_PAGINATED_ERROR:
			return {
				...state,
				status: action.payload.status,
				message_error: action.payload.message,
			};
		default:
			return state;
	}
};
