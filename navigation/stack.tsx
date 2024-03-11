import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screens/login/login';
import Header from '../app/components/header/header'
import { color } from '../app/utils/colors';
import Home from '../app/screens/home/home';
import Schedule from '../app/screens/schedule/schedule';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: () => <Header />,
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: color.background.secundary,
                    },
                    headerTintColor: color.text.primary,
                    headerTitleStyle: {
                        fontFamily: 'GochiHand_400Regular',
                        fontSize: 22,
                    },

                }}
            />
            <Stack.Screen
                name="Schedule"
                component={Schedule}
                options={{
                    headerTitle: () => <Header />,
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: color.background.secundary,
                    },
                    headerTintColor: color.text.primary,
                    headerTitleStyle: {
                        fontFamily: 'GochiHand_400Regular',
                        fontSize: 22,
                    },

                }}
            />

        </Stack.Navigator>
    )
}

export default StackNavigation;