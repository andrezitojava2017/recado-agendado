
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { IAgendamento } from '../interface/IAgendamento';

interface MessageContextType {
    message: IAgendamento,
    setMessage: Dispatch<SetStateAction<IAgendamento>>,
}

interface MessageProviderProps {
    children: ReactNode;
}

export const MessageContext = createContext<MessageContextType | null>(null)


const MessageProvider = ({ children }: MessageProviderProps) => {

    const [message, setMessage] = useState<IAgendamento>({ data: '', mensagem: '', tipo_mensagem: '', destinatario: '', status: '', contato_destinatario: '', horario: '' })

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )

}

export default MessageProvider;