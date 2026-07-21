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

const slidesKo = [
  { label: "ABOUT JISA", title: "JISA는 교육과 실무를 함께 설계하는 지원 기관입니다.", text: "해외 대학과 일본 기업을 연결하고, 단순한 인재 소개가 아닌 정규 교육과정으로서의 인턴십을 지원합니다.", href: "/ko/about", action: "JISA 자세히 보기", className: "slideAbout", image: "" },
  { label: "THREE PROGRAMS", title: "목적과 기간에 따라 선택하는 3가지 한국 특화 프로그램.", text: "대학 주관 단기형, HRD Korea 연계형, 장기 유급형 가운데 목적에 맞는 실습 과정을 확인할 수 있습니다.", href: "/ko/programs", action: "프로그램 보기", className: "slidePrograms", image: "" },
  { label: "PUBLIC PARTNERSHIP", title: "공공 지원과 전문 설계를 하나의 운영 체계로 연결합니다.", text: "한국산업인력공단과의 협력을 바탕으로 대학·기업·참가자가 지속할 수 있는 국제 실습 모델을 구축합니다.", href: "/ko/partnership", action: "협력 모델 보기", className: "slidePartnership", image: "" },
  { label: "RESULTS & RESOURCES", title: "숫자와 대학, 기록으로 확인하는 JISA의 활동.", text: "11개국, 70개 대학, 1,100명 이상의 실적과 한국 대학과의 교류·운영 기록을 소개합니다.", href: "/ko/results", action: "실적·자료 보기", className: "slideResults", image: "" },
  { label: "VISION 2026–2027", title: "한국 내 기반을 강화해 배움부터 취업까지 지원합니다.", text: "현지 운영 체계와 대학·기업 네트워크, 일본 취업 희망자를 위한 커리큘럼 사업을 단계적으로 확대합니다.", href: "/ko/future", action: "향후 계획 보기", className: "slideFuture", image: "" },
];

const quickLinks = [
  { mark: "A", label: "大学主催・短期", href: "/programs#course-a" },
  { mark: "B", label: "HRD Korea連携", href: "/programs#course-b" },
  { mark: "C", label: "長期・有給実習", href: "/programs#course-c" },
];

const quickLinksKo = [
  { mark: "A", label: "대학 주관·단기", href: "/ko/programs#course-a" },
  { mark: "B", label: "HRD Korea 연계", href: "/ko/programs#course-b" },
  { mark: "C", label: "장기·유급 실습", href: "/ko/programs#course-c" },
];

export function HomeHero({ locale = "ja" }: { locale?: "ja" | "ko" }) {
  const localizedSlides = locale === "ko" ? slidesKo : slides;
  const localizedQuickLinks = locale === "ko" ? quickLinksKo : quickLinks;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % localizedSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => setActive((index + localizedSlides.length) % localizedSlides.length);

  return (
    <>
      <section
        className="homeSlider"
        aria-label={locale === "ko" ? "주요 콘텐츠" : "主要コンテンツ"}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {localizedSlides.map((slide, index) => {
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

        <div className="sliderControls" aria-label={locale === "ko" ? "슬라이드 조작" : "スライド操作"}>
          <button type="button" onClick={() => select(active - 1)} aria-label={locale === "ko" ? "이전 슬라이드" : "前のスライド"}>←</button>
          <div className="sliderDots">
            {localizedSlides.map((slide, index) => <button type="button" className={active === index ? "isActive" : ""} onClick={() => select(index)} aria-label={locale === "ko" ? `${index + 1}번째 슬라이드: ${slide.label}` : `${index + 1}枚目: ${slide.label}`} key={slide.label} />)}
          </div>
          <button type="button" onClick={() => select(active + 1)} aria-label={locale === "ko" ? "다음 슬라이드" : "次のスライド"}>→</button>
          <span className="slideCounter">{String(active + 1).padStart(2, "0")} / {String(localizedSlides.length).padStart(2, "0")}</span>
        </div>
      </section>

      <div className={`quickDock ${quickOpen ? "isOpen" : ""}`}>
        <button className="quickDockToggle" type="button" onClick={() => setQuickOpen((open) => !open)} aria-expanded={quickOpen} aria-controls="quick-access-panel">
          <span>{locale === "ko" ? "빠른 메뉴" : "QUICK ACCESS"}</span><b>{quickOpen ? "−" : "+"}</b>
        </button>
        <div className="quickDockPanel" id="quick-access-panel" aria-hidden={!quickOpen}>
          <div className="quickDockHeader"><strong>{locale === "ko" ? "프로그램 선택" : "プログラムを選ぶ"}</strong><button type="button" onClick={() => setQuickOpen(false)} aria-label={locale === "ko" ? "빠른 메뉴 닫기" : "クイックアクセスを閉じる"}>×</button></div>
          {localizedQuickLinks.map((item) => <Link href={item.href} key={item.mark}><b>{item.mark}</b><span>{item.label}</span><i>→</i></Link>)}
        </div>
      </div>
    </>
  );
}
