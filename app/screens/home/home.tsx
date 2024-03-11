
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessageSend from "../../components/tabNavigation/messageSend";
import MessageScheduled from "../../components/tabNavigation/messageScheduled";
import { color } from "../../utils/colors";
import NewSchedule from '../../components/button/newSchedule';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schedule from '../schedule/schedule';
import Header from '../../components/header/header';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Home = ({ navigation }: any) => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: color.background.secundary,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontFamily: 'GochiHand_400Regular'
                    },
                    tabBarIndicatorStyle: {
                        borderBottomWidth: 2,
                        borderBottomColor: color.icons.form
                    },
                    tabBarActiveTintColor: color.text.secundary,
                    tabBarInactiveTintColor: color.text.primary,

                }}>
                <Tab.Screen name="Mens. Enviadas" component={MessageSend} />
                <Tab.Screen name="Mens. Agendadas" component={MessageScheduled} />
            </Tab.Navigator>

            <NewSchedule navigation={navigation} />

        </>
    )
}

export default Home;