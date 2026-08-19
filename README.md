# JISA × US Medical 인턴십 활동 기록

JISA 한일 인턴십을 통해 경험한 **US Medical 실무와 약 9주간의 일본 생활**을 기록한 한국어·일본어 포트폴리오입니다.

웹 개발, 홍보 디자인, 캐릭터 기획, 생성형 AI 광고 영상 제작 과정과 일본 생활 경험을 하나의 장문형 페이지로 구성했습니다. 밝고 통통 튀는 오리지널 레트로 게임 분위기의 디자인과 애니메이션을 적용했습니다.

## 공개 페이지

- 일본어 기본 페이지: <https://wodyddl0916.github.io/jisa-korea-internship/>
- 한국어 페이지: <https://wodyddl0916.github.io/jisa-korea-internship/ko/>

## 주요 구성

| 섹션 | 내용 |
| --- | --- |
| 00 · Student Profile | 학생 정보와 IT 기술 스택 |
| 01 · My Role | 회사 정보와 담당 업무 |
| 02 · Video Production Process | AI 광고 영상 기획·생성·수정 과정 |
| 03 · Video Outputs | 실제 제작한 광고 영상 결과물 |
| 04 · Character & World | 포케덴 마스코트와 캐릭터 세계관 |
| 05 · Reflection & Outcomes | 인턴십 경험, 성장, 어려움과 성과 |
| 06 · 9-Week Activity Calendar | 9주간의 주차별 활동 기록 |
| 07 · Life in Japan | 퇴근 후 생활, 도쿄 외 지역, 개인 시간, 음식과 일상 |
| 08 · Learning & Review | 업무·생활에서 배운 점과 핵심 키워드 |
| 09 · Thank You | US Medical 관계자에게 전하는 감사 편지 |

## 주요 기능

- 한국어·일본어 전환 및 동일한 콘텐츠 구조
- PC와 모바일에 대응하는 반응형 레이아웃
- 레트로 플랫폼 게임을 모티브로 한 오리지널 UI
- 첫 화면을 걷고 점프하는 CSS 애니메이션 캐릭터
- 일본 생활 사진 캐러셀과 키보드 탐색
- 실제 광고 영상 재생
- 직접 합성한 배경음악 자동 재생 및 ON/OFF 버튼
- 스크롤에 반응하는 섹션 등장 애니메이션
- GitHub Pages 정적 배포

## 기술 스택

- Next.js 16
- React 19
- TypeScript
- CSS
- Node.js 22.13 이상
- GitHub Actions · GitHub Pages

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버 실행 후 다음 주소에서 확인할 수 있습니다.

- 일본어: <http://localhost:3000/>
- 한국어: <http://localhost:3000/ko>

이미 다른 개발 서버가 3000번 포트를 사용하고 있다면 터미널에 표시되는 실제 포트 번호를 확인합니다.

## 검사와 정적 빌드

```bash
# 일반 프로덕션 빌드
npm run build

# GitHub Pages용 정적 빌드
npm run build:pages

# 정적 빌드와 자동 검사
npm test

# 코드 검사
npm run lint
```

`npm run build:pages`를 실행하면 GitHub Pages에 게시할 정적 파일이 `out/` 폴더에 생성됩니다.

## 배경음악

`public/assets/audio/tokyo-odd-parade.mp3`는 이 사이트를 위해 코드로 직접 합성한 약 29초 길이의 오리지널 배경음악입니다. 외부 음원이나 샘플을 사용하지 않았으며 사이트에서 반복 재생됩니다.

음원을 다시 생성하려면 다음 명령을 실행합니다.

```bash
npm run generate:music
```

## 프로젝트 구조

```text
app/
├─ (ja)/                     # 일본어 기본 경로
├─ (ko)/ko/                  # 한국어 /ko 경로
├─ usmedical-activity.tsx    # 한국어·일본어 콘텐츠와 전체 섹션
├─ life-photo-carousel.tsx   # 일본 생활 사진 캐러셀
├─ background-music.tsx      # BGM 자동 재생과 제어
├─ scroll-reveal.tsx         # 스크롤 등장 효과
├─ base-path.ts              # GitHub Pages 경로 처리
└─ globals.css               # 전체 디자인과 애니메이션

public/assets/
├─ activity/usmedical/       # 프로필, 사진, 캐릭터, 포스터, 영상
└─ audio/                    # 배경음악

scripts/
├─ build-pages.mjs           # GitHub Pages 정적 빌드
└─ generate-background-music.mjs

tests/
└─ portfolio.test.mjs        # 언어 경로와 에셋 검사
```

## 콘텐츠 수정 위치

- 한국어·일본어 문구 및 섹션: `app/usmedical-activity.tsx`
- 사진과 대체 텍스트: `app/life-photo-carousel.tsx`
- 디자인과 반응형 레이아웃: `app/globals.css`
- 사진·캐릭터·영상: `public/assets/activity/usmedical/`
- 배경음악: `public/assets/audio/`

한국어 콘텐츠를 수정할 때는 같은 데이터 구조의 일본어 번역도 함께 수정해야 두 언어 페이지의 순서와 배치가 동일하게 유지됩니다.

## GitHub Pages 배포

`main` 브랜치에 커밋을 푸시하면 `.github/workflows/deploy-pages.yml`이 실행되어 사이트를 자동으로 빌드하고 GitHub Pages에 배포합니다.

```bash
git add .
git commit -m "수정 내용"
git push origin main
```

현재 원격 저장소 구성은 다음과 같습니다.

- `origin`: `wodyddl0916/jisa-korea-internship` — 실제 푸시 및 배포 저장소
- `upstream`: `lsuho/jisa-korea-internship` — 원본 참고 저장소

배포 완료 후 이전 화면이 계속 보이면 브라우저에서 `Ctrl + F5`를 눌러 새로고침합니다.

## 참고

이 저장소의 사진, 영상과 활동 내용은 학생 개인의 인턴십 기록을 위한 자료입니다. 다른 용도로 재사용할 때는 이미지·영상 및 회사 관련 자료의 사용 범위를 별도로 확인해 주세요.
