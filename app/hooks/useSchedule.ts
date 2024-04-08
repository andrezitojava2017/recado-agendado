import { useEffect, useState } from 'react';
import { IAgendamento } from '../interface/IAgendamento';
import { getListMessage } from '../service/messageService';
import { STATUS } from '../constants/statusMessage';
import { getMessages } from '../components/tabNavigation/components/actions/actions';

type Props = {
  status: string;
};

export const useSchedule = ({ status }: Props) => {
  const [listSchedule, setListSchedule] = useState<IAgendamento[]>();

  useEffect(() => {
    (async () => {
      const result = await getMessages(status);
      if (result) {
        setListSchedule(result);
      }
    })();
  }, []);

  return { listSchedule, setListSchedule };
};
