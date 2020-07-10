export const currencyformat = ({ number, simbol }) => {
	let formattedNumber;
	let _number = number;

	_number = Math.abs(number);
	_number = number.toFixed(2);
	formattedNumber = _number.split('.');
	formattedNumber = formattedNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

	return simbol ? `$${formattedNumber}` : formattedNumber;
};
