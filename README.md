# JISA 한일 인턴십 홈페이지

JISA 한일 인턴십 프로그램을 일본어와 한국어로 소개하고, 참여 학생의 기업별 실습 활동을 기록하는 웹사이트입니다.

## 공개 페이지

- 일본어 활동 기록: <https://wodyddl0916.github.io/jisa-korea-internship/>
- 한국어 활동 기록: <https://wodyddl0916.github.io/jisa-korea-internship/ko/>

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages에 자동 배포합니다.

## 주요 페이지

- 일본어 홈페이지: `/`
- 한국어 홈페이지: `/ko`
- 일본어 학생 활동 기록: `/activity`
- 한국어 학생 활동 기록: `/ko/activity`
- 일본어 US Medical 활동 기록: `/activity/usmedical`
- 한국어 US Medical 활동 기록: `/ko/activity/usmedical`

## 실행 방법

Node.js 22.13.0 이상이 필요합니다.

```bash
npm install
npm run dev
```

개발 서버가 실행되면 터미널에 표시되는 로컬 주소로 접속합니다.

## 주요 수정 위치

- `app/usmedical-activity.tsx`: US Medical 활동 기록의 한국어·일본어 문구와 섹션 구성
- `app/globals.css`: 전체 사이트 및 US Medical 활동 페이지 디자인
- `app/(ja)/`: 일본어 페이지
- `app/(ko)/ko/`: 한국어 페이지
- `public/assets/activity/usmedical/`: US Medical 활동 페이지 이미지와 영상
- `app/activity-report-data.ts`: 기업별 학생 실습 기록

## 프로젝트 구조

```text
app/
  (ja)/                         일본어 페이지
  (ko)/ko/                      한국어 페이지
  usmedical-activity.tsx        US Medical 한·일 공통 화면
public/assets/
  activity/usmedical/           US Medical 전용 이미지·영상
  flags/                        국가 네트워크 국기
tests/
  rendered-html.test.mjs        주요 경로·언어·자산 검증
```

한국어와 일본어 US Medical 페이지는 하나의 공통 컴포넌트를 사용합니다. 디자인과 섹션 배치는 함께 적용되고, 언어별 문구만 `copy.ko`와 `copy.ja`에서 관리합니다.

## 최종 점검

```bash
npm run lint
npm test
```

`npm test`는 배포용 빌드와 주요 일본어·한국어 경로, 이미지·영상 파일 연결을 함께 확인합니다.
