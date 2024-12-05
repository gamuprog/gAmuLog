import { Tag } from "@/interfaces/tag";
import Link from "next/link";

type Props = {
  tag: Tag;
};

export const ColoredTagSC = ({ tag }: Props) => {
  switch (tag) {
    case "Life":
      return (
        <Link href="/search?tag=Life">
          <span className="text-sm bg-green-200 text-green-800 px-2 py-[1px] rounded-full">
            生活
          </span>
        </Link>
      );
    case "Programming":
      return (
        <Link href="/search?tag=Programming">
          <span className="text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full">
            Programming
          </span>
        </Link>
      );
    case "JavaScript":
      return (
        <Link href="/search?tag=JavaScript">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            JavaScript
          </span>
        </Link>
      );
    case "TypeScript":
      return (
        <Link href="/search?tag=TypeScript">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            TypeScript
          </span>
        </Link>
      );
    case "React":
      return (
        <Link href="/search?tag=React">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            React
          </span>
        </Link>
      );
    case "Hooks":
      return (
        <Link href="/search?tag=Hooks">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            Hooks
          </span>
        </Link>
      );

    case "Next":
      return (
        <Link href="/search?tag=Next">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            Next.js
          </span>
        </Link>
      );
    case "Infrastructure":
      return (
        <Link href="/search?tag=Infrastructure">
          <span className="text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            インフラ
          </span>
        </Link>
      );
    case "AI":
      return (
        <Link href="/search?tag=AI">
          <span className="text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            AI
          </span>
        </Link>
      );
    case "CS":
      return (
        <Link href="/search?tag=CS">
          <span className="text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            CS
          </span>
        </Link>
      );
    case "Other":
      return (
        <Link href="/search?tag=Other">
          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            その他
          </span>
        </Link>
      );
  }
};
