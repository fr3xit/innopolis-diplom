import { Navigate } from 'react-router-dom';

import { getLocalStorage } from '@tools/restTools';

const RequireAuth = function ({ children }) {
	if (getLocalStorage('authorization')) {
		return children;
	} else {
		return <Navigate to="/registration" />;
	}
};

export default RequireAuth;

// привет;
