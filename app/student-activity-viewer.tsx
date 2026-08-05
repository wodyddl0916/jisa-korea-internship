type StudentActivityViewerProps = {
  locale: "ja" | "ko";
};

const content = {
  ja: {
    label: "STUDENT ACTIVITY",
    title: "学生の活動記録を見る",
    status: "公開準備中",
    intro: "活動資料の準備後、学生ごとの実習内容、写真、動画、成果をここから確認できるようになります。",
    stages: [
      ["01", "事前学習", "日本語、ビジネスマナー、職務理解の記録"],
      ["02", "企業実習", "担当業務、チーム活動、現場での学び"],
      ["03", "成果・振り返り", "成果物、修了報告、参加者のコメント"],
    ],
  },
  ko: {
    label: "STUDENT ACTIVITY",
    title: "학생 활동 기록 보기",
    status: "공개 준비 중",
    intro: "활동 자료가 준비되면 학생별 실습 내용과 사진, 영상, 성과를 이곳에서 확인할 수 있습니다.",
    stages: [
      ["01", "사전 학습", "일본어, 비즈니스 매너와 직무 이해 기록"],
      ["02", "기업 실습", "담당 업무, 팀 활동과 현장에서의 배움"],
      ["03", "성과·회고", "결과물, 수료 보고와 참가자 이야기"],
    ],
  },
};

export function StudentActivityViewer({ locale }: StudentActivityViewerProps) {
  const copy = content[locale];

  return <details className="activityViewer">
    <summary>
      <span><small>{copy.label}</small><strong>{copy.title}</strong></span>
      <b aria-hidden="true">＋</b>
    </summary>
    <div className="activityPanel">
      <div className="activityIntro"><span>{copy.status}</span><p>{copy.intro}</p></div>
      <div className="activityStageGrid">
        {copy.stages.map(([number, title, description]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </div>
  </details>;
}
