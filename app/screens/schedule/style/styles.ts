import { StyleSheet } from 'react-native';
import { color } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.primary,
    //gap: 14, componente KeyboardAvoidingView não aplica o gap
  },
  form: {
    marginTop: 14,
    marginHorizontal: 10,
    backgroundColor: color.background.secundary,
    padding: 8,
    borderRadius: 14,
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
