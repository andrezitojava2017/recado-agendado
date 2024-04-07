import { StyleSheet } from 'react-native';
import { color } from '../../utils/colors';

export const modalStyles = StyleSheet.create({
  modalContent: {
    position: 'absolute',
    bottom: 2,
    //justifyContent: 'space-between',
    alignItems: 'center',
    //alignSelf: 'center',
    backgroundColor: color.background.secundary,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

export const stylesContent = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
  },

  contact: {
    fontFamily: 'GochiHand_400Regular',
    fontSize: 18,
    color: color.text.primary,
  },
  date: {
    fontFamily: 'GochiHand_400Regular',
    color: color.text.others,
    opacity: 0.43,
  },
  typeEvent: {
    fontFamily: 'GochiHand_400Regular',
    color: color.text.others,
  },
  containerListSend: {
    height: 60,
    marginHorizontal: 6,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: 8,
  },
});
