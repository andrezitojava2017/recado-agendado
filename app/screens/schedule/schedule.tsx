import { KeyboardAvoidingView, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { styles } from "./style/styles";
import { color } from '../../utils/colors'
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useEffect, useState } from "react";
import ModalSelectTypeEvent from "../../components/modal/modalSelectTypeEvent";
import { IAgendamento } from "../../interface/IAgendamento";
import { TypeMessage } from "../../hooks/useTypeMessage";
import { addNewSchedule } from "../../service/messageService";
import { ITipoMensagem } from "../../interface/ITipoMensagem";
import { clearForm } from "./actions";

const Schedule = ({ navigation }: any) => {

    const [date, setDate] = useState<Date>(new Date());
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [typeEvent, setTypeEvent] = useState<ITipoMensagem>({});
    const [newSchedule, setNewSchedule] = useState<IAgendamento>({
        contato_destinatario: '',
        data: '',
        horario: '',
        destinatario: '',
        mensagem: '',
        status: 'agendado',
        tipo_mensagem: {
            descricao_tipo: ''
        }
    })

    const types = TypeMessage()


    useEffect(() => {
        setNewSchedule({ ...newSchedule, tipo_mensagem: { id: typeEvent.id } })
    }, [typeEvent])

    const onChangeDate = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {

        const { type } = event; // opção selecionada: OK, CANCEL
        const selected = selectedDate; // data recuperada

        if (type === 'set') { // btn AGENDAR(OK) clicado
            // setDate(event.nativeEvent.timestamp)
            setNewSchedule({ ...newSchedule, data: event.nativeEvent.timestamp.toString() })
        }


    }

    const onChangeTime = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {

        const { type } = event; // opção selecionada: OK, CANCEL
        const selected = selectedDate; // data recuperada

        if (type === 'set') { // btn AGENDAR(OK) clicado
            // setDate(event.nativeEvent.timestamp)
            setNewSchedule({ ...newSchedule, horario: event.nativeEvent.timestamp.toString() })
        }

    }
    const showMode = (currentMode: 'date' | 'time') => {

        if (currentMode === 'date') {
            return DateTimePickerAndroid.open({
                value: date,
                onChange: onChangeDate,
                mode: currentMode,
                is24Hour: true,
                positiveButton: { label: 'Agendar' }
            });
        }
        return DateTimePickerAndroid.open({
            value: date,
            onChange: onChangeTime,
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


    const saveSchedule = async () => {

        try {

            await addNewSchedule(newSchedule) // salva novo agendamento
            clearForm(setNewSchedule, setTypeEvent) // limpa os campos

        } catch (error: any) {

            ToastAndroid.showWithGravity(error, 4000, ToastAndroid.SHORT)
        }

    }


    return (

        <View style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior={"position"}>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts', {
                                dataContact: newSchedule,
                                onSelectContact: (selectedContact: any) => {
                                    setNewSchedule({ ...newSchedule, ...selectedContact })
                                }
                            })}
                            style={{
                                ...styles.form
                            }}>
                            <Text
                                style={styles.text}
                            >
                                {
                                    newSchedule.contato_destinatario ?
                                        `${newSchedule.destinatario} ( ${newSchedule.contato_destinatario} )`
                                        : 'Selecione um contato'
                                }
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
                                {
                                    newSchedule.data ?
                                        new Date(parseInt(newSchedule.data!)).toLocaleDateString('pt-br')
                                        : "Defina uma data"
                                }
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
                                {
                                    newSchedule.horario ?
                                        new Date(parseInt(newSchedule.horario!)).toLocaleTimeString('pt-br')
                                        : "Defina um horário"
                                }
                            </Text>
                            <Ionicons
                                name="timer"
                                size={22}
                                color={color.icons.form}
                            />
                        </TouchableOpacity>
                    </View>

                    <View >
                        <ModalSelectTypeEvent
                            visible={visibleModal}
                            setType={setTypeEvent}
                            typeEvent={typeEvent}
                            setVisible={setVisibleModal}
                            types={types!}
                        />
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
                            value={newSchedule.mensagem}
                            onChangeText={(text) => setNewSchedule({ ...newSchedule, mensagem: text })}
                            placeholderTextColor={color.text.secundary}
                        />
                    </View>
                    <View style={{ marginTop: 24 }}>
                        <TouchableOpacity
                            style={[styles.form, { justifyContent: 'center' }]}
                            onPress={saveSchedule}
                        >
                            <Text style={[styles.text, { color: color.text.secundary, fontFamily: 'GochiHand_400Regular' }]}>SALVAR AGENDAMENTO</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

export default Schedule;