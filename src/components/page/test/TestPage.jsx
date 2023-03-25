import ReactDOM from 'react-dom/client';

import { Modal } from '@blocks/modal/Modal';

import './TestPage.scss';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
const root = ReactDOM.createRoot(document.getElementById('root'));
export const TestPage = function () {
	const handler = () => {
		root.render(<Modal />);
		// ReactDOM.render(<Modal />, document.getElementById('root'));
	};
	return (
		<button
			onClick={handler}
			style={{ margin: '0 auto', color: 'red', padding: '10px' }}>
			Показать
		</button>
	);
};
