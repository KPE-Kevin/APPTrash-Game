import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Views/Home.jsx'
import Community from '../Views/Community.jsx'
import Map from '../Views/Map.jsx'
import Store from '../Views/Store.jsx'
import MaterialsList from '../Views/MaterialsList.jsx'

const MainMenu = createBottomTabNavigator()

function MainScreen() {
    return (
        <MainMenu.Navigator>
            <MainMenu.Screen name='Store' component={Store} />
            <MainMenu.Screen name='MaterialsList' component={MaterialsList} />
            <MainMenu.Screen name='Home' component={Home} />
            <MainMenu.Screen name='Map' component={Map} />
            <MainMenu.Screen name='Community' component={Community} />
        </MainMenu.Navigator>
    );
}

export default MainScreen;