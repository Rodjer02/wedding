const months = [
  "қаңтар",
  "ақпан",
  "наурыз",
  "сәуір",
  "мамыр",
  "маусым",
  "шілде",
  "тамыз",
  "қыркүйек",
  "қазан",
  "қараша",
  "желтоқсан",
];

const weekdays = [
  "жексенбі",
  "дүйсенбі",
  "сейсенбі",
  "сәрсенбі",
  "бейсенбі",
  "жұма",
  "сенбі",
];

export function formatKazakhDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatKazakhDay(iso: string): string {
  return weekdays[new Date(iso).getDay()];
}

export function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Almaty",
  });
}
