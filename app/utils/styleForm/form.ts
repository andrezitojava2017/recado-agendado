import { StyleSheet } from 'react-native';
import { color } from '../colors';

export const form = StyleSheet.create({
  input: {
    width: '90%',
    marginTop: 14,
    marginHorizontal: 10,
    backgroundColor: color.background.secundary,
    padding: 8,
    borderRadius: 14,
    //display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: color.text.primary,
    textAlignVertical: 'center',
  },
});
