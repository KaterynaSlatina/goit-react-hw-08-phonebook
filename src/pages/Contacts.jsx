import { FormContact } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/contacts/selectors';
import { ContactContainer } from 'components/ContactList/ContactList.styled';

const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <FormContact />
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <ContactContainer>
          <p>No contacts</p>
        </ContactContainer>
      )}
    </div>
  );
};

export default Contacts;
