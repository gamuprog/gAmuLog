import Image from "next/image";
import Link from "next/link";

import DateFormatter from "@/components/dateFormatter";
import { ThemeColorVariant } from "@/components/home/HomeSection";
import { ColoredTagCC } from "@/components/tag/ColoredTagCC";
import { Tag } from "@/interfaces/tag";

type Props = {
  className?: string;
  themeColorVariant: ThemeColorVariant;
  title: string;
  coverImage: string;
  date: string;
  tags: Tag[];
  excerpt: string;
  slug: string;
};

export function HeroPostPreview({
  className = "",
  themeColorVariant,
  title,
  coverImage,
  date,
  tags,
  excerpt,
  slug,
}: Props) {
  const shadowVariants: { [key in ThemeColorVariant]: string } = {
    red: "hover:shadow-red-200",
    blue: "hover:shadow-blue-200",
    green: "hover:shadow-green-200",
    orange: "hover:shadow-orange-200",
  };

  return (
    <div
      className={`${className} rounded-md hover:shadow-sm transition-shadow duration-300 ease-in-out ${shadowVariants[themeColorVariant]}`}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <div className="mb-5 overflow-hidden max-h-[30rem] flex items-center">
          <Image
            src={coverImage}
            alt={title}
            width={1920}
            height={1080}
            className="rounded-t-md"
          />
        </div>
        <h3 className="text-3xl leading-snug px-2">{title}</h3>
        <div className="text-sm text-gray-400 mb-2 px-2 flex justify-between">
          <DateFormatter dateString={date} />
          <div className="flex gap-2 flex-row flex-wrap">
            {tags.map((tag) => (
              <ColoredTagCC key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4 px-2">{excerpt}</p>
      </Link>
    </div>
  );
}
