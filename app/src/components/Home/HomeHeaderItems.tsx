import Link from "next/link";

export function HomeHeaderItems() {
  return (
    <div className="flex gap-8 mt-4 md:mt-0">
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
        <Link href="/" className="hover:underline">
          about me
        </Link>
      </span>
      <span>
        <Link href="/" className="hover:underline">
          お問い合わせ
        </Link>
      </span>
    </div>
  );
}
