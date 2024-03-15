import { KeyboardAvoidingView, KeyboardAvoidingViewBase, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { styles } from "./style/styles";
import { color } from '../../utils/colors'
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import ModalSelectTypeEvent from "../../components/modal/modalSelectTypeEvent";
import { GochiHand_400Regular } from "@expo-google-fonts/gochi-hand";

const Schedule = () => {

    const [date, setDate] = useState<Date>(new Date());
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [typeEvent, setTypeEvent] = useState<string>('Aniversário');

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {

        const { type } = event; // opção selecionada: OK, CANCEL
        const selected = selectedDate; // data recuperada

        if (type === 'set') { // btn AGENDAR(OK) clicado
            setDate(selected!)
        }

    }
    const showMode = (currentMode: 'date' | 'time') => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
            positiveButton: { label: 'Agendar' }
        });
    };

    const showDate = () => {
        showMode('date')
    }

    const showTime = () => {
        showMode('time')
    }


    return (

        <View style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior={"position"}>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            style={{
                                ...styles.form
                            }}>
                            <Text
                                style={styles.text}
                            >
                                Selecionar Contato
                         </Text>
                            <MaterialIcons
                                name="perm-contact-cal"
                                size={22}
                                color={color.icons.form} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={showDate}
                            style={{
                                ...styles.form
                            }}>
                            <Text
                                style={styles.text}
                            >
                                Definir Data
                    </Text>
                            <Fontisto
                                name="date"
                                size={22}
                                color={color.icons.form}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={showTime}
                            style={{
                                ...styles.form
                            }}>
                            <Text
                                style={styles.text}
                            >
                                Definir Horario
                    </Text>
                            <Ionicons
                                name="timer"
                                size={22}
                                color={color.icons.form}
                            />
                        </TouchableOpacity>
                    </View>

                    <View >
                        <ModalSelectTypeEvent visible={visibleModal} setType={setTypeEvent} setVisible={setVisibleModal} />
                    </View>

                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            keyboardType={"default"}
                            editable
                            style={[styles.form, { color: color.text.primary }]}
                            multiline
                            numberOfLines={12}
                            maxLength={250}
                            placeholder={'Sua mensagem aqui!'}
                            textAlignVertical={'top'}
                            placeholderTextColor={color.text.secundary}
                        />
                    </View>
                    <View style={{ marginTop: 24 }}>
                        <TouchableOpacity style={[styles.form, { justifyContent: 'center' }]}>
                            <Text style={[styles.text, { color: color.text.secundary, fontFamily: 'GochiHand_400Regular' }]}>SALVAR AGENDAMENTO</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default Schedule;