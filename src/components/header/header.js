import styles from "./header.module.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <a
        href="/"
      >
        <img className={styles.logo} src={logo} alt="logo"></img>
      </a>
    </header>
  );
}
