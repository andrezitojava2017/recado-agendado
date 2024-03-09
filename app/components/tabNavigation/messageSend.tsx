import { Text, View } from "react-native"
import { color } from "../../utils/colors"

const MessageSend = () => {
    return (
        <View style={{ flex: 1, backgroundColor: color.background.primary }}>
            <Text style={{ color: color.text.primary }}>Mensagens Enviadas</Text>
        </View>
    )
}

export default MessageSend