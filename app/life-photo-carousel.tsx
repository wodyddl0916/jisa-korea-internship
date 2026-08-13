"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "./base-path";

type Locale = "ja" | "ko";

const carousels = {
  workHome: {
    label: {
      ko: "회사와 숙소 밖 사진",
      ja: "会社と宿舎の外で撮影した写真",
    },
    slides: [
      {
        src: "life-work-home-shibuya.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "해 질 무렵 시부야역 앞 거리와 횡단보도",
          ja: "夕暮れの渋谷駅前の街並みと横断歩道",
        },
      },
      {
        src: "life-work-home-tokyo-station.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "밤에 조명이 켜진 도쿄역 마루노우치 역사",
          ja: "夜にライトアップされた東京駅丸の内駅舎",
        },
      },
      {
        src: "life-work-home-shibuya-crossing.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "사람들로 붐비는 시부야 스크램블 교차로",
          ja: "多くの人でにぎわう渋谷スクランブル交差点",
        },
      },
    ],
  },
  beyondTokyo: {
    label: {
      ko: "도쿄 외 지역 방문 사진",
      ja: "東京以外の地域を訪れた写真",
    },
    slides: [
      {
        src: "life-beyond-tokyo-usj.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "오사카 유니버설 스튜디오 재팬의 슈퍼 닌텐도 월드",
          ja: "大阪・ユニバーサル・スタジオ・ジャパンのスーパー・ニンテンドー・ワールド",
        },
      },
      {
        src: "life-beyond-tokyo-dotonbori.jpg",
        width: 1152,
        height: 2048,
        fit: "contain",
        alt: {
          ko: "해 질 무렵 오사카 도톤보리 운하와 유람선",
          ja: "夕暮れの大阪・道頓堀川と観光船",
        },
      },
      {
        src: "life-beyond-tokyo-glico.jpg",
        width: 1152,
        height: 2048,
        fit: "contain",
        alt: {
          ko: "밤의 오사카 도톤보리 글리코 간판",
          ja: "夜の大阪・道頓堀にあるグリコサイン",
        },
      },
    ],
  },
  library: {
    label: {
      ko: "도서관 이용 사진",
      ja: "図書館を利用した写真",
    },
    slides: [
      {
        src: "life-library-building.jpg",
        width: 1080,
        height: 1440,
        fit: "contain",
        alt: {
          ko: "맑은 날 촬영한 현대적인 도서관 외관",
          ja: "晴れた日に撮影した現代的な図書館の外観",
        },
      },
      {
        src: "life-library-study.jpg",
        width: 1152,
        height: 2048,
        fit: "contain",
        alt: {
          ko: "도서관에서 노트북으로 작업하며 먹은 딸기 빙수",
          ja: "図書館でノートパソコンを使いながら食べたイチゴかき氷",
        },
      },
    ],
  },
  dailyLife: {
    label: {
      ko: "음식과 일상생활 사진",
      ja: "食と日常生活の写真",
    },
    slides: [
      {
        src: "life-daily-sushi.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "일본 식당에서 주문한 여러 종류의 해산물 덮밥",
          ja: "日本の飲食店で注文したさまざまな海鮮丼",
        },
      },
      {
        src: "life-daily-okonomiyaki.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "철판 위에서 조리 중인 오코노미야키",
          ja: "鉄板の上で調理しているお好み焼き",
        },
      },
      {
        src: "life-daily-ramen.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "차슈 라멘과 밥으로 구성된 식사",
          ja: "チャーシューラーメンとご飯のセット",
        },
      },
      {
        src: "life-daily-self-checkout.jpg",
        width: 2048,
        height: 1152,
        alt: {
          ko: "일본 매장에서 이용한 카메라와 카드 결제 단말기",
          ja: "日本の店舗で利用したカメラ付きカード決済端末",
        },
      },
    ],
  },
} as const;

type LifePhotoCategory = keyof typeof carousels;

export function LifePhotoCarousel({ locale, category }: { locale: Locale; category: LifePhotoCategory }) {
  const [current, setCurrent] = useState(0);
  const carousel = carousels[category];
  const slides = carousel.slides;
  const previousLabel = locale === "ko" ? "이전 사진" : "前の写真";
  const nextLabel = locale === "ko" ? "다음 사진" : "次の写真";

  const move = (direction: number) => {
    setCurrent((index) => (index + direction + slides.length) % slides.length);
  };

  return <div
    className="usmLifeCarousel"
    role="region"
    aria-roledescription="carousel"
    aria-label={carousel.label[locale]}
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }}
  >
    <div className="usmLifeCarouselViewport">
      <div className="usmLifeCarouselTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => <figure className={"fit" in slide && slide.fit === "contain" ? "is-contain" : undefined} key={slide.src} aria-hidden={index !== current}>
          <Image
            src={assetPath(`/assets/activity/usmedical/${slide.src}`)}
            alt={index === current ? slide.alt[locale] : ""}
            width={slide.width}
            height={slide.height}
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        </figure>)}
      </div>
    </div>
    <button className="usmLifeCarouselArrow usmLifeCarouselPrevious" type="button" onClick={() => move(-1)} aria-label={previousLabel}>
      <span aria-hidden="true">‹</span>
    </button>
    <button className="usmLifeCarouselArrow usmLifeCarouselNext" type="button" onClick={() => move(1)} aria-label={nextLabel}>
      <span aria-hidden="true">›</span>
    </button>
    <div className="usmLifeCarouselDots" aria-label={locale === "ko" ? "사진 선택" : "写真を選択"}>
      {slides.map((slide, index) => <button
        key={slide.src}
        type="button"
        className={index === current ? "is-active" : undefined}
        aria-label={locale === "ko" ? `${index + 1}번 사진 보기` : `${index + 1}枚目の写真を見る`}
        aria-current={index === current ? "true" : undefined}
        onClick={() => setCurrent(index)}
      />)}
    </div>
    <span className="usmLifeCarouselCount" aria-live="polite">{current + 1} / {slides.length}</span>
  </div>;
}
