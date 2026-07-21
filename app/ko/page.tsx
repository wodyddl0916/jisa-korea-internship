import Link from "next/link";
import { HomeHero } from "../home-hero";
import { LegalNote, SectionHeading } from "../site-chrome";
import { statsKo } from "../site-data-ko";

export default function KoreanHome() {
  return <>
    <HomeHero locale="ko" />
    <section className="statBand" aria-label="JISA 주요 실적"><div className="stats">{statsKo.map(stat => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

    <section className="section"><div className="wrap split">
      <SectionHeading label="OUR ROLE" title="인재 소개가 아니라 교육과 실무를 설계하는 지원 기관입니다." />
      <div className="prose"><p>JISA는 해외 대학이 운영하는 정규 해외 실습을 일본 기업의 현장 경험과 연결하고, 학점 취득이 가능한 교육과정의 일부로 운영될 수 있도록 지원합니다.</p><p><strong>단순한 인력 확보를 위한 사업이 아닙니다.</strong> 실습 내용의 구체화, 체류 자격 취득에 필요한 커리큘럼 작성, 일본 입국과 생활, 실습 기간 중 관리까지 일관되게 지원합니다.</p><Link className="textLink" href="/ko/about">JISA의 철학과 지원 체계 <span>→</span></Link></div>
    </div></section>

    <section className="section soft"><div className="wrap">
      <SectionHeading label="FOR EACH PARTNER" title="대학·기업·참가자에게 필요한 정보를 안내합니다." text="세 주체 모두에게 지속 가능한 가치가 생기는 프로그램을 지향합니다." />
      <div className="audienceGrid">
        <article className="audienceCard surfaceCard"><span className="number">01</span><h3>대학·교육기관</h3><p>비용 부담을 낮춘 국제 실습, 학점 인정, 졸업생을 포함한 진로 지원 방안을 안내합니다.</p><Link className="cardAction" href="/ko/partnership#universities">대학의 장점 <b>→</b></Link></article>
        <article className="audienceCard surfaceCard"><span className="number">02</span><h3>일본 기업</h3><p>수용 준비, 학생 매칭, 실습 설계, 체류 자격, 일본 입국 후 관리까지 지원합니다.</p><Link className="cardAction" href="/ko/partnership#companies">기업의 장점 <b>→</b></Link></article>
        <article className="audienceCard surfaceCard"><span className="number">03</span><h3>참가 희망자</h3><p>대학 주관 단기 실습, 정부 지원형, 장기 유급 실습 중 목적에 맞는 제도를 확인할 수 있습니다.</p><Link className="cardAction" href="/ko/programs">참가 과정 확인 <b>→</b></Link></article>
      </div>
    </div></section>

    <section className="section"><div className="wrap">
      <SectionHeading label="THREE PROGRAMS" title="목적과 기간에 따라 선택하는 3가지 한국 특화 프로그램." />
      <div className="programPreview">
        <article className="programMini surfaceCard"><span className="courseLetter">A</span><h3>대학 주관·단기</h3><p>여름·겨울방학을 활용해 대학과 사업단의 교육 목적에 맞게 설계합니다.</p><div className="tagRow"><span className="tag">4~8주</span><span className="tag">대학 주관</span></div><Link className="cardAction" href="/ko/programs#course-a">자세히 보기 <b>→</b></Link></article>
        <article className="programMini surfaceCard"><span className="courseLetter">B</span><h3>HRD Korea 연계</h3><p>공공 지원과 워킹홀리데이 제도를 활용해 졸업생에게도 참가 기회를 제공합니다.</p><div className="tagRow"><span className="tag">2~4개월</span><span className="tag">연 3~4회</span></div><Link className="cardAction" href="/ko/programs#course-b">자세히 보기 <b>→</b></Link></article>
        <article className="programMini surfaceCard"><span className="courseLetter">C</span><h3>장기·유급 실습</h3><p>대학 교육과정의 일부로 전공 분야와 연계된 실무 경험을 쌓습니다.</p><div className="tagRow"><span className="tag">3개월~1년</span><span className="tag">11개국 운영</span></div><Link className="cardAction" href="/ko/programs#course-c">자세히 보기 <b>→</b></Link></article>
      </div>
      <div className="sectionAction"><Link className="button" href="/ko/programs">과정 자세히 비교하기 <span>→</span></Link></div><LegalNote />
    </div></section>

    <section className="section soft"><div className="wrap split reverse">
      <div className="quietPanel"><p className="eyebrow">PUBLIC PARTNERSHIP</p><h3>한국산업인력공단과의 협력 모델</h3><p>해외 취업 지원 사업인 WELL·K-Move 등 공공 지원 체계와 연계하고, JISA가 기업 발굴부터 대학 창구, 개별 커리큘럼 설계까지 담당합니다.</p></div>
      <div><SectionHeading label="HRD KOREA × JISA" title="공공 협력을 기반으로 신뢰성과 지속성을 높입니다." text="대학의 교육 예산 부담을 낮추고 기업이 안심하고 참가자를 수용할 수 있는 지원 체계를 구축합니다." /><Link className="textLink" href="/ko/partnership">협력 모델 보기 <span>→</span></Link></div>
    </div></section>
  </>;
}
