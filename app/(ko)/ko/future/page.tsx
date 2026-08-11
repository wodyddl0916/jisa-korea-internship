import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../../site-chrome";

export const metadata: Metadata = { title: "향후 계획" };

export default function KoreanFuturePage() {
  return <>
    <PageHero index="06" label="VISION 2026–2027" title="한국 내 사업 기반을 강화해 배움부터 취업까지 지원합니다." intro="HRD Korea와의 협력을 중심으로 한국 현지 운영 체계, 대학·기업 네트워크, 일본 취업 희망자를 위한 커리큘럼 사업을 단계적으로 확대합니다." />
    <section className="section"><div className="wrap"><SectionHeading label="TARGET" title="2027년 연간 100명 규모를 목표로 합니다." text="제도 확산과 네트워크 확대를 추진하고, 장기적으로는 연간 500명까지 지원할 수 있는 체계를 지향합니다." /><div className="roadmap">
      <article className="goalPanel"><span className="big">100명</span><h2>2027년 연간 목표</h2><p>한국 대학과 일본 기업의 참가 기회를 확대하고 교육 품질을 유지하면서 연간 100명 규모의 수용·채용 지원을 목표로 합니다.</p><div className="tagRow"><span className="tag">장기 목표 500명</span><span className="tag">대학·기업망 확대</span></div></article>
      <div className="roadmapList"><article className="roadmapItem"><time>2026–</time><h3>한국 현지 법인·사무소</h3><p>제공 자료에 따르면 사무소 후보지를 선정했으며 현지 법인 설립을 준비하고 있습니다.</p></article><article className="roadmapItem"><time>2026</time><h3>정식 파견회사와 제휴</h3><p>한국의 파견·소개업 관련 허가 요건에 대응해 적법하고 원활한 운영 체계를 구축합니다.</p></article><article className="roadmapItem"><time>2027–</time><h3>일본 취업자 대상 커리큘럼 사업</h3><p>인턴 채용뿐 아니라 한국에서 일본으로 취업하는 사람을 위한 육성·실습 커리큘럼을 운영합니다.</p></article></div>
    </div></div></section>
    <section className="section soft"><div className="wrap split"><SectionHeading label="FUTURE STANDARD" title="규모뿐 아니라 교육 품질을 지속할 수 있는 성장을 추구합니다." /><div className="prose"><p>기업별 실습 내용을 구체화해 학생의 배움, 대학의 교육 목표, 기업의 국제화가 일치하는 운영을 이어 갑니다.</p><p>현지 운영 체계와 전문가 네트워크를 강화해 제도 변경과 체류 자격 심사에도 대응할 수 있는 지원 기반을 구축합니다.</p></div></div></section>
  </>;
}
