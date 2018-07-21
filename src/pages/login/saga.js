import { fork ,put, call, take, takeEvery,select } from 'redux-saga/effects';
import  {loginAction} from '../../store/rootAction';
import request from '../../utils/request';

function * login(){
    while (true) {
        let actionInfo = yield take(loginAction.loginRequest);
        const data = yield call(()=>{
            request('/project/list')
        });
        yield put({
            type: loginAction.updateLoginState,
            payload: {
                loginState:true,
            }
        });
    }
}

function * signOut(){
    while (true) {
        let request = yield take(loginAction.signOut);
        // const data = yield call();
        yield put({
            type: loginAction.updateLoginState,
            payload: {
                loginState:false,
            }
        });
    }
}

export default function * loginSaga(){
    yield fork(signOut);
    yield fork(login);
}





