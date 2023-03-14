import moduleClassNameBind from 'classnames/bind';

import BtnUi from '@modules/button_ui/Button_ui';
import ToPay from '@modules/toPay/ToPay';

import testFunc from '@js/testFunc';
import styles from './Card.module.scss';

const classNameCard = moduleClassNameBind.bind(styles);

const Card = function ({
	item: {
		title,
		desc,
		price,
		amount,
		units,
		img: { url, alt },
	},
	mods,
	funcButtonUI = testFunc,
	funcCard = testFunc,
}) {
	mods.find(item => {
		if (item === classNameCard('card_vertically')) {
			if (title.length > 25) {
				title = title.substring(0, 25) + '...';
			}
		}
	});

	let dimension = '';

	switch (units) {
		case 'grams':
			dimension = 'г';
			break;
		case 'pieces':
			dimension = 'шт';
			break;
		default:
			dimension = 'шт';
	}

	return (
		<div
			onClick={funcCard}
			className={[classNameCard('card'), ...mods].join(' ')}>
			<header className={classNameCard('card__header')}>
				<img className={classNameCard('card__img')} src={url} alt={alt} />
			</header>

			<main className={classNameCard('card__main')}>
				<h3 className={classNameCard('card__title')}>{title}</h3>
				<div className={classNameCard('card__desc')}>
					<p className={classNameCard('card__text')}>{desc}</p>
				</div>
			</main>

			<footer className={classNameCard('card__footer')}>
				<div className={classNameCard('card__price')}>
					<div className={classNameCard('card__result')}>
						<ToPay sum={price} />
						<span className={classNameCard('card__amount')}>
							{` / ${amount} ${dimension} .`}
						</span>
					</div>

					<BtnUi func={funcButtonUI} />
				</div>
			</footer>
		</div>
	);
};

export default Card;
