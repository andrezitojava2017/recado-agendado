import { StyleSheet } from 'react-native';
import { color } from '../../utils/colors';

export const modalStyles = StyleSheet.create({
  modalContent: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: color.background.others,
    width: '90%',
    height: '40%',
    borderRadius: 24,
  },
});
