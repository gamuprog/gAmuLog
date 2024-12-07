import { ColoredTagSC } from "@/components/tag/ColoredTagSC";
import CoverImageForArticle from "@/components/CoverImageForArticle";
import DateFormatter from "@/components/dateFormatter";
import markdownStyles from "@/components/markdown-styles.module.css";
import { Tag } from "@/interfaces/tag";

type Props = {
  content: string;
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
};

export function PostBody({ content, title, coverImage, date, tags }: Props) {
  return (
    <div className="max-w-3xl mr-10">
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <ColoredTagSC tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-2xl mb-6 text-lg">
        投稿日:
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImageForArticle title={title} src={coverImage} />
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
