
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Login from './app/screens/login/login';
import { color } from './app/utils/colors';
import { GochiHand_400Regular, useFonts } from '@expo-google-fonts/gochi-hand'
import * as SplashScreen from 'expo-splash-screen';

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
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background.primary,
    flex: 1
  },

})