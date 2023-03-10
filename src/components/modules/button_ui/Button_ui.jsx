import mcnBind from 'classnames/bind';

import styles from './Button_ui.module.scss';

const SCN = mcnBind.bind(styles);

const Button_ui = function ({ func, mods }) {
	const checkMods = function (mods) {
		let result;
		switch (mods) {
			case 'close':
				result = SCN('button_close');
				break;
			case 'horizontal':
				result = SCN('card_horizontal');
				break;
			default:
				result = '';
		}

		return result;
	};

	return (
		<div className={SCN('button', checkMods(mods))} onClick={func}>
			<div className={SCN('button__inner')}>
				<span className={SCN('button__line')}></span>
				<span className={SCN('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
