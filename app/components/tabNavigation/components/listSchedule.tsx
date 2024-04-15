import { FlatList, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import DataMessage from "./dataMessage"
import { styles } from "./style/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../../../utils/colors';
import { IAgendamento } from "../../../interface/IAgendamento";
import { useContext, useState } from "react";
import { deleteMessage } from "../../../service/messageService";
import { useSchedule } from "../../../hooks/useSchedule";
import { STATUS } from "../../../constants/statusMessage";
import { getMessages } from "./actions/actions";
import { MessageContext } from "../../../context/messageContext";
import ModalDetailsMessageSend from "../../modal/modalDetailsMessageSend/modelDetailsMessageSend";


const ListSchedule = () => {

    const { listSchedule, setListSchedule } = useSchedule({ status: STATUS.agendado })
    const [searchUpdating, setSearchUpdating] = useState<boolean>(false)

    const [visible, setVisible] = useState<boolean>(false)
    const context = useContext(MessageContext);

    if (context === null) {
        // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
        return null; // ou <Text>Carregando...</Text> ou qualquer outra coisa que faça sentido para sua aplicação
    }
    const { message, setMessage } = context;



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



    const getSchedules = async () => {
        try {
            setSearchUpdating(true)
            const rs = await getMessages(STATUS.agendado)
            if (rs) {
                setListSchedule(rs)
            }
            setSearchUpdating(false)
        } catch (error: any) {
            ToastAndroid.showWithGravity(error.message, 4000, ToastAndroid.SHORT)
        }
    }

    const deleteSchedule = async (item: IAgendamento) => {
        try {

            await deleteMessage(item)
            await getSchedules()

        } catch (error: any) {

            ToastAndroid.showWithGravity(error.message, 4000, ToastAndroid.SHORT)
        }

    }


    const renderItem = (item: IAgendamento) => {
        return (
            <View style={{
                ...styles.containerListSend,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                //paddingRight: 18,
                //paddingLeft: 14
            }}
            >
                <View style={{ maxWidth: '80%' }}>
                    <TouchableOpacity >
                        <DataMessage message={item} />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity
                        onPress={() => deleteSchedule(item)}
                    >
                        <MaterialCommunityIcons name="delete-empty" size={38} color={color.icons.btnFloat} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setValueMessageContext(item)}
                    >
                        <AntDesign name="eye" size={38} color={color.icons.btnFloat} style={{ opacity: 0.43 }} />
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
    return (
        <>
            <FlatList
                style={{ marginTop: 6 }}
                data={listSchedule}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
                refreshing={searchUpdating}
                onRefresh={getSchedules}
                ListEmptyComponent={<Text style={{ textAlign: "center", color: 'white', padding: 14, fontSize: 18 }}>Nenhuma mensagem agendada</Text>}
            />
            <ModalDetailsMessageSend visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ListSchedule;