import { FormContact } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <div>
      <FormContact />
      <ContactList />
      <Filter />
    </div>
  );
};

export default Contacts;
