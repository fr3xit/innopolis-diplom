import moduleClassNameBind from 'classnames/bind';

import stylesCard from './Card.module.scss';
const classNameCard = moduleClassNameBind.bind(stylesCard);

export const getUnits = unit => {
	let dimension = '';

	switch (unit) {
		case 'grams':
			dimension = 'г';
			break;
		case 'pieces':
			dimension = 'шт';
			break;
		default:
			dimension = 'шт';
	}

	return dimension;
};

export const checkLongTitle = (mods, title) => {
	mods.find(item => {
		if (item === classNameCard('card_vertically')) {
			if (title.length > 24) {
				title = title.substring(0, 24) + '...';
			}
		}
	});

	return title;
};
