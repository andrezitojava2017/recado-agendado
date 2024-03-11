import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./style/styles";
import { color } from '../../utils/colors'
const Schedule = () => {
    return (
        <View style={styles.container}>

            <View>
                <TouchableOpacity style={{ ...styles.btnSearch, ...styles.btn }}>
                    <Text style={styles.text} >Selecionar Contato</Text>
                    <MaterialIcons name="perm-contact-cal" size={38} color={color.icons.form} />
                </TouchableOpacity>
            </View>

            <View>

            </View>


        </View>
    )
}

export default Schedule;