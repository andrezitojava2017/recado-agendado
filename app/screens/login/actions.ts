import { ICredentialsUser } from '../../interface/ICredentialsUser';
import { signInEmail } from '../../service/authService';

export const signIn = async (credencial: ICredentialsUser, navigation: any) => {
  try {
    const data = await signInEmail(credencial);

    if (!data.user?.confirmed_at) {
      throw new Error('Atenção: E-mail não confirmado!');
    }
  } catch (error) {
    throw error;
  }
};
