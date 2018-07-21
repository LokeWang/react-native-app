import  { loginAction } from '../../store/rootAction';
let stateData = {
    loginState:false,
};
function loginReducer(state=stateData, action) {
    if(action.type === loginAction.updateLoginState) {
        return Object.assign({}, state, {
            loginState:action.payload.loginState
        });
    }else {
        return state;
    }
}

export default loginReducer;