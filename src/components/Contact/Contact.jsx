import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from "./Contact.module.css";
import ModalRedactContact from '../ModalRedactContact/ModalRedactContact';
import ModalDeleteContact from '../ModalDeleteContact/ModalDeleteContact';
import { useState } from 'react';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalRedactOpen, setIsModalRedactOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleOpenModalRedact = () => {
    setIsModalRedactOpen(true);
  };

  const handleCloseModalRedact = () => {
    setIsModalRedactOpen(false);
  };
  
  const handleOpenModalDelete = () => {
    setIsModalDeleteOpen(true);
  }

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
  }
  return (
    <div className={styles.contactBox}>
      <div>
       <p>👤 {contact.name}</p>
       <p>📞 {contact.number}</p>
      </div>
      <button onClick={handleOpenModalDelete} className={styles.contactBtnD}>Delete</button>
      <button onClick={handleOpenModalRedact} className={styles.contactBtnR}>Redact</button>

      {isModalRedactOpen && (
        <ModalRedactContact 
          contact={contact}
          onClose={handleCloseModalRedact}
        />
      )}

      {isModalDeleteOpen && (
        <ModalDeleteContact
          contact={contact}
          onClose={handleCloseModalDelete}
        />
      )}
    </div>
  );
};

export default Contact;
