import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRICKBEAT — 네온 벽돌 깨기",
  description: "키보드, 마우스, 터치로 즐기는 네온 아케이드 벽돌 깨기 게임",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
