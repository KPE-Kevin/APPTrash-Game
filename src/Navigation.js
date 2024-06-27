import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Upload from './Views/Upload.jsx';
import OptionCaLi from './Views/OptionCALI.jsx';
import CreateAccount from './Views/CreateAccount.jsx';
import Login from './Views/Login.jsx';
import MainScreen from './Navigation/MainScreen.js';
import ForgotPassword from './Views/ForgotPassword.jsx';

const StackScreen = createNativeStackNavigator()

function NavigationScreen() {
    return (
        <NavigationContainer>
            <StackScreen.Navigator>
                <StackScreen.Screen
                    name='Upload'
                    component={Upload}
                    options={{
                        headerShown: false
                    }}
                />
                <StackScreen.Screen
                    name='OptionCaLi'
                    component={OptionCaLi}
                    options={{
                        headerShown: false
                    }}
                />
                <StackScreen.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <StackScreen.Screen
                    name='ForgotPassword'
                    component={ForgotPassword}
                />
                <StackScreen.Screen
                    name='CreateAccount'
                    component={CreateAccount}
                    options={{
                        headerShown: false
                    }}
                />
                <StackScreen.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </StackScreen.Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen;