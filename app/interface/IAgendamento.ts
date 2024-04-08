export interface IAgendamento {
  id?: number;
  data?: string;
  horario?: string;
  status?: 'enviado' | 'agendado';
  mensagem?: string;
  destinatario?: string;
  contato_destinatario?: string;
  tipo_mensagem?: {
    id?: number;
    descricao_tipo?: string;
  };
}
