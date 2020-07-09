import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const FourZeroFour = lazy(() => import('./four_zero_four'));
const LoginView = lazy(() => import('./login'));
const Layout = lazy(() => import('./layout'));

const App = () => {
	const user = localStorage.getItem('user');

	return (
		<Router>
			<Suspense fallback={'Cargando...'}>
				<div className='main-section'>
					<Switch>
						<Route
							path='/'
							exact
							component={(props) => <Layout {...props} />}
						/>
						{!JSON.parse(user) ? (
							<Route path='/login' exact component={LoginView} />
						) : null}

						<Route
							path='*'
							component={(props) => <FourZeroFour {...props} />}
						/>
					</Switch>
				</div>
			</Suspense>
		</Router>
	);
};

export default App;
