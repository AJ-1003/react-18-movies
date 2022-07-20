import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { claim } from './auth/auth.model';
import authenticationContext from './auth/authenticationContext';
import Authorized from './auth/Authorized';
import { getClaims } from './auth/handleJWT';
import Footer from './Foorter';
import Menu from './Menu';
import routes from './route-config';
import configureInterceptor from './utils/httpInterceptors';
import configureValidations from './Validations';

configureValidations();
configureInterceptor();

function App() {

	// const [claims, setClaims] = useState<claim[]>([]);
	const [claims, setClaims] = useState<claim[]>([]);

	useEffect(() => {
		setClaims(getClaims());
	}, [])

	function isAdmin() {
		return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
	}

	return (
		<BrowserRouter>
			<authenticationContext.Provider
				value={{ claims, update: setClaims }}>
				<Menu />
				<div className="container">
					<Routes>
						{routes.map(route =>
							<Route key={route.path} path={route.path} element={route.isAdmin && !isAdmin() ?
								<>
									You are not allowed to see this page
								</> : <route.component />} />
						)}
					</Routes>
				</div>
				<Footer />
			</authenticationContext.Provider>
		</BrowserRouter>
	);
}

export default App;
