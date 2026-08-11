import type { Metadata } from "next";
import { PageHero, SectionHeading } from "../../site-chrome";
import { StudentActivityViewer } from "../../student-activity-viewer";
import { ActivityReports } from "../../activity-reports";
import { reportLabels } from "../../activity-report-data";

export const metadata: Metadata = { title: "学生活動記録" };

export default function ActivityPage() {
  const copy = reportLabels.ja;

  return <>
    <PageHero index="05" label="STUDENT ACTIVITY" title="学生の活動記録を、準備から修了まで公開します。" intro="事前学習から企業実習、成果の振り返りまで、学生一人ひとりの活動を記録として順次公開していきます。" />
    <section className="section"><div className="wrap">
      <SectionHeading label="ACTIVITY STAGES" title="三つの段階で、実習の過程を記録します。" text="準備、実習、振り返りのそれぞれで、学生の学びと成果を確認できる形に整理します。" />
      <StudentActivityViewer locale="ja" />
    </div></section>
    <section className="section soft"><div className="wrap">
      <SectionHeading label={copy.sectionLabel} title={copy.sectionTitle} text={copy.sectionText} />
      <ActivityReports locale="ja" />
    </div></section>
  </>;
}
