import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "휘게Zip (hyggeip) - 공간을 읽는 가구 큐레이션",
  description: "휘게Zip은 공간을 읽고 가구를 통해 삶을 기록합니다. 당신의 일상이 머무는 곳, 그 너머의 정서를 연구합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
