import { Post } from "@/interfaces/post";

export const tsxFrontMatters: Post[] = [
  {
    slug: "sample-tsx-post",
    title: "Sample TSX Post",
    date: "2023-10-01",
    coverImage: "/images/sample-cover.jpg",
    category: "LifeStyle",
    tags: ["React", "TypeScript", "Next"],
    author: { name: "がむ", picture: "/assets/blog/authors/jj.jpeg" },
    excerpt: "This is a sample post written in TSX format.",
    ogImage: {
      url: "/images/sample-og-image.jpg",
    },
    content: "",
  },
];
