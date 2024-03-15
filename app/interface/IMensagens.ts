import { IAgendamento } from './IAgendamento';
import { IDestinatario } from './IDestinatario';
import { ITipoMensagem } from './ITipoMensagem';

export interface IMensagem extends IDestinatario, ITipoMensagem, IAgendamento {
  id_mensagem?: number;
  descricaoMensagem?: string;
  idTipo?: number;
}
