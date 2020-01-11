import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Register from '../screens/register';

const screens = {
    Login: {
        screen: Login
    },
    
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);