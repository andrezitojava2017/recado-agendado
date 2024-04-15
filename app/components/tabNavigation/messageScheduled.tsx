import { Text, View } from "react-native"
import ListSchedule from "./components/listSchedule"
import { styles } from "./style/style"
import MessageProvider from "../../context/messageContext"

const MessageScheduled = () => {
    return (
        <View style={styles.container}>
            <MessageProvider>
                <ListSchedule />
            </MessageProvider>
        </View>
    )
}

export default MessageScheduled