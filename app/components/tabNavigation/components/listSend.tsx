import { FlatList, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import { styles } from "./style/styles"
import ModalDetailsMessageSend from "../../modal/modalDetailsMessageSend/modelDetailsMessageSend"
import { useContext, useState } from "react"
import { MessageContext } from "../../../context/messageContext"
import { IAgendamento } from "../../../interface/IAgendamento"
import DataMessage from "./dataMessage"
import { useSchedule } from "../../../hooks/useSchedule"
import { STATUS } from "../../../constants/statusMessage"
import { getMessages } from "./actions/actions"

type messagem = {
    destinatario: string,
    contato: string,
    mensagem: string,
    data: string,
    tipo: string
}

const ListSend = () => {

    const { listSchedule, setListSchedule } = useSchedule({ status: STATUS.enviado });
    const [searchUpdating, setSearchUpdating] = useState<boolean>(false)

    const context = useContext(MessageContext);

    if (context === null) {
        // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
        return null; // ou <Text>Carregando...</Text> ou qualquer outra coisa que faça sentido para sua aplicação
    }
    const { message, setMessage } = context;


    const [visible, setVisible] = useState<boolean>(false)

    const setValueMessageContext = (item: IAgendamento) => {

        setMessage({
            data: item.data,
            horario: item.horario,
            destinatario: item.destinatario,
            contato_destinatario: item.contato_destinatario,
            mensagem: item.mensagem,
            tipo_mensagem: item.tipo_mensagem
        })

        if (message) {
            setVisible(true)
        }
    }

    const getListSend = async () => {

        try {
            setSearchUpdating(true)
            const rs = await getMessages(STATUS.enviado)
            if (rs) {
                setListSchedule(rs)
            }
            setSearchUpdating(false)
        } catch (error: any) {
            ToastAndroid.showWithGravity(error.message, 4000, ToastAndroid.SHORT)
        }
    }

    const renderItem = (item: IAgendamento) => {
        return (
            <TouchableOpacity
                style={styles.containerListSend}
                onPress={() => setValueMessageContext(item)}
            >
                <DataMessage message={item} />

            </TouchableOpacity>
        )
    }

    return (
        <>
            <FlatList
                style={{ marginTop: 6 }}
                data={listSchedule}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={getListSend}
                refreshing={searchUpdating}
                ListEmptyComponent={<Text style={{ textAlign: "center", color: 'white', padding: 14, fontSize: 18 }}>Nenhuma mensagem enviada</Text>}
            />
            <ModalDetailsMessageSend visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ListSend;