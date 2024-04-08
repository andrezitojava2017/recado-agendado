import { STATUS } from '../../../../constants/statusMessage';
import { getListMessage } from '../../../../service/messageService';

export const getMessages = async (status: string) => {
  try {
    const rs = await getListMessage(status);
    if (rs) {
      return rs;
    }
  } catch (error: any) {
    throw error;
  }
};
