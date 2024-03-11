
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import { GochiHand_400Regular } from '@expo-google-fonts/gochi-hand'
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/stack';
SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    GochiHand_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Fonte não carregada</Text>;
  }

  SplashScreen.hideAsync()

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
