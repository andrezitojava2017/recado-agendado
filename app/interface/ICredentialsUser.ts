export interface ICredentialsUser {
  id?: number;
  email: string;
  password: string;
  options?: {
    name: string;
    chat_id?: number;
  };
}
