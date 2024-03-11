import { Text, View } from "react-native"
import ListSchedule from "./components/listSchedule"
import { styles } from "./style/style"

const MessageScheduled = () => {
    return (
        <View style={styles.container}>
            <ListSchedule />
        </View>
    )
}

export default MessageScheduled