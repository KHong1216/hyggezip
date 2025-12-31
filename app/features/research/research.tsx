import { Check } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const researchItems = [
  "500개 이상의 공간 데이터 확보",
  "심리학 기반의 공간 배치 가이드라인",
  "계절별 홈 큐레이션 레포트 발행",
];

export function Research() {
  return (
    <SectionContainer id="research" className="bg-stone-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000"
            alt="Interior Study"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-amber-700 text-sm font-bold tracking-widest uppercase mb-4 block">
            Our Lab
          </span>
          <h2 className="text-3xl font-light mb-6 leading-tight text-stone-900">
            집·감정·라이프스타일 연구소
          </h2>
          <p className="text-stone-600 font-light mb-8 leading-relaxed">
            휘게Zip은 정기적으로 다양한 주거 형태를 연구합니다. 좁은 원룸부터 넓은
            정원이 있는 집까지, 그곳에서 얻는 진정한 휴식(Hygge)의 의미를 찾기 위해
            거주자의 심리를 심층 분석합니다.
          </p>
          <ul className="space-y-4 text-stone-500 text-sm">
            {researchItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-4 w-4 text-stone-400 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}


