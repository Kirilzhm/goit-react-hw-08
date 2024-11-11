import ContactForm from './components/ContactForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from './redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector((state) => state.contacts.loading);

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <h2>Contacts</h2>
      {loading ? <p>Loading...</p>: <ContactList contacts={contacts} />}
    </div>
  );
};

export default App;
