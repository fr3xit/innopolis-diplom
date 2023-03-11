import mcnBind from 'classnames/bind';

import styles from './Container.module.scss';

const SCN = mcnBind.bind(styles);

const checkMods = function (mods) {
	let result;

	switch (mods) {
		case 'middle':
			result = SCN('container_middle');
			break;
		default:
			result = '';
	}

	return result;
};

const Сontainer = function ({ children, mods }) {
	return <div className={SCN('container', checkMods(mods))}>{children}</div>;
};

export default Сontainer;
