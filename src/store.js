import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, amiibosReducer } from './reducers';

const rootReducer = combineReducers({
	login: loginReducer,
	amiibos: amiibosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
