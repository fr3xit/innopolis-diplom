import BtnUi from '@modules/button_ui/Button_ui';
import test from '@js/test';

const Footer = function () {
	return (
		<>
			<BtnUi key={Date.now()} func={test} />
		</>
	);
};

export default Footer;
