import type { Metadata } from "next";
import "../globals.css";
import { ScrollReveal } from "../scroll-reveal";
import { Footer, Header, RouteTransition } from "../site-chrome";
import { assetPath } from "../base-path";

export const metadata: Metadata = {
  title: {
    default: "JISA | 日韓インターンシップ支援",
    template: "%s | JISA日韓インターンシップ",
  },
  description: "韓国の大学・学生と日本企業を結ぶ、教育を目的としたJISAのインターンシップ支援サイトです。",
  icons: {
    icon: assetPath("/assets/jisa-logo.png"),
  },
};

export default function JapaneseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main><RouteTransition>{children}</RouteTransition></main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
