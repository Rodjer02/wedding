import { useEffect, useState } from "react";
import { weddingData } from "@/config/wedding";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Countdown.module.scss";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const labels = {
  days: "күн",
  hours: "сағат",
  minutes: "минут",
  seconds: "секунд",
};

function compute(target: number): TimeLeft {
  const diff = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const target = new Date(weddingData.date).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(compute(target));
    const id = setInterval(() => setTime(compute(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section id="countdown" className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Тойға дейін"
          title="Қалған уақыт"
        />
        <div className={styles.grid}>
          {(Object.keys(labels) as (keyof TimeLeft)[]).map((key) => (
            <div key={key} className={styles.cell}>
              <span className={styles.value}>
                {time ? String(time[key]).padStart(2, "0") : "--"}
              </span>
              <span className={styles.label}>{labels[key]}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
