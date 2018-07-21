/* ---depencies--- */
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

/* ---pages--- */
import HomeScreen from '../pages/home/index';
import MassageScreen from '../pages/message/index';
import MineScreen from '../pages/mine/index';
import MyElectricityScreen from '../pages/myElectricity/index';
import DetailsScreen from '../pages/message/details/index';
import CompanyInforScreen from '../pages/mine/companyInfor/index';

/* ---判断是否显示底部Tab--- */

const visibleBottomTab = (navigation)=>{
    if(navigation.state.index===1){
        return {
            tabBarVisible: false,
        };
    }
    return {
        tabBarVisible: true,
    };
};
/* ---主页 StackNav注册--- */
const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        key: 'Home',
        navigationOptions: ({ navigation }) => {
            visibleBottomTab(navigation);
        }
    },
	Electricity: MyElectricityScreen,
});

/* ---消息 StackNav注册--- */
const MassageStack = createStackNavigator({
    Massage: {
        screen: MassageScreen,
        key: 'Massage',
        navigationOptions: ({ navigation }) => {
            visibleBottomTab(navigation);
        }
    },
	Details: DetailsScreen,
});

/* ---我的 StackNav注册--- */
const MineStack = createStackNavigator({
    Mine: {
        screen: MineScreen,
        key: 'Mine',
        navigationOptions: ({ navigation }) => {
            visibleBottomTab(navigation);
        }
    },
    ComInf: CompanyInforScreen,
});

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