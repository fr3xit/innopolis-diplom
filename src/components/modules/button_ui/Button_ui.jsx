import moduleClassNameBind from 'classnames/bind';

import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({ func, mods }) {
	const checkMods = function (mods) {
		let result;
		switch (mods) {
			case 'close':
				result = classNameButtonUi('button_close');
				break;
			case 'arrow':
				result = classNameButtonUi('button_arrow');
				break;
			default:
				result = '';
		}

		return result;
	};

	return (
		<div
			className={classNameButtonUi('button', checkMods(mods))}
			onClick={
				func
					? event => {
							event.stopPropagation();
							func();
					  }
					: null
			}>
			<div className={classNameButtonUi('button__inner')}>
				<span className={classNameButtonUi('button__line')}></span>
				<span className={classNameButtonUi('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
