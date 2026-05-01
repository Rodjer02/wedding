import { Link } from "react-router-dom";
import { themeLabels, weddingData } from "@/config/wedding";
import { validThemes } from "@/lib/theme";
import { formatKazakhDate } from "@/lib/date";
import styles from "./Home.module.scss";

const previews: Record<typeof validThemes[number], { tagline: string; bg: string; accent: string }> = {
  classic: {
    tagline: "Минимализм, бежевые тона, серифный шрифт",
    bg: "#f7f3ec",
    accent: "#b08d57",
  },
  floral: {
    tagline: "Романтика, пыльно-розовый, акварельный вайб",
    bg: "#fdf6f3",
    accent: "#c9899a",
  },
  traditional: {
    tagline: "Дәстүрлі қазақ — изумруд, золото, орнамент",
    bg: "#f4ede0",
    accent: "#c9a14a",
  },
};

export default function Home() {
  return (
    <main className="theme-classic">
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{weddingData.groom.name} & {weddingData.bride.name}</p>
        <h1 className={styles.title}>Үйлену тойы — қысқа нұсқа</h1>
        <p className={styles.date}>{formatKazakhDate(weddingData.date)}</p>
        <p className={styles.intro}>
          Стильдің нұсқасын таңдаңыз — әрқайсысы бөлек бетте.
        </p>
      </section>

      <section className={styles.grid}>
        {validThemes.map((variant) => {
          const p = previews[variant];
          return (
            <Link
              key={variant}
              to={`/style/${variant}`}
              className={styles.card}
              style={{ background: p.bg }}
            >
              <span className={styles.cardAccent} style={{ background: p.accent }} />
              <h2 className={styles.cardTitle}>{themeLabels[variant]}</h2>
              <p className={styles.cardTag}>{p.tagline}</p>
              <span className={styles.cardCta}>Қарап шығу →</span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
