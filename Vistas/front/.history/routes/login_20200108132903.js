import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Registro
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);