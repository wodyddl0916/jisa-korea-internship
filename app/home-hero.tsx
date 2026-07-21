"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const slides = [
  {
    label: "ABOUT JISA",
    title: "JISAは、教育と実務を設計する支援機関です。",
    text: "海外大学と日本企業を結び、単なる人材紹介ではなく、正規の教育課程としてのインターンシップを支援します。",
    href: "/about",
    action: "JISAについて知る",
    className: "slideAbout",
    image: "",
  },
  {
    label: "THREE PROGRAMS",
    title: "目的と期間で選べる、3つの韓国特化型プログラム。",
    text: "大学主催の短期型、HRD Korea連携型、長期有給型から、目的に合う実習を確認できます。",
    href: "/programs",
    action: "プログラムを見る",
    className: "slidePrograms",
    image: "",
  },
  {
    label: "PUBLIC PARTNERSHIP",
    title: "公的支援と専門設計を、一つの運用体制に。",
    text: "韓国産業人力公団との連携を軸に、大学・企業・参加者が継続できる国際実習モデルを構築します。",
    href: "/partnership",
    action: "連携モデルを見る",
    className: "slidePartnership",
    image: "",
  },
  {
    label: "RESULTS & RESOURCES",
    title: "数字、大学、映像から見るJISAの活動。",
    text: "11か国、70大学、1,100名以上の実績と、韓国大学との交流・実施記録をご紹介します。",
    href: "/results",
    action: "実績・資料を見る",
    className: "slideResults",
    image: "",
  },
  {
    label: "VISION 2026–2027",
    title: "韓国での基盤を強化し、学びから就職まで支える。",
    text: "現地体制、大学・企業ネットワーク、就職者向けカリキュラム事業を段階的に拡大します。",
    href: "/future",
    action: "今後の展開を見る",
    className: "slideFuture",
    image: "",
  },
];

const quickLinks = [
  { mark: "A", label: "大学主催・短期", href: "/programs#course-a" },
  { mark: "B", label: "HRD Korea連携", href: "/programs#course-b" },
  { mark: "C", label: "長期・有給実習", href: "/programs#course-c" },
];

export function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <>
      <section
        className="homeSlider"
        aria-label="主要コンテンツ"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {slides.map((slide, index) => {
          const style = { "--slide-image": slide.image ? `url(${slide.image})` : "none" } as CSSProperties;
          return (
            <article className={`heroSlide ${slide.className} ${active === index ? "isActive" : ""}`} style={style} aria-hidden={active !== index} key={slide.label}>
              <div className="slideShade" />
              <div className="slideInner">
                <div className="slideCopy">
                  <p className="eyebrow">{slide.label}</p>
                  <h1>{slide.title}</h1>
                  <p className="lead">{slide.text}</p>
                  <Link className="button buttonLight" href={slide.href} tabIndex={active === index ? 0 : -1}>{slide.action} <span>→</span></Link>
                </div>
                <div className="slideNumber" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              </div>
            </article>
          );
        })}

        <div className="sliderControls" aria-label="スライド操作">
          <button type="button" onClick={() => select(active - 1)} aria-label="前のスライド">←</button>
          <div className="sliderDots">
            {slides.map((slide, index) => <button type="button" className={active === index ? "isActive" : ""} onClick={() => select(index)} aria-label={`${index + 1}枚目: ${slide.label}`} key={slide.label} />)}
          </div>
          <button type="button" onClick={() => select(active + 1)} aria-label="次のスライド">→</button>
          <span className="slideCounter">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        </div>
      </section>

      <div className={`quickDock ${quickOpen ? "isOpen" : ""}`}>
        <button className="quickDockToggle" type="button" onClick={() => setQuickOpen((open) => !open)} aria-expanded={quickOpen} aria-controls="quick-access-panel">
          <span>QUICK ACCESS</span><b>{quickOpen ? "−" : "+"}</b>
        </button>
        <div className="quickDockPanel" id="quick-access-panel" aria-hidden={!quickOpen}>
          <div className="quickDockHeader"><strong>プログラムを選ぶ</strong><button type="button" onClick={() => setQuickOpen(false)} aria-label="クイックアクセスを閉じる">×</button></div>
          {quickLinks.map((item) => <Link href={item.href} key={item.mark}><b>{item.mark}</b><span>{item.label}</span><i>→</i></Link>)}
        </div>
      </div>
    </>
  );
}
