import { StyleSheet } from 'react-native';
import { color } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background.primary,
  },
  contactsView: {
    backgroundColor: color.background.secundary,
    padding: 8,
    borderRadius: 6,
  },
  contactsName: {
    color: 'white',
    fontSize: 24,
  },
  contactsPhone: {
    fontSize: 14,
    color: color.text.primary,
  },
});
