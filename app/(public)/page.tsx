import { Navigation } from "@/app/features/navigation/navigation";
import { Hero } from "@/app/features/hero/hero";
import { Mission } from "@/app/features/mission/mission";
import { Research } from "@/app/features/research/research";
import { Game } from "@/app/features/game/game";
import { Footer } from "@/app/features/footer/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Mission />
      <Research />
      <Game />
      <Footer />
    </>
  );
}

