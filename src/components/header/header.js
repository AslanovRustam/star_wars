import styles from "./header.module.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <a
        // href="https://www.youtube.com/watch?v=tYSbIKgYWdw&ab_channel=%D0%9F%D0%B0%D0%BB%D0%B8%D1%82%D1%80%D0%B0"
        href="/"
        // target="_blank"
      >
        <img className={styles.logo} src={logo} alt="logo"></img>
      </a>
    </header>
  );
}
