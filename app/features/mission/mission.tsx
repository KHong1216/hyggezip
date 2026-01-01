import { Card, CardContent } from "@/components/ui/card";
import { Compass, Heart, BookOpen } from "lucide-react";
import { SectionContainer } from "@/components/section-container";
import { cn } from "@/lib/utils";

interface MissionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const missionItems: MissionItem[] = [
  {
    icon: <Compass className="h-6 w-6 text-stone-500" />,
    title: "공간 큐레이션",
    description:
      "거주자의 동선과 공간의 흐름을 분석하여 가장 편안한 배치를 제안합니다.",
  },
  {
    icon: <Heart className="h-6 w-6 text-stone-500" />,
    title: "감정 연구",
    description:
      "가구와 배치가 심리적 안정에 미치는 영향을 데이터로 탐구합니다.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-stone-500" />,
    title: "라이프스타일 아카이빙",
    description:
      "개인의 취향이 깃든 공간의 역사를 기록하고 가치를 보존합니다.",
  },
];

export function Mission() {
  return (
    <SectionContainer id="mission" className="bg-white">
      <div className="grid md:grid-cols-3 gap-12 text-center">
        {missionItems.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "border-0 shadow-none hover:transform hover:-translate-y-1 transition-all duration-300",
              index === 1 && "md:border-x md:border-stone-100"
            )}
          >
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{item.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

