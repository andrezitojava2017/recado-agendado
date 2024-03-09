import { StyleSheet } from 'react-native';
import { color } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
  },
  button: {
    backgroundColor: color.btnSign.primary,
    width: '90%',
    padding: 18,
    borderRadius: 12,
    marginTop: 37,
    text: {
      color: color.text.others,
      fontSize: 16,
    },
  },
});
