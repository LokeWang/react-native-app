import React, { Component } from 'react';
import { Text, View,  StyleSheet} from 'react-native';
import { connect } from "react-redux";
import  {loginAction} from '../../store/rootAction';
import { Button } from 'antd-mobile-rn';
class Login extends Component {
    componentDidMount() {

    }
    login=()=>{
        /* let {loginState} = this.props;
        if(loginState){
            this.props.dispatch({
                type: loginAction.signOut,
            })
        }else {
            this.props.dispatch({
                type: loginAction.loginRequest,
            })
        } */
        this.props.navigation.navigate('Main');
    };
    render() {
        const {loginState} = this.props;
        return (
            <View>
                <Text style = {styles.text}>
                    login的页面你知道，
                    暗中观察，
                    嘻嘻，
                </Text>
                <Text style = {styles.login}>
                    您的登陆状态是：{loginState?`已登陆成功！奖励你一朵小红花！`:'您还没登陆'}
                </Text>
                <View style = {styles.bigButton}>
                    <Button
                        onPressIn={this.login}
                        accessibilityLabel="Learn more about this purple button"
                        type='primary'
                    >
                      {loginState?"退出登陆":"立即登陆"}
                    </Button>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loginState: state.mainPageReducer.loginState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch:dispatch
    }
};
const styles = StyleSheet.create({
    bigButton: {
        margin:10
    },
    text: {
        color: 'red',
        fontSize: 30,
        paddingBottom:50,
    },
    login:{
        color: 'blue',
        paddingBottom:50,
        fontSize: 30,
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


