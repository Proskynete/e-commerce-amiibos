import React from 'react';

export const prettyRating = (rating) => {
	const percentage = (rating / 100) * 100;

	const classesName = [];
	const completeStar = 'fa fa-star';
	const halfStar = 'fas fa-star-half-alt';
	const emptyStar = 'far fa-star';
	let i = percentage;

	for (i; i >= 1; i -= 1) {
		classesName.push(completeStar);
	}
	if (i >= 0.5 && i <= 1) {
		classesName.push(halfStar);
	}
	while (classesName.length < 5) {
		classesName.push(emptyStar);
	}
	return classesName.map((className) => (
		<i key={Math.random()} className={`${className}`} aria-hidden='true' />
	));
};
