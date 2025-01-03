"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PUBLISHER_ID = "4360537932383383";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

type GoogleAdProps = {
  slot: string;
  format?: string;
  responsive?: string;
  style?: React.CSSProperties;
};

const GoogleAdsComponent = ({
  slot,
  format = "auto",
  responsive = "true",
  style = {},
}: GoogleAdProps) => {
  const [isAdLoaded, setIsAdLoaded] = useState(false); // 広告の読み込み状況を管理
  const pathname = usePathname() || "";

  useEffect(() => {
    const initializeAd = async () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        try {
          // 広告の初期化を試行
          await (window.adsbygoogle = window.adsbygoogle || []).push({});
          setIsAdLoaded(true); // 成功時に広告が読み込まれたとマーク
        } catch (err) {
          console.error("AdSense Error:", err);
          setIsAdLoaded(false); // エラー時にプレースホルダーを表示
        }
      } else {
        setIsAdLoaded(false); // 初期化されていない場合もプレースホルダー
      }
    };

    initializeAd();
  }, [pathname]);

  return (
    <div
      key={pathname.replace(/\//g, "-") + "-" + slot}
      style={{
        width: "100%",
        ...style,
        position: "relative",
      }}
    >
      {/* Google AdSense広告 */}
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          backgroundColor: "transparent", // 広告エリアは透明
          height: "250px", // デフォルトの高さ
          ...style,
        }}
        data-ad-client={`ca-pub-${PUBLISHER_ID}`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
      {/* プレースホルダー */}
      {!isAdLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0",
            border: "1px dashed #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#555",
            fontSize: "14px",
            zIndex: 1,
          }}
        >
          広告スペース（審査中）
        </div>
      )}
    </div>
  );
};

export default GoogleAdsComponent;
