import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import Registro from '../screens/register';
import Home from '../screens/home';


const screens = {
    Login: {
        screen: Login
    },
    Registro: {
        screen: Registro
    },
    Inicio: {
        screen: Home
    }
}
const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);