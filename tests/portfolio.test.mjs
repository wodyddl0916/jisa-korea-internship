import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const japanese = await readFile("out/index.html", "utf8");
const korean = await readFile("out/ko/index.html", "utf8");

test("publishes the Japanese portfolio detail at the root", () => {
  assert.match(japanese, /<html[^>]*lang="ja"/);
  assert.match(japanese, /朝鮮大学校 × US Medical/);
  assert.match(japanese, /AI広告制作から/);
  assert.match(japanese, /退勤後/);
  assert.match(japanese, /個人時間の活用/);
  assert.match(japanese, /長期海外生活/);
  assert.match(japanese, /aria-label="言語選択"/);
  assert.match(japanese, /href="\/jisa-korea-internship\/ko\/"/);
  assert.doesNotMatch(japanese, /class="siteHeader"/);
  assert.doesNotMatch(japanese, /usmBack/);
  assert.doesNotMatch(japanese, /<title>/);
  assert.match(japanese, /rel="icon" type="image\/svg\+xml" href="\/jisa-korea-internship\/transparent-favicon\.svg\?v=2"/);
});

test("publishes the Korean portfolio under ko", () => {
  assert.match(korean, /<html[^>]*lang="ko"/);
  assert.match(korean, /조선대학교 × US Medical/);
  assert.match(korean, /AI 광고 제작부터/);
  assert.match(korean, /퇴근 후/);
  assert.match(korean, /개인 시간 활용/);
  assert.match(korean, /장기 해외 생활/);
  assert.match(korean, /aria-label="언어 선택"/);
  assert.match(korean, /href="\/jisa-korea-internship\/"/);
  assert.doesNotMatch(korean, /class="siteHeader"/);
  assert.doesNotMatch(korean, /usmBack/);
  assert.doesNotMatch(korean, /<title>/);
  assert.match(korean, /rel="icon" type="image\/svg\+xml" href="\/jisa-korea-internship\/transparent-favicon\.svg\?v=2"/);
});

test("keeps every portfolio media asset", async () => {
  const assets = [
    "hero-chosun-transparent.png",
    "hero-japan-building.jpg",
    "hero-jisa-transparent.png",
    "hero-usmedical.png",
    "pokeden-character.png",
    "pokeden-world-guide.png",
    "promotion-character.png",
    "profile.jpg",
    "life-work-home-shibuya.jpg",
    "life-work-home-tokyo-station.jpg",
    "life-work-home-shibuya-crossing.jpg",
    "life-beyond-tokyo-usj.jpg",
    "life-beyond-tokyo-dotonbori.jpg",
    "life-beyond-tokyo-glico.jpg",
    "life-library-building.jpg",
    "life-library-study.jpg",
    "life-daily-sushi.jpg",
    "life-daily-okonomiyaki.jpg",
    "life-daily-ramen.jpg",
    "life-daily-self-checkout.jpg",
    "videos/pokedenloop.mp4",
    "videos/draft-0803.mp4",
    "videos/final-0810.mp4",
    "videos/final-cut.mp4",
    "videos/posters/draft-0803.jpg",
    "videos/posters/final-0810.jpg",
    "videos/posters/final-cut.jpg",
  ];

  await Promise.all(assets.map((asset) => access(`public/assets/activity/usmedical/${asset}`)));
  await access("public/transparent-favicon.svg");
});

test("does not publish duplicate activity routes", async () => {
  await assert.rejects(access("out/activity/usmedical/index.html"));
  await assert.rejects(access("out/ko/activity/usmedical/index.html"));
});
