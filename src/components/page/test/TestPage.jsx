import { useState } from 'react';

import { Modal } from '@blocks/modal/Modal';

import './TestPage.scss';

export const TestPage = function () {
	const [open, setOpen] = useState(false);

	const handler = () => {
		setOpen(!open);
	};

	return (
		<>
			<button onClick={handler}>Показать</button>
			<Modal open={open} onClose={() => setOpen(false)} />
		</>
	);
};
