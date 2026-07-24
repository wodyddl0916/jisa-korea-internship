import Link from "next/link";
import { HomeHero } from "../home-hero";
import { LegalNote, SectionHeading } from "../site-chrome";
import { stats, videos } from "../site-data";
import { SectionMedia } from "../section-media";
import { StatBand } from "../stat-band";
import { VideoBlock } from "../video-block";

export default function Home() {
  return (
    <>
      <HomeHero />

      <StatBand stats={stats} label="JISAの実績" />

      <section className="section">
        <div className="wrap splitMedia">
          <div>
            <SectionHeading label="OUR ROLE" title="人材紹介ではなく、教育と実務を設計する支援機関です。" />
            <div className="prose">
              <p>JISAは、海外大学が実施する正規の海外実習として、単位取得を伴う教育課程の一環としての日本企業での職場体験を支援します。</p>
              <p><strong>単なる労働力の確保ではありません。</strong> 実習内容の可視化、在留資格取得に必要なカリキュラム作成、来日・生活・実習期間中の管理までを一貫して支えます。</p>
              <Link className="textLink" href="/about">JISAの理念と支援体制 <span>→</span></Link>
            </div>
          </div>
          <SectionMedia name="our-role" alt="大学関係者との打合せ風景" />
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <SectionHeading label="FOR EACH PARTNER" title="立場ごとに必要な情報をご案内します。" text="大学、受入企業、参加希望者の三者に価値が生まれるプログラムを目指します。" />
          <div className="audienceGrid">
            <article className="audienceCard surfaceCard"><span className="number">01</span><h3>大学・教育機関の方</h3><p>国際実習、単位認定から、最終的な就職支援までご案内します。</p><Link className="cardAction" href="/partnership#universities">大学のメリット <b>→</b></Link></article>
            <article className="audienceCard surfaceCard"><span className="number">02</span><h3>参加を希望する方</h3><p>大学主催の短期実習、政府支援型、長期有給実習から目的に合う制度を確認できます。</p><Link className="cardAction" href="/programs">参加コースを確認 <b>→</b></Link></article>
            <article className="audienceCard surfaceCard"><span className="number">03</span><h3>日本企業の方</h3><p>受入準備、学生とのマッチング、実習設計、在留資格、来日後管理まで支援します。</p><Link className="cardAction" href="/partnership#companies">企業のメリット <b>→</b></Link></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading label="THREE PROGRAMS" title="目的と期間で選べる、3つの韓国特化型プログラム。" />
          <div className="programPreview">
            <article className="programMini surfaceCard"><span className="courseLetter">A</span><h3>大学主催・短期</h3><p>夏季・冬季休暇を活用し、大学や事業団の教育目的に合わせて設計します。</p><div className="tagRow"><span className="tag">4〜8週間</span><span className="tag">大学主催</span></div><Link className="cardAction" href="/programs#course-a">詳しく見る <b>→</b></Link></article>
            <article className="programMini surfaceCard"><span className="courseLetter">B</span><h3>HRD Korea連携</h3><p>公的支援とワーキングホリデーを活用し、卒業生にも参加機会を広げます。</p><div className="tagRow"><span className="tag">2〜4か月</span><span className="tag">年3〜4回</span></div><Link className="cardAction" href="/programs#course-b">詳しく見る <b>→</b></Link></article>
            <article className="programMini surfaceCard"><span className="courseLetter">C</span><h3>長期・有給実習</h3><p>大学教育課程の一環として、専門分野に関連した実践的な実習を行います。</p><div className="tagRow"><span className="tag">3か月〜1年</span><span className="tag">11か国展開</span></div><Link className="cardAction" href="/programs#course-c">詳しく見る <b>→</b></Link></article>
          </div>
          <div className="sectionAction"><Link className="button" href="/programs">コースを詳しく比較する <span>→</span></Link></div>
          <LegalNote />
        </div>
      </section>

      <section className="section soft">
        <div className="wrap splitMedia reverse">
          <SectionMedia name="partnership" alt="入国後の日本語講習の様子" />
          <div>
            <SectionHeading label="HRD KOREA × JISA" title="信頼性と継続性を、公的な連携から。" text="大学の教育予算を圧迫しにくい仕組みと、企業が安心して受け入れられる支援体制を構築します。" />
            <div className="quietPanel"><p className="eyebrow">PUBLIC PARTNERSHIP</p><h3>韓国産業人力公団との連携モデル</h3><p>海外就業支援事業「WELL」や「K-Move」等の公的支援スキームと連携し、JISAが企業開拓から大学窓口、個別カリキュラム設計までを担います。</p></div>
            <Link className="textLink" href="/partnership">連携モデルを見る <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading label="PROGRAM RECORDS" title="実際の現場を、映像でご覧いただけます。" text="入国セミナー、参加学生のインタビュー、採用面接の記録です。" />
          <VideoBlock videos={videos.slice(0, 3)} />
          <div className="sectionAction"><Link className="button" href="/results">すべての記録を見る <span>→</span></Link></div>
        </div>
      </section>
    </>
  );
}
