import { useEffect, useRef } from "react";
import styles from "./TwoGisWidget.module.scss";

type TwoGisConfig = {
  width: number;
  height: number;
  borderColor?: string;
  pos: { lat: number; lon: number; zoom: number };
  opt: { city: string };
  org: { id: string }[];
};

type Props = {
  config: TwoGisConfig;
  mapUrl: string;
  routeUrl: string;
  photosUrl?: string;
  cityName?: string;
  orgName?: string;
};

declare global {
  interface Window {
    DGWidgetLoader?: new (cfg: unknown) => unknown;
  }
}

const SRC = "https://widgets.2gis.com/js/DGWidgetLoader.js";
let loaderPromise: Promise<void> | null = null;

function loadLoader(): Promise<void> {
  if (loaderPromise) return loaderPromise;
  loaderPromise = new Promise((resolve, reject) => {
    if (window.DGWidgetLoader) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.charset = "utf-8";
    s.onload = () => resolve();
    s.onerror = reject;
    document.body.appendChild(s);
  });
  return loaderPromise;
}

export function TwoGisWidget({
  config,
  mapUrl,
  routeUrl,
  photosUrl,
  cityName = "Астаны",
  orgName = "место",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const initedRef = useRef(false);

  useEffect(() => {
    if (initedRef.current) return;
    initedRef.current = true;

    loadLoader()
      .then(() => {
        if (window.DGWidgetLoader) new window.DGWidgetLoader(config);
      })
      .catch((e) => console.error("2GIS loader failed:", e));

    return () => {
      const host = ref.current;
      if (host) {
        host.querySelectorAll("iframe").forEach((f) => f.remove());
      }
    };
  }, [config]);

  return (
    <div className={styles.wrap} ref={ref}>
      <a className={`dg-widget-link ${styles.link}`} href={mapUrl} target="_blank" rel="noopener noreferrer">
        Посмотреть на карте {cityName}
      </a>
      {photosUrl && (
        <div className={`dg-widget-link ${styles.linkRow}`}>
          <a className={styles.link} href={photosUrl} target="_blank" rel="noopener noreferrer">
            Фотографии компании
          </a>
        </div>
      )}
      <div className={`dg-widget-link ${styles.linkRow}`}>
        <a className={styles.link} href={routeUrl} target="_blank" rel="noopener noreferrer">
          Найти проезд до {orgName}
        </a>
      </div>

      <noscript>
        <div className={styles.noscript}>
          Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
        </div>
      </noscript>
    </div>
  );
}
