import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../../site-chrome";
import { StudentActivityViewer } from "../../../student-activity-viewer";
import { ActivityReports } from "../../../activity-reports";
import { reportLabels } from "../../../activity-report-data";

export const metadata: Metadata = { title: "학생 활동 기록" };

export default function KoreanActivityPage() {
  const copy = reportLabels.ko;

  return <>
    <PageHero index="05" label="STUDENT ACTIVITY" title="학생의 활동 기록을 준비부터 수료까지 공개합니다." intro="사전 학습부터 기업 실습, 성과 회고까지 학생 한 사람 한 사람의 활동을 기록으로 순차 공개해 나갑니다." />
    <section className="section"><div className="wrap">
      <SectionHeading label="ACTIVITY STAGES" title="세 단계로 실습의 과정을 기록합니다." text="준비와 실습, 회고의 각 단계에서 학생의 배움과 성과를 확인할 수 있는 형태로 정리합니다." />
      <StudentActivityViewer locale="ko" />
    </div></section>
    <section className="section soft"><div className="wrap">
      <SectionHeading label={copy.sectionLabel} title={copy.sectionTitle} text={copy.sectionText} />
      <ActivityReports locale="ko" />
    </div></section>
  </>;
}
