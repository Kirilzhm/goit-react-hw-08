import DocumentTitle from "../../DocumentTitle";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={styles.container}>
        <div>
          <h1>Welcome to the phonebook!</h1>
        </div>
      </div>
    </>
  );
}
