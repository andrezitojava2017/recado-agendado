import { useContext } from "react"
import { Text, View } from "react-native"
import { MessageContext } from "../../../context/messageContext"
import { styles } from "./style/styles"



const DataMessage = () => {

    const context = useContext(MessageContext);

    if (context === null) {
        // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
        return <Text>Carregando...</Text>
    }
    const { message, setMessage } = context;

    console.log(message)
    return (
        <View style={styles.container}>
            <Text style={styles.contact}>{message?.identificacao}</Text>
            <Text style={styles.date}>{message?.dataHora}</Text>
            <Text style={styles.typeEvent}>{message?.descricaoTipo}</Text>
        </View>
    )
}

export default DataMessage;