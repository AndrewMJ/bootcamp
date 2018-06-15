import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

import reducers from './reducers/index';

const theStore = createStore(reducers);



// We will still render the App component. But we will render it inside of the Provider
// component. Provider component takes a prop of store which will be Redux store we made 
// above. The redux store was made by createStore and handling it the rootReducer

ReactDOM.render(
	<Provider store = {theStore}>
	<App />
	</Provider>,
	document.getElementById('root')
);

