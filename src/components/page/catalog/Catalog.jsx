import RequireAuth from '@hooks/RequireAuth';
import Layout from '@layouts/general/General.jsx';
import Container from '@global/container/Container';
import Header from '@global/header/Header';
import Title from '@global/header/elements/title/Title';
import HubHeaderRight from '@groups/hubHeaderRight/HubHeaderRight';
import CatalogList from '@blocks/catalogList/CatalogList';

const Catalog = function () {
	return (
		<RequireAuth>
			<Layout
				header={
					<Container>
						<Header
							left={<Title>наша продукция</Title>}
							right={<HubHeaderRight />}
						/>
					</Container>
				}
				main={
					<Container>
						<CatalogList />
					</Container>
				}
			/>
		</RequireAuth>
	);
};

export default Catalog;
