import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";
import { briefingUniversities, pastUniversities, resources, stats, videos } from "../../site-data";
import { StatBand } from "../../stat-band";

export const metadata: Metadata = { title: "実績・資料" };

export default function ResultsPage() {
  return <>
    <PageHero index="04" label="RESULTS & RESOURCES" title="数字、大学、記録から見るJISAの活動。" intro="2015年に始まった韓国大学との交流をはじめ、グローバルネットワーク、実施大学、説明実績、映像資料を整理してご紹介します。" />
    <StatBand stats={stats} />
    <section className="section"><div className="wrap fieldShowcase">
      <SectionHeading label="INTERNSHIP SCENES" title="実習の現場を、写真でご紹介します。" text="日本企業の職場で、参加者が実務やチームでの仕事に取り組む様子です。" />
      <figure className="fieldPhoto">
        <img src="/assets/internship-workplace-collage.jpg" alt="日本企業でのインターンシップ実習風景" width="1448" height="1086" />
        <figcaption>WORKPLACE / TEAM / SOFTWARE</figcaption>
      </figure>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="KOREA NETWORK" title="韓国大学との交流・実施実績" text="実際にインターンシップを実施した大学と、2025〜2026年度に制度説明を行った大学を分けて掲載しています。" />
      <div className="universityColumns">
        <article className="universityGroup"><h3>インターンシップ実施大学</h3><p>2015年以降の提供資料に基づく実施先</p><ul className="nameList">{pastUniversities.map(name => <li key={name}>{name}</li>)}</ul></article>
        <article className="universityGroup"><h3>制度説明を実施した大学</h3><p>2025〜2026年度の説明実績</p><ul className="nameList">{briefingUniversities.map(name => <li key={name}>{name}</li>)}</ul></article>
      </div>
    </div></section>
    <section className="section"><div className="wrap"><SectionHeading label="PROGRAM RECORDS" title="セミナー、来日、面接を映像で確認できます。" text="各大学の入国セミナー、参加者インタビュー、空港での来日記録など、提供資料に記載された映像リンクです。" />
      <div className="videoGrid">{videos.map((video, index) => <a className="videoCard" href={video.url} target="_blank" rel="noreferrer" key={video.url}><span>VIDEO {String(index + 1).padStart(2,"0")}</span><strong>{video.title}</strong><small>{video.school}</small><b>動画を見る →</b></a>)}</div>
    </div></section>
    <section className="section"><div className="wrap"><SectionHeading label="DOCUMENTS" title="JISAと制度を知る説明資料" />
      <div className="resourceGrid">{resources.map((resource, index) => <a className="resourceCard" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}><span>GUIDE {String(index + 1).padStart(2,"0")}</span><strong>{resource.label}</strong><small>{resource.note}</small><b>資料を開く →</b></a>)}</div>
      <aside className="legalNote"><strong>実績表記について</strong><p>国数、大学数、人数、業種数、大学名は提供資料に基づく掲載内容です。公開前に集計期間、実施区分、正式名称の最終確認を行うことを推奨します。</p></aside>
    </div></section>
  </>;
}
