import type { Metadata } from "next";
import "../globals.css";
import { ScrollReveal } from "../scroll-reveal";
import { Footer, Header, RouteTransition } from "../site-chrome";

export const metadata: Metadata = {
  title: {
    default: "JISA | 한일 인턴십 지원",
    template: "%s | JISA 한일 인턴십",
  },
  description: "한국 대학·학생과 일본 기업을 연결하는 교육 목적의 JISA 인턴십 지원 사이트입니다.",
  icons: {
    icon: "/assets/jisa-logo.png",
  },
};

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main><RouteTransition>{children}</RouteTransition></main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
