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

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
	)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
