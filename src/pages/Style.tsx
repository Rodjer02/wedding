import { useParams, Navigate } from "react-router-dom";
import { Hero } from "@/components/sections/Hero";
import { Countdown } from "@/components/sections/Countdown";
import { Location } from "@/components/sections/Location";
import { Rsvp } from "@/components/sections/Rsvp";
import { Footer } from "@/components/sections/Footer";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { AutoReveal } from "@/components/ui/AutoReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FallingDecor } from "@/components/decor/FallingDecor";
import { BackgroundMusic } from "@/components/ui/BackgroundMusic";
import { isValidTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/config/wedding";

const fallKinds: Record<ThemeVariant, ("heart" | "petal" | "sparkle")[]> = {
  classic: ["sparkle", "petal"],
  floral: ["heart", "petal"],
  traditional: ["sparkle", "petal"],
};

export default function StylePage() {
  const { variant } = useParams<{ variant: string }>();
  if (!variant || !isValidTheme(variant)) return <Navigate to="/404" replace />;

  return (
    <main className={`theme-${variant}`}>
      <ThemeSwitcher current={variant} />
      <AutoReveal />
      <FallingDecor count={20} kinds={fallKinds[variant]} />
      <BackgroundMusic src="/sounds/background.mp3" />
      <Hero />
      <Countdown />
      <SectionDivider variant="branch" />
      <Location />
      <SectionDivider variant="rose" />
      <Rsvp />
      <Footer />
    </main>
  );
}
