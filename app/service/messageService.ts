import { supabase } from '../config/supabase';
import { IAgendamento } from '../interface/IAgendamento';

export const addNewSchedule = async (schedule: IAgendamento) => {
  const value = { ...schedule, tipo_mensagem: schedule.tipo_mensagem?.id };

  const { data, error } = await supabase
    .from('agendamento')
    .insert(value)
    .select();

  if (error) {
    console.log(error);
    throw new Error('Ocorreu um erro ao tentar agendar nova mensagem');
  }
};

export const getListMessage = async (status: string) => {
  let { data: agendamento, error } = await supabase
    .from('agendamento')
    .select(
      `*,
      tipo_mensagem(descricao_tipo )
    `
    )
    .eq('status', status);

  if (error) {
    console.log('Ocorreu um erro na consulta!');
    throw new Error('Ocorreu um erro na consulta!');
  }
  return agendamento;
};
