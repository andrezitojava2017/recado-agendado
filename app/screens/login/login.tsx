import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/style";
import { FontAwesome6 } from '@expo/vector-icons';

const Login = () => {
    return (

        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.image} />
            <View style={styles.button}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 18 }}>
                    <FontAwesome6 name="google" size={24} color="black" />
                    <Text style={styles.button.text}>Entrar com Google</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Login;