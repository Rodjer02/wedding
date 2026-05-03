import { weddingData } from "@/config/wedding";
import { formatKazakhDate } from "@/lib/date";
import styles from "./Hero.module.scss";

const HERO_IMG =
  "https://online-shaqyru.kz/wp-content/uploads/2025/04/37ca9e73702d10126119f382cac55151.jpg";

export function Hero() {
  const { groom, bride, date } = weddingData;
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img
          src={HERO_IMG}
          alt=""
          loading="eager"
          decoding="async"
          className={styles.img}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Үйлену тойға шақыру</p>

        <h1 className={styles.names}>
          <span className={styles.name}>{groom.name}</span>
          <span className={styles.amp} aria-hidden="true">&amp;</span>
          <span className={styles.name}>{bride.name}</span>
        </h1>

        <p className={styles.date}>{formatKazakhDate(date)} ж. · 17:00</p>
      </div>

      <a className={styles.scroll} href="#countdown" aria-label="Төменге айналдыру">
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}
