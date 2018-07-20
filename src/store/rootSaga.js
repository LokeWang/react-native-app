import { fork , all } from 'redux-saga/effects';
import helloSaga from '../pages/login/saga';

export default function* rootSaga() {
    yield all([
        helloSaga(),
    ])
}