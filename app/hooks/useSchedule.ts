import { useEffect, useState } from 'react';
import { IAgendamento } from '../interface/IAgendamento';
import { getListSchedule } from '../service/scheduleService';

export const useSchedule = () => {
  const [listSchedule, setListSchedule] = useState<IAgendamento[]>();

  useEffect(() => {
    (async () => {
      const result = await getListSchedule();
      if (result) {
        setListSchedule(result);
      }
    })();
  }, []);

  return { listSchedule, setListSchedule };
};
