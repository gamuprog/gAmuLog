import { Post } from "@/interfaces/post";

export type FrontMatterForTSXPost = Omit<Post, "content" | "type"> & {
  content: React.ReactNode;
  type: "tsx";
};
