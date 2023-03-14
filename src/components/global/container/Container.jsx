import moduleClassNameBind from 'classnames/bind';

import stylesContainer from './Container.module.scss';

const classNameContainer = moduleClassNameBind.bind(stylesContainer);

const checkMods = function (mods) {
	let result;

	switch (mods) {
		case 'middle':
			result = classNameContainer('container_middle');
			break;
		default:
			result = '';
	}

	return result;
};

const Сontainer = function ({ children, mods }) {
	return (
		<div className={classNameContainer('container', checkMods(mods))}>
			{children}
		</div>
	);
};

export default Сontainer;
