type StudentActivityViewerProps = {
  locale: "ja" | "ko";
};

const content = {
  ja: {
    stages: [
      ["01", "事前学習", "日本語、ビジネスマナー、職務理解の記録"],
      ["02", "企業実習", "担当業務、チーム活動、現場での学び"],
      ["03", "成果・振り返り", "成果物、修了報告、参加者のコメント"],
    ],
  },
  ko: {
    stages: [
      ["01", "사전 학습", "일본어, 비즈니스 매너와 직무 이해 기록"],
      ["02", "기업 실습", "담당 업무, 팀 활동과 현장에서의 배움"],
      ["03", "성과·회고", "결과물, 수료 보고와 참가자 이야기"],
    ],
  },
};

export function StudentActivityViewer({ locale }: StudentActivityViewerProps) {
  const copy = content[locale];

  return <div className="activityPanel">
    <div className="activityStageGrid">
      {copy.stages.map(([number, title, description]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}
    </div>
  </div>;
}
