import moduleClassNameBind from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';
import RequireAuth from '@hooks/RequireAuth';
import Button from '@modules/button/Button';

import stylesNotFound from './NotFound.module.scss';
import stylesButton from '@modules/button/Button.module.scss';
const classNameNotFound = moduleClassNameBind.bind(stylesNotFound);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const NotFound = function () {
	const go = useNavigate();
	const handler = () => {
		go('/');
	};

	return (
		<RequireAuth>
			<Layout
				main={
					<Container>
						<div className={classNameNotFound('not-found')}>
							<div className={classNameNotFound('not-found__inner')}>
								<h3 className={classNameNotFound('not-found__title')}>
									Ничего нет, все украли!
								</h3>
								<Button
									func={handler}
									mods={[
										classNameButton('button_hollow'),
										classNameButton('button_center'),
									]}>
									На главную
								</Button>
								<img
									src="/img/notFound.gif"
									alt="notFound"
									title="А где ...."
								/>
							</div>
						</div>
					</Container>
				}
			/>
		</RequireAuth>
	);
};

export default NotFound;
