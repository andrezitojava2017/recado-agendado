import { useEffect, useState } from "react"
import { FlatList, ListRenderItem, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import * as Contacts from 'expo-contacts';
import { adapterContacts } from "./actions";
import { color } from "../../utils/colors";

import { LogBox } from 'react-native';
import { styles } from "./style/style";

type identiesContacts = {
    name: string,
    phoneNumbers?: string
}

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const ViewListContacts = ({ route, navigation }: any) => {

    const [listContacts, setListContacts] = useState<identiesContacts[]>([])
    const { onSelectContact, dataContact } = route.params;

    useEffect(() => {
        (async () => {
            try {

                const { status } = await Contacts.requestPermissionsAsync();

                if (status === 'granted') {

                    const { data } = await Contacts.getContactsAsync();
                    const lista = adapterContacts(data)

                    if (lista.length > 0) {

                        setListContacts(lista)
                    }

                } else {
                    ToastAndroid.showWithGravity('Não há permissão para exibir contatos', 3000, ToastAndroid.SHORT)
                }
            } catch (error) {
                ToastAndroid.showWithGravity('Ocorreu um erro na leitura dos contatos', 3000, ToastAndroid.SHORT)
            }
        })();
    }, [])


    const renderContacts = (item: identiesContacts) => {

        return (
            <View style={{ padding: 8 }}>
                <TouchableOpacity
                    onPress={() => {
                        if (route.params.onSelectContact) {
                            route.params.onSelectContact({
                                contato_destinatario: item.phoneNumbers,
                                destinatario: item.name
                            });
                            navigation.goBack();
                        }
                    }}
                    style={styles.contactsView}
                >

                    <Text style={styles.contactsName}>{item.name}</Text>
                    <Text style={styles.contactsPhone}>{item.phoneNumbers}</Text>

                </TouchableOpacity>
            </View>
        )


    }

    return (
        <View style={styles.container}>

            <FlatList
                data={listContacts}
                renderItem={({ item }) => renderContacts(item)}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={50}
                maxToRenderPerBatch={10}
                windowSize={10}
            />

        </View>
    )
}

export default ViewListContacts;