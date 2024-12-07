import Link from "next/link";

type Props = {
  className?: string;
};

export function FooterItems({ className }: Props) {
  return (
    <div className={`flex gap-8 mt-4 md:mt-0 ${className}`}>
      <span>
        <Link href="/" className="hover:underline">
          技術記事
        </Link>
      </span>
      <span>
        <Link href="/" className="hover:underline">
          開発日記
        </Link>
      </span>
      <span>
        <Link href="/" className="hover:underline">
          雑談
        </Link>
      </span>
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
  );
}
