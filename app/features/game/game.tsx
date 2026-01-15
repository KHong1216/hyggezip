"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/section-container";
import { cn } from "@/lib/utils";

export function Game() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isPerfect, setIsPerfect] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && startTimeRef.current !== null) {
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current!) / 1000;
        setElapsedTime(elapsed);

        // Auto-stop at 15 seconds
        if (elapsed > 15) {
          setIsRunning(false);
          const finalTime = elapsed;
          if (finalTime === 7.77) {
            setResult("완벽합니다! 7.77초를 맞추셨어요! ✨");
            setIsPerfect(true);
          } else if (Math.abs(finalTime - 7.77) < 0.1) {
            setResult("아깝네요! 거의 다 왔어요.");
            setIsPerfect(false);
          } else {
            setResult("다시 한번 도전해보세요.");
            setIsPerfect(false);
          }
        }
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  function startTimer() {
    startTimeRef.current = Date.now();
    setIsRunning(true);
    setResult(null);
    setIsPerfect(false);
  }

  function stopTimer() {
    setIsRunning(false);
    const finalTime = elapsedTime;

    if (finalTime === 7.77) {
      setResult("완벽합니다! 7.77초를 맞추셨어요! ✨");
      setIsPerfect(true);
    } else if (Math.abs(finalTime - 7.77) < 0.1) {
      setResult("아깝네요! 거의 다 왔어요.");
      setIsPerfect(false);
    } else {
      setResult("다시 한번 도전해보세요.");
      setIsPerfect(false);
    }
  }

  function handleButtonClick() {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function handleReset() {
    setIsRunning(false);
    setElapsedTime(0);
    setResult(null);
    setIsPerfect(false);
    startTimeRef.current = null;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function getButtonText() {
    if (!isRunning && elapsedTime === 0) return "START";
    if (isRunning) return "STOP";
    return "TRY AGAIN";
  }

  return (
    <SectionContainer
      id="game"
      className="py-24 px-6 bg-stone-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8 italic">
          Focus on the Moment
        </h2>
        <p className="text-stone-400 mb-12 font-light text-lg">
          가구를 고를 때의 신중함처럼,
          <br />
          정확히 <span className="text-amber-500 font-bold">7.77초</span>가
          되는 순간 멈춰주세요.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-stone-800 rounded-3xl p-12 max-w-lg mx-auto shadow-2xl">
          <div
            className={cn(
              "text-6xl md:text-8xl font-thin mb-12 tracking-tighter text-stone-200",
              "tabular-nums",
              isPerfect && "text-green-400"
            )}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {elapsedTime.toFixed(2)}
          </div>

          <div
            className={cn(
              "h-8 mb-6 font-medium transition-opacity duration-300",
              result ? "opacity-100" : "opacity-0",
              isPerfect ? "text-green-400" : "text-amber-500"
            )}
          >
            {result || "성공! 휘게Zip의 정밀한 감각을 닮으셨네요."}
          </div>

          <div className="flex flex-col gap-4">
            <Button
              onClick={handleButtonClick}
              className={cn(
                "game-btn py-5 rounded-2xl font-bold text-xl transition-all shadow-xl",
                isRunning
                  ? "bg-amber-600 text-white hover:bg-amber-700"
                  : elapsedTime === 0
                    ? "bg-stone-100 text-stone-900 hover:bg-white"
                    : "bg-stone-700 text-white hover:bg-stone-600"
              )}
            >
              {getButtonText()}
            </Button>
            <button
              onClick={handleReset}
              className="text-stone-300 text-sm underline underline-offset-4 hover:text-stone-200 transition"
              aria-label="게임 다시 시작"
            >
              RETRY
            </button>
          </div>
        </div>

        <p className="mt-12 text-stone-300 text-sm font-light leading-relaxed">
          성공하신 분들은 스크린샷과 함께 인스타그램 @hyggeip를
          태그해주세요.
          <br />
          추첨을 통해 소정의 선물을 드립니다.
        </p>
      </div>
    </SectionContainer>
  );
}

