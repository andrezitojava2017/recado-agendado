
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageSend from "../../components/tabNavigation/messageSend";
import MessageScheduled from "../../components/tabNavigation/messageScheduled";
import { color } from "../../utils/colors";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: color.background.secundary,
                },
                tabBarLabelStyle: {
                    fontSize: 16
                },
                tabBarIndicatorStyle: {
                    borderBottomWidth: 2,
                    borderBottomColor: color.icons
                },
                tabBarActiveTintColor: color.text.secundary,
                tabBarInactiveTintColor: color.text.primary,

            }}>
            <Tab.Screen name="Mens. Enviadas" component={MessageSend} />
            <Tab.Screen name="Mens. Agendadas" component={MessageScheduled} />
        </Tab.Navigator>
    )
}

export default Home;