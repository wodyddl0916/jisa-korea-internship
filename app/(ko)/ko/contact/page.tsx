import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../../site-chrome";
import { resourcesKo } from "../../../site-data-ko";

export const metadata: Metadata = { title: "문의" };

export default function KoreanContactPage() {
  const mailto = (subject: string) => `mailto:tsuka@jisa1234.jp?subject=${encodeURIComponent(subject)}`;
  return <>
    <PageHero index="06" label="CONTACT" title="기관의 입장과 목적에 맞춰 상담해 드립니다." intro="대학과의 신규 협력, 일본 기업의 인턴 수용, 프로그램 참가, 설명회와 자료 요청을 각 상황에 맞게 안내합니다." />
    <section className="section"><div className="wrap"><SectionHeading label="CONTACT BY PURPOSE" title="문의 목적을 선택해 주세요." /><div className="contactChoice">
      <article className="contactCard"><b>01</b><h2>대학·교육기관</h2><p>단기 프로그램, 학점 인정, 공공 지원, 학부·사업단 단위 운영에 관해 상담합니다.</p><a className="button" href={mailto("한국 대학·교육기관 상담")}>대학 상담 신청 <span>→</span></a></article>
      <article className="contactCard"><b>02</b><h2>수용을 검토하는 일본 기업</h2><p>수용 조건, 지원자, 커리큘럼, 체류 자격, 인턴십에서 채용으로 이어지는 설계를 상담합니다.</p><a className="button" href={mailto("일본 수용 기업 상담")}>기업 상담 신청 <span>→</span></a></article>
      <article className="contactCard"><b>03</b><h2>참가 희망자</h2><p>참가 가능한 과정, 대학 모집, 졸업생 대상 제도, 사전 학습과 필요한 절차를 안내합니다.</p><a className="button" href={mailto("인턴십 참가 상담")}>참가 상담 신청 <span>→</span></a></article>
    </div></div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="DIRECT CONTACT" title="JISA 문의 창구" /><div className="contactDetails"><div className="contactDetail"><span>EMAIL</span><a href="mailto:tsuka@jisa1234.jp">tsuka@jisa1234.jp</a></div><div className="contactDetail"><span>TELEPHONE</span><a href="tel:09048421234">090-4842-1234</a></div><div className="contactDetail"><span>LINE</span><strong>jisa1234</strong></div></div></div></section>
    <section className="section"><div className="wrap"><SectionHeading label="REQUEST MATERIALS" title="안내 자료 확인" text="JISA 개요, 17개 업무, 한국 대학 대상 자료를 온라인에서 확인할 수 있습니다." /><div className="resourceGrid">{resourcesKo.map((resource, index) => <a className="resourceCard" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}><span>MATERIAL {String(index + 1).padStart(2, "0")}</span><strong>{resource.label}</strong><small>{resource.note}</small><b>자료 열기 →</b></a>)}</div><aside className="legalNote"><strong>설명회·자료 요청 안내</strong><p>설명회 일정과 전용 다운로드 자료는 확정 정보를 받은 뒤 추가할 수 있습니다. 현재는 위 이메일 문의 창구와 기존 안내 자료를 이용해 주세요.</p></aside></div></section>
  </>;
}
