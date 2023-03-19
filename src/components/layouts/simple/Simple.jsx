import moduleClassNameBind from 'classnames/bind';

import { getClasses } from '@js/tools.js';
import stylesSimple from './Simple.module.scss';

const classNameSimple = moduleClassNameBind.bind(stylesSimple);

const Simple = function ({ header, main, footer, mods }) {
	return (
		<div className={getClasses(classNameSimple('page'), ...mods)}>
			<header className={classNameSimple('page__header')}>
				{header ? header : ''}
			</header>

			<main className={classNameSimple('page__main')}>{main ? main : ''}</main>

			<footer className={classNameSimple('page__footer')}>
				{footer ? footer : ''}
			</footer>
		</div>
	);
};

export default Simple;
