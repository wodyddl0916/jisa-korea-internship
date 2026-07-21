"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { navigation } from "./site-data";

export function Header() {
  const pathname = usePathname();
  const isCurrent = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" href="/" aria-label="JISA韓国インターンシップ ホーム">
          <img src="/assets/jisa-logo.png" alt="JISA" />
          <span>
            <strong>日韓インターンシップ支援</strong>
            <small>Japan Internship Support Association</small>
          </span>
        </Link>
        <nav className="desktopNav" aria-label="メインメニュー">
          {navigation.map((item) => (
            <Link className={item.href === "/" ? "navHome" : undefined} href={item.href} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>
          ))}
          <Link className="navContact" href="/contact">お問い合わせ</Link>
        </nav>
        <details className="mobileNav">
          <summary aria-label="メニューを開く"><span /><span /><span /></summary>
          <nav aria-label="モバイルメニュー">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>
            ))}
            <Link href="/contact">お問い合わせ</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerLead">
        <div>
          <p className="eyebrow light">CONTACT</p>
          <h2>日韓をつなぐ実習プログラムを、<br />目的に合わせて設計します。</h2>
        </div>
        <Link className="button buttonLight" href="/contact">お問い合わせ窓口 <span>→</span></Link>
      </div>
      <div className="footerGrid">
        <div className="footerBrand">
          <strong>JISA</strong>
          <span>日本インターンシップ支援協会</span>
          <p>海外大学と日本企業を結び、教育としてのインターンシップを設計・支援します。</p>
        </div>
        <nav aria-label="フッターメニュー">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/contact">お問い合わせ</Link>
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
  const style = { "--page-image": image ? `url(${image})` : "none" } as CSSProperties;
  const suggestions: Record<string, string> = {
    "ABOUT JISA": "協会スタッフ・大学関係者との打合せ風景",
    "PROGRAMS": "学生の実習・企業訪問・研修風景",
    "PUBLIC PARTNERSHIP": "HRD Korea・大学との協約・説明会",
    "RESULTS & RESOURCES": "参加学生・大学交流・成果発表の様子",
    "VISION 2026–2027": "日韓の学生と企業をつなぐ活動風景",
    "CONTACT": "JISAオフィス・相談対応の様子",
  };

  return (
    <section className="pageHero">
      <div className="pageHeroInner">
        <div className="pageHeroCopy">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          <p className="pageLead">{intro}</p>
        </div>
        <div className={`pageHeroVisual ${image ? "hasImage" : ""}`} style={style} aria-label={`${label} イメージ掲載エリア`}>
          <span className="visualLabel">JISA / {label}</span>
          {!image && <span className="visualSuggestion"><small>掲載予定写真</small>{suggestions[label] ?? "JISAの活動が伝わる写真"}</span>}
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
  return (
    <aside className="legalNote">
      <strong>制度・在留資格について</strong>
      <p>掲載内容は提供資料に基づく概要です。無給実習、ワーキングホリデー、特定活動を含む在留資格・労働条件は、実施時点の法令、個別カリキュラム、関係機関の判断に基づき事前に確認します。</p>
    </aside>
  );
}
