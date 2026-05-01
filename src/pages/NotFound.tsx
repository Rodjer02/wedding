import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <main className="theme-classic">
      <div className={styles.wrap}>
        <h1>404</h1>
        <p>Бет табылмады</p>
        <Link to="/" className={styles.link}>← Басты бетке</Link>
      </div>
    </main>
  );
}
