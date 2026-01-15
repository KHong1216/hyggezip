"use client";

import dynamic from "next/dynamic";

const Game = dynamic(() => import("./game").then((m) => m.Game), {
  ssr: false,
  loading: () => (
    <section id="game" className="py-24 px-6 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto text-center text-stone-300">
        Loading...
      </div>
    </section>
  ),
});

export function GameLazy() {
  return <Game />;
}

