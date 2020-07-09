import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './views';

import store from './store';
import './assets/scss/styles.scss';

import * as serviceWorker from './serviceWorker';

const Main = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
const root = document.getElementById('root');
render(<Main />, root);
serviceWorker.unregister();
