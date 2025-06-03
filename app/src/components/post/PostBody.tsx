import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXRemoteSerializeResult } from "node_modules/next-mdx-remote/dist/types";

import CoverImageForArticle from "@/components/CoverImageForArticle";
import { ShareButtons } from "@/components/button/ShareButtons";
import DateFormatter from "@/components/dateFormatter";
import markdownStyles from "@/components/markdown-styles.module.css";
import { ColoredTagSC } from "@/components/tag/ColoredTagSC";
import { Post } from "@/interfaces/post";

type Props = {
  post: Post;
  content?: string;
  mdxSource?: string;
};

export function PostBody({ post, content, mdxSource }: Props) {
  console.log(mdxSource);
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
      {content && (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {mdxSource && <MDXRemote source={mdxSource} />}
    </div>
  );
}
