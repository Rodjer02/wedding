import type { ThemeVariant } from "@/config/wedding";

export const validThemes: ThemeVariant[] = ["classic", "floral", "traditional"];

export function isValidTheme(value: string): value is ThemeVariant {
  return (validThemes as string[]).includes(value);
}
