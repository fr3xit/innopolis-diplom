import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@tools/restTools.js';
import stylesContainer from './Container.module.scss';

const classNameContainer = moduleClassNameBind.bind(stylesContainer);

const Сontainer = function ({ children, mods = '' }) {
	return (
		<div className={getClasses(classNameContainer('container'), ...mods)}>
			{children}
		</div>
	);
};

export default Сontainer;
