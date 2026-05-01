import { Link } from "react-router-dom";
import { themeLabels } from "@/config/wedding";
import { validThemes } from "@/lib/theme";
import type { ThemeVariant } from "@/config/wedding";
import styles from "./ThemeSwitcher.module.scss";

export function ThemeSwitcher({ current }: { current: ThemeVariant }) {
  return (
    <nav className={styles.nav} aria-label="Тақырыпты ауыстыру">
      <Link to="/" className={styles.home} aria-label="Басты бетке">
        ←
      </Link>
      <div className={styles.list}>
        {validThemes.map((v) => (
          <Link
            key={v}
            to={`/style/${v}`}
            className={`${styles.item} ${v === current ? styles.active : ""}`}
          >
            {themeLabels[v]}
          </Link>
        ))}
      </div>
    </nav>
  );
}
