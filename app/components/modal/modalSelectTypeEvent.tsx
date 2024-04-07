import { Dispatch, SetStateAction } from "react"
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "../../screens/schedule/style/styles"
import { color } from "../../utils/colors"
import { modalStyles } from "./modalStyle"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ITipoMensagem } from "../../interface/ITipoMensagem"

type Props = {
    visible: boolean
    setType: Dispatch<SetStateAction<ITipoMensagem>>
    typeEvent: ITipoMensagem,
    setVisible: Dispatch<SetStateAction<boolean>>
    types: ITipoMensagem[]
}

const ModalSelectTypeEvent = ({ visible, setType, setVisible, types, typeEvent }: Props) => {

    const setValueOfType = (item: ITipoMensagem) => {
        setType({ id: item.id, descricao_tipo: item.descricao_tipo })
        setVisible(!visible)
    }
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={modalStyles.modalContent}>



                    <View style={{ marginTop: 14 }}>
                        <Text onPress={() => setVisible(false)} style={{ color: 'white' }}>LISTA DE TIPOS DE AGENDAMENTOS</Text>

                    </View>

                    <View style={{ width: '80%', paddingTop: 14, }}>
                        {
                            types?.map((item) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => setValueOfType(item)}
                                        key={item.id}
                                        style={{ borderRadius: 14, padding: 8, marginBottom: 8, backgroundColor: color.background.others }} >
                                        <Text
                                            style={{ color: color.text.others, fontSize: 18 }}>
                                            {item.descricao_tipo}
                                        </Text>
                                    </TouchableOpacity>)
                            })
                        }
                    </View>


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
                        style={{ paddingHorizontal: 10, color: color.text.primary, fontSize: 18 }}
                        value={typeEvent.descricao_tipo}
                    />
                    <MaterialCommunityIcons name="comment-search" size={22} color={color.icons.form} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalSelectTypeEvent