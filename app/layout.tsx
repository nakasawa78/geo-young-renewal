import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/common/ChatWidget";
import ThemeProvider from "@/lib/ThemeProvider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "지오영 그룹 | 국내 최대규모 종합 헬스케어 플랫폼",
  description: "지오영 그룹은 의약품유통, 3PL/4PL, 병원GPO, 방사성의약품, 헬스케어IT 등 헬스케어 전 밸류체인을 포괄하는 국내 최대규모 종합 헬스케어 플랫폼입니다.",
  keywords: "지오영, 헬스케어, 의약품유통, GPO, 3PL, 방사성의약품",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${notoSansKR.variable} ${notoSerifKR.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
