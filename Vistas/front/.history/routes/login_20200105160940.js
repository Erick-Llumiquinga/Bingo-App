import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/registro';
import Home from '../screens/home';

const screens = {
    Login: {
        screen: Login
    },
    Registro: {
        screen: Registro
    },
    Home: {
        screen: Home
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);