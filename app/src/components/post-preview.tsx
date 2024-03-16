import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div className="rounded-md hover:shadow-2xl">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <h3 className="text-xl leading-snug px-2">{title}</h3>
        <div className="text-sm text-gray-400 mb-2 px-2">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4 px-2">{excerpt}</p>
      </Link>
    </div>
  );
}
