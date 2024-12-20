import Image from "next/image";
import Link from "next/link";

import DateFormatter from "@/components/dateFormatter";
import { ThemeColorVariant } from "@/components/home/HomeSection";
import { ColoredTagCC } from "@/components/tag/ColoredTagCC";
import { Tag } from "@/interfaces/tag";

export type CoverImageSizeVariant = "home" | "side";

type Props = {
  className?: string;
  themeColorVariant: ThemeColorVariant;
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
  excerpt: string;
  slug: string;
  coverImageSizeVariant?: CoverImageSizeVariant;
};

export function PostPreview({
  className = "",
  themeColorVariant,
  title,
  coverImage,
  date,
  tags,
  excerpt,
  slug,
  coverImageSizeVariant = "home",
}: Props) {
  const shadowVariants: { [key in ThemeColorVariant]: string } = {
    red: "hover:shadow-red-200",
    blue: "hover:shadow-blue-200",
    green: "hover:shadow-green-200",
    orange: "hover:shadow-orange-200",
  };

  const coverImageSizeVariants: { [key in CoverImageSizeVariant]: string } = {
    home: "h-44",
    side: "max-h-60",
  };

  return (
    <div
      className={`${className} rounded-md hover:shadow-sm transition-shadow duration-300 ease-in-out ${shadowVariants[themeColorVariant]}`}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div
          className={`rounded-t-md ${coverImageSizeVariants[coverImageSizeVariant]} flex items-center justify-center mb-5 overflow-hidden `}
        >
          <Image
            src={coverImage}
            alt={title}
            width={1920}
            height={1080}
            className="rounded-t-md"
          />
        </div>
        <h3 className="text-xl leading-snug px-2">{title}</h3>
        <div className="text-sm text-gray-400 mb-2 mt-1 px-2 flex justify-between">
          <DateFormatter dateString={date} />
          <div className="flex flex-wrap gap-2 justify-end">
            {tags.map((tag) => (
              <div key={tag}>
                <ColoredTagCC tag={tag} key={tag} />
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4 px-2">{excerpt}</p>
      </Link>
    </div>
  );
}
