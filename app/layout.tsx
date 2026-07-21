import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, RouteTransition } from "./site-chrome";

export const metadata: Metadata = {
  title: {
    default: "JISA | 日韓インターンシップ支援",
    template: "%s | JISA日韓インターンシップ",
  },
  description: "韓国の大学・学生と日本企業を結ぶ、教育を目的としたJISAのインターンシップ支援サイトです。",
  icons: {
    icon: "/assets/jisa-logo.png",
  },
};

export default function RootLayout({
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
      </body>
    </html>
  );
}
