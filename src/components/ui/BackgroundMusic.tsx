import { useEffect, useRef, useState } from "react";
import styles from "./BackgroundMusic.module.scss";

type Props = {
  src?: string;
};

export function BackgroundMusic({ src = "/sounds/background.mp3" }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});

    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    const events: Array<keyof DocumentEventMap> = [
      "click",
      "touchstart",
      "keydown",
      "scroll",
    ];
    events.forEach((e) => document.addEventListener(e, tryPlay, { once: true }));
    return () => events.forEach((e) => document.removeEventListener(e, tryPlay));
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className={styles.btn}
        aria-label={isPlaying ? "Музыканы өшіру" : "Музыканы қосу"}
        title={isPlaying ? "Музыканы өшіру" : "Музыканы қосу"}
      >
        {isPlaying ? <SpeakerOn /> : <SpeakerOff />}
      </button>
    </>
  );
}

function SpeakerOn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function SpeakerOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <line x1="22" y1="9" x2="16" y2="15" />
      <line x1="16" y1="9" x2="22" y2="15" />
    </svg>
  );
}
