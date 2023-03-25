import moduleClassNameBind from 'classnames/bind';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import Button from '@modules/button/Button';

import stylesModal from './Modal.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameModal = moduleClassNameBind.bind(stylesModal);
const classNameButton = moduleClassNameBind.bind(stylesButton);

export const Modal = function ({ title = 'Заголовок', content, type }) {
	const modalLink = useRef();

	const modalRemove = () => {
		alert('куку');
	};

	const handler = () => {
		modalRemove();
	};

	return (
		<TransitionGroup component={null}>
			<CSSTransition timeout={300} classNames="my-node">
				<div ref={modalLink} className={classNameModal('modal')}>
					<div className={classNameModal('modal__body')}>
						<div className={classNameModal('modal__inner')}>
							<header className={classNameModal('modal__header')}>
								<h3 className={classNameModal('modal__title')}>{title}</h3>

								<div className={classNameModal('modal__close')}>X</div>
							</header>

							<main className={classNameModal('modal__main')}>{content}</main>

							<footer className={classNameModal('modal__footer')}>
								<Button
									func={handler}
									mods={[classNameButton('button_hollow')]}>
									Хорошо
								</Button>
							</footer>
						</div>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};
