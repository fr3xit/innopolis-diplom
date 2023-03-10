import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';

import styles from './NotFound.module.scss';

const NotFound = function () {
	return (
		<Layout
			main={
				<Container>
					<p>Ничего нет, все украли!</p>
				</Container>
			}
		/>
	);
};

export default NotFound;
