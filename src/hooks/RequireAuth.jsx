import { Navigate } from 'react-router-dom';

import { getLocalStorage } from '@tools/restTools';

const RequireAuth = function ({ children }) {
	if (getLocalStorage('authorization')) {
		return children;
	} else {
		return <Navigate to="/authorization" />;
	}
};

export default RequireAuth;
