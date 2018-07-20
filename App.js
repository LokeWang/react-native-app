import React, { Component } from 'react';
import Navigator from './src/common/AppNavigation';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/store/rootReducer';
import { Provider } from "react-redux";
import rootSaga from './src/store/rootSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
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