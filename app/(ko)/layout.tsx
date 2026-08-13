import "../globals.css";
import { assetPath } from "../base-path";
import { ScrollReveal } from "../scroll-reveal";

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${assetPath("/transparent-favicon.svg")}?v=2`} />
      </head>
      <body>
        <main>{children}</main>
        <ScrollReveal />
      </body>
    </html>
  );
}
