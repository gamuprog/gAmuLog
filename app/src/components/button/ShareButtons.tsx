import { FaFacebook, FaLine, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { SiHatenabookmark } from "react-icons/si";
import { Post } from "@/interfaces/post";

type Props = {
  post: Post;
  className?: string;
};

export function ShareButtons({ post, className }: Props) {
  const twitterURL = `https://twitter.com/intent/tweet?text=${post.title}&url=https://gamulog.com/posts/${post.slug}/`;
  const facebookURL = `https://www.facebook.com/sharer.php?u=https://gamulog.com/posts/${post.slug}/`;
  const hatenaURL = `https://b.hatena.ne.jp/entry/https://gamulog.com/posts/${post.slug}/`;
  const lineURL = `https://social-plugins.line.me/lineit/share?url=https://gamulog.com/posts/${post.slug}/`;

  return (
    <div className={`${className} flex flex-col gap-4 mx-4 `}>
      <Link href={twitterURL} target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-black text-5xl" />
      </Link>
      <Link href={facebookURL} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-[#1877f2] text-5xl" />
      </Link>
      <Link href={hatenaURL} target="_blank" rel="noopener noreferrer">
        <SiHatenabookmark className="text-[#5279e7] text-5xl" />
      </Link>
      <Link href={lineURL} target="_blank" rel="noopener noreferrer">
        <FaLine className="text-[#00b900] text-5xl" />
      </Link>
    </div>
  );
}
