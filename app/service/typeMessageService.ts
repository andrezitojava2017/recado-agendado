import { supabase } from '../config/supabase';

export const getTypeMessages = async () => {
  let { data: tipo_mensagem, error } = await supabase
    .from('tipo_mensagem')
    .select('*');

  if (error) {
    console.log(error);
  }

  return tipo_mensagem;
};
