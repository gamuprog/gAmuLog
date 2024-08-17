import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { getAllPosts } from "@/lib/api";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <HomeHeader />
      <div
        className="bg-fixed flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/assets/home/home.jpg')",
          width: "100vw",
          height: "95vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-5xl font-semibold">がむログ</div>
        <div className="mt-2 ml-4">技術記事と、開発日記と、趣味置き場。</div>
      </div>
    </main>
  );
}