import Link from "next/link";
import Image from "next/image";
import { ColoredTagCC } from "@/components/Tag/ColoredTagCC";
import { Tag } from "@/interfaces/tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
  excerpt: string;
  slug: string;
};

export function PostPreviewForSidebar({
  title,
  coverImage,
  date,
  tags,
  slug,
}: Props) {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="!no-underline !text-black hover:bg-slate-100 hover:shadow-sm transition-shadow duration-200 ease-in-out"
    >
      <div className="flex items-center py-4">
        <div className="flex items-center justify-center overflow-hidden w-1/3 max-h-20">
          <Image
            src={coverImage}
            alt={title}
            width={1920}
            height={1080}
            className=""
          />
        </div>
        <div className="w-2/3 px-2">
          <p className="leading-snug">{title}</p>
          <div className="flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <div key={tag}>
                <ColoredTagCC tag={tag} key={tag} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
