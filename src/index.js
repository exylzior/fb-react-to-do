import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './Reducer';
import routes from './routes';
import promise from 'redux-promise';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
