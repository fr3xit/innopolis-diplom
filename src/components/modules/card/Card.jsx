import moduleClassNameBind from 'classnames/bind';

import BtnUi from '@modules/button_ui/Button_ui';
import ToPay from '@modules/toPay/ToPay';
import SelectedPay from '@groups/selectedPay/SelectedPay';

import testFunc from '@js/testFunc';
import { getClasses } from '@js/tools.js';
import { checkLongTitle } from './cardTools';

import stylesCard from './Card.module.scss';
import stylesToPay from '@modules/toPay/ToPay.module.scss';

const classNameCard = moduleClassNameBind.bind(stylesCard);
const classNameToPay = moduleClassNameBind.bind(stylesToPay);

const Card = function ({
	item: {
		title,
		desc,
		price,
		amount,
		units,
		img: { url, alt },
	},
	buttonUiConfig: { funcButtonUI, toggleButtonUI, modsButtonUI },
	mods,
	funcCard = testFunc,
}) {
	const checkModHorizontal = mods.includes(classNameCard('card_horizontal'));
	title = checkLongTitle(mods, title);

	return (
		<div
			onClick={funcCard}
			className={getClasses(classNameCard('card'), ...mods)}>
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
						{checkModHorizontal ? (
							<ToPay sum={price} mods={[classNameToPay('to-pay_middle')]} />
						) : (
							<SelectedPay price={price} amount={amount} units={units} />
						)}
					</div>

					<BtnUi
						func={funcButtonUI}
						mods={modsButtonUI}
						toggle={toggleButtonUI}
					/>
				</div>
			</footer>
		</div>
	);
};

export default Card;
