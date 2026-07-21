import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";

export const metadata: Metadata = { title: "HRD Korea 공공 협력" };

export default function KoreanPartnershipPage() {
  return <>
    <PageHero index="03" label="PUBLIC PARTNERSHIP" title="HRD Korea와 함께 지속 가능한 국제 실습 모델을 만듭니다." intro="한국 정부 산하 청년 취업 지원 기관인 한국산업인력공단과의 업무 협약을 바탕으로 해외 취업 지원 사업 WELL을 추진합니다." />
    <section className="section"><div className="wrap split"><SectionHeading label="HRD KOREA × JISA" title="공공 지원과 전문 설계를 하나의 운영 체계로 연결합니다." /><div className="prose"><p>JISA는 일본 내 수용 기업 발굴부터 한국 대학의 운영 창구까지 일관되게 담당하며 글로벌 인재의 육성과 활용을 지원합니다.</p><p>K-Move 등 해외 취업 지원 사업과 연계해 대학 교육 예산의 부담을 줄이고 지속적이며 안정적으로 운영할 수 있는 구조를 지향합니다.</p></div></div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="SUPPORT FLOW" title="기업 발굴부터 실습 평가까지 하나의 흐름으로 지원합니다." /><div className="flow">
      <article className="flowStep"><b>01</b><h3>기업 발굴</h3><p>일본 기업의 사업 내용과 수용 목적을 확인합니다.</p></article>
      <article className="flowStep"><b>02</b><h3>대학·학생 모집</h3><p>한국 대학과의 운영 창구를 맡아 대상자를 모집합니다.</p></article>
      <article className="flowStep"><b>03</b><h3>사전 학습</h3><p>실습 전 2~4개월의 학습으로 역량과 적응력을 높입니다.</p></article>
      <article className="flowStep"><b>04</b><h3>개별 설계</h3><p>기업별 커리큘럼을 작성해 실습 내용을 구체화합니다.</p></article>
      <article className="flowStep"><b>05</b><h3>운영·관리</h3><p>입국, 생활, 실습 진행, 수료 보고까지 지원합니다.</p></article>
    </div></div></section>
    <section className="section"><div className="wrap"><SectionHeading label="PARTNER BENEFITS" title="대학과 기업 모두에게 지속 가능한 가치를 제공합니다." /><div className="benefitColumns">
      <article className="benefitColumn" id="universities"><p className="eyebrow">FOR UNIVERSITIES</p><h3>대학·교육기관의 장점</h3><div className="benefitItem"><strong>낮은 비용으로 국제 실습 운영</strong><p>공공 지원 체계를 활용해 교육 예산 부담을 줄이면서 지속적으로 운영할 수 있습니다.</p></div><div className="benefitItem"><strong>졸업 후까지 이어지는 진로 지원</strong><p>재학생뿐 아니라 졸업생의 일본 취업을 고려한 참가도 지원합니다.</p></div><div className="benefitItem"><strong>교육 목표에 맞춘 설계</strong><p>학부·사업단의 목적, 학점 인정, 운영 시기에 맞춰 프로그램을 조정합니다.</p></div></article>
      <article className="benefitColumn" id="companies"><p className="eyebrow">FOR COMPANIES</p><h3>수용 기업의 장점</h3><div className="benefitItem"><strong>첫 외국인 수용도 안심</strong><p>제도 준비부터 실습 기간 중 관리까지 JISA가 일관되게 지원합니다.</p></div><div className="benefitItem"><strong>전문성을 갖춘 지원자</strong><p>IT·AI·공항 업무 등 전문 역량과 일본어 능력을 갖춘 학생을 연결합니다.</p></div><div className="benefitItem"><strong>정식 채용으로 이어지는 육성</strong><p>실습 내용의 가시화와 개별 설계를 통해 인턴십을 채용으로 연결하는 전략적 활용을 지원합니다.</p></div></article>
    </div></div></section>
  </>;
}
