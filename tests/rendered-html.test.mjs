import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

import { pageImages, sectionImages, slideImages } from "../app/site-images.ts";
import { youTubeId } from "../app/youtube.ts";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const japaneseRoutes = ["/", "/about", "/programs", "/partnership", "/results", "/future", "/contact"];
const koreanRoutes = japaneseRoutes.map((route) => (route === "/" ? "/ko" : `/ko${route}`));

async function renderHtml(pathname) {
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200, `${pathname} should respond 200`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("server-renders the Japanese home page", async () => {
  const html = await renderHtml("/");

  assert.match(html, /<html[^>]*\blang="ja"/i);
  assert.match(html, /<title>JISA \| 日韓インターンシップ支援<\/title>/);
  assert.match(html, /日韓インターンシップ支援/);
  assert.match(html, /Japan Internship Support Association/);
});

test("server-renders the Korean home page with lang=ko", async () => {
  const html = await renderHtml("/ko");

  // Regression guard: the Korean tree must ship lang="ko" from the server, not
  // get corrected on the client after hydration. `html[lang="ko"]` in
  // globals.css drives Korean line breaking, so a wrong value is visible.
  assert.match(html, /<html[^>]*\blang="ko"/i);
  assert.doesNotMatch(html, /<html[^>]*\blang="ja"/i);
  assert.match(html, /<title>JISA \| 한일 인턴십 지원<\/title>/);
  assert.match(html, /한일 인턴십 지원/);
});

test("applies the per-locale title template to nested pages", async () => {
  const [japanese, korean] = await Promise.all([renderHtml("/about"), renderHtml("/ko/about")]);

  assert.match(japanese, /<title>JISAとは \| JISA日韓インターンシップ<\/title>/);
  assert.match(korean, /<title>JISA 소개 \| JISA 한일 인턴십<\/title>/);
});

test("server-renders every Japanese route", async () => {
  for (const route of japaneseRoutes) {
    const html = await renderHtml(route);
    assert.match(html, /<html[^>]*\blang="ja"/i, `${route} should render in Japanese`);
  }
});

test("server-renders every Korean route", async () => {
  for (const route of koreanRoutes) {
    const html = await renderHtml(route);
    assert.match(html, /<html[^>]*\blang="ko"/i, `${route} should render in Korean`);
  }
});

test("every slot image resolves to a file in public/", async () => {
  const entries = [
    ...Object.entries(slideImages).map(([label, image]) => [`slide:${label}`, image]),
    ...Object.entries(pageImages).map(([label, image]) => [`page:${label}`, image]),
    ...Object.entries(sectionImages).map(([name, image]) => [`section:${name}`, image]),
  ];
  assert.ok(entries.length > 0, "expected slot images to be declared");

  for (const [slot, image] of entries) {
    assert.ok(image.src.startsWith("/"), `${slot} src must be a root-relative path`);
    // Nothing typechecks these strings against the filesystem, so a typo would
    // only show up as a silently blank slot in the browser.
    await access(new URL(`../public${image.src}`, import.meta.url));
  }
});

test("fills every page hero, replacing the placeholder guidance", async () => {
  for (const route of ["/about", "/programs", "/partnership", "/results", "/future", "/contact"]) {
    const html = await renderHtml(route);
    assert.match(html, /class="[^"]*\bhasImage\b/, `${route} should render a hero image`);
    assert.doesNotMatch(html, /掲載予定写真/, `${route} should not show the placeholder`);
  }

  const korean = await renderHtml("/ko/about");
  assert.match(korean, /class="[^"]*\bhasImage\b/);
  assert.doesNotMatch(korean, /추천 사진/);
});

test("server-renders content that scroll reveal only enhances", async () => {
  const html = await renderHtml("/");

  // The hidden state is scoped to [data-reveal-ready], which only the client
  // sets. If it ever shipped in the SSR payload, a JS failure would leave the
  // page blank below the hero.
  assert.doesNotMatch(html, /data-reveal-ready/);
  assert.doesNotMatch(html, /is-revealed/);

  // Counters animate from zero in the browser, but the served markup must
  // already carry the real figures for crawlers and no-JS visitors.
  for (const value of ["2013", "11か国", "70大学", "1,100名+"]) {
    assert.ok(html.includes(value), `expected the served page to contain ${value}`);
  }
});

test("keeps YouTube behind a click, not in the served markup", async () => {
  for (const route of ["/", "/ko"]) {
    const html = await renderHtml(route);
    // The facade must not embed anything up front: no iframe means the visitor
    // is not handed to YouTube just for loading the home page.
    assert.doesNotMatch(html, /<iframe/i, `${route} should ship no iframe`);
    assert.doesNotMatch(html, /youtube-nocookie/, `${route} should not preload the player`);
    assert.match(html, /img\.youtube\.com\/vi\//, `${route} should render poster thumbnails`);
  }
});

test("parses both YouTube URL shapes present in the data", () => {
  assert.equal(youTubeId("https://youtu.be/Z0ph6SQnnZE"), "Z0ph6SQnnZE");
  // Shorts links carry a query string and can start with a hyphen.
  assert.equal(youTubeId("https://youtube.com/shorts/-_GhrC72XiU?feature=share"), "-_GhrC72XiU");
  assert.equal(youTubeId("https://www.youtube.com/watch?v=abc123"), "abc123");
  assert.equal(youTubeId("not a url"), null);
});

test("does not ship the starter loading skeleton", async () => {
  const html = await renderHtml("/");

  assert.doesNotMatch(html, /react-loading-skeleton|sites-skeleton|codex-preview/i);
});
