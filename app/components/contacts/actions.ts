import { Contact } from 'expo-contacts';
type identiesContacts = {
  name: string;
  phoneNumber: string;
};
export const adapterContacts = (data: Contact[]) => {
  const newContact = data
    .map((contact) => ({
      name: contact.name,
      phoneNumbers:
        contact.phoneNumbers && contact.phoneNumbers.length > 0
          ? contact.phoneNumbers[0].number
          : 'Número não disponível',
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return newContact;
};
