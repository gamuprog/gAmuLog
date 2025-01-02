import Link from "next/link";

type Props = {
  className?: string;
};

export function FooterItems({ className }: Props) {
  return (
    <div className={`flex gap-8 mt-2 md:mt-0 ${className}`}>
      <span className="hidden md:inline-block">
        <Link href="/tech" className="hover:underline">
          技術記事
        </Link>
      </span>
      <span className="hidden md:inline-block">
        <Link href="/dev-diary" className="hover:underline">
          開発日記
        </Link>
      </span>
      <span className="hidden md:inline-block">
        <Link href="/lifestyle-hobby" className="hover:underline">
          雑談
        </Link>
      </span>
      <span className="hidden md:inline-block">
        {/* <Link href="/" className="hover:underline"> */}
        about me(作成中🚧)
        {/* </Link> */}
      </span>
      <span className="hidden md:inline-block">
        {/* <Link href="/" className="hover:underline"> */}
        お問い合わせ(作成中🚧)
        {/* </Link> */}
      </span>
      <div className="flex justify-between gap-x-10">
        <div className="flex flex-col gap-y-4 md:hidden">
          <span>
            <Link href="/tech" className="hover:underline">
              技術記事
            </Link>
          </span>
          <span>
            <Link href="/dev-diary" className="hover:underline">
              開発日記
            </Link>
          </span>
          <span>
            <Link href="/lifestyle-hobby" className="hover:underline">
              雑談
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-y-4 md:hidden">
          <span>
            {/* <Link href="/" className="hover:underline"> */}
            about me(作成中🚧)
            {/* </Link> */}
          </span>
          <span>
            {/* <Link href="/" className="hover:underline"> */}
            お問い合わせ(作成中🚧)
            {/* </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
}
