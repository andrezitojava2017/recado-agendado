import { GochiHand_400Regular } from '@expo-google-fonts/gochi-hand';
import { StyleSheet } from 'react-native';
import { color } from '../../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  contact: {
    fontFamily: 'GochiHand_400Regular',
    fontSize: 18,
    color: color.text.primary,
  },
  date: {
    fontFamily: 'GochiHand_400Regular',
    color: color.text.secundary,
    opacity: 0.43,
  },
  typeEvent: {
    fontFamily: 'GochiHand_400Regular',
    color: color.text.secundary,
  },
  containerListSend: {
    marginHorizontal: 6,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: 8,
  },
});
