import { Navigation } from "@/app/features/navigation/navigation";
import { Hero } from "@/app/features/hero/hero";
import { Mission } from "@/app/features/mission/mission";
import { Research } from "@/app/features/research/research";
import { GameLazy } from "@/app/features/game/game-lazy";
import { Footer } from "@/app/features/footer/footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Mission />
      <Research />
      <GameLazy />
      <Footer />
    </>
  );
}

