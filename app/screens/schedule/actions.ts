import { Dispatch, SetStateAction } from 'react';
import { IAgendamento } from '../../interface/IAgendamento';
import { ITipoMensagem } from '../../interface/ITipoMensagem';

export const clearForm = (
  schedule: Dispatch<SetStateAction<IAgendamento>>,
  type: Dispatch<SetStateAction<ITipoMensagem>>
) => {
  schedule({
    contato_destinatario: '',
    data: '',
    horario: '',
    destinatario: '',
    mensagem: '',
    status: 'agendado',
    tipo_mensagem: 0,
  });

  type({ id: 0, descricao_tipo: '' });
};
