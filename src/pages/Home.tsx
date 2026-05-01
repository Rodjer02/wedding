import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Countdown } from "@/components/sections/Countdown";
import { Location } from "@/components/sections/Location";
import { Rsvp } from "@/components/sections/Rsvp";
import { Footer } from "@/components/sections/Footer";
import { AutoReveal } from "@/components/ui/AutoReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FallingDecor } from "@/components/decor/FallingDecor";
import { BackgroundMusic } from "@/components/ui/BackgroundMusic";

export default function Home() {
  return (
    <main className="theme-floral">
      <AutoReveal />
      <FallingDecor count={22} kinds={["heart", "petal"]} />
      <BackgroundMusic src="/sounds/background.mp3" />
      <Hero />
      <Invitation />
      <SectionDivider variant="branch" />
      <Location />
      <SectionDivider variant="rose" />
      <Countdown />
      <SectionDivider variant="ornament" />
      <Rsvp />
      <Footer />
    </main>
  );
}
