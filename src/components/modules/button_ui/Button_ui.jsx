import { useState } from 'react';
import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({ func = false, mods = [], toggle }) {
	const [selectProduct, setSelectProduct] = useState(false);

	const getRootClasses = function () {
		if (selectProduct && toggle.mods) {
			return getClasses(classNameButtonUi('button'), ...mods, ...toggle.mods);
		} else {
			return getClasses(classNameButtonUi('button'), ...mods);
		}
	};

	const handler = function (event) {
		if (func) {
			event.stopPropagation();
			if (selectProduct && toggle.func()) {
				toggle.func();
				setSelectProduct(false);
			} else if (func) {
				func();
				setSelectProduct(true);
			}
		}
	};

	return (
		<div className={getRootClasses()} onClick={handler}>
			<div className={classNameButtonUi('button__inner')}>
				<span className={classNameButtonUi('button__line')}></span>
				<span className={classNameButtonUi('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
