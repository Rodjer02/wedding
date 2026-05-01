import styles from "./FloralDecor.module.scss";

type Variant = "leaf" | "rose" | "ornament" | "branch" | "sprig" | "wreath";

type Props = {
  variant: Variant;
  className?: string;
  rotate?: number;
};

export function FloralDecor({ variant, className, rotate = 0 }: Props) {
  return (
    <span
      className={`${styles.decor} ${className ?? ""}`}
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {variant === "leaf" && <Leaf />}
      {variant === "rose" && <Rose />}
      {variant === "ornament" && <Ornament />}
      {variant === "branch" && <Branch />}
      {variant === "sprig" && <Sprig />}
      {variant === "wreath" && <Wreath />}
    </span>
  );
}

function Sprig() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M100 10 C 100 60, 100 130, 100 190" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 35 + i * 25;
          const len = 28 - i * 2;
          return (
            <g key={i}>
              <path
                d={`M100 ${y} Q ${100 - len * 0.5} ${y - 6} ${100 - len} ${y - 12}`}
                opacity="0.7"
              />
              <path
                d={`M100 ${y + 6} Q ${100 + len * 0.5} ${y} ${100 + len} ${y - 6}`}
                opacity="0.7"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function Branch() {
  return (
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M10 180 C 60 160, 110 130, 150 90 C 175 65, 200 50, 230 40" />
        <g opacity="0.8">
          <ellipse cx="50" cy="170" rx="14" ry="5" transform="rotate(-20 50 170)" stroke="currentColor" fill="none" />
          <ellipse cx="85" cy="150" rx="14" ry="5" transform="rotate(-30 85 150)" stroke="currentColor" fill="none" />
          <ellipse cx="115" cy="125" rx="14" ry="5" transform="rotate(-40 115 125)" stroke="currentColor" fill="none" />
          <ellipse cx="145" cy="95" rx="13" ry="5" transform="rotate(-50 145 95)" stroke="currentColor" fill="none" />
          <ellipse cx="170" cy="73" rx="12" ry="4" transform="rotate(-55 170 73)" stroke="currentColor" fill="none" />
          <ellipse cx="195" cy="55" rx="11" ry="4" transform="rotate(-58 195 55)" stroke="currentColor" fill="none" />
        </g>
        <path d="M70 165 Q 75 155, 78 145" opacity="0.55" />
        <path d="M105 138 Q 110 128, 112 118" opacity="0.55" />
        <path d="M135 110 Q 138 100, 140 92" opacity="0.55" />
      </g>
    </svg>
  );
}

function Leaf() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M100 30 C 70 60, 65 110, 80 160 C 90 175, 110 175, 120 160 C 135 110, 130 60, 100 30 Z" />
        <path d="M100 35 L 100 165" opacity="0.5" />
        <path d="M100 60 Q 88 70, 82 82 M 100 85 Q 86 95, 80 108 M 100 110 Q 88 120, 84 130 M 100 60 Q 112 70, 118 82 M 100 85 Q 114 95, 120 108 M 100 110 Q 112 120, 116 130" opacity="0.45" />
      </g>
    </svg>
  );
}

function Rose() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path d="M100 60 C 84 60, 72 72, 72 88 C 72 102, 84 112, 100 112 C 116 112, 128 102, 128 88 C 128 72, 116 60, 100 60 Z" opacity="0.85" />
        <path d="M100 70 C 90 70, 82 78, 82 88 C 82 96, 90 104, 100 104 C 110 104, 118 96, 118 88 C 118 78, 110 70, 100 70 Z" opacity="0.7" />
        <path d="M100 80 Q 92 84, 92 90 Q 96 96, 100 94 Q 106 94, 108 88 Q 106 82, 100 80 Z" opacity="0.6" />
        <path d="M70 85 Q 50 75, 30 80 Q 50 90, 70 90" opacity="0.55" />
        <path d="M130 85 Q 150 75, 170 80 Q 150 90, 130 90" opacity="0.55" />
        <path d="M85 110 Q 75 130, 78 150 Q 92 130, 95 115" opacity="0.55" />
        <path d="M115 110 Q 125 130, 122 150 Q 108 130, 105 115" opacity="0.55" />
        <path d="M85 65 Q 75 50, 60 45 Q 75 60, 88 68" opacity="0.45" />
        <path d="M115 65 Q 125 50, 140 45 Q 125 60, 112 68" opacity="0.45" />
      </g>
    </svg>
  );
}

function Wreath() {
  return (
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
        <ellipse cx="110" cy="110" rx="86" ry="86" opacity="0.25" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 110 + Math.cos(rad) * 86;
          const cy = 110 + Math.sin(rad) * 86;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="14"
              ry="5"
              transform={`rotate(${angle + 90} ${cx} ${cy})`}
              opacity="0.6"
            />
          );
        })}
      </g>
    </svg>
  );
}

function Ornament() {
  return (
    <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
        <path d="M0 20 L 90 20" opacity="0.5" />
        <path d="M150 20 L 240 20" opacity="0.5" />
        <circle cx="120" cy="20" r="3" fill="currentColor" />
        <circle cx="120" cy="20" r="8" opacity="0.5" />
        <path d="M95 20 Q 100 14, 105 20 Q 100 26, 95 20 Z" fill="currentColor" opacity="0.5" />
        <path d="M135 20 Q 140 14, 145 20 Q 140 26, 135 20 Z" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
