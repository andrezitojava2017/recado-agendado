import { FlatList, ToastAndroid, TouchableOpacity, View } from "react-native"
import DataMessage from "./dataMessage"
import { styles } from "./style/styles"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { color } from '../../../utils/colors';
import { IAgendamento } from "../../../interface/IAgendamento";
import { useEffect, useState } from "react";
import { getListSchedule } from "../../../service/scheduleService";
import { useSchedule } from "../../../hooks/useSchedule";


const ListSchedule = () => {

    const schedule = [{
        destinatario: 'Amor', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024',
        horario: '10:00',
        tipo: 'Aniversário'
    },
    {
        destinatario: 'Escola', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024',
        horario: '10:00',
        tipo: 'Lembrete'
    },

    ]
    const { listSchedule, setListSchedule } = useSchedule()
    const [searchUpdating, setSearchUpdating] = useState<boolean>(false)


    const getSchedules = async () => {
        try {

            const rs = await getListSchedule()
            if (rs) {
                setListSchedule(rs)
            }
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
            data={listSchedule}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            refreshing={searchUpdating}
            onRefresh={getSchedules}

        />
    )
}

export default ListSchedule;