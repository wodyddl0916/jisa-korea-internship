import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";

export const metadata: Metadata = { title: "JISA 소개" };

export default function KoreanAboutPage() {
  return <>
    <PageHero index="01" label="ABOUT JISA" title="교육으로서의 국제 인턴십을 올바르게 사회와 연결합니다." intro="JISA는 실제 사회 경험을 통해 학생의 성장과 진로 형성을 지원하는 일본 거점의 인턴십 전문 기관입니다." />
    <section className="section"><div className="wrap split"><SectionHeading label="WHO WE ARE" title="Japan Internship Support Association" text="일본 인턴십 지원 협회의 약칭으로, 2013년부터 전문 사업을 운영하고 있습니다." /><div className="prose"><p>외국인 인턴십 지원 분야의 선도 기관으로서 수용 환경 정비, 교육 프로그램 구축, 해외 대학과 일본 기업의 국제 매칭을 지원해 왔습니다.</p><p>해외 대학의 정규 해외 실습을 일본 기업의 실무 경험과 연결해 글로벌 차세대 리더를 양성하는 것을 목표로 합니다.</p></div></div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="OUR DIFFERENCE" title="소개·파견이 아니라 커리큘럼과 운영을 지원합니다." /><div className="featureGrid">
      <article className="featureCard"><b>01</b><h3>교육 목적 구체화</h3><p>대학의 교육 목표와 기업 실무를 연결해 학점 취득이 가능한 정규과정으로 실습 내용을 설계합니다.</p></article>
      <article className="featureCard"><b>02</b><h3>실습 내용 가시화</h3><p>기업·대학·학생·JISA가 진행 상황을 함께 확인할 수 있는 독자적인 관리·실습 커리큘럼을 제안합니다.</p></article>
      <article className="featureCard"><b>03</b><h3>컴플라이언스 중시</h3><p>강화되는 체류 자격 심사와 외국인 채용 기준을 반영해 적정한 제도 운영을 지원합니다.</p></article>
      <article className="featureCard"><b>04</b><h3>입국부터 수료까지</h3><p>COE·체류 자격 신청, 입국, 생활 지원, 실습 관리, 평가와 결과 보고까지 일관되게 지원합니다.</p></article>
    </div></div></section>
    <section className="section"><div className="wrap split reverse"><div className="quietPanel"><h3>안전하고 신뢰할 수 있는 실습 환경</h3><p>단순한 인력 확보가 아니라 학생의 성장과 기업의 국제화 모두에 도움이 되는 실습을 실현합니다.</p></div><div><SectionHeading label="EXPERT NETWORK" title="지역사회·전문가와의 협력도 적정 운영의 일부입니다." /><div className="prose"><p>상공회의소와 지자체의 외국인 채용 지원 세미나에서 강사로 활동하고, 행정·노무 등 분야별 전문가와 연계한 학습회를 운영합니다.</p><p>출입국재류관리청 신청과 실습 목적 확인, 노동기준감독서 대응이 필요한 경우에도 기업과 협력해 지원합니다.</p></div></div></div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="HISTORY" title="JISA가 걸어온 길" /><div className="timeline">
      <div className="timelineRow"><time>2013</time><div><h3>인턴십 전문 사업 시작</h3><p>외국인 인재 채용 전반의 지원 경험을 축적하며 교육 목적 인턴십 확산에 집중했습니다.</p></div></div>
      <div className="timelineRow"><time>2015</time><div><h3>한국 대학과 교류 시작</h3><p>겨울 4주, 여름 4주·8주 등 대학 교육 일정에 맞춘 단기 실습을 운영했습니다.</p></div></div>
      <div className="timelineRow"><time>현재</time><div><h3>11개국·70개 대학으로 네트워크 확대</h3><p>제공 자료 기준 1,100명 이상, 17개 업종의 수용·채용 지원 실적을 쌓아 왔습니다.</p></div></div>
    </div></div></section>
  </>;
}
