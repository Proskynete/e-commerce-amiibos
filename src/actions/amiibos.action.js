import axios from 'axios';
import {
	GET_AMIIBOS_PAGINATED,
	GET_AMIIBOS_PAGINATED_ERROR,
} from '../config/constants';

export const getAmiibosPaginatedAction = (dispatch) => async ({
	page,
	limit,
}) => {
	try {
		const _page = parseInt(page);
		const _limit = parseInt(limit);

		const max = 255;
		const min = 100;
		const sale = 0.15;

		const { data } = await axios.get('https://www.amiiboapi.com/api/amiibo');

		const startIndex = (_page - 1) * _limit;
		const endIndex = _page * _limit;
		const lastIndex = Math.round(data.amiibo.length / _limit);

		const pagination = {
			next_page: _page + 1,
			previous_page: _page - 1,
			first_page: 1,
			last_page: lastIndex,
			limit: _limit,
		};

		const amiibos = data.amiibo.slice(startIndex, endIndex);
		amiibos.map((amiibo) => {
			const randomPrice = Math.floor(Math.random() * (max - min)) + min;
			const normalPrice = Math.round(randomPrice * 100 - 1);
			const internetPrice = Math.round(normalPrice - sale * normalPrice);
			const rating = (Math.random() * (5.0 - 2.5) + 2.5).toFixed(1);

			amiibo['price'] = {
				normal: normalPrice,
				internet: internetPrice,
			};
			amiibo['rating'] = rating;

			return amiibo;
		});

		return dispatch({
			type: GET_AMIIBOS_PAGINATED,
			payload: {
				status: 200,
				amiibos,
				pagination,
			},
		});
	} catch (err) {
		return dispatch({
			type: GET_AMIIBOS_PAGINATED_ERROR,
			payload: {
				status: 400,
				message: 'Error en el servidor, intentar nuevamente mas tarde',
			},
		});
	}
};
