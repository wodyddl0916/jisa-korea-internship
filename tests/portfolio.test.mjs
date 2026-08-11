import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const japanese = await readFile("out/index.html", "utf8");
const korean = await readFile("out/ko/index.html", "utf8");

test("publishes the standalone Japanese portfolio at the root", () => {
  assert.match(japanese, /<html[^>]*lang="ja"/);
  assert.match(japanese, /朝鮮大学 × US Medical/);
  assert.doesNotMatch(japanese, /class="siteHeader"/);
  assert.doesNotMatch(japanese, /usmBack/);
});

test("publishes the Korean portfolio under ko", () => {
  assert.match(korean, /<html[^>]*lang="ko"/);
  assert.match(korean, /조선대학교 × US Medical/);
  assert.doesNotMatch(korean, /class="siteHeader"/);
  assert.doesNotMatch(korean, /usmBack/);
});

test("keeps every portfolio media asset", async () => {
  const assets = [
    "hero-chosun-transparent.png",
    "hero-japan-building.jpg",
    "hero-jisa-transparent.png",
    "hero-usmedical.png",
    "pokeden-character.png",
    "pokeden-world-guide.png",
    "profile.jpg",
    "videos/pokedenloop.mp4",
    "videos/draft-0803.mp4",
    "videos/final-0810.mp4",
    "videos/final-cut.mp4",
  ];

  await Promise.all(assets.map((asset) => access(`public/assets/activity/usmedical/${asset}`)));
});
