import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
  
    return (
      <div className={styles.UserMenuBox}>
        <p className={styles.UserMenuText}>{user.name}'s phonebook</p>
        <button 
        type="button" onClick={() => dispatch(logOut())}
        className={styles.UserMenuBtn}>
          Logout
        </button>
      </div>
    );
  };
  
export default UserMenu;