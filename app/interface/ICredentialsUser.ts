export interface ICredentialsUser {
  id?: number;
  email: string;
  password: string;
  options?: {
    data: {
      name: string;
      chat_id?: number;
    };
  };
}
