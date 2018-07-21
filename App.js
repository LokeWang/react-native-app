import React, { Component } from 'react';
import Navigator from './src/utils/navigation';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/store/rootReducer';
import { Provider } from "react-redux";
import rootSaga from './src/store/rootSaga';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        sagaMiddleware
    )
);
sagaMiddleware.run(rootSaga);
export default class Center extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}