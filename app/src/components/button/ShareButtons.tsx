import Link from "next/link";
import { FaFacebook, FaLine, FaXTwitter } from "react-icons/fa6";
import { SiHatenabookmark } from "react-icons/si";

import { Post } from "@/interfaces/post";

type DirectionVariant = "vertical" | "horizontal";

type Props = {
  post: Post;
  className?: string;
  directionVariant: DirectionVariant;
};

export function ShareButtons({ post, className, directionVariant }: Props) {
  const twitterURL = `https://twitter.com/intent/tweet?text=${post.title}&url=https://gamulog.com/posts/${post.slug}/`;
  const facebookURL = `https://www.facebook.com/sharer.php?u=https://gamulog.com/posts/${post.slug}/`;
  const hatenaURL = `https://b.hatena.ne.jp/entry/https://gamulog.com/posts/${post.slug}/`;
  const lineURL = `https://social-plugins.line.me/lineit/share?url=https://gamulog.com/posts/${post.slug}/`;

  const directionVariants: { [key in DirectionVariant]: string } = {
    vertical: "flex-col",
    horizontal: "flex-row",
  };
  return (
    <div
      className={`${className} flex ${directionVariants[directionVariant]} gap-4 mx-4 `}
    >
      <Link href={twitterURL} target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-black md:text-5xl text-3xl" />
      </Link>
      <Link href={facebookURL} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-[#1877f2] md:text-5xl text-3xl" />
      </Link>
      <Link href={hatenaURL} target="_blank" rel="noopener noreferrer">
        <SiHatenabookmark className="text-[#5279e7] md:text-5xl text-3xl" />
      </Link>
      <Link href={lineURL} target="_blank" rel="noopener noreferrer">
        <FaLine className="text-[#00b900] md:text-5xl text-3xl" />
      </Link>
    </div>
  );
}
