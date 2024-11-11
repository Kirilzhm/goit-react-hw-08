import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactsForm";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./ContactsPage.module.css"

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.contactsPageBox}>
            <DocumentTitle>Your contacts</DocumentTitle>
            <ContactForm/>
            <SearchBox/>
            {isLoading && 'Request in progress...'}
            <ContactList/>
        </div>
    )
};

export default ContactsPage