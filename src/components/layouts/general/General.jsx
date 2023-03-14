import { useEffect, useRef } from 'react';
import moduleClassNameBind from 'classnames/bind';

import stylesGeneral from './General.module.scss';

const classNameGeneral = moduleClassNameBind.bind(stylesGeneral);

const General = function ({ header, main, footer }) {
	const elementHeader = useRef(null);
	const elementMain = useRef(null);
	const elementFooter = useRef(null);

	useEffect(() => {
		const extraIndent = 30;

		elementMain.current.style.paddingTop = `${
			elementHeader.current.offsetHeight + extraIndent
		}px`;

		elementMain.current.style.paddingBottom = `${
			elementFooter.current.offsetHeight + extraIndent
		}px`;
	}, []);

	return (
		<div className={classNameGeneral('page')}>
			<header ref={elementHeader} className={classNameGeneral('page__header')}>
				{header ? header : ''}
			</header>

			<main ref={elementMain} className={classNameGeneral('page__main')}>
				{main ? main : ''}
			</main>

			<footer ref={elementFooter} className={classNameGeneral('page__footer')}>
				{footer ? footer : ''}
			</footer>
		</div>
	);
};

export default General;
