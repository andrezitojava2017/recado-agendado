import { View, Text, Image } from "react-native"
import { color } from "../../utils/colors";

const Header = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                source={require('../../../assets/logo.png')}
                style={{
                    width: 50,
                    height: 50,
                    marginRight: 10
                }}
            />
            <Text style={{
                fontFamily: 'GochiHand_400Regular',
                fontSize: 22,
                color: color.text.primary
            }}>
                Recado Agendado
            </Text>
        </View>
    )
}

export default Header;