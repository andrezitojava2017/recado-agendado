import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../login/styles/style";
import { form } from "../../utils/styleForm/form";
import { useState } from "react";
import { ICredentialsUser } from "../../interface/ICredentialsUser";


const Register = ({ navigation }: any) => {

    const [credential, setCredential] = useState<ICredentialsUser>({ email: '', password: '' })

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
                onPress={() => console.log(credential)}
                style={styles.button}>

                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>



        </View >
    )
}

export default Register; 