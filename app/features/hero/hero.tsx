import Image from "next/image";

const heroImageUrl =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=70&w=1600";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      <Image
        src={heroImageUrl}
        alt=""
        priority
        fill
        quality={70}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-50/80" aria-hidden="true" />

      <div className="relative max-w-4xl text-center fade-in">
        <h2 className="text-stone-500 font-medium mb-4 tracking-widest uppercase text-sm">
          Hygge Archive & Curation
        </h2>
        <h1 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-8">
          당신의 집은 <br />{" "}
          <span className="font-normal italic">어떤 이야기</span>를 하고 있나요?
        </h1>
        <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto font-light leading-relaxed">
          휘게Zip은 공간을 읽고 가구를 통해 삶을 기록합니다.
          <br />
          당신의 일상이 머무는 곳, 그 너머의 정서를 연구합니다.
        </p>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIxOl0FwFpTRJ2F2ktaFOQLzpLwWxJPDXVfX-RD4uw0VeCwA/viewform"
            className="inline-flex items-center justify-center bg-stone-800 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-stone-700 transition shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            인터뷰 참여하기
          </a>
        </div>
      </div>
    </section>
  );
}

