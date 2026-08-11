# US Medical 인턴십 활동 기록

JISA 한일 인턴십을 통해 US Medical에서 수행한 포케덴 홍보 콘텐츠 제작 활동을 정리한 독립 포트폴리오입니다.

## 공개 페이지

- 일본어: <https://wodyddl0916.github.io/jisa-korea-internship/>
- 한국어: <https://wodyddl0916.github.io/jisa-korea-internship/ko/>

## 로컬 실행

```bash
npm install
npm run dev
```

실행 후 <http://localhost:3000>에서 일본어 페이지를, <http://localhost:3000/ko>에서 한국어 페이지를 확인합니다.

## 주요 수정 위치

- `app/usmedical-activity.tsx`: 한국어·일본어 문구와 페이지 구성
- `app/globals.css`: 디자인과 애니메이션
- `public/assets/activity/usmedical/`: 프로필, 로고, 캐릭터, 포스터, 영상
- `app/(ja)/page.tsx`: 일본어 첫 화면
- `app/(ko)/ko/page.tsx`: 한국어 첫 화면

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.
