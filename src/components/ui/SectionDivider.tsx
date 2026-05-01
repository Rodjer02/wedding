import { FloralDecor } from "@/components/decor/FloralDecor";
import styles from "./SectionDivider.module.scss";

type Variant = "leaf" | "rose" | "ornament" | "branch";

export function SectionDivider({ variant = "ornament" }: { variant?: Variant }) {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span className={styles.line} />
      <span className={styles.glyph}>
        <FloralDecor variant={variant} />
      </span>
      <span className={styles.line} />
    </div>
  );
}
