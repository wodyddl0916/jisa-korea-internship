import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { assetPath } from "./base-path";
import { BackgroundMusic } from "./background-music";
import { LifePhotoCarousel } from "./life-photo-carousel";

type Locale = "ja" | "ko";

const copy = {
  ko: {
    label: "US MEDICAL · STUDENT ACTIVITY",
    title: <>조선대학교 <br />× US Medical <br />실습 활동 기록</>,
    intro: "JISA 한일 인턴십 과정에서 US Medical에 파견되어 실습에 참여한 학생의 활동 기록을 정리했습니다.",
    profileLabel: "00 · STUDENT PROFILE",
    profileTitle: <>학생 소개</>,
    profileAlt: "US Medical 파견 학생 프로필 사진",
    profileFacts: [
      ["Name", "박재용"],
      ["University", "조선대학교"],
      ["Major", "AI·SW학부 컴퓨터공학전공"],
      ["Grade", "4학년"],
      ["Japanese Language Ability", "JLPT, JPT 등 공인 자격증 미보유"],
      ["Period", "2026년 6월 30일 ~ 2026년 8월 29일(9주)"],
      ["host", "조선대학교 SW중심대학사업단"],
    ],
    techTitle: "IT skills",
    techSkills: [
      ["Frontend", "React · Vite · HTML · CSS · JavaScript"],
      ["Backend", "Spring Boot · FastAPI"],
      ["Database", "MySQL"],
      ["Version Control", "Git · GitHub"],
      ["Deployment / Infra", "AWS EC2 · AWS RDS · Vercel · GitHub Pages"],
      ["Data / AI", "Python · 데이터 분석 · 머신러닝 모델링 · 생성형 AI · 프롬프트 설계"],
    ],

    roleLabel: "01 · MY ROLE",
    roleTitle: <>AI 광고 제작부터<br />웹 개발까지</>,
    roleText: "학생별 담당 업무 가운데 AI 광고 제작부터 웹 개발까지 다양한 업무를 맡았습니다. React와 Vite를 활용해 회사 및 제품 소개 웹페이지를 제작하고, 생성형 AI를 활용해 캐릭터 생성과 제품이 필요한 여러 상황을 짧은 장면으로 구성한 광고 영상을 제작했습니다. 이후 기업의 피드백을 반영해 웹페이지와 광고 시안을 지속적으로 수정하며 최종 결과물로 발전시켰습니다.",
    facts: [
      ["Company", "US Medical"],
      ["Location", <div className="usmLocationBlock" key="ko-map">
        <span>도쿄도 미나토구 신바시</span>
        <a className="usmMapLink" href="https://maps.app.goo.gl/zctAxZMnfj65NBK4A" target="_blank" rel="noopener noreferrer">Google Maps에서 위치 보기 ↗</a>
      </div>],
      ["Role", "영상 제작, 웹 개발, 캐릭터 기획"],
      ["Product Name", "포케덴"],
    ],
    duties: [
      ["01", "웹사이트 제작", "React와 Vite로 회사 및 제품 소개 페이지를 구현하고 반응형 레이아웃과 정보 구조를 개선했습니다."],
      ["02", "홍보 디자인", "제품 포스터, 팸플릿, 패키지 시안, 소개 이미지와 광고 문구를 제작했습니다."],
      ["03", "캐릭터 기획", "마스코트 캐릭터와 구강 환경을 배경으로 한 캐릭터 세계관 및 광고 시나리오를 기획했습니다."],
      ["04", "AI 광고 영상", "Google Flow용 장면별 프롬프트를 설계하고 영상을 생성·선별·수정해 최종 광고로 발전시켰습니다."],
    ],
    processLabel: "02 · VIDEO PRODUCTION PROCESS",
    processTitle: <>아이디어를 영상으로 만들고,<br />피드백으로 완성</>,
    process: [
      ["PLAN", "제품과 전달 목표 정리", "포케덴이 필요한 순간과 시청자에게 전달할 핵심 메시지를 먼저 정리했습니다."],
      ["PROMPT", "장면별 프롬프트 설계", "기획한 장면이 원하는 분위기와 구도로 표현되도록 상황, 인물, 행동, 배경 등을 구체적인 프롬프트로 설계했습니다."],
      ["GENERATE", "Google Flow로 영상 생성", "텍스트 프롬프트를 바탕으로 AI 영상을 생성할 수 있는 Google Flow를 활용해 장면별 영상을 제작하고, 여러 결과를 비교해 광고에 적합한 장면을 선별했습니다."],
      ["REVISE", "피드백 반영과 최종 수정", "중간 결과물을 비교하고 전달력이 부족한 부분을 보완해 최종 버전을 제작했습니다."],
    ],
    resultLabel: "03 · VIDEO OUTPUTS",
    resultTitle: <>제작 과정에서 완성한 결과물</>,
    resultText: "각 영상은 콘셉트와 장면 구성에 맞춰 기획부터 제작·수정까지의 과정을 거쳐 완성한 결과물입니다. 재생 버튼을 누르면 실제 결과물을 확인할 수 있습니다.",
    videos: [
      ["01", "포케덴 제품 광고 시안", "제품 패키지와 일상 속 사용 장면을 중심으로 구성한 초기 광고 영상입니다.", "pokedenloop.mp4", ""],
      ["02", "생활 장면 중심 수정본", "제품 사용 전후의 변화를 보다 자연스럽게 전달하도록 장면과 흐름을 수정했습니다.", "draft-0803.mp4", "draft-0803.jpg"],
      ["03", "다양한 사용 환경 확장본", "군인, 항해, 비행, 의료 현장 등 여러 환경에서의 필요성을 한 영상으로 구성했습니다.", "final-0810.mp4", "final-0810.jpg"],
      ["04", "캐릭터 콘셉트 최종 영상", "구강 문제를 시각적인 캐릭터와 강한 장면 전환으로 표현한 최종 결과물입니다.", "final-cut.mp4", "final-cut.jpg"],
    ],
    characterLabel: "04 · CHARACTER & WORLD",
    characterTitle: <>마스코트 캐릭터와 세계관 스토리 제작</>,
    characterText: "제품을 친근하게 알리기 위해 포케덴 마스코트 캐릭터를 제작하고, 히어로와 악역이 등장하는 세계관을 포스터 형태의 캐릭터 가이드로 구성했습니다.",
    characterItems: [
      ["MASCOT CHARACTER", "포케덴 마스코트 ‘파치짱’", "포케덴의 깨끗하고 친근한 이미지를 전달할 수 있도록 구강 청결을 상징하는 마스코트 캐릭터를 기획하고, ChatGPT와 Canva AI를 활용해 이미지를 제작했습니다.", "pokeden-character.png", "포케덴 마스코트 캐릭터 파치짱"],
      ["WORLD GUIDE", "포케덴 세계관 포스터", "아이들이 포케덴의 기능을 쉽고 흥미롭게 이해할 수 있도록 제품의 역할을 ‘선’, 구강 문제를 ‘악’으로 설정해 히어로와 악역이 대립하는 세계관과 시나리오를 기획했습니다. 이후 ChatGPT를 활용해 캐릭터별 역할과 설정을 1장의 포스터로 나타냈습니다.", "pokeden-world-guide.png", "포케덴 캐릭터 세계관 포스터"],
    ],
    reviewLabel: "05 · REFLECTION & OUTCOMES",
    reviewTitle: <>체험에 대한 회고 및 성과</>,
    reviewCards: [
      ["EXPERIENCE", "인턴십에 참가하면서 느낀 점", "학교 수업이나 개인 작업만으로는 경험하기 어려운 일본 기업의 업무 환경을 직접 경험했습니다. 개발뿐 아니라 디자인, 광고, 마케팅과 사용자 관점을 함께 고려해야 하나의 제품을 효과적으로 전달할 수 있다는 것을 배웠습니다."],
      ["GROWTH", "성장한 점", "인턴십 기간 동안 React를 활용한 웹페이지 제작과 반복적인 수정 작업을 경험하면서 이전보다 웹페이지를 구성하고 구현하는 능력이 향상되었습니다. 특히 AI 영상 제작은 처음 접하는 분야였지만, 직접 시나리오를 구성하고 프롬프트를 작성하여 영상을 제작하면서 생성형 AI를 실제 콘텐츠 제작에 활용하는 방법을 배울 수 있었습니다."],
      ["CHALLENGE", "힘들었던 점", "일본어로 전달되는 업무 설명과 피드백을 한 번에 이해하기 어려웠습니다. AI 영상에서는 동일한 인물과 제품의 형태를 장면마다 유지하기 어려워 프롬프트와 결과물을 여러 차례 수정해야 했습니다."],
      ["SATISFACTION", "인턴십에 참가해서 좋았는가?", "이번 일본 인턴십에 참가한 것은 매우 좋은 경험이었습니다. 한국에서는 접하기 어려운 일본 기업의 업무 방식과 해외 생활을 직접 경험했고, 대학에서 배운 기술을 실제 회사와 제품을 위한 결과물에 적용할 수 있었습니다."],
      ["HIGHLIGHTS", "어떤 점이 좋았는가?", "단순한 여행이나 단기 체험으로는 알기 어려운 일본의 업무와 생활을 약 9주 동안 직접 경험했고, 기업 담당자의 피드백을 반영해 결과물을 수정하는 과정을 통해 실제 업무 방식과 디자인·마케팅 관점까지 배울 수 있었습니다."],
      ["LANGUAGE", "일본어의 필요성", "첫 주에는 일본어 소통을 도와주는 학생이 있었지만, 이후 직접 소통하면서 어려움을 느꼈습니다. 특히 일상회화와 업무회화는 사용하는 표현이 달라, 일본 인턴십에 관심있는 참가자들은 기본 회화뿐 아니라 업무에서 자주 쓰는 일본어도 미리 준비해 오기를 권하고 싶습니다."],
    ],
    calendarLabel: "06 · 9-WEEK ACTIVITY CALENDAR",
    calendarTitle: <>9주간의 인턴십 활동 기록</>,
    calendarIntro: "회사와 제품을 이해하는 단계부터 웹페이지, 홍보 디자인, 캐릭터와 AI 광고 영상을 완성하기까지의 과정을 주차별로 정리했습니다.",
    weeks: [
      ["WEEK 01", "06.29 — 07.05", "일본 입국·회사 OT", "일본에 입국해 생활 환경을 정리하고 US Medical의 회사 오리엔테이션에 참여하여 기업과 포케덴 제품, 담당 업무를 이해했습니다.", "일본 입국·회사 OT 사진"],
      ["WEEK 02", "07.06 — 07.12", "홍보 디자인 제작", "포케덴 포스터, 팸플릿, 패키지 시안과 제품 설명 문구를 제작하고 전달할 핵심 메시지를 다듬었습니다.", "포스터·팸플릿 제작물"],
      ["WEEK 03", "07.13 — 07.19", "캐릭터·광고 기획", "마스코트 파치짱과 캐릭터 세계관을 구성하고 AI 광고 영상의 콘셉트, 시나리오와 장면별 스토리보드를 작성했습니다.", "캐릭터·스토리보드 자료"],
      ["WEEK 04", "07.20 — 07.26", "AI 광고 영상 생성", "Google Flow용 프롬프트를 작성해 장면별 영상을 생성하고, 여러 결과 중 광고 흐름에 적합한 장면을 선별했습니다.", "AI 영상 생성 과정"],
      ["WEEK 05", "07.27 — 08.02", "웹페이지 구조 기획", "회사와 제품 정보를 사용자가 쉽게 이해할 수 있도록 페이지 구성, 콘텐츠 순서와 화면 레이아웃을 설계했습니다.", "웹페이지 기획·초안 화면"],
      ["WEEK 06", "08.03 — 08.09", "회사·제품 페이지 제작", "React와 Vite를 활용해 소개 페이지를 구현하고 이미지, 제품 특징과 사용 방법을 화면에 배치했습니다.", "웹사이트 제작 화면"],
      ["WEEK 07", "08.10 — 08.16", "피드백 반영·수정", "인물과 제품 형태, 장면 연결과 메시지 전달력을 검토하고 기업 담당자의 피드백에 따라 결과물을 반복 수정했습니다.", "피드백·수정 과정"],
      ["WEEK 08", "08.17 — 08.23", "최종 결과물 점검", "웹페이지와 홍보 콘텐츠, AI 광고 영상의 내용과 표현을 검토하고 부족한 부분을 보완했습니다.", "최종 결과물 점검 사진"],
      ["WEEK 09", "08.24 — 08.29", "성과물·활동 기록 정리", "완성된 결과물을 최종 정리하고 인턴십에서 수행한 활동과 배운 점을 기록으로 작성했습니다.", "최종 발표·성과물 사진"],
    ],
    lifeLabel: "07 · LIFE IN JAPAN",
    lifeTitle: <>일본에서 생활하며 직접 경험한 것들</>,
    lifeIntro: "약 9주간의 일본 생활을 회사와 숙소 밖의 일상, 도쿄 외 지역, 도서관, 음식과 생활문화로 나누어 기록했습니다.",
    lifeCards: [
      ["WORK & HOME", "퇴근 후", "회사와 숙소가 도쿄 중심부에 있어 퇴근 후에도 주변을 둘러보기 좋았습니다. 회사 근처의 도쿄타워와 숙소에서 접근하기 쉬운 도쿄역·마루노우치 일대 등 유명 장소를 방문하며 도쿄의 다양한 모습을 경험했습니다.", "workHome"],
      ["BEYOND TOKYO", "도쿄 외 지역", "휴일에는 오사카의 도톤보리와 Universal Studios Japan 등을 방문해 도쿄와 다른 지역의 분위기와 관광문화를 체험했습니다.", "beyondTokyo"],
      ["LIBRARY", "개인 시간 활용", "업무 외 시간에는 지역 도서관이나 카페를 찾아 개인적인 학습과 자기계발 시간을 보냈으며, 자연스럽게 일본의 공공시설과 카페 문화도 함께 경험했습니다.", "library"],
      ["DAILY LIFE", "음식과 일상생활", "식당, 편의점, 슈퍼마켓을 이용하며 혼자 식사하는 문화와 주문·응대·계산 방식 등 생활자의 일상을 경험했습니다.", "dailyLife"],
    ],
    preparationTitle: "다음 참가자를 위한 준비 팁",
    preparation: [
      ["통신", <>단기 체류자는 일본 현지 번호 개통에 제약이 있을 수 있어, 비용이 저렴한 <strong>eSIM</strong>이나 한국 번호로 전화·문자를 사용할 수 있는 <strong>로밍 서비스</strong>를 미리 준비하는 것을 추천합니다.</>],
      ["현금", <>일본 대부분의 라멘집이나 소규모 매장에서는 <strong>현금만 사용할 수 있는 경우</strong>가 있어 소액의 현금을 준비하면 좋습니다. 일본은 <strong>세븐일레븐 편의점 ATM에서는 별도의 인출 수수료가 들지 않아</strong>, 체류 중 필요한 현금을 이곳에서 인출하는 것을 추천합니다.</>],
      ["업무 환경", <>회사 업무를 <strong>개인 노트북으로 진행하는 경우가 있으므로</strong>, 사용할 노트북과 충전기 등 필요한 장비를 미리 준비하는 것이 좋습니다.</>],
      ["대중교통", <>일본은 한국과 달리 <strong>이동 거리와 이용 노선에 따라 요금이 달라지는 경우가 많아</strong>, 같은 전철이라도 목적지에 따라 교통비 차이가 큽니다. 또한 철도 회사가 달라지면 환승 과정에서 요금이 추가될 수 있어, 이동 전 경로와 예상 요금을 미리 확인하는 것을 추천합니다.</>],
    ],
    learningLabel: "08 · LEARNING & REVIEW",
    learningTitle: <>인턴십 소감</>,
    skills: [
      "콘텐츠 기획", "제품 이해", "시장 분석", "장면 구성", "프롬프트 설계",
      "Google Flow", "AI 영상 생성", "장면 선별", "영상 편집", "실무 경험",
      "장기 해외 생활", "문화 적응", "문제 해결", "HAI-J", "듀오링고",
    ],
    reflection: <>
      이번 인턴십에서는 먼저 회사와 제품, 소비자를 이해한 뒤 어떤 메시지를 어떻게 전달할지 고민했습니다.
      웹페이지와 홍보 디자인, 캐릭터, AI 광고 영상을 직접 기획하고 제작하면서
      <strong> 좋은 결과물은 기술만으로 완성되는 것이 아니라 제품 이해와 콘텐츠 기획에서 시작된다는 점</strong>을 배웠습니다.
      <br /><br />

      Google Flow를 활용한 영상 제작 과정에서는 장면 구성과 프롬프트의 작은 차이가 결과를 크게 바꾼다는 것을 경험했습니다.
      여러 결과를 비교하고 적합한 장면을 선별한 뒤 피드백에 따라 다시 수정하면서,
      <strong> AI 도구를 목적에 맞게 지시하고 결과를 판단하는 능력</strong>과 끝까지 개선하는 실무 태도를 익혔습니다.
      <br /><br />

      업무 밖에서는 약 9주 동안 일본에서 직접 출퇴근하고 대중교통과 공공시설을 이용하며 새로운 생활환경에 적응했습니다.
      언어와 문화가 다른 상황에서 필요한 정보를 스스로 찾고 문제를 해결하는 과정은
      <strong> 독립적으로 생활하는 힘과 낯선 환경에 유연하게 대응하는 자신감</strong>을 길러 주었습니다.
      <br /><br />

      이번 경험을 통해 콘텐츠 제작 역량뿐 아니라 협업, 의사소통, 일정 관리와 생활 적응까지 함께 배울 수 있었습니다.
      결과물을 완성한 경험과 일본에서 생활한 시간 모두 앞으로 새로운 환경과 업무에 도전할 때 활용할 수 있는 중요한 기반이 되었습니다.
    </>,
    note: "업무 경험과 일본 생활을 함께 돌아보며 정리한 학생 개인의 활동 기록입니다.",
    gratitudeLabel: "09 · THANK YOU",
    gratitudeTitle: "US Medical 관계자 여러분께",
    gratitude: <>
      약 9주 동안 일본에서 인턴십에 참여할 수 있는 소중한 기회를 마련해 주시고,
      새로운 환경에 적응하며 업무를 배울 수 있도록 따뜻하게 도와주신 US Medical 대표님과 직원 여러분께 진심으로 감사드립니다.
      <br /><br />
      회사와 포케덴 제품을 이해하는 단계부터 웹페이지, 홍보 디자인, 캐릭터와 AI 광고 영상을 제작하기까지
      다양한 업무를 직접 경험할 수 있었습니다. 익숙하지 않은 분야에서도 의견을 들어 주시고,
      결과물마다 구체적인 피드백을 주신 덕분에 부족한 부분을 발견하고 한 단계씩 개선할 수 있었습니다.
      <br /><br />
      이번 인턴십을 통해 기술을 사용하는 방법뿐 아니라 기업의 목적과 소비자의 관점에서 생각하는 법,
      서로 다른 생각을 조율하며 하나의 결과물을 완성하는 과정의 중요성을 배웠습니다.
      일본에서 생활하며 쌓은 경험과 업무를 통해 얻은 배움을 앞으로의 대학생활과 진로에서도 소중히 활용하겠습니다.
      <br /><br />
      바쁘신 가운데서도 배움의 기회를 주시고 끝까지 함께해 주신 모든 분께 다시 한번 깊이 감사드립니다.
    </>,
    gratitudeClosing: "박재용 드림",
  },
  ja: {
    label: "US MEDICAL · STUDENT ACTIVITY",
    title: <>朝鮮大学校 <br />× US Medical <br />実習活動記録</>,
    intro: "JISA日韓インターンシッププログラムでUS Medicalに派遣され、実習に参加した学生の活動記録をまとめました。",
    profileLabel: "00 · STUDENT PROFILE",
    profileTitle: <>学生紹介</>,
    profileAlt: "US Medical派遣学生のプロフィール写真",
    profileFacts: [
      ["氏名", "パク・ジェヨン"],
      ["大学", "朝鮮大学校"],
      ["専攻", "AI・SW学部 コンピュータ工学専攻"],
      ["学年", "4年生"],
      ["日本語能力", "JLPT・JPTなどの公認資格なし"],
      ["インターンシップ期間", "2026年6月30日～2026年8月29日（9週間）"],
      ["主催", "朝鮮大学校 SW中心大学事業団"],
    ],
    techTitle: "IT skills",
    techSkills: [
      ["Frontend", "React · Vite · HTML · CSS · JavaScript"],
      ["Backend", "Spring Boot · FastAPI"],
      ["Database", "MySQL"],
      ["Version Control", "Git · GitHub"],
      ["Deployment / Infra", "AWS EC2 · AWS RDS · Vercel · GitHub Pages"],
      ["Data / AI", "Python · データ分析 · 機械学習モデリング · 生成AI · プロンプト設計"],
    ],
    roleLabel: "01 · MY ROLE",
    roleTitle: <>AI広告制作から<br />Web開発まで</>,
    roleText: "学生ごとに割り当てられた業務の中で、AI広告制作からWeb開発まで幅広い仕事を担当しました。ReactとViteを活用して会社・製品紹介Webページを制作し、生成AIを用いてキャラクターを作成するとともに、製品が必要とされるさまざまな状況を短いシーンで構成した広告動画を制作しました。その後、企業からのフィードバックを反映し、Webページと広告案を継続的に修正して最終成果物へと発展させました。",
    facts: [
      ["Company", "US Medical"],
      ["Location", <div className="usmLocationBlock" key="ja-map">
        <span>東京都港区新橋</span>
        <a className="usmMapLink" href="https://maps.app.goo.gl/zctAxZMnfj65NBK4A" target="_blank" rel="noopener noreferrer">Google Mapsで場所を見る ↗</a>
      </div>],
      ["Role", "動画制作、Web開発、キャラクター企画"],
      ["Product Name", "ポケデン"],
    ],
    duties: [
      ["01", "Webサイト制作", "ReactとViteで会社・製品紹介ページを実装し、レスポンシブレイアウトと情報構造を改善しました。"],
      ["02", "広報デザイン", "製品ポスター、パンフレット、パッケージ案、紹介画像と広告コピーを制作しました。"],
      ["03", "キャラクター企画", "マスコットキャラクターと、口腔環境を舞台にしたキャラクターの世界観および広告シナリオを企画しました。"],
      ["04", "AI広告動画", "Google Flow用のシーン別プロンプトを設計し、動画の生成・選定・修正を重ねて最終的な広告へと発展させました。"],
    ],
    processLabel: "02 · VIDEO PRODUCTION PROCESS",
    processTitle: <>アイデアを映像にし、<br />フィードバックで完成</>,
    process: [
      ["PLAN", "製品と伝える目的の整理", "ポケデンが必要とされる場面と、視聴者に伝えるべき核となるメッセージを最初に整理しました。"],
      ["PROMPT", "シーンごとのプロンプト設計", "企画したシーンが意図した雰囲気と構図で表現されるよう、状況、人物、行動、背景などを具体的なプロンプトとして設計しました。"],
      ["GENERATE", "Google Flowによる動画生成", "テキストプロンプトをもとにAI動画を生成できるGoogle Flowを活用してシーンごとの動画を制作し、複数の結果を比較して広告に適したシーンを選定しました。"],
      ["REVISE", "フィードバックの反映と最終修正", "途中段階の成果物を比較し、メッセージが十分に伝わらない部分を補って最終版を制作しました。"],
    ],
    resultLabel: "03 · VIDEO OUTPUTS",
    resultTitle: <>制作過程で完成した成果物</>,
    resultText: "各動画は、コンセプトとシーン構成に合わせ、企画から制作・修正までの過程を経て完成した成果物です。再生ボタンを押すと、実際の成果物を確認できます。",
    videos: [
      ["01", "ポケデン製品広告案", "製品パッケージと日常の利用場面を中心に構成した初期広告動画です。", "pokedenloop.mp4", ""],
      ["02", "生活シーン中心の修正版", "製品使用前後の変化をより自然に伝えられるよう、シーンと流れを修正しました。", "draft-0803.mp4", "draft-0803.jpg"],
      ["03", "多様な利用環境の拡張版", "軍人、航海、飛行、医療現場など、さまざまな環境での必要性を一つの動画にまとめました。", "final-0810.mp4", "final-0810.jpg"],
      ["04", "キャラクターコンセプト最終動画", "口腔の問題を視覚的なキャラクターと力強い場面転換で表現した最終成果物です。", "final-cut.mp4", "final-cut.jpg"],
    ],
    characterLabel: "04 · CHARACTER & WORLD",
    characterTitle: <>マスコットキャラクターと世界観ストーリーの制作</>,
    characterText: "製品を親しみやすく伝えるためにポケデンのマスコットキャラクターを制作し、ヒーローと悪役が登場する世界観をポスター形式のキャラクターガイドとして構成しました。",
    characterItems: [
      ["MASCOT CHARACTER", "ポケデンのマスコット「パチィちゃん」", "ポケデンの清潔で親しみやすいイメージを伝えられるよう、口腔の清潔を象徴するマスコットキャラクターを企画し、ChatGPTとCanva AIを活用して画像を制作しました。", "pokeden-character.png", "ポケデンのマスコットキャラクター、パチィちゃん"],
      ["WORLD GUIDE", "ポケデン世界観ポスター", "子どもたちがポケデンの機能を簡単かつ興味深く理解できるように、製品の役割を「善」、口腔の問題を「悪」と設定し、ヒーローと悪役が対立する世界観とシナリオを企画しました。その後、ChatGPTを活用してキャラクターごとの役割と設定を1枚のポスターにまとめました。", "pokeden-world-guide.png", "ポケデンのキャラクター世界観ポスター"],
    ],
    reviewLabel: "05 · REFLECTION & OUTCOMES",
    reviewTitle: <>体験の振り返りと成果</>,
    reviewCards: [
      ["EXPERIENCE", "インターンシップに参加して感じたこと", "授業や個人制作だけでは得にくい日本企業の業務環境を実際に体験しました。一つの製品を効果的に伝えるためには、開発だけでなく、デザイン、広告、マーケティング、利用者の視点も併せて考える必要があることを学びました。"],
      ["GROWTH", "成長した点", "インターンシップ期間中、Reactを活用したWebページ制作と繰り返しの修正作業を経験し、以前よりもWebページを構成・実装する力が向上しました。特にAI動画制作は初めて取り組む分野でしたが、自らシナリオを構成し、プロンプトを作成して動画を制作する中で、生成AIを実際のコンテンツ制作に活用する方法を学ぶことができました。"],
      ["CHALLENGE", "難しかった点", "日本語による業務説明やフィードバックを一度で理解することが難しい場面がありました。また、AI動画では同じ人物や製品の形を各シーンで維持することが難しく、プロンプトと成果物を何度も修正しました。"],
      ["SATISFACTION", "インターンシップに参加して良かったか？", "今回の日本インターンシップに参加したことは、非常に良い経験になりました。韓国では接する機会の少ない日本企業の仕事の進め方と海外生活を実際に経験し、大学で学んだ技術を実際の会社と製品のための成果物に活用できました。"],
      ["HIGHLIGHTS", "どのような点が良かったか？", "単なる旅行や短期体験では分かりにくい日本での仕事と生活を約9週間にわたって直接経験できました。また、企業担当者からのフィードバックを反映して成果物を修正する過程を通じ、実際の仕事の進め方に加えて、デザインやマーケティングの視点まで学ぶことができました。"],
      ["LANGUAGE", "日本語の必要性", "最初の週は日本語でのコミュニケーションをサポートしてくれる学生がいましたが、その後は自分で直接やり取りすることになり、難しさを感じました。特に日常会話と仕事で使う日本語は表現が異なるため、日本でのインターンシップに参加したい方には、基本的な会話だけでなく、仕事でよく使う日本語も事前に勉強しておくことをおすすめします。"],
    ],
    calendarLabel: "06 · 9-WEEK ACTIVITY CALENDAR",
    calendarTitle: <>9週間のインターンシップ活動記録</>,
    calendarIntro: "会社と製品を理解する段階から、Webページ、広報デザイン、キャラクター、AI広告動画を完成させるまでの過程を週ごとにまとめました。",
    weeks: [
      ["WEEK 01", "06.29 — 07.05", "日本入国・会社オリエンテーション", "日本に入国して生活環境を整え、US Medicalの会社オリエンテーションに参加し、企業、ポケデン製品、担当業務について理解しました。", "日本入国・会社オリエンテーションの写真"],
      ["WEEK 02", "07.06 — 07.12", "広報デザインの制作", "ポケデンのポスター、パンフレット、パッケージ案、製品説明文を制作し、伝えるべき中心メッセージを整えました。", "ポスター・パンフレット制作物"],
      ["WEEK 03", "07.13 — 07.19", "キャラクター・広告企画", "マスコットのパチィちゃんと世界観を構成し、AI広告動画のコンセプト、シナリオ、シーン別ストーリーボードを作成しました。", "キャラクター・ストーリーボード資料"],
      ["WEEK 04", "07.20 — 07.26", "AI広告動画の生成", "Google Flow用のプロンプトを作成してシーンごとの動画を生成し、複数の結果から広告の流れに適した映像を選定しました。", "AI動画生成の過程"],
      ["WEEK 05", "07.27 — 08.02", "Webページ構成の企画", "会社と製品の情報を分かりやすく伝えるため、ページ構成、コンテンツの順序、画面レイアウトを設計しました。", "Webページ企画・初稿画面"],
      ["WEEK 06", "08.03 — 08.09", "会社・製品ページの制作", "ReactとViteを活用して紹介ページを実装し、画像、製品の特徴、使用方法を画面に配置しました。", "Webサイト制作画面"],
      ["WEEK 07", "08.10 — 08.16", "フィードバック反映・修正", "人物と製品の形、シーンのつながり、メッセージの伝わり方を確認し、企業担当者からのフィードバックに沿って成果物を繰り返し修正しました。", "フィードバック・修正過程"],
      ["WEEK 08", "08.17 — 08.23", "最終成果物の確認", "Webページ、広報コンテンツ、AI広告動画の内容と表現を確認し、不足している部分を改善しました。", "最終成果物確認の写真"],
      ["WEEK 09", "08.24 — 08.29", "成果物・活動記録の整理", "完成した成果物を最終整理し、インターンシップで行った活動と学んだことを記録としてまとめました。", "最終発表・成果物の写真"],
    ],
    lifeLabel: "07 · LIFE IN JAPAN",
    lifeTitle: <>日本で生活しながら実際に体験したこと</>,
    lifeIntro: "約9週間の日本での生活を、会社・宿舎の外での日常、東京以外の地域、図書館、食と生活文化に分けて記録しました。",
    lifeCards: [
      ["WORK & HOME", "退勤後", "会社と宿舎が東京都心部にあり、退勤後も周辺を見て回りやすい環境でした。会社近くの東京タワーや、宿舎からアクセスしやすい東京駅・丸の内エリアなどの有名な場所を訪れ、東京のさまざまな姿を体験しました。", "workHome"],
      ["BEYOND TOKYO", "東京以外の地域", "休日には大阪の道頓堀やUniversal Studios Japanなどを訪れ、東京とは異なる地域の雰囲気と観光文化を体験しました。", "beyondTokyo"],
      ["LIBRARY", "個人時間の活用", "業務時間外には地域の図書館やカフェを訪れ、個人学習や自己啓発の時間を過ごしました。その中で、日本の公共施設やカフェ文化にも自然に触れることができました。", "library"],
      ["DAILY LIFE", "食と日常生活", "飲食店、コンビニ、スーパーを利用し、一人で食事をする文化や注文・接客・会計方法など、生活者の日常を経験しました。", "dailyLife"],
    ],
    preparationTitle: "次の参加者に向けた準備のヒント",
    preparation: [
      ["通信", <>短期滞在者は日本の電話番号を契約できない場合があるため、費用を抑えやすい<strong>eSIM</strong>や、韓国の電話番号で通話・SMSを利用できる<strong>ローミングサービス</strong>を事前に準備することをおすすめします。</>],
      ["現金", <>日本では、多くのラーメン店や小規模な店舗で<strong>現金しか利用できない場合</strong>があるため、少額の現金を用意しておくと安心です。日本の<strong>セブン‐イレブンのATMでは別途引き出し手数料がかからなかったため</strong>、滞在中に必要な現金はそこで引き出すことをおすすめします。</>],
      ["業務環境", <>会社の業務を<strong>個人のノートパソコンで行う場合があるため</strong>、使用するパソコンや充電器など、必要な機器を事前に準備しておくことをおすすめします。</>],
      ["公共交通", <>日本では韓国と異なり、<strong>移動距離や利用路線によって運賃が変わることが多く</strong>、同じ電車でも目的地によって交通費に差があります。また、異なる鉄道会社へ乗り換える際は運賃が追加される場合があるため、移動前に経路と予想運賃を確認することをおすすめします。</>],
    ],
    learningLabel: "08 · LEARNING & REVIEW",
    learningTitle: <>インターンシップの感想</>,
    skills: [
      "コンテンツ企画", "製品理解", "市場分析", "シーン構成", "プロンプト設計",
      "Google Flow", "AI動画生成", "シーン選定", "動画編集", "実務経験",
      "長期海外生活", "文化適応", "問題解決", "HAI-J", "Duolingo",
    ],
    reflection: <>
      今回のインターンシップでは、まず会社、製品、消費者を理解し、どのようなメッセージをどのように伝えるかを考えました。
      Webページ、広報デザイン、キャラクター、AI広告動画を自ら企画・制作する中で、
      <strong>良い成果物は技術だけで完成するのではなく、製品理解とコンテンツ企画から始まること</strong>を学びました。
      <br /><br />

      Google Flowを活用した動画制作では、シーン構成やプロンプトの小さな違いが結果を大きく変えることを体験しました。
      複数の結果を比較して適切なシーンを選び、フィードバックに沿って修正を重ねることで、
      <strong>AIツールに目的に合った指示を出し、結果を判断する力</strong>と最後まで改善を続ける実務姿勢を身につけました。
      <br /><br />

      業務以外では、約9週間、日本で通勤し、公共交通機関や公共施設を利用しながら新しい生活環境に適応しました。
      言語や文化が異なる状況で必要な情報を自ら探し、問題を解決する過程を通じて、
      <strong>自立して生活する力と、慣れない環境へ柔軟に対応する自信</strong>を得ることができました。
      <br /><br />

      今回の経験を通じて、コンテンツ制作の能力だけでなく、協働、コミュニケーション、スケジュール管理、生活への適応についても学ぶことができました。
      成果物を完成させた経験と日本で暮らした時間の両方が、今後新しい環境や仕事に挑戦するための大切な基盤になりました。
    </>,
    note: "業務経験と日本での生活を振り返り、学生本人がまとめた活動記録です。",
    gratitudeLabel: "09 · THANK YOU",
    gratitudeTitle: "US Medicalの皆様へ",
    gratitude: <>
      約9週間、日本でインターンシップに参加する貴重な機会を設けてくださり、
      新しい環境に慣れながら業務を学べるよう温かく支えてくださったUS Medicalの代表と社員の皆様に、心より感謝申し上げます。
      <br /><br />
      会社とポケデン製品を理解する段階から、Webページ、広報デザイン、キャラクター、AI広告動画の制作まで、
      多様な業務を実際に経験することができました。慣れない分野でも意見を聞いてくださり、
      成果物ごとに具体的なフィードバックをいただいたことで、不足している点を見つけ、一つずつ改善することができました。
      <br /><br />
      今回のインターンシップを通じて、技術の使い方だけでなく、企業の目的と消費者の視点に立って考える方法、
      異なる意見を調整しながら一つの成果物を完成させる過程の大切さを学びました。
      日本での生活と業務から得た経験を、これからの大学生活と将来の進路に大切に生かしていきます。
      <br /><br />
      ご多忙の中、最後まで学びの機会を与え、支えてくださった皆様に、改めて深く御礼申し上げます。
    </>,
    gratitudeClosing: "パク・ジェヨンより",
  },
} as const;

const videoBase = assetPath("/assets/activity/usmedical/videos");
const activityKeywords = [
  "JISA × US MEDICAL",
  "PROJECT EXPERIENCE",
  "AI VIDEO PRODUCTION",
  "PROMPT DESIGN",
  "MARKETING",
  "WEB PROGRAMMING"
];

const tinyWalkers = [
  ["coral", "62px", ".78", "22s", "-2s", "-34px"],
  ["mint", "108px", ".62", "27s", "-18s", "-22px"],
  ["violet", "76px", ".9", "31s", "-10s", "-42px"],
  ["lemon", "148px", ".55", "24s", "-15s", "-28px"],
  ["sky", "116px", ".72", "29s", "-6s", "-38px"],
  ["pink", "54px", ".66", "26s", "-22s", "-25px"],
  ["green", "166px", ".82", "33s", "-26s", "-46px"],
  ["orange", "91px", ".58", "23s", "-12s", "-30px"],
];

export function USMedicalActivity({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return <article className={`usmArchive usmLocale-${locale}`}>
    <nav className="usmLanguageSwitch" aria-label={locale === "ko" ? "언어 선택" : "言語選択"}>
      <Link href="/" lang="ja" aria-current={locale === "ja" ? "page" : undefined}>日本語</Link>
      <span aria-hidden="true"></span>
      <Link href="/ko" lang="ko" aria-current={locale === "ko" ? "page" : undefined}>한국어</Link>
    </nav>
    <div className="usmStarfall" aria-hidden="true">
      {Array.from({ length: 32 }, (_, index) => {
        const style = {
          "--star-x": `${(index * 37 + 7) % 100}%`,
          "--star-size": `${2 + (index % 4)}px`,
          "--star-duration": `${9 + (index % 7) * 1.35}s`,
          "--star-delay": `${-(index % 13) * 1.15}s`,
          "--star-drift": `${((index % 5) - 2) * 16}px`,
          "--star-opacity": String(0.34 + (index % 4) * 0.13),
        } as CSSProperties;

        return <i key={index} style={style} />;
      })}
    </div>
    <section className="usmHero">
      <BackgroundMusic locale={locale} />
      <div className="usmHeroBackdrop" aria-hidden="true">
        <Image className="usmHeroSlide usmHeroSlideLogo usmHeroSlideSmallLogo" src={assetPath("/assets/activity/usmedical/hero-chosun-transparent.png")} alt="" width={381} height={349} priority />
        <Image className="usmHeroSlide usmHeroSlidePhoto" src={assetPath("/assets/activity/usmedical/hero-japan-building.jpg")} alt="" width={1400} height={1584} priority />
        <Image className="usmHeroSlide usmHeroSlideLogo" src={assetPath("/assets/activity/usmedical/hero-usmedical.png")} alt="" width={2400} height={1510} priority />
        <Image className="usmHeroSlide usmHeroSlideLogo usmHeroSlideSmallLogo" src={assetPath("/assets/activity/usmedical/hero-jisa-transparent.png")} alt="" width={1568} height={851} priority />
      </div>
      <div className="usmHeroCharacters" aria-hidden="true">
        {tinyWalkers.map(([type, bottom, scale, duration, delay, jump], index) => {
          const style = {
            "--walker-bottom": bottom,
            "--walker-scale": scale,
            "--walker-duration": duration,
            "--walker-delay": delay,
            "--walker-jump": jump,
          } as CSSProperties;

          return <span className={`usmTinyWalker usmTinyWalker-${type}`} style={style} key={`${type}-${index}`}>
            <i className="usmTinyWalkerBody"><span></span><b></b><em></em></i>
          </span>;
        })}
      </div>
      <div className="usmHeroCopy">
        <p className="usmKicker">{t.label}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>
      <div className="usmArcadeDecor" aria-hidden="true">
        <i className="usmArcadeTile usmArcadeSparkTile">✦</i>
        <i className="usmArcadeTile usmArcadeMosaicTile"></i>
        <i className="usmArcadeTile usmArcadeMosaicTile usmArcadeMosaicTileAlt"></i>
        <span className="usmArcadePortal"><i></i><b></b></span>
      </div>
    </section>

    <aside className="usmBrandMarquee" aria-hidden="true">
      <div className="usmBrandMarqueeTrack">
        {[...activityKeywords, ...activityKeywords].map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}
      </div>
    </aside>

    <div className="usmProfileBand">
      <section className="usmSection">
        <p className="usmSectionLabel">{t.profileLabel}</p>
        <div className="usmProfileGrid">
          <h2 className="usmProfileHeading">{t.profileTitle}</h2>
          <figure className="usmProfilePhoto">
            <Image
              src={assetPath("/assets/activity/usmedical/profile.jpg")}
              alt={t.profileAlt}
              width={1152}
              height={1481}
            />
          </figure>
          <div className="usmProfileInfo">
            <dl>{t.profileFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </div>
        </div>
        <section className="usmTechPanel" aria-labelledby={`tech-title-${locale}`}>
          <h3 id={`tech-title-${locale}`}>{t.techTitle}</h3>
          <ul className="usmTechList">{t.techSkills.map(([category, skills]) => <li key={category}>
            <strong>{category}</strong><span>{skills}</span>
          </li>)}</ul>
        </section>
      </section>
    </div>

    <section className="usmSection">
      <p className="usmSectionLabel">{t.roleLabel}</p>
      <div className="usmSplit usmOverview">
        <div className="usmOverviewVisual">
          <h2>{t.roleTitle}</h2>
          <div className="usmPromoImpact" aria-hidden="true">
            <span className="usmPromoBubble usmPromoBubbleLeft">{locale === "ko" ? "홍보!" : "PR!"}</span>
            <div className="usmPromoBurst"></div>
            <Image
              className="usmPromoCharacter"
              src={assetPath("/assets/activity/usmedical/promotion-character.png")}
              alt=""
              width={1024}
              height={1536}
            />
            <span className="usmPromoBubble usmPromoBubbleRight">{locale === "ko" ? "홍보!" : "PR!"}</span>
          </div>
        </div>
        <div className="usmOverviewCard">
          <p>{t.roleText}</p>
          <dl>{t.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </div>
      <div className="usmRoleGrid">{t.duties.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="usmJourney usmVideoProcess">
      <div className="usmSection usmSectionDark">
        <p className="usmSectionLabel">{t.processLabel}</p>
        <h2>{t.processTitle}</h2>
        <div className="usmTimeline">{t.process.map(([phase, title, text], index) => <article key={phase}>
          <b>0{index + 1}</b><div><small>{phase}</small><h3>{title}</h3><p>{text}</p></div>
        </article>)}</div>
      </div>
    </section>

    <section className="usmSection">
      <p className="usmSectionLabel">{t.resultLabel}</p>
      <div className="usmSplit usmVideoHeading"><h2>{t.resultTitle}</h2><p>{t.resultText}</p></div>
      <div className="usmVideoGrid">{t.videos.map(([number, title, text, video, poster]) => <article key={video}>
        <video
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          playsInline
          preload="metadata"
          poster={poster ? `${videoBase}/posters/${poster}` : undefined}
        >
          <source src={`${videoBase}/${video}`} type="video/mp4" />
        </video>
        <div><span>{number}</span><h3>{title}</h3><p>{text}</p></div>
      </article>)}</div>
    </section>

    <section className="usmCharacterShowcase">
      <div className="usmSection">
        <p className="usmSectionLabel">{t.characterLabel}</p>
        <div className="usmSplit usmCharacterHeading">
          <h2>{t.characterTitle}</h2>
          <p>{t.characterText}</p>
        </div>
        <div className="usmCharacterGrid">{t.characterItems.map(([label, title, text, image, alt], index) => <figure className={index === 0 ? "usmCharacterMascot" : "usmCharacterWorld"} key={image}>
          <div><Image src={assetPath(`/assets/activity/usmedical/${image}`)} alt={alt} width={index === 0 ? 1024 : 1216} height={index === 0 ? 1024 : 1294} /></div>
          <figcaption><span>{label}</span><h3>{title}</h3><p>{text}</p></figcaption>
        </figure>)}</div>
      </div>
    </section>

    <section className="usmSection usmReflection">
      <p className="usmSectionLabel">{t.reviewLabel}</p>
      <h2>{t.reviewTitle}</h2>
      <div className="usmReflectionGrid">{t.reviewCards.map(([label, title, text], index) => <article key={label}>
        <span>{String(index + 1).padStart(2, "0")} · {label}</span>
        <h3>{title}</h3><p>{text}</p>
      </article>)}</div>
    </section>

    <section className="usmCalendarBand">
      <div className="usmSection">
        <p className="usmSectionLabel">{t.calendarLabel}</p>
        <div className="usmSplit usmCalendarHeading">
          <h2>{t.calendarTitle}</h2>
          <p>{t.calendarIntro}</p>
        </div>
        <div className="usmCalendarGrid">{t.weeks.map(([week, date, title, text], index) => <article key={week}>
          <header><span>{week}</span><time>{date}</time></header>
          <div className="usmCalendarDate" aria-hidden="true"><b>{String(index + 1).padStart(2, "0")}</b><small>WEEK</small></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>)}</div>
      </div>
    </section>

    <section className="usmLifeBand">
      <div className="usmSection">
        <p className="usmSectionLabel">{t.lifeLabel}</p>
        <div className="usmSplit usmLifeHeading"><h2>{t.lifeTitle}</h2><p>{t.lifeIntro}</p></div>
        <div className="usmLifeGrid">{t.lifeCards.map(([label, title, text, category]) => <article key={label}>
          <LifePhotoCarousel locale={locale} category={category} />
          <span>{label}</span><h3>{title}</h3><p>{text}</p>
        </article>)}</div>
        <aside className="usmPreparation">
          <h3>{t.preparationTitle}</h3>
          <div className="usmPreparationGrid">{t.preparation.map(([title, text], index) => <article key={title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>)}</div>
        </aside>
      </div>
    </section>

    <section className="usmSection usmLearning">
      <p className="usmSectionLabel">{t.learningLabel}</p>
      <div className="usmSplit">
        <h2>{t.learningTitle}</h2>
        <div className="usmSkillTags">{t.skills.map((skill) => <span key={skill}>#{skill}</span>)}</div>
      </div>
      <blockquote>{t.reflection}</blockquote>
      <p className="usmStudentNote">{t.note}</p>
    </section>

    <section className="usmThanksBand">
      <div className="usmSection">
        <p className="usmSectionLabel">{t.gratitudeLabel}</p>
        <div className="usmThanksGrid">
          <div className="usmThanksLetter">
            <div className="usmThanksStamp" aria-hidden="true"><span>THANK<br />YOU</span><small>TOKYO · 2026</small></div>
            <span className="usmThanksPostmark" aria-hidden="true"></span>
            <h2>{t.gratitudeTitle}</h2>
            <p>{t.gratitude}</p>
            <p className="usmThanksClosing">{locale === "ko" ? "감사합니다." : "心より感謝申し上げます。"}<strong>{t.gratitudeClosing}</strong></p>
          </div>
        </div>
      </div>
    </section>

  </article>;
}
