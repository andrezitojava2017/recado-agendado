import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { styles } from "../login/styles/style";
import { form } from "../../utils/styleForm/form";
import { useState } from "react";
import { ICredentialsUser } from "../../interface/ICredentialsUser";
import { registerCredential } from "./actions";


const Register = ({ navigation }: any) => {

    const [credential, setCredential] = useState<ICredentialsUser>({ email: '', password: '' })

    const handleRegister = async () => {

        try {

            await registerCredential(credential)
            navigation.goBack();
            ToastAndroid.showWithGravity('Parabéns! agora você está cadastrado no Recado Agendado', 4000, ToastAndroid.LONG);
        } catch (error: any) {
            ToastAndroid.showWithGravity(error.message, 3000, ToastAndroid.LONG);
        }
    }

    return (

        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.image} />


            <View style={form.input}>
                <TextInput
                    keyboardType="email-address"
                    style={form.text}
                    placeholder="E-mail"
                    onChangeText={(text) => setCredential({ ...credential, email: text })}
                    value={credential.email}
                />
            </View>
            <View style={form.input}>
                <TextInput
                    secureTextEntry={true}
                    style={form.text}
                    placeholder="Password"
                    onChangeText={(text) => setCredential({ ...credential, password: text })}
                    value={credential.password}
                />
            </View>


            <TouchableOpacity
                //onPress={() => navigation.navigate('Home')}
                onPress={handleRegister}
                style={styles.button}>

                <Text style={styles.textButton}>Confirmar</Text>
            </TouchableOpacity>



        </View >
    )
}

export default Register; 