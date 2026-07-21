import type { Metadata } from "next";
import { LegalNote, PageHero, SectionHeading } from "../../site-chrome";

export const metadata: Metadata = { title: "3개 프로그램" };

const courses = [
  { id: "course-a", letter: "A", title: "대학 주관 단기 프로그램", intro: "대학 학부, 소프트웨어 중심 사업단, 글로컬 사업단 등이 주관하고 대학이 참가자를 모집하는 단기 과정입니다.", details: [["주관", "대학·학부·각 사업단"], ["기간", "여름 4주·8주 / 겨울 4주"], ["비용 지원", "항공·숙박·운영 비용 등"], ["대상", "대학이 선발한 학생"]], bullets: ["성적 우수자에게 지원금·장학금을 제공해 학생의 비용 부담을 완화", "JISA가 수용 기업 선정, 프로그램 작성, 체류 관리, 이동·전시회·기업 시찰, 결과 보고서 작성까지 기획·운영", "기간과 내용은 주관 대학의 교육 프로그램에 맞춰 맞춤 설계", "제공 자료에서는 무급 단기 실습으로 분류되며 입국·체류 자격 요건은 개별적으로 사전 확인"] },
  { id: "course-b", letter: "B", title: "HRD Korea 연계 프로그램", intro: "한국산업인력공단과 JISA의 협력을 통해 공공 지원금을 활용하는 과정으로, 졸업생에게도 참가 기회를 제공합니다.", details: [["주관·기업 모집", "JISA"], ["기간", "2~4개월"], ["모집", "연 3~4회 예정"], ["절차", "워킹홀리데이 개별 신청"]], bullets: ["한국산업인력공단 지원금을 참가 학생에게 직접 지급", "대학과 학생의 비용 부담을 낮춘 운영 모델", "실습 시작 전 2~4개월 동안 사전 학습 지원", "기업의 사업 내용에 맞춰 개별 커리큘럼을 작성하고 실습 내용을 가시화", "제공 자료에서는 무급 실습 모델로 분류되며 워킹홀리데이 세부 사항은 별도 자료와 최신 제도를 개별 확인"] },
  { id: "course-c", letter: "C", title: "장기 유급 인턴십", intro: "JISA가 11개국에서 운영해 온 기본 과정으로, 해외 대학 교육과정의 일부로 일본 기업에서 전공 관련 실무를 경험합니다.", details: [["주관", "JISA"], ["기간", "3개월·6개월~최장 1년"], ["운영 형태", "유급 인턴십"], ["체류 자격", "특정활동 고시 9호·12호"]], bullets: ["제공 자료 기준 10년 이상, 1,100명 이상, 17개 업종의 운영 실적", "대학 전공 분야와 기업 업무를 연결하는 실습 커리큘럼", "제공 자료상 주 40시간 실습을 전제로 한 장기 제도로 분류", "체류 자격·근로 조건·대상 요건은 시행 시점의 제도에 따라 개별 확인"] },
];

export default function KoreanProgramsPage() {
  return <>
    <PageHero index="02" label="PROGRAMS" title="목적·기간·지원 제도에 따라 선택하는 3가지 실습 과정." intro="대학 주관 단기형, 공공 지원을 활용하는 중기형, 교육과정으로 운영하는 장기 유급형을 참가자와 수용 기업의 목적에 맞게 설계합니다." />
    <section className="section"><div className="wrap">
      <nav className="courseNav" aria-label="과정 내 메뉴"><a href="#course-a">A 대학 주관·단기</a><a href="#course-b">B HRD Korea 연계</a><a href="#course-c">C 장기·유급</a></nav>
      {courses.map(course => <article className="courseBlock" id={course.id} key={course.id}><div className="courseHeader"><span className="courseMark">{course.letter}</span><div><h2>{course.title}</h2><p>{course.intro}</p></div></div><div className="detailGrid">{course.details.map(([label, value]) => <div className="detail" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><ul className="bulletList">{course.bullets.map(item => <li key={item}>{item}</li>)}</ul></article>)}
      <LegalNote />
    </div></section>
    <section className="section soft"><div className="wrap split"><SectionHeading label="JISA SUPPORT" title="기획부터 결과 보고까지 실습 운영 전반을 설계합니다." /><div className="prose"><p>수용 기업 선정, 학생 매칭, 교육 프로그램 작성, 체류 관리, 이동과 시찰 인솔, 성과 보고까지 대학과 기업의 계획에 맞춰 지원합니다.</p><p>핵심 업무는 학습·실습 커리큘럼 설계입니다. 외국인 인재 소개나 인력 관리만을 목적으로 하는 서비스가 아닙니다.</p></div></div></section>
  </>;
}
