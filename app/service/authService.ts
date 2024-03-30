import { supabase } from '../config/supabase';
import { ICredentialsUser } from '../interface/ICredentialsUser';

const createCredentials = async (credential: ICredentialsUser) => {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  });

  if (error) {
    throw new Error('Ocorreu um erro ao tentar gravar novo usuario');
  }

  console.log(data);
};
