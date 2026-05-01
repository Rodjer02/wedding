import { ReactNode } from "react";
import styles from "./SectionHeader.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} aria-hidden="true" />
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
