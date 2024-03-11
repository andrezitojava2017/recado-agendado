import { View } from "react-native"
import ListSend from "./components/listSend"
import { styles } from "./style/style"

const MessageSend = () => {
    return (
        <View style={styles.container}>
            <ListSend />
        </View>
    )
}

export default MessageSend