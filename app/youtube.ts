/** Handles both youtu.be/ID and youtube.com/shorts/ID, which the data mixes. */
export function youTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.endsWith("youtu.be")) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.endsWith("youtube.com")) {
      const watch = parsed.searchParams.get("v");
      if (watch) return watch;
      const match = /^\/(?:shorts|embed)\/([^/]+)/.exec(parsed.pathname);
      if (match) return match[1];
    }
  } catch {
    return null;
  }
  return null;
}

export function youTubePoster(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function youTubeEmbed(id: string): string {
  // nocookie keeps YouTube from setting tracking cookies until playback starts.
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}
