import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';
import RequireAuth from '@hooks/RequireAuth';

const NotFound = function () {
	return (
		<RequireAuth>
			<Layout
				main={
					<Container>
						<p>Ничего нет, все украли!</p>
						<img src="/img/notFound.gif" alt="notFound" />
					</Container>
				}
			/>
		</RequireAuth>
	);
};

export default NotFound;
