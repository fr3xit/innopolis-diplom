import mcnBind from 'classnames/bind';

import styles from './Card.module.scss';

const SCN = mcnBind.bind(styles);

const Card = function ({ Header, Main, Footer, mods }) {
	const checkMods = function (mods) {
		let result;
		switch (mods) {
			case 'vertically':
				result = SCN('card_vertically');
				break;
			case 'horizontal':
				result = SCN('card_horizontal');
				break;
			default:
				result = SCN('card_vertically');
		}

		return result;
	};

	return (
		<div className={SCN('card', checkMods(mods))}>
			<header className={SCN('card__header')}>{Header}</header>
			<main className={SCN('card__main')}>{Main}</main>
			<footer className={SCN('card__footer')}>{Footer}</footer>
		</div>
	);
};

export default Card;
