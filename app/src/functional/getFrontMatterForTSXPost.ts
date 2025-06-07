import { FrontMatterForTSXPost } from "@/interfaces/frontMatter";
import { frontMatters } from "@/tsxPosts/frontMatter";

export function getFrontMatterForTSXPost(
  slug: FrontMatterForTSXPost["slug"]
): FrontMatterForTSXPost {
  return frontMatters.find(
    (matter) => matter.slug === slug
  ) as FrontMatterForTSXPost;
}
