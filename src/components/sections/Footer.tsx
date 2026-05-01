import { weddingData } from "@/config/wedding";
import { formatKazakhDate } from "@/lib/date";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.names}>
          {weddingData.groom.name} <span aria-hidden="true">&</span>{" "}
          {weddingData.bride.name}
        </div>
        <p className={styles.closing}>{weddingData.invitation.closing}</p>
        <p className={styles.date}>{formatKazakhDate(weddingData.date)}</p>
      </div>
    </footer>
  );
}
