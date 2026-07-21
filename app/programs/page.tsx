import type { Metadata } from "next";
import { LegalNote, PageHero, SectionHeading } from "../site-chrome";

export const metadata: Metadata = { title: "3つのプログラム" };

const courses = [
  { id:"course-a", letter:"A", title:"大学主催・短期プログラム", intro:"大学の学部やソフトウェア中心事業団、グローカル事業などが主催し、大学が参加者を募集する短期コースです。", details:[["主催","大学・学部・各事業団"],["期間","夏季4週・8週／冬季4週"],["費用支援","渡航・宿泊・実施費用等"],["対象","大学が選考した学生"]], bullets:["成績優秀者に支援金・奨学金を提供し、学生負担を抑えて実施","JISAが受入企業選定、プログラム作成、滞在管理、移動・展示会・企業視察、報告書作成まで企画運営","期間・内容は主催大学の教育プログラムに合わせてカスタマイズ","提供資料では無給短期実習として整理。入国・在留資格要件は個別に事前確認"] },
  { id:"course-b", letter:"B", title:"HRD Korea連携プログラム", intro:"韓国産業人力公団とJISAの連携により、公的支援金を活用して実施するコースです。卒業生にも参加機会を広げます。", details:[["主催・企業募集","JISA"],["期間","2〜4か月"],["募集","年3〜4回予定"],["手続","ワーキングホリデーを個人申請"]], bullets:["韓国産業人力公団の支援金を参加学生へ直接支給","大学の負担と学生の自己負担を抑えた実施モデル","実習開始前に2〜4か月の学習支援を実施","企業の事業内容に合わせて個別カリキュラムを作成・可視化","提供資料では無給実習モデルとして整理。ワーキングホリデーの詳細は別紙および最新制度を個別確認"] },
  { id:"course-c", letter:"C", title:"長期・有給インターンシップ", intro:"JISAが11か国で展開してきた基本コース。海外大学の教育課程の一環として、日本企業で専門分野に関連した実践実習を行います。", details:[["主催","JISA"],["期間","3か月・6か月〜最長1年"],["実施形態","有給インターンシップ"],["在留資格","特定活動・告示9号／12号"]], bullets:["提供資料基準で10年以上、1,100名以上、17業種の実績","大学の専攻分野と企業の業務を結ぶ実習カリキュラム","資料上は週40時間の実習を想定した長期制度として整理","在留資格・労働条件・対象要件は実施時点の制度に基づき個別確認"] },
];

export default function ProgramsPage() {
  return <>
    <PageHero index="02" label="PROGRAMS" title="目的・期間・支援制度から選べる、3つの実習コース。" intro="大学主催の短期型、公的支援を活用する中期型、教育課程としての長期有給型を、参加者と受入企業の目的に合わせて設計します。" />
    <section className="section"><div className="wrap">
      <nav className="courseNav" aria-label="コース内メニュー"><a href="#course-a">A 大学主催・短期</a><a href="#course-b">B HRD Korea連携</a><a href="#course-c">C 長期・有給</a></nav>
      {courses.map(course => <article className="courseBlock" id={course.id} key={course.id}>
        <div className="courseHeader"><span className="courseMark">{course.letter}</span><div><h2>{course.title}</h2><p>{course.intro}</p></div></div>
        <div className="detailGrid">{course.details.map(([label,value]) => <div className="detail" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        <ul className="bulletList">{course.bullets.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}
      <LegalNote />
    </div></section>
    <section className="section soft"><div className="wrap split"><SectionHeading label="JISA SUPPORT" title="企画から報告まで、実施内容全体をプロデュース。" /><div className="prose"><p>採用企業の選定、学生とのマッチング、教育プログラム作成、滞在中の管理、移動や視察の引率、成果報告まで、大学と企業の計画に合わせて支援します。</p><p>主業務は学習・実習カリキュラムの設計です。外国人材の紹介や人材管理だけを目的とするサービスではありません。</p></div></div></section>
  </>;
}
