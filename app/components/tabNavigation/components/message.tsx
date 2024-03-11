import { Text, View } from "react-native"
import { styles } from "./style/styles"

type message = {
    destinatario: { name: string, contato: string },
    mensagem: string,
    data: string,
    tipo: string
}


type Props = {
    dados: message
}
const DataMessage = ({ dados }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.contact}>{dados.destinatario.name}</Text>
            <Text style={styles.date}>{dados.data}</Text>
            <Text style={styles.typeEvent}>{dados.tipo}</Text>
        </View>
    )
}

export default DataMessage;