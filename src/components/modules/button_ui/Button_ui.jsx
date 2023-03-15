import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({ func, mods }) {
	return (
		<div
			className={getClasses(classNameButtonUi('button'), ...mods)}
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
