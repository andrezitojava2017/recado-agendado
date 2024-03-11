import { StyleSheet } from 'react-native';
import { color } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.primary,
  },
  btn: {
    marginTop: 14,
    marginHorizontal: 10,
    backgroundColor: color.background.secundary,
    padding: 8,
    borderRadius: 14,
  },
  btnSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: color.text.primary,
    textAlignVertical: 'center',
  },
});
