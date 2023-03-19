import { useEffect, useRef } from 'react';
import moduleClassNameBind from 'classnames/bind';

import stylesGeneral from './General.module.scss';

const classNameGeneral = moduleClassNameBind.bind(stylesGeneral);

const General = function ({ header, main, footer }) {
	const elementHeader = useRef();
	const elementMain = useRef();
	const elementFooter = useRef();
	const extraIndent = 30;

	const updateSize = () => {
		try {
			const styleMain = elementMain.current.style;

			styleMain.paddingTop = `${
				elementHeader.current.offsetHeight + extraIndent
			}px`;

			styleMain.paddingBottom = `${
				elementFooter.current.offsetHeight + extraIndent
			}px`;
		} catch {}
	};

	useEffect(() => {
		window.addEventListener('resize', updateSize);
		updateSize();
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
