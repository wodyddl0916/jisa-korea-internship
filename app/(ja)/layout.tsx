import type { Metadata } from "next";
import "../globals.css";
import { ScrollReveal } from "../scroll-reveal";

export const metadata: Metadata = {
  title: "US Medical インターンシップ活動記録",
  description: "US Medicalで担当したポケデンPRコンテンツの企画・制作・編集に関する活動記録です。",
};

export default function JapaneseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
        <ScrollReveal />
      </body>
    </html>
  );
}
