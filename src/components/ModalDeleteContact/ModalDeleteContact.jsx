import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./ModalDeleteContact.module.css";

const ModalDeleteContact = ({contact, onClose}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        onClose();
      };

      const handleRandomDelete  =() => {
        const random = Math.random();
        if (random < 0.5) {
            handleDelete();
        } else {
            onClose();
        }
      }
    return (
        <div className={styles.modalBox}>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={handleDelete} className={styles.modalRedactBtn}>Yes</button>
            <button onClick={onClose} className={styles.modalRedactBtn}>No</button>
            <div className={styles.randomDeleteContainer}>
                <button onClick={handleRandomDelete} className={styles.modalRedactBtn}>I don't know</button>
                <span className={styles.infoIcon}>i
                    <span className={styles.tooltip}>50/50 chance of deleting a contact</span>
                </span>
            </div>
        </div>
    )
};

export default ModalDeleteContact;