import { getClasses } from '@tools/restTools.js';

export const handler = (event, func, toggle) => {
	if (func) {
		event.stopPropagation();
		if (toggle.status && toggle.funcRemove()) {
			toggle.funcRemove();
		} else if (func) {
			func();
		}

		toggle.funcToggle();
	}
};

export const getRootClasses = function (toggle, mods, classNameButtonUi) {
	if (toggle.status && toggle.mods) {
		return getClasses(classNameButtonUi('button'), ...mods, ...toggle.mods);
	} else {
		return getClasses(classNameButtonUi('button'), ...mods);
	}
};
