import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "../../../site-chrome";
import { briefingUniversitiesKo, pastUniversitiesKo, resourcesKo, statsKo, videosKo } from "../../../site-data-ko";
import { StatBand } from "../../../stat-band";
import { assetPath } from "../../../base-path";

export const metadata: Metadata = { title: "실적·자료" };

export default function KoreanResultsPage() {
  return <>
    <PageHero index="04" label="RESULTS & RESOURCES" title="숫자와 대학, 기록으로 확인하는 JISA의 활동." intro="2015년에 시작한 한국 대학과의 교류를 비롯해 글로벌 네트워크, 운영 대학, 제도 설명 실적과 영상 자료를 정리해 소개합니다." />
    <StatBand stats={statsKo} />
    <section className="section"><div className="wrap fieldShowcase">
      <SectionHeading label="INTERNSHIP SCENES" title="실습 현장을 사진으로 소개합니다." text="일본 기업의 현장에서 참가자들이 실무와 팀 업무에 참여하는 모습입니다." />
      <figure className="fieldPhoto">
        <Image src={assetPath("/assets/internship-workplace-collage.jpg")} alt="일본 기업에서 진행된 인턴십 실습 현장" width={1448} height={1086} />
        <figcaption>WORKPLACE / TEAM / SOFTWARE</figcaption>
      </figure>
    </div></section>
    <section className="section soft"><div className="wrap"><SectionHeading label="KOREA NETWORK" title="한국 대학 교류·운영 실적" text="실제로 인턴십을 운영한 대학과 2025~2026년에 제도 설명을 진행한 대학을 구분해 안내합니다." /><div className="universityColumns">
      <article className="universityGroup"><h3>인턴십 운영 대학</h3><p>2015년 이후 제공받은 자료에 따른 운영 대학</p><ul className="nameList">{pastUniversitiesKo.map(university => <li key={university.url}><span>{university.name}</span><a href={university.url} target="_blank" rel="noreferrer" aria-label={`${university.name} 공식 홈페이지 열기`}>공식 홈페이지 <b aria-hidden="true">↗</b></a></li>)}</ul></article>
      <article className="universityGroup"><h3>제도 설명을 진행한 대학</h3><p>2025~2026년 제도 설명 실적</p><ul className="nameList">{briefingUniversitiesKo.map(university => <li key={university.url}><span>{university.name}</span><a href={university.url} target="_blank" rel="noreferrer" aria-label={`${university.name} 공식 홈페이지 열기`}>공식 홈페이지 <b aria-hidden="true">↗</b></a></li>)}</ul></article>
    </div></div></section>
    <section className="section"><div className="wrap"><SectionHeading label="PROGRAM RECORDS" title="세미나·일본 입국·면접 현장을 영상으로 확인할 수 있습니다." text="각 대학의 입국 세미나, 참가자 인터뷰, 공항 입국 기록 등 제공 자료에 기재된 영상입니다." /><div className="videoGrid">{videosKo.map((video, index) => <a className="videoCard" href={video.url} target="_blank" rel="noreferrer" key={video.url}><span>VIDEO {String(index + 1).padStart(2, "0")}</span><strong>{video.title}</strong><small>{video.school}</small><b>영상 보기 →</b></a>)}</div></div></section>
    <section className="section"><div className="wrap"><SectionHeading label="DOCUMENTS" title="JISA와 제도를 이해하는 안내 자료" /><div className="resourceGrid">{resourcesKo.map((resource, index) => <a className="resourceCard" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}><span>GUIDE {String(index + 1).padStart(2, "0")}</span><strong>{resource.label}</strong><small>{resource.note}</small><b>자료 열기 →</b></a>)}</div><aside className="legalNote"><strong>실적 표기 안내</strong><p>국가 수, 대학 수, 인원, 업종 수와 대학명은 제공받은 자료를 기준으로 작성했습니다. 공개 전 집계 기간, 운영 구분과 공식 명칭을 최종 확인할 것을 권장합니다.</p></aside></div></section>
  </>;
}
