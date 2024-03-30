import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/style";
import { useState } from "react";
import { form } from "../../utils/styleForm/form";
import { ICredentialsUser } from "../../interface/ICredentialsUser";


const Login = ({ navigation }: any) => {

    const [credencialUser, setCredencialUser] = useState<ICredentialsUser>({ email: '', password: '' })

    return (

        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.image} />


            <View style={form.input}>
                <TextInput
                    keyboardType="email-address"
                    style={form.text}
                    placeholder="E-mail"
                    onChangeText={(text) => setCredencialUser({ ...credencialUser, email: text })}
                    value={credencialUser.email}
                />
            </View>
            <View style={form.input}>
                <TextInput
                    secureTextEntry={true}
                    style={form.text}
                    placeholder="Password"
                    onChangeText={(text) => setCredencialUser({ ...credencialUser, password: text })}
                    value={credencialUser.password}
                />
            </View>


            <TouchableOpacity
                //onPress={() => navigation.navigate('Home')}
                onPress={() => console.log(credencialUser)}
                style={styles.button}>

                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>



            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.textButton}>Crie sua conta!</Text>
            </TouchableOpacity>

        </View >
    )
}

export default Login;