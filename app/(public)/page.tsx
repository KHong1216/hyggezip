import { Navigation } from "@/app/features/navigation/navigation";
import { Hero } from "@/app/features/hero/hero";
import { Mission } from "@/app/features/mission/mission";
import { Research } from "@/app/features/research/research";
import { Interview } from "@/app/features/interview/interview";
import { Footer } from "@/app/features/footer/footer";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Mission />
      <Research />
      <Interview />
      <Footer />
    </div>
  );
}


