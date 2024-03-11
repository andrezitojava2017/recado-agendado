import { IMensagem } from './IMensagens';

export interface IAgendamento extends IMensagem {
  id?: number;
  dataHora: string;
  status: string;
}
