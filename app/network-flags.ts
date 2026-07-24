export type Stat = {
  value: string;
  label: string;
  /** Turns the figure into the button that opens the flag strip. */
  flags?: boolean;
};

/**
 * The 11 flags shown when opening the "11か国 / 11개국" figure in the stat band.
 * Purely decorative: no country names are rendered, and the panel is aria-hidden.
 * Swap this list once the confirmed country list is available — every locale and
 * every page reads it from here. Codes are ISO 3166-1 alpha-2, matching the
 * filenames in `public/assets/flags/`.
 */
export const networkFlags = [
  "kr", // 韓国
  "vn", // ベトナム
  "ph", // フィリピン
  "id", // インドネシア
  "th", // タイ
  "mm", // ミャンマー
  "kh", // カンボジア
  "mn", // モンゴル
  "cn", // 中国
  "in", // インド
  "uz", // ウズベキスタン
];
