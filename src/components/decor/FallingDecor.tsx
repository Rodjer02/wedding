import { useMemo } from "react";
import styles from "./FallingDecor.module.scss";

type Kind = "heart" | "petal" | "sparkle";

type Item = {
  id: number;
  kind: Kind;
  left: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  rotate: number;
  opacity: number;
};

type Props = {
  count?: number;
  kinds?: Kind[];
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function FallingDecor({ count = 18, kinds = ["heart", "petal", "sparkle"] }: Props) {
  const items = useMemo<Item[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      kind: pick(kinds),
      left: rand(0, 100),
      size: rand(14, 28),
      delay: rand(-14, 0),
      duration: rand(10, 18),
      sway: rand(3, 6),
      rotate: rand(0, 360),
      opacity: rand(0.35, 0.75),
    }));
  }, [count, kinds]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className={styles.item}
          style={{
            left: `${it.left}%`,
            ["--size" as string]: `${it.size}px`,
            ["--delay" as string]: `${it.delay}s`,
            ["--dur" as string]: `${it.duration}s`,
            ["--sway" as string]: `${it.sway}s`,
            ["--rot" as string]: `${it.rotate}deg`,
            ["--alpha" as string]: `${it.opacity}`,
          }}
        >
          <span className={styles.sway}>
            {it.kind === "heart" && <Heart />}
            {it.kind === "petal" && <Petal />}
            {it.kind === "sparkle" && <Sparkle />}
          </span>
        </span>
      ))}
    </div>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-7.5-4.6-10-9.3C.6 8.6 2.5 4.5 6.4 4.5c2 0 3.6 1.1 4.6 2.7C12 5.6 13.6 4.5 15.6 4.5c3.9 0 5.8 4.1 4.4 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function Petal() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c4 4 6 8 6 12s-2.7 8-6 8-6-4-6-8 2-8 6-12z" opacity="0.85" />
      <path d="M12 2c-1 4 0 8 0 12s1 8 0 8" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 13.6 9 21 12l-7.4 3L12 22l-1.6-7L3 12l7.4-3L12 2z" />
    </svg>
  );
}
