import { useDispatch } from "react-redux";
import { redactContact } from "../../redux/contacts/operations";
import { useState } from "react";
import styles from "./ModalRedactContact.module.css"

const ModalRedactContact = ({contact, onClose}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);

    const handleRedact = () => {
        dispatch(redactContact({contactId: contact.id, name: name, number: number}));   
        onClose();
    };
      
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.modalField}/>
            <input 
            type="phone" 
            value={number} 
                onChange={(e) => setNumber(e.target.value)}
                className={styles.modalField}/>
            <button type="button" onClick={handleRedact} className={styles.modalRedactBtn}>Redact</button>
            <button type="button" onClick={onClose} className={styles.modalCancelBtn}>Cancel</button>
        </div>
        </div>
        
    )
}

export default ModalRedactContact;