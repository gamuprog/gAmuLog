import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeSection } from "@/components/home/HomeSection";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <HomeHeader />
      <div
        className="bg-fixed flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/assets/home/home_min.webp')",
          width: "100vw",
          height: "95vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-5xl font-semibold">がむログ</div>
        <div className="mt-2 ml-4">技術記事と、開発日記と、趣味置き場。</div>
      </div>
      <HomeSection
        themeColorVariant="red"
        posts={allPosts}
        sectionTitleJa="最新記事"
        sectionTitleEn="New Articles"
        viewMoreTo="/search"
        viewMoreText="全ての記事を見る"
      />
      <HomeSection
        themeColorVariant="blue"
        posts={allPosts.filter((post) => post.category === "Tech")}
        sectionTitleJa="技術記事"
        sectionTitleEn="Tech Articles"
        className="bg-gray-100"
        viewMoreTo="/tech"
      />
      <HomeSection
        themeColorVariant="green"
        posts={allPosts.filter((post) => post.category === "DevDiary")}
        sectionTitleJa="開発日記"
        sectionTitleEn="Dev Diary"
        viewMoreTo="/dev-diary"
      />
      <HomeSection
        themeColorVariant="orange"
        posts={allPosts.filter((post) => post.category === "LifeStyle")}
        sectionTitleJa="雑談"
        sectionTitleEn="Lifestyle & Hobby"
        className="bg-gray-100"
        viewMoreTo="/lifestyle-hobby"
      />
    </main>
  );
}
