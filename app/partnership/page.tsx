import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../site-chrome";

export const metadata: Metadata = { title: "HRD Koreaとの公的連携" };

export default function PartnershipPage() {
  return <>
    <PageHero index="03" label="PUBLIC PARTNERSHIP" title="HRD Koreaとともに、継続できる国際実習モデルへ。" intro="韓国政府傘下の若者就業支援機関である韓国産業人力公団との業務協約を軸に、海外就業支援事業「WELL」を推進します。" />
    <section className="section"><div className="wrap split">
      <SectionHeading label="HRD KOREA × JISA" title="公的支援と専門設計を、一つの運用体制に。" />
      <div className="prose"><p>JISAは日本国内での受入企業の開拓から、韓国の大学における実施窓口までを一貫して担い、グローバル人材の育成と活用を支援します。</p><p>「K-Move」などの海外就職支援事業と連携し、大学の教育予算を圧迫しにくく、継続的かつ安定的に実施できる仕組みを目指します。</p></div>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="SUPPORT FLOW" title="企業開拓から実習評価まで、一つの流れで支援します。" />
      <div className="flow">
        <article className="flowStep"><b>01</b><h3>企業開拓</h3><p>日本国内の事業内容と受入目的を確認します。</p></article>
        <article className="flowStep"><b>02</b><h3>大学・学生募集</h3><p>韓国大学との窓口を担い、対象者を募集します。</p></article>
        <article className="flowStep"><b>03</b><h3>事前学習</h3><p>実習前2〜4か月の学習で能力と適応力を高めます。</p></article>
        <article className="flowStep"><b>04</b><h3>個別設計</h3><p>企業ごとのカリキュラムを作成し可視化します。</p></article>
        <article className="flowStep"><b>05</b><h3>実施・管理</h3><p>来日、生活、実習進捗、修了報告まで支援します。</p></article>
      </div>
    </div></section>
    <section className="section"><div className="wrap"><SectionHeading label="PARTNER BENEFITS" title="大学と企業、それぞれに継続可能な価値を。" />
      <div className="benefitColumns">
        <article className="benefitColumn" id="universities"><p className="eyebrow">FOR UNIVERSITIES</p><h3>大学・教育機関のメリット</h3><div className="benefitItem"><strong>低コストで国際実習を実現</strong><p>公的支援スキームを活用し、教育予算を抑えながら継続的に運営できます。</p></div><div className="benefitItem"><strong>卒業後までキャリア支援</strong><p>在学中だけでなく、卒業生の日本就職を視野に入れた参加も支援します。</p></div><div className="benefitItem"><strong>教育目標に合わせた設計</strong><p>学部や事業団の目的、単位認定、実施時期に合わせてカスタマイズします。</p></div></article>
        <article className="benefitColumn" id="companies"><p className="eyebrow">FOR COMPANIES</p><h3>受入企業のメリット</h3><div className="benefitItem"><strong>初めての外国人受入れも安心</strong><p>制度準備から実施期間中までJISAが一貫して支援します。</p></div><div className="benefitItem"><strong>専門性を持つ候補者</strong><p>IT・AI・空港業務などの専門スキルと日本語力を備えた学生をマッチングします。</p></div><div className="benefitItem"><strong>本採用につながる育成</strong><p>実習内容の可視化と個別設計により、インターンから採用への戦略的活用を支えます。</p></div></article>
      </div>
    </div></section>
  </>;
}
