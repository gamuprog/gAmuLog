import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import "highlight.js/styles/hybrid.css";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import metadataBase from "@/lib/constants";

const inter = Zen_Kaku_Gothic_Antique({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const title = "がむログ";
const description =
  "がむの技術ブログです。React,Next.jsなどプログラミングの技術記事や開発日記、趣味の話題などを書いています。";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: "/assets/home/homeOG.jpg", // TODO: 上手くできているか確認
  },
};

// TODO: faviconのキャッシュ回避のためにv=1を追加しているが、最終的には削除する

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png?v=1"
        />
        <link rel="icon" href="/favicon/favicon.ico?v=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg?v=1"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen text-dark-primary border-dark-primary">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
