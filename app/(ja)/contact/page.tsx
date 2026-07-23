import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";
import { resources } from "../../site-data";

export const metadata: Metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  const mailto = (subject: string) => `mailto:tsuka@jisa1234.jp?subject=${encodeURIComponent(subject)}`;
  return <>
    <PageHero index="06" label="CONTACT" title="立場と目的に合わせて、ご相談ください。" intro="大学との新規提携、日本企業の受入れ、プログラム参加、説明会・資料請求について、それぞれの状況からご案内します。" />
    <section className="section"><div className="wrap"><SectionHeading label="CONTACT BY PURPOSE" title="お問い合わせ内容をお選びください。" />
      <div className="contactChoice">
        <article className="contactCard"><b>01</b><h2>大学・教育機関</h2><p>短期プログラム、単位認定、公的支援、学部・事業団単位での実施について。</p><a className="button" href={mailto("大学・教育機関からの相談")}>大学として相談する <span>→</span></a></article>
        <article className="contactCard"><b>02</b><h2>受入れを検討する企業</h2><p>受入条件、候補者、カリキュラム、在留資格、インターンから採用への設計について。</p><a className="button" href={mailto("受入企業からの相談")}>企業として相談する <span>→</span></a></article>
        <article className="contactCard"><b>03</b><h2>参加希望者</h2><p>参加可能なコース、大学募集、卒業生向け制度、事前学習、必要な手続について。</p><a className="button" href={mailto("インターンシップ参加相談")}>参加について相談する <span>→</span></a></article>
      </div>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="DIRECT CONTACT" title="JISAお問い合わせ窓口" />
      <div className="contactDetails"><div className="contactDetail"><span>EMAIL</span><a href="mailto:tsuka@jisa1234.jp">tsuka@jisa1234.jp</a></div><div className="contactDetail"><span>TELEPHONE</span><a href="tel:09048421234">090-4842-1234</a></div><div className="contactDetail"><span>LINE</span><strong>jisa1234</strong></div></div>
    </div></section>
    <section className="section"><div className="wrap"><SectionHeading label="REQUEST MATERIALS" title="説明資料を確認する" text="JISAの概要、17業務、韓国大学向け資料をオンラインで確認できます。" />
      <div className="resourceGrid">{resources.map((resource,index) => <a className="resourceCard" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}><span>MATERIAL {String(index+1).padStart(2,"0")}</span><strong>{resource.label}</strong><small>{resource.note}</small><b>資料を開く →</b></a>)}</div>
      <aside className="legalNote"><strong>説明会・資料請求について</strong><p>説明会日程やダウンロード専用資料は確定情報を受領後に追加できます。現時点では上記メール窓口および既存説明資料へご案内します。</p></aside>
    </div></section>
  </>;
}
