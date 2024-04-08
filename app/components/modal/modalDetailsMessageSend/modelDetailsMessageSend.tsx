import { Dispatch, SetStateAction, useContext } from "react"
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { modalStyles, stylesContent } from '../modalStyle'
import { color } from '../../../utils/colors'
import { MessageContext } from "../../../context/messageContext"; import { Ionicons } from '@expo/vector-icons';
import { formatDate, formatTime } from "../../../utils/formatDateTime";

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const ModalDetailsMessageSend = ({ visible, setVisible }: Props) => {
  const context = useContext(MessageContext);

  if (context === null) {
    // Aqui você pode retornar alguma UI de fallback ou null para não renderizar nada
    return <Text>Carregando...</Text>;
  }
  const { message, setMessage } = context;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={modalStyles.modalContent}>
        <Text
          style={{
            color: color.text.secundary,
            fontFamily: "GochiHand_400Regular",
            fontSize: 30,
            //marginTop: 18,
          }}
        >
          Detalhes
        </Text>

        <View style={{ width: "100%", height: "90%", padding: 10, gap: 12 }}>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: color.text.secundary,
              }}
            >
              CONTATO:{" "}
              <Text style={{ color: color.text.primary }}>
                {message?.destinatario}
              </Text>
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Fontisto name="date" size={24} color={color.text.secundary} />
              <Text style={{ color: color.text.primary, fontSize: 14 }}>
                {formatDate(message?.data)}
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <MaterialCommunityIcons
                name="clock-time-two-outline"
                size={24}
                color={color.text.secundary}
              />
              <Text
                style={{
                  color: color.text.primary,
                  fontSize: 14,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {formatTime(message?.horario)}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ color: color.text.secundary }}>
              TIPO DE MENSAGEM:{" "}
              <Text
                style={{
                  color: color.text.primary,
                  fontSize: 14,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {message?.tipo_mensagem?.descricao_tipo}
              </Text>
            </Text>
          </View>

          <View style={{ gap: 4 }}>
            <Text style={{ color: color.text.secundary }}>MENSAGEM</Text>
            <Text
              style={{
                color: color.text.primary,
                fontSize: 14,
                fontFamily: "Poppins_400Regular",
              }}
            >
              {message?.mensagem}
            </Text>
          </View>



          <TouchableOpacity
            style={{
              backgroundColor: color.background.others,
              //opacity: 0.5,
              borderRadius: 18,
            }}
            onPress={() => setVisible(false)}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                padding: 8,
                color: color.text.primary,
                fontFamily: "Poppins_400Regular",
              }}
            >
              FECHAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDetailsMessageSend;
