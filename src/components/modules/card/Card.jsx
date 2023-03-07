import mcnBind from 'classnames/bind';

import styles from './Card.module.scss';

const SCN = mcnBind.bind(styles);

const Card = function ({ Header, Main, Footer, mods }) {
	return (
		<div className={SCN('card', { card_vertically: mods === 'vertically' })}>
			<header className={SCN('card__header')}>{Header}</header>
			<main className={SCN('card__main')}>{Main}</main>
			<footer className={SCN('card__footer')}>{Footer}</footer>
		</div>
	);
};

export default Card;
