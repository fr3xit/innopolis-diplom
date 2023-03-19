import moduleClassNameBind from 'classnames/bind';
import { Link } from 'react-router-dom';

import Basket from '@blocks/basket/Basket';
import Button from '@modules/button/Button';

import stylesHubHeaderRight from './HubHeaderRight.module.scss';
import stylesButton from '@modules/button/Button.module.scss';

const classNameHubHeaderRight = moduleClassNameBind.bind(stylesHubHeaderRight);
const classNameButton = moduleClassNameBind.bind(stylesButton);

const HubHeaderRight = function () {
	return (
		<div className={classNameHubHeaderRight('hub-header-right')}>
			<Link to={'/basket'}>
				<Basket />
			</Link>
			<Button mods={[classNameButton('button_hollow')]}>Выйти</Button>
		</div>
	);
};

export default HubHeaderRight;
