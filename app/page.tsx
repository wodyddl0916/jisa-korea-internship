import Link from "next/link";
import { HomeHero } from "./home-hero";
import { LegalNote, SectionHeading } from "./site-chrome";
import { stats } from "./site-data";

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="statBand" aria-label="JISAの実績">
        <div className="stats">
          {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <SectionHeading label="OUR ROLE" title="人材紹介ではなく、教育と実務を設計する支援機関です。" />
          <div className="prose">
            <p>JISAは、海外大学が実施する正規の海外実習として、単位取得を伴う教育課程の一環としての日本企業での職場体験を支援します。</p>
            <p><strong>単なる労働力の確保ではありません。</strong> 実習内容の可視化、在留資格取得に必要なカリキュラム作成、来日・生活・実習期間中の管理までを一貫して支えます。</p>
            <Link className="textLink" href="/about">JISAの理念と支援体制 <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <SectionHeading label="FOR EACH PARTNER" title="立場ごとに必要な情報をご案内します。" text="大学、受入企業、参加希望者の三者に価値が生まれるプログラムを目指します。" />
          <div className="audienceGrid">
            <Link className="audienceCard interactiveCard" href="/partnership#universities"><span className="number">01</span><h3>大学・教育機関の方</h3><p>低コストで継続できる国際実習、単位認定、卒業生を含むキャリア支援をご案内します。</p><span className="cardAction">大学のメリット <b>→</b></span></Link>
            <Link className="audienceCard interactiveCard" href="/partnership#companies"><span className="number">02</span><h3>日本企業の方</h3><p>受入準備、学生とのマッチング、実習設計、在留資格、来日後管理まで支援します。</p><span className="cardAction">企業のメリット <b>→</b></span></Link>
            <Link className="audienceCard interactiveCard" href="/programs"><span className="number">03</span><h3>参加を希望する方</h3><p>大学主催の短期実習、政府支援型、長期有給実習から目的に合う制度を確認できます。</p><span className="cardAction">参加コースを確認 <b>→</b></span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading label="THREE PROGRAMS" title="目的と期間で選べる、3つの韓国特化型プログラム。" />
          <div className="programPreview">
            <Link className="programMini interactiveCard" href="/programs#course-a"><span className="courseLetter">A</span><h3>大学主催・短期</h3><p>夏季・冬季休暇を活用し、大学や事業団の教育目的に合わせて設計します。</p><div className="tagRow"><span className="tag">4〜8週間</span><span className="tag">大学主催</span></div><span className="cardAction">詳しく見る <b>→</b></span></Link>
            <Link className="programMini interactiveCard" href="/programs#course-b"><span className="courseLetter">B</span><h3>HRD Korea連携</h3><p>公的支援とワーキングホリデーを活用し、卒業生にも参加機会を広げます。</p><div className="tagRow"><span className="tag">2〜4か月</span><span className="tag">年3〜4回</span></div><span className="cardAction">詳しく見る <b>→</b></span></Link>
            <Link className="programMini interactiveCard" href="/programs#course-c"><span className="courseLetter">C</span><h3>長期・有給実習</h3><p>大学教育課程の一環として、専門分野に関連した実践的な実習を行います。</p><div className="tagRow"><span className="tag">3か月〜1年</span><span className="tag">11か国展開</span></div><span className="cardAction">詳しく見る <b>→</b></span></Link>
          </div>
          <div className="sectionAction"><Link className="button" href="/programs">コースを詳しく比較する <span>→</span></Link></div>
          <LegalNote />
        </div>
      </section>

      <section className="section soft">
        <div className="wrap split reverse">
          <div className="quietPanel"><p className="eyebrow">PUBLIC PARTNERSHIP</p><h3>韓国産業人力公団との連携モデル</h3><p>海外就業支援事業「WELL」や「K-Move」等の公的支援スキームと連携し、JISAが企業開拓から大学窓口、個別カリキュラム設計までを担います。</p></div>
          <div><SectionHeading label="HRD KOREA × JISA" title="信頼性と継続性を、公的な連携から。" text="大学の教育予算を圧迫しにくい仕組みと、企業が安心して受け入れられる支援体制を構築します。" /><Link className="textLink" href="/partnership">連携モデルを見る <span>→</span></Link></div>
        </div>
      </section>
    </>
  );
}
