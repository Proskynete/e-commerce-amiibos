import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
	loginReducer,
	amiibosReducer,
	cartReducer,
	modalReducer,
} from './reducers';

const rootReducer = combineReducers({
	loginStore: loginReducer,
	amiibosStore: amiibosReducer,
	cartStore: cartReducer,
	modalStore: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
