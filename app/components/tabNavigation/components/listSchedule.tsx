import { FlatList, TouchableOpacity, View } from "react-native"
import DataMessage from "./dataMessage"
import { styles } from "./style/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../../../utils/colors';
import { IAgendamento } from "../../../interface/IAgendamento";

type message = {
    destinatario: string,
    contato: string,
    mensagem: string,
    data: string,
    tipo: string
}


const ListSchedule = () => {

    const schedule = [{
        destinatario: 'Amor', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data_hora: '07/03/2024 10:00',
        tipo: 'Aniversário'
    },
    {
        destinatario: 'Escola', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data_hora: '07/03/2024 10:00',
        tipo: 'Lembrete'
    },

    ]



    const renderItem = (item: IAgendamento) => {
        return (
            <View style={{
                ...styles.containerListSend,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 18,
                paddingLeft: 14
            }}
            >
                <View>
                    <TouchableOpacity >
                        <DataMessage message={item} />
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="delete-empty" size={38} color={color.icons.btnFloat} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="eye" size={38} color={color.icons.btnFloat} style={{ opacity: 0.43 }} />
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
    return (
        <FlatList
            style={{ marginTop: 6 }}
            data={schedule}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}

        />
    )
}

export default ListSchedule;