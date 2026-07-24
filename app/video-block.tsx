"use client";

import { useState } from "react";
import { youTubeEmbed, youTubeId, youTubePoster } from "./youtube";

export type VideoItem = { title: string; school: string; url: string };

function VideoCard({ video, locale }: { video: VideoItem; locale: "ja" | "ko" }) {
  const [playing, setPlaying] = useState(false);
  const id = youTubeId(video.url);
  const isKo = locale === "ko";

  // Without a parseable id there is nothing to embed, so fall back to the link
  // the results page already uses.
  if (!id) {
    return (
      <a className="videoPlay" href={video.url} target="_blank" rel="noreferrer">
        <strong>{video.title}</strong>
        <small>{video.school}</small>
      </a>
    );
  }

  const label = isKo ? `${video.title} 영상 재생` : `${video.title} の動画を再生`;

  return (
    <figure className="videoPlay">
      <div className="videoFrame">
        {playing ? (
          <iframe
            src={youTubeEmbed(id)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // Facade: no iframe until the visitor asks for one, so the page costs
          // nothing extra to load and YouTube is not contacted on arrival.
          <button type="button" onClick={() => setPlaying(true)} aria-label={label}>
            {/* Not next/image: the poster is an already-sized remote JPEG, and
                routing it through /_vinext/image would need the Cloudflare
                IMAGES binding, which this project does not provision. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={youTubePoster(id)}
              alt=""
              loading="lazy"
              width={480}
              height={360}
            />
            <span className="videoPlayMark" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption>
        <strong>{video.title}</strong>
        <small>{video.school}</small>
      </figcaption>
    </figure>
  );
}

export function VideoBlock({ videos, locale = "ja" }: { videos: VideoItem[]; locale?: "ja" | "ko" }) {
  return (
    <div className="videoBlock">
      {videos.map((video) => (
        <VideoCard video={video} locale={locale} key={video.url} />
      ))}
    </div>
  );
}
