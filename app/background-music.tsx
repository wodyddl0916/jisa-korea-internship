"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "./base-path";

type Locale = "ja" | "ko";

const preferenceKey = "usm-background-music";

export function BackgroundMusic({ locale }: { locale: Locale }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userDisabledRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.16;
    userDisabledRef.current = window.localStorage.getItem(preferenceKey) === "off";

    const playMusic = async () => {
      if (userDisabledRef.current || !audio.paused) return;
      try {
        await audio.play();
      } catch {
        // 소리 있는 자동재생이 차단되면 첫 사용자 입력 때 다시 시도합니다.
      }
    };

    const startAfterInteraction = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(".usmMiniBgm")) return;
      void playMusic();
    };

    if (!userDisabledRef.current) void playMusic();
    document.addEventListener("pointerdown", startAfterInteraction, { passive: true });
    document.addEventListener("keydown", startAfterInteraction);

    return () => {
      document.removeEventListener("pointerdown", startAfterInteraction);
      document.removeEventListener("keydown", startAfterInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userDisabledRef.current = true;
      window.localStorage.setItem(preferenceKey, "off");
      audio.pause();
      return;
    }

    userDisabledRef.current = false;
    window.localStorage.setItem(preferenceKey, "on");
    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const label = locale === "ko"
    ? `배경음악 ${isPlaying ? "끄기" : "켜기"}`
    : `BGMを${isPlaying ? "オフ" : "オン"}にする`;

  return <>
    <audio
      ref={audioRef}
      src={assetPath("/assets/audio/tokyo-odd-parade.mp3")}
      autoPlay
      loop
      playsInline
      preload="auto"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      aria-hidden="true"
    />
    <button
      className={`usmMiniBgm${isPlaying ? " is-playing" : ""}`}
      type="button"
      aria-label={label}
      aria-pressed={isPlaying}
      title={label}
      onClick={() => void toggleMusic()}
    >
      <span aria-hidden="true">♪</span> {isPlaying ? "ON" : "OFF"}
    </button>
  </>;
}
