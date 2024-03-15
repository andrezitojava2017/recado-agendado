import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style/styles"
import ModalDetailsMessageSend from "../../modal/modalDetailsMessageSend/modelDetailsMessageSend"
import { useContext, useState } from "react"
import { MessageContext } from "../../../context/messageContext"

type messagem = {
    destinatario: string,
    contato: string,
    mensagem: string,
    data: string,
    tipo: string
}

const ListSend = () => {


    const context = useContext(MessageContext);

    if (context === null) {
        // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
        return null; // ou <Text>Carregando...</Text> ou qualquer outra coisa que faça sentido para sua aplicação
    }
    const { message, setMessage } = context;

    const listSend = [{
        destinatario: 'Amor', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Aniversário'
    },
    {
        destinatario: 'Escola', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Lembrete'
    },
    {
        destinatario: 'Trabalho', contato: '6698101',
        mensagem: 'Mensagem de teste de aplicativo',
        data: '07/03/2024 10:00',
        tipo: 'Lembrete'
    }
    ]


    const [visible, setVisible] = useState<boolean>(false)

    const setValueMessageContext = (item: messagem) => {

        setMessage({ dataHora: item.data, identificacao: item.destinatario, contato: item.contato, descricaoMensagem: item.mensagem, descricaoTipo: item.tipo })

        if (message) {
            setVisible(true)
        }
    }

    const renderItem = (item: messagem) => {
        return (
            <TouchableOpacity
                style={styles.containerListSend}
                onPress={() => setValueMessageContext(item)}
            >
                <View style={styles.container}>
                    <Text style={styles.contact}>{item?.destinatario}</Text>
                    <Text style={styles.date}>{item?.data}</Text>
                    <Text style={styles.typeEvent}>{item?.tipo}</Text>
                </View>


            </TouchableOpacity>
        )
    }

    return (
        <>
            <FlatList
                style={{ marginTop: 6 }}
                data={listSend}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />
            <ModalDetailsMessageSend visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ListSend;