import { Dispatch, SetStateAction } from "react"
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "../../screens/schedule/style/styles"
import { color } from "../../utils/colors"
import { modalStyles } from "./modalStyle"
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    visible: boolean
    setType: Dispatch<SetStateAction<string>>
    setVisible: Dispatch<SetStateAction<boolean>>
}

const ModalSelectTypeEvent = ({ visible, setType, setVisible }: Props) => {

    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={modalStyles.modalContent}>

                    <Text onPress={() => setVisible(false)} style={{ color: 'white' }}>LISTA DE TIPOS DE AGENDAMENTOS</Text>

                </View>
            </Modal>
            <View >

                <TouchableOpacity
                    /** CRIAR STYLES NA PASTA UTILS, POIS SERÃO UTILIZADAS OS MSMOS ESTILOS EM VARIOS COMPONENTES DE FORMULARIO */
                    style={styles.form}
                    onPress={() => setVisible(!visible)}>
                    <TextInput
                        keyboardType={"default"}
                        editable={false}
                        placeholder={'evento: Aniversario, reunião etc.'}
                        placeholderTextColor={color.text.secundary}
                        style={{ paddingHorizontal: 10 }}
                    />
                    <MaterialCommunityIcons name="comment-search" size={22} color={color.icons.form} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalSelectTypeEvent