import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactContainer,
  ContactItem,
  ContactText,
  MyContacts,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactContainer>
      <MyContacts>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactText>
              {name} : {number}
            </ContactText>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </ContactItem>
        ))}
      </MyContacts>
    </ContactContainer>
  );
};
