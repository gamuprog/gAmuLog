import { PostWithEmptyContent } from "@/interfaces/post";

export const tsxFrontMatters: PostWithEmptyContent[] = [
  {
    slug: "TSX-post",
    title: "TSXで記事を書きたい漢の格闘日記",
    date: "2025-07-18T05:35:07.322Z",
    coverImage: "/assets/blog/TSX-post/TSX-post_cover.webp",
    category: "LifeStyle",
    tags: ["React", "Next"],
    author: { name: "がむ", picture: "/assets/blog/authors/jj.jpeg" },
    excerpt:
      "MarkdownだけじゃなくTSXでも記事を書こうとしたら日が50回くらい暮れた。",
    ogImage: {
      url: "/assets/blog/TSX-post/TSX-post_cover.webp",
    },
    content: "",
  },
];
