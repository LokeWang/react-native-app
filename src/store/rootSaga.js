import { fork , all } from 'redux-saga/effects';
import loginSaga from '../pages/login/saga';
import homeSaga from '../pages/home/saga';
import messageSaga from '../pages/message/saga';
import mineSaga from '../pages/mine/saga';
import myElectricitySaga from '../pages/myElectricity/saga';
import realtimeMonitorSaga from '../pages/realtimeMonitor/saga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        homeSaga(),
        messageSaga(),
        mineSaga(),
        myElectricitySaga(),
        realtimeMonitorSaga(),
    ])
}