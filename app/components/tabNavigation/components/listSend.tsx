import { FlatList, TouchableOpacity } from "react-native"
import { styles } from "./style/styles"
import DataMessage from "./message"

type message = {
    destinatario: { name: string, contato: string },
    mensagem: string,
    data: string,
    tipo: string
}

const ListSend = () => {

    const listSend = [{
        destinatario: { name: 'Amor', contato: '6698101' },
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Aniversário'
    },
    {
        destinatario: { name: 'Escola', contato: '6698101' },
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Lembrete'
    },
    {
        destinatario: { name: 'Trabalho', contato: '6698101' },
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Lembrete'
    }
    ]

    const renderItem = (item: message) => {
        return (
            <TouchableOpacity style={styles.containerListSend}>
                <DataMessage dados={item} />
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            style={{ marginTop: 6 }}
            data={listSend}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default ListSend;