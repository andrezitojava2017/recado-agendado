import { useEffect, useState } from 'react';
import { ITipoMensagem } from '../interface/ITipoMensagem';
import { getTypeMessages } from '../service/typeMessageService';

export const TypeMessage = () => {
  const [typeMessage, setTypeMessage] = useState<ITipoMensagem[]>();

  useEffect(() => {
    (async () => {
      const types = await getTypeMessages();
      if (types) {
        setTypeMessage(types);
      }
    })();
  }, []);

  return typeMessage;
};
