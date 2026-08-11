import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";

export const metadata: Metadata = { title: "今後の展開" };

export default function FuturePage() {
  return <>
    <PageHero index="06" label="VISION 2026–2027" title="韓国での事業基盤を強化し、学びから就職まで支える。" intro="HRD Koreaとの連携を軸に、韓国現地体制、大学・企業ネットワーク、就職者向けカリキュラム事業を段階的に拡大します。" />
    <section className="section"><div className="wrap"><SectionHeading label="TARGET" title="2027年度、年間100名規模へ。" text="制度普及とネットワーク拡大を進め、将来的には年間500名までを視野に入れた体制を目指します。" />
      <div className="roadmap">
        <article className="goalPanel"><span className="big">100名</span><h2>2027年度の年間目標</h2><p>韓国大学と日本企業の参加機会を増やし、教育品質を保ちながら年間100名規模の受入・採用支援を目指します。</p><div className="tagRow"><span className="tag">将来目標 500名</span><span className="tag">大学・企業網拡大</span></div></article>
        <div className="roadmapList">
          <article className="roadmapItem"><time>2026–</time><h3>韓国現地法人・事務所</h3><p>提供資料では事務所候補地を決定済みとして、現地法人設立に向けた準備を進めています。</p></article>
          <article className="roadmapItem"><time>2026</time><h3>正規派遣会社との提携</h3><p>韓国の派遣紹介業ライセンス要件に対応し、適法で円滑な運営体制の構築を目指します。</p></article>
          <article className="roadmapItem"><time>2027–</time><h3>就職者向けカリキュラム事業</h3><p>インターン採用に加え、韓国から日本へ就職する人を対象とした育成・実習カリキュラムを展開します。</p></article>
        </div>
      </div>
    </div></section>
    <section className="section soft"><div className="wrap split">
      <SectionHeading label="FUTURE STANDARD" title="規模だけでなく、教育品質を持続させる成長へ。" />
      <div className="prose"><p>企業ごとの実習内容を可視化し、学生の学び、大学の教育目標、企業の国際化が一致する運用を継続します。</p><p>現地体制と専門家ネットワークを強化し、制度変更や在留資格審査にも対応できる支援基盤を整備します。</p></div>
    </div></section>
  </>;
}
