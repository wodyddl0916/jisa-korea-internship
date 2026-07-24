"use client";

import { useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { networkFlags, type Stat } from "./network-flags";

export type { Stat };

/**
 * The four-figure band under the hero, shared by both locales and by the home
 * and results pages. Clicking any of the network figures opens one shared strip
 * of flags in the empty space below — wide enough that it has to be dragged
 * sideways.
 */
export function StatBand({ stats, label }: { stats: readonly Stat[]; label?: string }) {
  const [open, setOpen] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  // Mouse users have no touch inertia and the strip is far wider than the page,
  // so let them grab and pull it. Touch already scrolls natively — capturing the
  // pointer there would fight the browser.
  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = track.current;
    if (!el || event.pointerType !== "mouse" || event.button !== 0) return;
    drag.current = { x: event.clientX, left: el.scrollLeft };
    el.setPointerCapture(event.pointerId);
    el.dataset.dragging = "";
  }

  function moveDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = track.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = track.current;
    if (!el || !drag.current) return;
    drag.current = null;
    el.releasePointerCapture(event.pointerId);
    delete el.dataset.dragging;
  }

  return (
    <section className="statBand" aria-label={label}>
      <div className="stats">
        {stats.map((stat) =>
          stat.flags ? (
            <button
              type="button"
              className="stat statToggle"
              key={stat.label}
              aria-expanded={open}
              aria-controls="network-flags"
              onClick={() => setOpen((current) => !current)}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </button>
          ) : (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ),
        )}
      </div>

      <div className="flagStrip" id="network-flags" data-open={open ? "" : undefined}>
        <div
          className="flagTrack"
          ref={track}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="flagRow" aria-hidden="true">
            {networkFlags.map((code, index) => (
              // next/image has nothing to optimise here: these are ~1KB SVGs at a fixed size.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={code}
                className="flagChip"
                src={`/assets/flags/${code}.svg`}
                alt=""
                width={200}
                height={150}
                draggable={false}
                style={{ "--flag-i": index } as CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
