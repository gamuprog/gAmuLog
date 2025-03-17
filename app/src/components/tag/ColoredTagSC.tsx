import Link from "next/link";

import { Tag } from "@/interfaces/tag";

type Props = {
  tag: Tag;
};

export const ColoredTagSC = ({ tag }: Props) => {
  switch (tag) {
    case "Life":
      return (
        <Link href="/search?tag=Life" className="!no-underline">
          <span className="hover:border hover:border-green-800 hover:-m-[1px] text-sm bg-green-200 text-green-800 px-2 py-[1px] rounded-full">
            生活
          </span>
        </Link>
      );
    case "Programming":
      return (
        <Link href="/search?tag=Programming" className="!no-underline">
          <span className="hover:border hover:border-blue-800 hover:-m-[1px] text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full">
            Programming
          </span>
        </Link>
      );
    case "JavaScript":
      return (
        <Link href="/search?tag=JavaScript" className="!no-underline">
          <span className="hover:border hover:border-yellow-800 hover:-m-[1px] text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
            JavaScript
          </span>
        </Link>
      );
    case "TypeScript":
      return (
        <Link href="/search?tag=TypeScript" className="!no-underline">
          <span className="hover:border hover:border-blue-800 hover:-m-[1px] text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full">
            TypeScript
          </span>
        </Link>
      );
    case "React":
      return (
        <Link href="/search?tag=React" className="!no-underline">
          <span className="hover:border hover:border-sky-800 hover:-m-[1px] text-sm bg-sky-200 text-sky-800 px-2 pb-[2px] rounded-full">
            React
          </span>
        </Link>
      );
    case "Hooks":
      return (
        <Link href="/search?tag=Hooks" className="!no-underline">
          <span className="hover:border hover:border-sky-800 hover:-m-[1px] text-sm bg-sky-200 text-sky-800 px-2 pb-[2px] rounded-full">
            Hooks
          </span>
        </Link>
      );

    case "Next":
      return (
        <Link href="/search?tag=Next" className="!no-underline">
          <span className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            Next.js
          </span>
        </Link>
      );
    case "Infrastructure":
      return (
        <Link href="/search?tag=Infrastructure" className="!no-underline">
          <span className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            インフラ
          </span>
        </Link>
      );
    case "AI":
      return (
        <Link href="/search?tag=AI" className="!no-underline">
          <span className="hover:border hover:border-indigo-800 hover:-m-[1px] text-sm bg-indigo-200 text-indigo-800 px-2 pb-[2px] rounded-full">
            AI
          </span>
        </Link>
      );
    case "CS":
      return (
        <Link href="/search?tag=CS" className="!no-underline">
          <span className="hover:border hover:border-violet-800 hover:-m-[1px] text-sm bg-violet-200 text-violet-800 px-2 pb-[2px] rounded-full">
            CS
          </span>
        </Link>
      );
    case "Tools":
      return (
        <Link href="/search?tag=Tools" className="!no-underline">
          <span className="hover:border hover:border-red-800 hover:-m-[1px] text-sm bg-red-200 text-red-800 px-2 pb-[2px] rounded-full">
            ツール
          </span>
        </Link>
      );
    case "Other":
      return (
        <Link href="/search?tag=Other" className="!no-underline">
          <span className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            その他
          </span>
        </Link>
      );
  }
};
