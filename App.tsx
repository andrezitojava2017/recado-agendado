
import { Text } from 'react-native';
import { GochiHand_400Regular, useFonts } from '@expo-google-fonts/gochi-hand'
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/stack';
SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    GochiHand_400Regular,
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
