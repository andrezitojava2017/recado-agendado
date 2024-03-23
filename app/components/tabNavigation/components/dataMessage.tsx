import { useContext } from "react"
import { Text, View } from "react-native"
import { MessageContext } from "../../../context/messageContext"
import { styles } from "./style/styles"
import { IAgendamento } from "../../../interface/IAgendamento"

type messagem = {
    destinatario?: string,
    contato?: string,
    mensagem?: string,
    data?: string,
    tipo?: string
}
type Props = {
    message: IAgendamento
}

const DataMessage = ({ message }: Props) => {


    return (
        <View style={styles.container}>
            <Text style={styles.contact}>{message?.destinatario}</Text>
            <Text style={styles.date}>{message?.data_hora}</Text>
            <Text style={styles.typeEvent}>{message?.mensagem}</Text>
        </View>
    )
}

export default DataMessage;