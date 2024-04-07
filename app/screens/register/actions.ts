import { ICredentialsUser } from '../../interface/ICredentialsUser';
import { createCredentials } from '../../service/authService';

export const registerCredential = async (credential: ICredentialsUser) => {
  try {
    const user = await createCredentials(credential);
    return user;
  } catch (error) {
    throw error;
  }
};
