import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/screens/login/login';
import Header from '../app/components/header/header'
import { color } from '../app/utils/colors';
import Home from '../app/screens/home/home';
import Schedule from '../app/screens/schedule/schedule';
import Register from '../app/screens/register/register';
import ViewListContacts from '../app/components/contacts/contacts';
import { useEffect, useState } from 'react';
import { SCREEN_DEFAULT } from '../app/constants/screenDefault';
import { supabase } from '../app/config/supabase';
import * as SplashScreen from 'expo-splash-screen';
import { ToastAndroid } from 'react-native';
import { AuthError } from '@supabase/supabase-js';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const [screenDefault, setScreenDefault] = useState<string>('')

    useEffect(() => {

        async function checkAuth() {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();

                if (session) {
                    setScreenDefault(SCREEN_DEFAULT.home);
                } else {
                    setScreenDefault(SCREEN_DEFAULT.login);
                }
            } catch (error: any) {
                ToastAndroid.showWithGravity(error.message, 4000, ToastAndroid.SHORT)
            } finally {
                await SplashScreen.hideAsync(); // Oculta a splash screen
            }
        }

        checkAuth();


    }, [])


    if (screenDefault === '') {
        // return <Text>CARREGANDO SESSÃO</Text>
        return null
    }

    return (
        <Stack.Navigator initialRouteName={'Home'}>
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
            <Stack.Screen
                name="Register"
                component={Register}
                options={{

                    // headerBackVisible: false,
                    title: 'Registre-se',
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
                name="Contacts"
                component={ViewListContacts}
                options={{

                    // headerBackVisible: false,
                    title: 'Selecione um contato',
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