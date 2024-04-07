import { supabase } from '../config/supabase';
import { ICredentialsUser } from '../interface/ICredentialsUser';

export const createCredentials = async (credential: ICredentialsUser) => {
  const { data, error } = await supabase.auth.signUp(credential);

  if (error) {
    console.log(error);
    throw new Error('Não foi possivel registar novo usuario');
  }

  //console.log(data);
  return data;
};

export const signInEmail = async (credencial: ICredentialsUser) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: credencial.email,
    password: credencial.password,
  });

  if (error) {
    throw new Error('Não foi possivel logar com E-mail e senha');
  }
  //console.log(data);
  return data;
};
