import { View } from "react-native"
import MessageProvider from "../../context/messageContext"
import ListSend from "./components/listSend"
import { styles } from "./style/style"

const MessageSend = () => {
    return (
        <View style={styles.container}>
            <MessageProvider>
                <ListSend />
            </MessageProvider>
        </View>
    )
}

export default MessageSend