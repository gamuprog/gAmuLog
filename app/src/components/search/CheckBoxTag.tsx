import { Tag } from "@/interfaces/tag";
import React from "react";

type Props = {
  tag: Tag;
  onClick: (tag: Tag) => void;
  isChecked: boolean;
  defaultChecked?: boolean;
  className?: string;
};
export const CheckBoxTag = ({
  tag,
  onClick,
  isChecked,
  defaultChecked,
  className,
}: Props) => {
  const tagStyleVariants: { [key in Tag]: string } = {
    Life: "bg-green-200 text-green-800 py-[1px]",
    Programming: "bg-blue-200 text-blue-800 pb-[2px]",
    JavaScript: "bg-yellow-200 text-yellow-800 pb-[2px]",
    TypeScript: "bg-yellow-200 text-yellow-800 pb-[2px]",
    React: "bg-yellow-200 text-yellow-800 pb-[2px]",
    Hooks: "bg-yellow-200 text-yellow-800 pb-[2px]",
    Next: "bg-yellow-200 text-yellow-800 pb-[2px]",
    Infrastructure: "bg-gray-200 text-gray-800 pb-[2px]",
    AI: "bg-gray-200 text-gray-800 pb-[2px]",
    CS: "bg-gray-200 text-gray-800 pb-[2px]",
    Other: "bg-yellow-200 text-yellow-800 pb-[2px]",
  };

  const checkedTagStyleVariants: { [key in Tag]: string } = {
    Life: "border-2 border-green-800 -m-[2px]",
    Programming: "border-2 border-blue-800 -m-[2px]",
    JavaScript: "border-2 border-yellow-800 -m-[2px]",
    TypeScript: "border-2 border-yellow-800 -m-[2px]",
    React: "border-2 border-yellow-800 -m-[2px]",
    Hooks: "border-2 border-yellow-800 -m-[2px]",
    Next: "border-2 border-yellow-800 -m-[2px]",
    Infrastructure: "border-2 border-yellow-800 -m-[2px]",
    AI: "border-2 border-yellow-800 -m-[2px]",
    CS: "border-2 border-yellow-800 -m-[2px]",
    Other: "border-2 border-yellow-800 -m-[2px]",
  };
  return (
    <div className={`${className} inline`}>
      <label
        className={`rounded-full cursor-pointer pr-2 ${tagStyleVariants[tag]} ${
          isChecked && checkedTagStyleVariants[tag]
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          defaultChecked={defaultChecked}
          onChange={() => onClick(tag)}
          className="mr-2 appearance-none"
        />
        {tag}
      </label>
    </div>
  );
};
