/* ---depencies--- */
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

/* ---pages--- */
import HomeScreen from './home/index';
import MassageScreen from './message/index';
import MineScreen from './mine/index';
import MyElectricityScreen from './home/myElectricity/index';
import DetailsScreen from './message/details/index';
import CompanyInforScreen from './mine/companyInfor/index';

/* --- */
const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        key: 'Home',
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
	Electricity: MyElectricityScreen,
});

const MassageStack = createStackNavigator({
    Massage: {
        screen: MassageScreen,
        key: 'Massage',
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
	Details: DetailsScreen,
});

const MineStack = createStackNavigator({
    Mine: {
        screen: MineScreen,
        key: 'Mine',
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    ComInf: CompanyInforScreen,
});

// TODO: 封装方法 隐藏nextPage tabbar
HomeStack.navigationOptions = ({ navigation }) => {
    if(navigation.state.index==1){
        return {
            tabBarVisible: false,
        };
    }
    return {
        tabBarVisible: true,
    };
};
MassageStack.navigationOptions = ({ navigation }) => {
    if(navigation.state.index==1){
        return {
            tabBarVisible: false,
        };
    }
    return {
        tabBarVisible: true,
    };
};
MineStack.navigationOptions = ({ navigation }) => {
    if(navigation.state.index==1){
        return {
            tabBarVisible: false,
        };
    }
    return {
        tabBarVisible: true,
    };
};

export default createBottomTabNavigator(
	{
		Home: HomeStack,
        Massage: MassageStack,
        Mine: MineStack
	},
	{
		/* Other configuration remains unchanged */
	}
);