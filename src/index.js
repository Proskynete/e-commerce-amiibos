import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './views';

import store from './store';
import './assets/scss/styles.scss';

import * as serviceWorker from './serviceWorker';

const Main = () => (
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</Provider>
);
const root = document.getElementById('root');
render(<Main />, root);
serviceWorker.unregister();
