import axios from 'axios';
import { GET_AMIIBOS_PAGINATED } from '../config/constants';

export const getAmiibosPaginatedAction = (dispatch) => async ({
	page,
	limit,
}) => {
	try {
		const { data } = await axios.get('https://www.amiiboapi.com/api/amiibo');

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const amiibos = data.amiibo.slice(startIndex, endIndex);

		return dispatch({
			type: GET_AMIIBOS_PAGINATED,
			payload: {
				amiibos,
			},
		});
	} catch (err) {}
};
