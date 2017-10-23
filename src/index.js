// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// App
import App from './App';

// Reducer
import rootReducer from './rootReducer'

// JWT
import decode from 'jwt-decode'

// Actions
import { userLoggedIn } from './actions/auth'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
	)

if (localStorage.uniteJWT) {
  const payload = decode(localStorage.uniteJWT);
  const user = {
    token: localStorage.uniteJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  store.dispatch(userLoggedIn(user));
}


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
