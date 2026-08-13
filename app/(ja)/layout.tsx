import "../globals.css";
import { assetPath } from "../base-path";
import { ScrollReveal } from "../scroll-reveal";

export default function JapaneseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
