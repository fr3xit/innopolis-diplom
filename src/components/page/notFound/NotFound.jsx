import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';

const NotFound = function () {
	return (
		<Layout
			main={
				<Container>
					<p>Ничего нет, все украли!</p>
					<img src="/img/notFound.gif" alt="notFound" />
				</Container>
			}
		/>
	);
};

export default NotFound;
