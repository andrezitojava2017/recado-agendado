export interface IAgendamento {
  id?: number;
  data?: string;
  horario?: string;
  status?: 'enviada' | 'agendado';
  mensagem?: string;
  destinatario?: string;
  contato_destinatario?: string;
  tipo_mensagem?: number;
}
