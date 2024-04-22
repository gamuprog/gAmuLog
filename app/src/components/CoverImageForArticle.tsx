import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImageForArticle = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("rounded-md w-full", {
        "hover:scale-105 transition duration-200 ease-in-out": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          aria-label={title}
          className="overflow-hidden"
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImageForArticle;
