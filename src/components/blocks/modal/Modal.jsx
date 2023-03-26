import { createPortal } from 'react-dom';
import moduleClassNameBind from 'classnames/bind';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Button from '@modules/button/Button';

import stylesModal from './Modal.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameModal = moduleClassNameBind.bind(stylesModal);
const classNameButton = moduleClassNameBind.bind(stylesButton);

export const Modal = function ({
	func,
	open,
	onClose,
	title = 'Заголовок',
	content,
	buttonName = 'Хорошо',
	type,
}) {
	const modalParentElement = document.getElementById('modal');

	const modalCloseWrapper = event => {
		if (
			[...event.target.classList].find(item => item === classNameModal('modal'))
		) {
			onClose();
		}
	};

	const handler = () => {
		onClose();
		func();
	};

	const modalElement = () => {
		return (
			<TransitionGroup component={null}>
				<CSSTransition timeout={300} classNames="my-node">
					<div onClick={modalCloseWrapper} className={classNameModal('modal')}>
						<div className={classNameModal('modal__body')}>
							<div className={classNameModal('modal__inner')}>
								<header className={classNameModal('modal__header')}>
									<h3 className={classNameModal('modal__title')}>{title}</h3>

									<div
										onClick={onClose}
										className={classNameModal('modal__close')}>
										X
									</div>
								</header>

								<main className={classNameModal('modal__main')}>{content}</main>

								<footer className={classNameModal('modal__footer')}>
									<Button
										func={handler}
										mods={[classNameButton('button_hollow')]}>
										{buttonName}
									</Button>
								</footer>
							</div>
						</div>
					</div>
				</CSSTransition>
			</TransitionGroup>
		);
	};

	if (open) {
		return createPortal(modalElement(), modalParentElement);
	} else {
		return null;
	}
};
