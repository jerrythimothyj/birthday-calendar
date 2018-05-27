import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const configureStore = history => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...[...middlewares, routerMiddleware(history)])),
);

export const runSaga = () => sagaMiddleware.run(rootSaga);
