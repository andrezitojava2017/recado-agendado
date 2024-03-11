import { TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { color } from "../../utils/colors";
import { styles } from "./style/style";


const NewSchedule = ({ navigation }: any) => {
    return (

        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Schedule')}>
            <Ionicons name="add-circle" size={70} color={color.icons.btnFloat} />
        </TouchableOpacity>

    )
}

export default NewSchedule;