import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({ func, toggle, mods }) {
	console.log(func);
	console.log(mods);
	return (
		<div
			className={getClasses(classNameButtonUi('button'), ...mods)}
			onClick={
				func
					? event => {
							event.stopPropagation();
							func();
							if (toggle) {
								toggle();
							}
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
