import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  tags,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="rounded-md hover:shadow-2xl transition-shadow duration-400 ease-in-out">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="mb-5 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            width={1920}
            height={1080}
            className="rounded-t-md"
          />
        </div>
        <h3 className="text-xl leading-snug px-2">{title}</h3>
        <div className="text-sm text-gray-400 mb-2 px-2 flex justify-between">
          <DateFormatter dateString={date} />
          <button className="flex gap-2">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </button>
        </div>
        <p className="text-lg leading-relaxed mb-4 px-2">{excerpt}</p>
      </Link>
    </div>
  );
}
