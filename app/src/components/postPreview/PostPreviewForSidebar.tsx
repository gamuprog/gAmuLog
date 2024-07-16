import Link from "next/link";
import DateFormatter from "../date-formatter";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
};

export function PostPreviewForSidebar({
  title,
  coverImage,
  date,
  tags,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="flex py-4">
          <div className="overflow-hidden w-1/3 h-full">
            <Image
              src={coverImage}
              alt={title}
              width={1920}
              height={1080}
              className=""
            />
          </div>
          <p className="text-lg leading-snug px-2 w-2/3">{title}</p>
        </div>
      </Link>
    </div>
  );
}
