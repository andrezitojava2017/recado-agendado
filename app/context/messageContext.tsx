
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { IMensagem } from '../interface/IMensagens';

interface MessageContextType {
    message: IMensagem,
    setMessage: Dispatch<SetStateAction<IMensagem>>,
}

interface MessageProviderProps {
    children: ReactNode;
}

export const MessageContext = createContext<MessageContextType | null>(null)


const MessageProvider = ({ children }: MessageProviderProps) => {

    const [message, setMessage] = useState<IMensagem>({ dataHora: '', descricaoMensagem: '', descricaoTipo: '', identificacao: '', status: '', contato: '', })

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )

}

export default MessageProvider;