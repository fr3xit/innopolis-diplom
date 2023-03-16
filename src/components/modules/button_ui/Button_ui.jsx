import { useState } from 'react';
import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import testFunc from '@js/testFunc';
import stylesButtonUi from './Button_ui.module.scss';

const classNameButtonUi = moduleClassNameBind.bind(stylesButtonUi);

const Button_ui = function ({
	func,
	mods = [],
	toggle: { func: toggleFunc, mods: toggleMods } = {
		toggle: testFunc,
		mods: [],
	},
}) {
	const [selectProduct, setSelectProduct] = useState(false);

	const getRootClasses = function () {
		if (selectProduct) {
			return getClasses(classNameButtonUi('button'), ...mods, ...toggleMods);
		} else {
			return getClasses(classNameButtonUi('button'), ...mods);
		}
	};

	const handler = function () {
		if (selectProduct) {
			console.log('Выбран');
			toggleFunc();
			setSelectProduct(false);
		} else if (func) {
			console.log('Не выбран');
			func();
			// toggleFunc();
			setSelectProduct(true);
		}
	};

	return (
		<div
			className={getRootClasses()}
			onClick={
				func
					? event => {
							event.stopPropagation();
							handler();
					  }
					: ''
			}>
			<div className={classNameButtonUi('button__inner')}>
				<span className={classNameButtonUi('button__line')}></span>
				<span className={classNameButtonUi('button__line')}></span>
			</div>
		</div>
	);
};

export default Button_ui;
