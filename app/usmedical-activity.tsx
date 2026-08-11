import Link from "next/link";
import type { CSSProperties } from "react";

type Locale = "ja" | "ko";

const copy = {
  ko: {
    back: "학생 활동 기록으로 돌아가기",
    label: "US MEDICAL · STUDENT ACTIVITY",
    title: <>조선대학교 x US Medical <br />실습 활동 기록</>,
    intro: "JISA 한일 인턴십 과정에서 US Medical에 파견되어 실습에 참여한 학생의 활동 기록을 정리했습니다.",
    profileLabel: "00 · STUDENT PROFILE",
    profileTitle: <>학생 소개</>,
    profileAlt: "US Medical 파견 학생 프로필 사진",
    profileFacts: [
      ["University", "조선대학교"],
      ["Name", "박재용"],
      ["Major", "AI·SW학부 컴퓨터공학전공"],
      ["Grade", "4학년"],
      ["Interests", "데이터 분석 · 웹 서비스 · IT 서비스 운영 · AI 활용"],
      ["Experience", "글로벌 프로젝트 · 웹 개발 · 데이터 분석 · 콘텐츠 제작"],
    ],
    roleLabel: "01 · MY ROLE",
    roleTitle: <>회사 제품을 알리는<br />AI 홍보 영상 제작</>,
    roleText: "학생별 담당 업무 가운데 영상 제작을 맡았습니다. 제품이 필요한 여러 상황을 짧은 장면으로 구성하고, 피드백을 반영해 광고 시안부터 최종 결과물까지 발전시켰습니다.",
    facts: [["Company", "US Medical"], ["Role", "영상 제작"], ["Product Name", "포케덴"]],
    duties: [
      ["01", "콘셉트 구성", "포케덴의 특징과 사용 상황이 짧은 시간 안에 전달되도록 영상의 방향과 장면 흐름을 정리했습니다."],
      ["02", "장면 제작·선별", "제품 사용 장면과 다양한 환경을 표현하는 영상 소재를 제작하고 목적에 맞는 컷을 선별했습니다."],
      ["03", "편집·수정", "선택한 장면을 광고 흐름에 맞게 편집하고, 검토 의견을 반영해 여러 차례 결과물을 수정했습니다."],
    ],
    processLabel: "02 · PRODUCTION PROCESS",
    processTitle: <>아이디어를 영상으로 만들고,<br />피드백으로 완성</>,
    process: [
      ["PLAN", "제품과 전달 목표 정리", "포케덴이 필요한 순간과 시청자에게 전달할 핵심 메시지를 먼저 정리했습니다."],
      ["PROMPT", "장면별 프롬프트 설계", "기획한 장면이 원하는 분위기와 구도로 표현되도록 상황, 인물, 행동, 배경 등을 구체적인 프롬프트로 설계했습니다."],
      ["GENERATE", "Google Flow로 영상 생성", "텍스트 프롬프트를 바탕으로 AI 영상을 생성할 수 있는 Google Flow를 활용해 장면별 영상을 제작하고, 여러 결과를 비교해 광고에 적합한 장면을 선별했습니다."],
      ["REVISE", "피드백 반영과 최종 수정", "중간 결과물을 비교하고 전달력이 부족한 부분을 보완해 최종 버전을 제작했습니다."],
    ],
    characterLabel: "03 · CHARACTER & WORLD",
    characterTitle: <>마스코드 캐릭터와<br />세계관 스토리 제작</>,
    characterText: "제품을 친근하게 알리기 위해 포케덴 마스코트 캐릭터를 제작하고, 히어로와 악역이 등장하는 세계관을 포스터 형태의 캐릭터 가이드로 구성했습니다.",
    characterItems: [
      ["MASCOT CHARACTER", "포케덴 마스코트 ‘파치짱’", "포케덴의 깨끗하고 친근한 이미지를 전달할 수 있도록 구강 청결을 상징하는 마스코트 캐릭터를 기획하고, ChatGPT와 Canva AI를 활용해 이미지를 제작했습니다.", "pokeden-character.png", "포케덴 마스코트 캐릭터 파치짱"],
      ["WORLD GUIDE", "포케덴 세계관 포스터", "아이들이 포케덴의 기능을 쉽고 흥미롭게 이해할 수 있도록 제품의 역할을 ‘선’, 구강 문제를 ‘악’으로 설정해 히어로와 악역이 대립하는 세계관과 시나리오를 기획했습니다. 이후 ChatGPT를 활용해 캐릭터별 역할과 설정을 1장의 포스터로 나타냈습니다.", "pokeden-world-guide.png", "포케덴 캐릭터 세계관 포스터"],
    ],
    resultLabel: "04 · VIDEO OUTPUTS",
    resultTitle: <>제작 과정에서 완성 결과물</>,
    resultText: "각 영상은 콘셉트와 장면 구성에 맞춰 기획부터 제작·수정까지의 과정을 거쳐 완성한 결과물입니다. 재생 버튼을 누르면 실제 결과물을 확인할 수 있습니다.",
    videos: [
      ["01", "포케덴 제품 광고 시안", "제품 패키지와 일상 속 사용 장면을 중심으로 구성한 초기 광고 영상입니다.", "pokedenloop.mp4", ""],
      ["02", "생활 장면 중심 수정본", "제품 사용 전후의 변화를 보다 자연스럽게 전달하도록 장면과 흐름을 수정했습니다.", "draft-0803.mp4", "draft-0803.jpg"],
      ["03", "다양한 사용 환경 확장본", "군인, 항해, 비행, 의료 현장 등 여러 환경에서의 필요성을 한 영상으로 구성했습니다.", "final-0810.mp4", "final-0810.jpg"],
      ["04", "캐릭터 콘셉트 최종 영상", "구강 문제를 시각적인 캐릭터와 강한 장면 전환으로 표현한 최종 결과물입니다.", "final-cut.mp4", "final-cut.jpg"],
    ],
    learningLabel: "05 · LEARNING & REVIEW",
    learningTitle: <>실습을 통해 배운 점</>,
    skills: [
  "콘텐츠 기획",
  "제품 이해",
  "시장 분석",
  "장면 구성",
  "프롬프트 설계",
  "Google Flow",
  "AI 영상 생성",
  "장면 선별",
  "영상 편집",
  "실무 경험"
],

reflection: <>
  이번 실습을 통해 영상 제작은 단순히 여러 장면을 이어 붙이는 작업이 아니라,
  <br />
  <strong>제품이 필요한 이유와 사용 상황을 짧은 시간 안에 효과적으로 전달하는 과정</strong>
  임을 배웠습니다.
  <br /><br />

  포케덴의 특징과 전달하고자 하는 메시지를 먼저 정리한 뒤,
  이를 영상으로 표현하기 위한 장면을 구성하고 프롬프트를 설계했습니다.
  텍스트 프롬프트를 기반으로 AI 영상을 생성하는 Google Flow를 활용해
  여러 장면을 제작하고, 생성된 결과를 비교하며 광고의 흐름에 적합한 장면을 선별했습니다.
  <br /><br />

  특히 같은 아이디어라도 프롬프트의 표현이나 장면 설정에 따라
  영상의 결과가 달라질 수 있다는 점을 경험했습니다.
  원하는 결과에 가까워지기 위해 프롬프트를 구체화하고 반복적으로 수정하면서,
  <strong>AI 도구를 사용하는 것뿐만 아니라 원하는 결과를 얻기 위한 지시와 설계 과정이 중요하다는 점</strong>
  을 배웠습니다.
  <br /><br />

  또한 초안 제작 이후에는 피드백을 반영해 장면의 순서와 전달 방식,
  전체적인 영상 흐름을 다시 검토하고 수정했습니다.
  이를 통해 기획부터 AI 영상 생성, 장면 선별, 편집, 피드백 반영까지
  <strong>하나의 홍보 콘텐츠가 완성되는 실무 과정을 직접 경험할 수 있었습니다.</strong>
</>,
    note: "본 페이지는 학생 개인이 담당한 영상 제작 업무를 중심으로 정리한 활동 기록입니다.",
  },
  ja: {
    back: "学生活動記録に戻る",
    label: "US MEDICAL · STUDENT ACTIVITY",
    title: <>朝鮮大学 x US Medical <br />実習活動記録</>,
    intro: "JISA日韓インターンシッププログラムでUS Medicalに派遣され、実習に参加した学生の活動記録をまとめました。",
    profileLabel: "00 · STUDENT PROFILE",
    profileTitle: <>学生紹介</>,
    profileAlt: "US Medical派遣学生のプロフィール写真",
    profileFacts: [
      ["University", "朝鮮大学校"],
      ["Name", "パク・ジェヨン"],
      ["Major", "AI・SW学部 コンピュータ工学専攻"],
      ["Grade", "4年生"],
      ["Interests", "データ分析・Webサービス・ITサービス運営・AI活用"],
      ["Experience", "グローバルプロジェクト・Web開発・データ分析・コンテンツ制作"],
    ],
    roleLabel: "01 · MY ROLE",
    roleTitle: <>会社の製品を伝える<br />AIプロモーション動画制作</>,
    roleText: "学生ごとの担当業務の中で、動画制作を担当しました。製品が必要とされるさまざまな場面を短いシーンで構成し、フィードバックを反映しながら広告案から最終成果物まで発展させました。",
    facts: [["Company", "US Medical"], ["Role", "動画制作"], ["Product Name", "ポケデン"]],
    duties: [
      ["01", "コンセプト構成", "ポケデンの特徴と利用場面が短時間で伝わるよう、動画の方向性とシーンの流れを整理しました。"],
      ["02", "シーン制作・選定", "製品の利用場面と多様な環境を表現する映像素材を制作し、目的に合うカットを選びました。"],
      ["03", "編集・修正", "選んだシーンを広告の流れに合わせて編集し、検討意見を反映しながら成果物を複数回修正しました。"],
    ],
    processLabel: "02 · PRODUCTION PROCESS",
    processTitle: <>アイデアを映像にし、<br />フィードバックで完成</>,
    process: [
      ["PLAN", "製品と伝達目標の整理", "ポケデンが必要とされる場面と、視聴者に伝えるべき中心的なメッセージを最初に整理しました。"],
      ["PROMPT", "シーンごとのプロンプト設計", "企画したシーンが希望する雰囲気と構図で表現されるよう、状況、人物、行動、背景などを具体的なプロンプトとして設計しました。"],
      ["GENERATE", "Google Flowによる動画生成", "テキストプロンプトをもとにAI動画を生成できるGoogle Flowを活用してシーンごとの動画を制作し、複数の結果を比較して広告に適したシーンを選定しました。"],
      ["REVISE", "フィードバックの反映と最終修正", "途中段階の成果物を比較し、伝達力が不足している部分を補いながら最終版を制作しました。"],
    ],
    characterLabel: "03 · CHARACTER & WORLD",
    characterTitle: <>ポケデンの物語を広げる<br />キャラクターと世界観</>,
    characterText: "製品を親しみやすく伝えるためにポケデンのマスコットキャラクターを制作し、ヒーローと悪役が登場する世界観をポスター形式のキャラクターガイドとして構成しました。",
    characterItems: [
      ["MASCOT CHARACTER", "ポケデンのマスコット「パチィちゃん」", "ポケデンの清潔で親しみやすいイメージを伝えられるよう、口腔ケアを象徴するマスコットキャラクターを企画し、ChatGPTとCanva AIを活用して画像を制作しました。", "pokeden-character.png", "ポケデンのマスコットキャラクター、パチィちゃん"],
      ["WORLD GUIDE", "ポケデン世界観ポスター", "子どもたちがポケデンの機能を簡単かつ興味深く理解できるように、製品の役割を「善」、口腔の問題を「悪」と設定し、ヒーローと悪役が対立する世界観とシナリオを企画しました。 その後、ChatGPTを活用してキャラクターごとの役割と設定を1枚のポスターにまとめました。", "pokeden-world-guide.png", "ポケデンのキャラクター世界観ポスター"],
    ],
    resultLabel: "04 · VIDEO OUTPUTS",
    resultTitle: <>制作過程で完成した成果物</>,
    resultText: "各動画は、コンセプトとシーン構成に合わせ、企画から制作・修正までの過程を経て完成した成果物です。再生ボタンを押すと、実際の成果物を確認できます。",
    videos: [
      ["01", "ポケデン製品広告案", "製品パッケージと日常の利用場面を中心に構成した初期広告動画です。", "pokedenloop.mp4", ""],
      ["02", "生活シーン中心の修正版", "使用前後の変化を自然に伝えられるよう、シーンと流れを修正しました。", "draft-0803.mp4", "draft-0803.jpg"],
      ["03", "多様な利用環境の拡張版", "軍人、航海、飛行、医療現場など、さまざまな環境での必要性を一つの動画にまとめました。", "final-0810.mp4", "final-0810.jpg"],
      ["04", "キャラクターコンセプト最終版", "口腔の問題を視覚的なキャラクターと印象的な場面転換で表現した最終成果物です。", "final-cut.mp4", "final-cut.jpg"],
    ],
    learningLabel: "05 · LEARNING & REVIEW",
    learningTitle: <>実習を通じて学んだこと</>,
    skills: [
      "コンテンツ企画",
      "製品理解",
      "市場分析",
      "シーン構成",
      "プロンプト設計",
      "Google Flow",
      "AI動画生成",
      "シーン選定",
      "動画編集",
      "実務経験",
    ],
    reflection: <>
      今回の実習を通じて、動画制作は単に複数のシーンをつなぎ合わせる作業ではなく、
      <br />
      <strong>製品が必要とされる理由や使用場面を、短時間で効果的に伝えるプロセス</strong>
      であることを学びました。
      <br /><br />

      まず、ポケデンの特徴と伝えたいメッセージを整理し、
      それを映像で表現するためのシーン構成とプロンプト設計を行いました。
      テキストプロンプトをもとにAI動画を生成できるGoogle Flowを活用して
      複数のシーンを制作し、生成された結果を比較しながら、広告の流れに適したシーンを選定しました。
      <br /><br />

      特に、同じアイデアでも、プロンプトの表現やシーン設定によって
      映像の仕上がりが変わることを実感しました。
      希望する結果に近づけるため、プロンプトを具体化して繰り返し修正する中で、
      <strong>AIツールを使うだけでなく、求める結果を得るための指示と設計のプロセスが重要であること</strong>
      を学びました。
      <br /><br />

      また、初稿の制作後は、フィードバックを反映し、シーンの順序や伝え方、
      動画全体の流れを改めて見直して修正しました。
      これにより、企画からAI動画生成、シーン選定、編集、フィードバックの反映まで、
      <strong>一つのプロモーションコンテンツが完成するまでの実務プロセスを実際に経験することができました。</strong>
    </>,
    note: "本ページは、学生本人が担当した動画制作業務を中心にまとめた活動記録です。",
  },
} as const;

const videoBase = "/assets/activity/usmedical/videos";
const activityKeywords = [
  "JISA × US MEDICAL",
  "PROJECT EXPERIENCE",
  "AI VIDEO PRODUCTION",
  "PROMPT DESIGN",
  "MARKETING",
];

export function USMedicalActivity({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const activityHref = locale === "ko" ? "/ko/activity" : "/activity";

  return <article className={`usmArchive usmStudentArchive usmLocale-${locale}`}>
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
      <div className="usmHeroBackdrop" aria-hidden="true">
        <img className="usmHeroSlide usmHeroSlideLogo" src="/assets/activity/usmedical/hero-chosun-transparent.png" alt="" />
        <img className="usmHeroSlide usmHeroSlidePhoto" src="/assets/activity/usmedical/hero-japan-building.jpg" alt="" />
        <img className="usmHeroSlide usmHeroSlideLogo" src="/assets/activity/usmedical/hero-usmedical.png" alt="" />
        <img className="usmHeroSlide usmHeroSlideLogo" src="/assets/activity/usmedical/hero-jisa-transparent.png" alt="" />
      </div>
      <div className="usmHeroCopy">
        <Link className="usmBack" href={activityHref}>← {t.back}</Link>
        <p className="usmKicker">{t.label}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>
    </section>

    <aside className="usmBrandMarquee" aria-hidden="true">
      <div className="usmBrandMarqueeTrack">
        {[...activityKeywords, ...activityKeywords].map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}
      </div>
    </aside>

    <div className="usmProfileBand">
      <section className="usmSection usmProfile">
        <p className="usmSectionLabel">{t.profileLabel}</p>
        <div className="usmProfileGrid">
          <figure className="usmProfilePhoto">
            <img
              src="/assets/activity/usmedical/profile.jpg"
              alt={t.profileAlt}
              width="1128"
              height="1437"
            />
          </figure>
          <div className="usmProfileInfo">
            <h2>{t.profileTitle}</h2>
            <dl>{t.profileFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </div>
        </div>
      </section>
    </div>

    <section className="usmSection">
      <p className="usmSectionLabel">{t.roleLabel}</p>
      <div className="usmSplit usmOverview">
        <h2>{t.roleTitle}</h2>
        <div>
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

    <section className="usmCharacterShowcase">
      <div className="usmSection">
        <p className="usmSectionLabel">{t.characterLabel}</p>
        <div className="usmSplit usmCharacterHeading">
          <h2>{t.characterTitle}</h2>
          <p>{t.characterText}</p>
        </div>
        <div className="usmCharacterGrid">{t.characterItems.map(([label, title, text, image, alt], index) => <figure className={index === 0 ? "usmCharacterMascot" : "usmCharacterWorld"} key={image}>
          <div><img src={`/assets/activity/usmedical/${image}`} alt={alt} /></div>
          <figcaption><span>{label}</span><h3>{title}</h3><p>{text}</p></figcaption>
        </figure>)}</div>
      </div>
    </section>

    <section className="usmSection usmVideoResults">
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

    <section className="usmSection usmLearning">
      <p className="usmSectionLabel">{t.learningLabel}</p>
      <div className="usmSplit">
        <h2>{t.learningTitle}</h2>
        <div className="usmSkillTags">{t.skills.map((skill) => <span key={skill}>#{skill}</span>)}</div>
      </div>
      <blockquote>{t.reflection}</blockquote>
      <p className="usmStudentNote">{t.note}</p>
    </section>
  </article>;
}
