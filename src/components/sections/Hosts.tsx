import { Container } from "@/components/ui/Container";
import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./Hosts.module.scss";

export function Hosts() {
  return (
    <section id="hosts" className={styles.section}>
      <span className={styles.decorLeft}>
        <FloralDecor variant="sprig" rotate={-20} />
      </span>
      <span className={styles.decorRight}>
        <FloralDecor variant="sprig" rotate={200} />
      </span>

      <Container>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Той иелері</p>
          <h2 className={styles.names}>
            <span>Мұрат</span>
            <span className={styles.amp} aria-hidden="true">&amp;</span>
            <span>Гүлбану</span>
          </h2>
        </div>
      </Container>
    </section>
  );
}
