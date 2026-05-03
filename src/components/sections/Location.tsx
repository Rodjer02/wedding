import { weddingData } from "@/config/wedding";
import { Container } from "@/components/ui/Container";
import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./Location.module.scss";

export function Location() {
  const { venue } = weddingData;
  const { twogis } = venue;

  return (
    <section id="location" className={styles.section}>
      <span className={styles.decorLeft}>
        <FloralDecor variant="branch" rotate={-30} />
      </span>
      <span className={styles.decorRight}>
        <FloralDecor variant="branch" rotate={210} />
      </span>

      <Container>
        <h2 className={styles.title}>Мекенжайымыз</h2>

        <div className={styles.card}>
          <div className={styles.iconWrap} aria-hidden="true">
            <PinIcon />
          </div>

          <h3 className={styles.venue}>{venue.name}</h3>
          <p className={styles.address}>{venue.address}</p>
          <p className={styles.time}>27 шілде 2026 ж. · 17:00</p>
        </div>

        <a
          className={styles.mapBtn}
          href={twogis.routeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalIcon />
          <span>2GIS арқылы ашу</span>
        </a>
      </Container>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
