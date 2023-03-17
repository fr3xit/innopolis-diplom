import { getClasses } from '@js/tools.js';

export const handler = (event, func, toggle) => {
	if (func) {
		event.stopPropagation();
		if (toggle.status && toggle.func()) {
			toggle.func();
		} else if (func) {
			func();
		}

		toggle.funcAdded(!toggle.status);
	}
};

export const getRootClasses = function (toggle, mods, classNameButtonUi) {
	if (toggle.status && toggle.mods) {
		return getClasses(classNameButtonUi('button'), ...mods, ...toggle.mods);
	} else {
		return getClasses(classNameButtonUi('button'), ...mods);
	}
};
