import { Tag } from "@/interfaces/tag";

type Props = {
  tag: Tag;
};

export const ColoredTag = ({ tag }: Props) => {
  switch (tag) {
    case "Tech":
      return (
        <span className="text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full">
          Tech
        </span>
      );
    case "Life":
      return (
        <span className="text-sm bg-green-200 text-green-800 px-2 py-[1px] rounded-full">
          生活
        </span>
      );
    case "Programming":
      return (
        <span className="text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full">
          Programming
        </span>
      );
    case "JavaScript":
      return (
        <span className="text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full">
          JavaScript
        </span>
      );
  }
};
