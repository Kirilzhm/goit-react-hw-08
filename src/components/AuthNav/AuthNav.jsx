import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
    return (
        <div className={styles.registerLoginBox}>
            <NavLink to="/register" className={styles.registerLogin}>Register</NavLink>
            <NavLink to="/login" className={styles.registerLogin}>Log in</NavLink>
        </div>
    );
};

export default AuthNav;