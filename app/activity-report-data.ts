// Per-company student reports shown in the activity modal.
//
// The student names and report bodies below are placeholders. Replace each
// student's `name` and `sections` with the real record as it becomes available;
// nothing outside this file needs to change. Company names are proper nouns and
// stay identical across both locales.

export type ReportSection = {
  heading: string;
  paragraphs: string[];
};

export type ActivityStudent = {
  id: string;
  name: string;
  /** Short line under the modal title — term, department, or role. */
  meta: string;
  sections: ReportSection[];
};

export type ActivityCompany = {
  id: string;
  name: string;
  students: ActivityStudent[];
};

/** Shared placeholder body. Swap per student when the real reports land. */
const placeholderSections: Record<"ja" | "ko", ReportSection[]> = {
  ja: [
    {
      heading: "実習概要",
      paragraphs: [
        "受入期間、配属部署、実習の目的をここに記載します。大学の教育目標と受入企業の受入方針をどう擦り合わせたかを、参加者本人の言葉で残します。",
        "事前学習で扱った日本語、ビジネスマナー、職務理解の到達点も併せて記録します。",
      ],
    },
    {
      heading: "担当業務",
      paragraphs: [
        "担当した業務の内容と範囲、使用した技術やツール、チーム内での役割を記載します。",
        "週次でどのように業務が広がっていったか、現場担当者からどのような指導を受けたかを具体的に残します。",
      ],
    },
    {
      heading: "学んだこと",
      paragraphs: [
        "業務を通じて得た専門的な学びと、日本の職場文化への適応について記載します。",
        "つまずいた場面と、それをどう乗り越えたかを含めることで、次の参加者への引き継ぎ資料になります。",
      ],
    },
    {
      heading: "成果と振り返り",
      paragraphs: [
        "成果物、修了報告の要点、受入企業からの評価をまとめます。",
        "実習を経てキャリア観がどう変わったか、今後の進路にどうつなげるかを本人の振り返りとして記載します。",
      ],
    },
  ],
  ko: [
    {
      heading: "실습 개요",
      paragraphs: [
        "수용 기간과 배치 부서, 실습의 목적을 이곳에 기록합니다. 대학의 교육 목표와 수용 기업의 방침을 어떻게 맞춰 나갔는지 참가자 본인의 언어로 남깁니다.",
        "사전 학습에서 다룬 일본어와 비즈니스 매너, 직무 이해의 도달 수준도 함께 정리합니다.",
      ],
    },
    {
      heading: "담당 업무",
      paragraphs: [
        "담당한 업무의 내용과 범위, 사용한 기술과 도구, 팀 안에서 맡은 역할을 기록합니다.",
        "주차별로 업무가 어떻게 넓어졌는지, 현장 담당자에게 어떤 지도를 받았는지를 구체적으로 남깁니다.",
      ],
    },
    {
      heading: "배운 점",
      paragraphs: [
        "업무를 통해 얻은 전문적인 배움과 일본 직장 문화에 대한 적응 과정을 기록합니다.",
        "어려움을 겪은 장면과 그것을 어떻게 넘어섰는지를 함께 담으면 다음 참가자를 위한 인수인계 자료가 됩니다.",
      ],
    },
    {
      heading: "성과와 회고",
      paragraphs: [
        "결과물과 수료 보고의 요점, 수용 기업의 평가를 정리합니다.",
        "실습을 거치며 진로관이 어떻게 바뀌었는지, 앞으로의 진로에 어떻게 연결할지를 본인의 회고로 기록합니다.",
      ],
    },
  ],
};

const companyNames = [
  { id: "usmedical", name: "USMedical", students: 3 },
  { id: "remoteplus", name: "株式会社リモートプラス", students: 2 },
  { id: "hull", name: "HULL株式会社", students: 1 },
  { id: "global-innovation", name: "株式会社GLOBAL INNOVATION", students: 1 },
  { id: "allux", name: "株式会社アリュクス", students: 1 },
  { id: "jisa", name: "JISA", students: 1 },
];

const studentLabels = {
  ja: { name: (letter: string) => `学生 ${letter}`, meta: "実習レポート" },
  ko: { name: (letter: string) => `학생 ${letter}`, meta: "실습 리포트" },
};

/** Placeholder rosters at the real headcounts until the actual names arrive. */
function buildCompanies(locale: "ja" | "ko"): ActivityCompany[] {
  const label = studentLabels[locale];

  return companyNames.map(({ id, name, students }) => ({
    id,
    name,
    students: Array.from({ length: students }, (_, order) => {
      const letter = String.fromCharCode(65 + order);
      return {
        id: `${id}-${letter.toLowerCase()}`,
        name: label.name(letter),
        meta: label.meta,
        sections: placeholderSections[locale],
      };
    }),
  }));
}

export const activityCompanies: Record<"ja" | "ko", ActivityCompany[]> = {
  ja: buildCompanies("ja"),
  ko: buildCompanies("ko"),
};

export const reportLabels = {
  ja: {
    sectionLabel: "REPORTS",
    sectionTitle: "参加企業ごとに、学生の実習記録を公開します。",
    sectionText: "企業名を選ぶと、その企業で実習した学生のレポートを開きます。左右の矢印で、ほかの企業の学生も続けて閲覧できます。",
    open: "実習記録を見る",
    close: "閉じる",
    previous: "前の学生",
    next: "次の学生",
    counter: (current: number, total: number) => `${current} / ${total}`,
  },
  ko: {
    sectionLabel: "REPORTS",
    sectionTitle: "참가 기업별로 학생의 실습 기록을 공개합니다.",
    sectionText: "기업명을 선택하면 그 기업에서 실습한 학생의 리포트가 열립니다. 좌우 화살표로 다른 기업의 학생도 이어서 볼 수 있습니다.",
    open: "실습 기록 보기",
    close: "닫기",
    previous: "이전 학생",
    next: "다음 학생",
    counter: (current: number, total: number) => `${current} / ${total}`,
  },
};
