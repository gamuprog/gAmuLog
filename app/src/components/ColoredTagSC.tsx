import { Tag } from "@/interfaces/tag";
import Link from "next/link";

type Props = {
  tag: Tag;
};

export const ColoredTagSC = ({ tag }: Props) => {
  switch (tag) {
    case "Tech":
      return (
        <Link href="/search?tag=Tech">
          <span className="text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
            Tech
          </span>
        </Link>
      );
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
  }
};
