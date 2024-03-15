import { Dispatch, SetStateAction, useContext } from "react"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { modalStyles, stylesContent } from '../modalStyle'
import { color } from '../../../utils/colors'
import { MessageContext } from "../../../context/messageContext";


type Props = {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;

}


const ModalDetailsMessageSend = ({ visible, setVisible, }: Props) => {
    const context = useContext(MessageContext);

    if (context === null) {
        // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
        return <Text>Carregando...</Text>
    }
    const { message, setMessage } = context;


    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={modalStyles.modalContent}>

                <Text style={{ color: 'white' }}>Detalhes</Text>

                <View style={{ width: '100%', height: '90%', padding: 10, gap: 12, }}>

                    <View>

                        <Text style={stylesContent.contact}>
                            <Text style={{ color: color.text.secundary }}>
                                CONTATO:
                            </Text>
                            {message?.identificacao}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 50 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Fontisto name="date" size={24} color={color.text.secundary} />
                            <Text style={{ color: color.text.primary }}>{message?.dataHora}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>

                            <MaterialCommunityIcons name="clock-time-two-outline" size={24} color={color.text.secundary} />
                            <Text style={{ color: color.text.primary }}>{message?.dataHora}</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: color.text.secundary }}>
                            Tipo de Mensagem:
                            <Text style={{ color: color.text.primary }}>
                                {message?.descricaoTipo}
                            </Text>
                        </Text>
                    </View>

                    <View style={{ gap: 4 }}>
                        <Text style={{ color: color.text.secundary }}>Mensagem</Text>
                        <Text style={{ color: color.text.primary }}>{message?.descricaoMensagem}</Text>
                    </View>



                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: 80 }} onPress={() => setVisible(false)}>
                        <Text>SAIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

export default ModalDetailsMessageSend;