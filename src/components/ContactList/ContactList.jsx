import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from "./ContactList.module.css"

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectNameFilter).toLowerCase();

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter) ||
    contact.number.includes(filter)
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
