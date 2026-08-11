import type { Metadata } from "next";
import "../globals.css";
import { ScrollReveal } from "../scroll-reveal";

export const metadata: Metadata = {
  title: "US Medical 인턴십 활동 기록",
  description: "US Medical에서 담당한 포케덴 홍보 콘텐츠의 기획, 제작, 편집 활동 기록입니다.",
};

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
        <ScrollReveal />
      </body>
    </html>
  );
}
