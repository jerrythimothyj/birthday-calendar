import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import createHistory from 'history/createHashHistory';
import {configureStore, runSaga} from './Store.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createHistory();
const store = configureStore(history);

runSaga();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
