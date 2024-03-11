import { FlatList, Text, TouchableOpacity, View } from "react-native"
import DataMessage from "./message"
import { styles } from "./style/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../../../utils/colors';
import { Colors } from "react-native/Libraries/NewAppScreen";

type message = {
    destinatario: { name: string, contato: string },
    mensagem: string,
    data: string,
    tipo: string
}
type Props = {
    agendado: message
}

const ListSchedule = ({ agendado }: Props) => {

    const schedule = [{
        destinatario: { name: 'Amor', contato: '6698101' },
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Aniversário'
    },

    ]


    const renderItem = (item: message) => {
        return (
            <View style={{ ...styles.containerListSend, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 18, paddingLeft: 14 }}>
                <View>
                    <TouchableOpacity >
                        <DataMessage dados={item} />
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