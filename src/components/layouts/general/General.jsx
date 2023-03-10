import { useEffect, useRef } from 'react';
import mcnBind from 'classnames/bind';

import Container from '@global/container/Container';
import styles from './General.module.scss';

const SCN = mcnBind.bind(styles);

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
		<div className={SCN('page')}>
			<header ref={elementHeader} className={SCN('page__header')}>
				{header ? header : ''}
			</header>

			<main ref={elementMain} className={SCN('page__main')}>
				{main ? main : ''}
			</main>

			<footer ref={elementFooter} className={SCN('page__footer')}>
				{footer ? footer : ''}
			</footer>
		</div>
	);
};

export default General;
