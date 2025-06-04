import { ReactElement, JSXElementConstructor } from "react";

import CoverImageForArticle from "@/components/CoverImageForArticle";
import { ShareButtons } from "@/components/button/ShareButtons";
import DateFormatter from "@/components/dateFormatter";
import { ColoredTagSC } from "@/components/tag/ColoredTagSC";
import { Post } from "@/interfaces/post";

type Props = {
  post: Post;
  mdxSource: ReactElement<any, string | JSXElementConstructor<any>>;
};

export function MDXBody({ post, mdxSource }: Props) {
  return (
    <div className="max-w-3xl md:mr-10">
      <div className="flex flex-wrap gap-4">
        {post.tags.map((tag) => (
          <ColoredTagSC tag={tag} key={tag} />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="max-w-2xl mb-6 text-lg">
          投稿日:
          <DateFormatter dateString={post.date} />
        </div>
        <ShareButtons
          post={post}
          directionVariant="horizontal"
          className="md:hidden"
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImageForArticle title={post.title} src={post.coverImage} />
      </div>
      {mdxSource}
    </div>
  );
}
