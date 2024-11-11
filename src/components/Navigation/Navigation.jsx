import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";


const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <nav className={styles.navigationBox}>
            <NavLink to="/" className={styles.navigationHLink}>Home</NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={styles.navigationHLink}>Contacts</NavLink>
            )}
        </nav>
    )
};

export default Navigation;