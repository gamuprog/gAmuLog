import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

type Props = {
  className?: string;
};

export function HomeHeaderItems({ className }: Props) {
  return (
    <div className={`flex gap-8 mt-4 md:mt-0 ${className}`}>
      <span className="hidden md:block">
        <Link href="/tech" className="hover:underline">
          技術記事
        </Link>
      </span>
      <span className="hidden md:block">
        <Link href="/dev-diary" className="hover:underline">
          開発日記
        </Link>
      </span>
      <span className="hidden md:block">
        <Link href="/lifestyle-hobby" className="hover:underline">
          雑談
        </Link>
      </span>
      <span className="hidden md:block">
        {/* <Link href="/" className="hover:underline"> */}
        about me(作成中🚧)
        {/* </Link> */}
      </span>
      <span className="hidden md:block">
        {/* <Link href="/" className="hover:underline"> */}
        お問い合わせ(作成中🚧)
        {/* </Link> */}
      </span>
      {/* <span className="text-2xl md:hidden">
        <RxHamburgerMenu />
      </span> */}
      <span>
        <Link href="/search" className="hover:underline text-2xl">
          <IoIosSearch />
        </Link>
      </span>
    </div>
  );
}
