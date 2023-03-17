import moduleClassNameBind from 'classnames/bind';

import { handler, getRootClasses } from './buttonUiTools';
import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({
	func,
	mods = [],
	toggle = {
		status: false,
		funcToggle: () => 1 + 1,
	},
}) {
	return (
		<div
			className={getRootClasses(toggle, mods, classNameButtonUi)}
			onClick={event => handler(event, func, toggle)}>
			<div className={classNameButtonUi('button__inner')}>
				<span className={classNameButtonUi('button__line')}></span>
				<span className={classNameButtonUi('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
