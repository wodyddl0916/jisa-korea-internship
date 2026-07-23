"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef } from "react";
import { navigation } from "./site-data";
import { pageImages } from "./site-images";

const koreanNavigation: Record<string, string> = {
  "/": "홈",
  "/about": "JISA 소개",
  "/programs": "3개 프로그램",
  "/partnership": "공공 협력",
  "/results": "실적·자료",
  "/future": "향후 계획",
};

export function Header() {
  const pathname = usePathname();
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");
  const localize = (href: string) => isKo ? (href === "/" ? "/ko" : `/ko${href}`) : href;
  const normalizedPath = isKo ? (pathname.replace(/^\/ko/, "") || "/") : pathname;
  const isCurrent = (href: string) => href === "/" ? normalizedPath === "/" : normalizedPath.startsWith(href);
  const japaneseHref = normalizedPath || "/";
  const koreanHref = normalizedPath === "/" ? "/ko" : `/ko${normalizedPath}`;
  const headerRef = useRef<HTMLElement>(null);
  const closeMenus = useCallback(() => {
    headerRef.current?.querySelectorAll("details[open]").forEach((menu) => menu.removeAttribute("open"));
  }, []);

  // The header sits outside RouteTransition, so it never remounts on navigation.
  // Close every open disclosure menu when the route changes, including via back/forward.
  useEffect(closeMenus, [pathname, closeMenus]);

  return (
    <header className="siteHeader" ref={headerRef}>
      <div className="headerInner">
        <Link className="brand" href={isKo ? "/ko" : "/"} aria-label={isKo ? "JISA 한일 인턴십 홈" : "JISA韓国インターンシップ ホーム"}>
          <img src="/assets/jisa-logo.png" alt="JISA" />
          <span>
            <strong>{isKo ? "한일 인턴십 지원" : "日韓インターンシップ支援"}</strong>
            <small>Japan Internship Support Association</small>
          </span>
        </Link>
        <nav className="desktopNav" aria-label="メインメニュー">
          {navigation.map((item) => (
            <Link className={item.href === "/" ? "navHome" : undefined} href={localize(item.href)} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{isKo ? koreanNavigation[item.href] : item.label}</Link>
          ))}
          <Link className="navContact" href={localize("/contact")}>{isKo ? "문의" : "お問い合わせ"}</Link>
          <details className="languageMenu">
            <summary>{isKo ? "언어" : "言語"}<span aria-hidden="true">⌄</span></summary>
            <div className="languageOptions">
              <Link href={japaneseHref} lang="ja" aria-current={!isKo ? "page" : undefined} onClick={closeMenus}>日本語</Link>
              <Link href={koreanHref} lang="ko" aria-current={isKo ? "page" : undefined} onClick={closeMenus}>한국어</Link>
            </div>
          </details>
        </nav>
        <details className="mobileNav">
          <summary aria-label="メニューを開く"><span /><span /><span /></summary>
          <nav aria-label="モバイルメニュー">
            {navigation.map((item) => (
              <Link href={localize(item.href)} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={closeMenus}>{isKo ? koreanNavigation[item.href] : item.label}</Link>
            ))}
            <Link href={localize("/contact")} onClick={closeMenus}>{isKo ? "문의" : "お問い合わせ"}</Link>
            <details className="languageMenu mobileLanguageMenu">
              <summary>{isKo ? "언어 선택" : "言語を選択"}<span aria-hidden="true">⌄</span></summary>
              <div className="languageOptions">
                <Link href={japaneseHref} lang="ja" aria-current={!isKo ? "page" : undefined} onClick={closeMenus}>日本語</Link>
                <Link href={koreanHref} lang="ko" aria-current={isKo ? "page" : undefined} onClick={closeMenus}>한국어</Link>
              </div>
            </details>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div className="routeTransition" key={pathname}>{children}</div>;
}

export function Footer() {
  const pathname = usePathname();
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");
  const localize = (href: string) => isKo ? (href === "/" ? "/ko" : `/ko${href}`) : href;

  return (
    <footer className="siteFooter">
      <div className="footerLead">
        <div>
          <p className="eyebrow light">CONTACT</p>
          <h2>{isKo ? <>한일을 잇는 실습 프로그램을<br />목적에 맞게 설계합니다.</> : <>日韓をつなぐ実習プログラムを、<br />目的に合わせて設計します。</>}</h2>
        </div>
        <Link className="button buttonLight" href={localize("/contact")}>{isKo ? "문의 창구" : "お問い合わせ窓口"} <span>→</span></Link>
      </div>
      <div className="footerGrid">
        <div className="footerBrand">
          <strong>JISA</strong>
          <span>{isKo ? "일본 인턴십 지원 협회" : "日本インターンシップ支援協会"}</span>
          <p>{isKo ? "해외 대학과 일본 기업을 연결하고, 교육 과정으로서의 인턴십을 설계·지원합니다." : "海外大学と日本企業を結び、教育としてのインターンシップを設計・支援します。"}</p>
        </div>
        <nav aria-label="フッターメニュー">
          {navigation.map((item) => <Link href={localize(item.href)} key={item.href}>{isKo ? koreanNavigation[item.href] : item.label}</Link>)}
          <Link href={localize("/contact")}>{isKo ? "문의" : "お問い合わせ"}</Link>
        </nav>
        <div className="footerContact">
          <span>Mail</span><a href="mailto:tsuka@jisa1234.jp">tsuka@jisa1234.jp</a>
          <span>Tel</span><a href="tel:09048421234">090-4842-1234</a>
          <span>LINE</span><strong>jisa1234</strong>
        </div>
      </div>
      <div className="copyright">© JISA · Japan Internship Support Association</div>
    </footer>
  );
}

export function PageHero({ label, title, intro, index, image = "" }: { label: string; title: string; intro: string; index: string; image?: string }) {
  const pathname = usePathname();
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");
  // An explicit `image` prop overrides the shared map; `focus` only comes from the map.
  const mapped = pageImages[label];
  const src = image || mapped?.src;
  const style = {
    "--page-image": src ? `url(${src})` : "none",
    "--page-focus": (image ? undefined : mapped?.focus) ?? "center",
  } as CSSProperties;
  const visualClass = ["pageHeroVisual", src && "hasImage", mapped?.tone === "light" && "onLight"]
    .filter(Boolean)
    .join(" ");
  const suggestions: Record<string, string> = {
    "ABOUT JISA": "協会スタッフ・大学関係者との打合せ風景",
    "PROGRAMS": "学生の実習・企業訪問・研修風景",
    "PUBLIC PARTNERSHIP": "HRD Korea・大学との協約・説明会",
    "RESULTS & RESOURCES": "参加学生・大学交流・成果発表の様子",
    "VISION 2026–2027": "日韓の学生と企業をつなぐ活動風景",
    "CONTACT": "JISAオフィス・相談対応の様子",
  };
  const koreanSuggestions: Record<string, string> = {
    "ABOUT JISA": "협회 담당자와 대학 관계자의 회의 모습",
    "PROGRAMS": "학생 실습·기업 방문·연수 현장",
    "PUBLIC PARTNERSHIP": "HRD Korea·대학과의 협약식 또는 설명회",
    "RESULTS & RESOURCES": "참가 학생·대학 교류·성과 발표 현장",
    "VISION 2026–2027": "한국 학생과 일본 기업을 연결하는 활동 현장",
    "CONTACT": "JISA 사무실 또는 상담 진행 모습",
  };

  return (
    <section className="pageHero">
      <div className="pageHeroInner">
        <div className="pageHeroCopy">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p className="pageLead">{intro}</p>
        </div>
        <div className={visualClass} style={style} aria-label={`${label} イメージ掲載エリア`}>
          <span className="visualLabel">JISA / {label}</span>
          {!src && <span className="visualSuggestion"><small>{isKo ? "추천 사진" : "掲載予定写真"}</small>{isKo ? (koreanSuggestions[label] ?? "JISA의 활동을 보여주는 사진") : (suggestions[label] ?? "JISAの活動が伝わる写真")}</span>}
          <strong className="pageIndex">{index}</strong>
          <i aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="sectionHeading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function LegalNote() {
  const pathname = usePathname();
  const isKo = pathname === "/ko" || pathname.startsWith("/ko/");

  return (
    <aside className="legalNote">
      <strong>{isKo ? "제도 및 체류 자격 안내" : "制度・在留資格について"}</strong>
      <p>{isKo ? "게재 내용은 제공받은 자료를 바탕으로 정리한 개요입니다. 무급 실습, 워킹홀리데이, 특정활동을 포함한 체류 자격과 근로 조건은 실제 시행 시점의 법령, 개별 커리큘럼 및 관계 기관의 판단에 따라 사전에 확인합니다." : "掲載内容は提供資料に基づく概要です。無給実習、ワーキングホリデー、特定活動を含む在留資格・労働条件は、実施時点の法令、個別カリキュラム、関係機関の判断に基づき事前に確認します。"}</p>
    </aside>
  );
}
