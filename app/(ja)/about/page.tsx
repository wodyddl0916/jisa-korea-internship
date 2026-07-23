import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";

export const metadata: Metadata = { title: "JISAとは" };

export default function AboutPage() {
  return <>
    <PageHero index="01" label="ABOUT JISA" title="教育としての国際インターンシップを、正しく社会へ。" intro="JISAは、実社会での経験を通じた学生の成長とキャリア形成を支援する、日本を拠点としたインターンシップ専門機関です。" />
    <section className="section"><div className="wrap split">
      <SectionHeading label="WHO WE ARE" title="Japan Internship Support Association" text="日本インターンシップ支援協会の略称として、2013年から専門事業を展開しています。" />
      <div className="prose"><p>外国人インターンシップ支援のパイオニアとして、受入環境の整備、教育プログラムの構築、海外大学と日本企業の国際的なマッチングを支援してきました。</p><p>海外大学が実施する正規の海外実習を、日本企業での実務経験につなぎ、グローバルな次世代リーダーの育成を目指します。</p></div>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="OUR DIFFERENCE" title="紹介・派遣ではなく、カリキュラムと運用を支えます。" />
      <div className="featureGrid">
        <article className="featureCard"><b>01</b><h3>教育目的の明確化</h3><p>大学の教育目標と企業の実務を接続し、単位取得を伴う正規課程としての実習内容を設計します。</p></article>
        <article className="featureCard"><b>02</b><h3>実習内容の可視化</h3><p>企業・大学・学生・JISAが進捗を確認できる、独自の管理・実習カリキュラムを提案します。</p></article>
        <article className="featureCard"><b>03</b><h3>コンプライアンス重視</h3><p>厳格化する在留資格審査や外国人採用ルールを踏まえ、適正な制度運用を支えます。</p></article>
        <article className="featureCard"><b>04</b><h3>来日から修了まで</h3><p>COE・在留資格申請、入国、生活支援、実習期間中の管理、評価・報告まで一貫して支援します。</p></article>
      </div>
    </div></section>
    <section className="section"><div className="wrap split reverse">
      <div className="quietPanel"><h3>安心・安全な実習環境</h3><p>単なる労働力確保ではなく、学生の成長と企業の国際化の双方につながる実習を実現します。</p></div>
      <div><SectionHeading label="EXPERT NETWORK" title="地域・専門家との連携も、適正運用の一部です。" /><div className="prose"><p>商工会議所や自治体で「外国人採用支援セミナー」の講師を務めるほか、士業などの専門家と連携した勉強会を開催しています。</p><p>入国管理局への申請・実習目的の確認や、労働基準監督署等への対応が必要な場合も、企業と連携しながら支援します。</p></div></div>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="HISTORY" title="JISAの歩み" />
      <div className="timeline">
        <div className="timelineRow"><time>2013</time><div><h3>インターンシップ専門事業を開始</h3><p>外国人材採用全般の支援ノウハウを蓄積し、教育目的のインターンシップ普及に注力。</p></div></div>
        <div className="timelineRow"><time>2015</time><div><h3>韓国大学との交流を開始</h3><p>冬季4週間、夏季4週間・8週間など、大学教育に合わせた短期実習を展開。</p></div></div>
        <div className="timelineRow"><time>現在</time><div><h3>11か国・70大学へネットワークを拡大</h3><p>提供資料基準で1,100名以上、17業種の受入・採用支援実績を積み重ねています。</p></div></div>
      </div>
    </div></section>
  </>;
}
