"use client";
import { Tag } from "@/interfaces/tag";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

type Props = {
  tag: Tag;
};

export const ColoredTagCC = ({ tag }: Props) => {
  const router = useRouter();

  const handleClickTag = (e: MouseEvent, tag: Tag) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/search?tag=${tag}`);
  };

  switch (tag) {
    case "Life":
      return (
        <span
          className="hover:border hover:border-green-800 hover:-m-[1px] text-sm bg-green-200 text-green-800 px-2 py-[1px] rounded-full box-border"
          onClick={(e) => handleClickTag(e, tag)}
        >
          生活
        </span>
      );
    case "Programming":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-blue-800 hover:-m-[1px] text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          Programming
        </span>
      );
    case "JavaScript":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-yellow-800 hover:-m-[1px] text-sm bg-yellow-200 text-yellow-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          JavaScript
        </span>
      );
    case "TypeScript":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-blue-800 hover:-m-[1px] text-sm bg-blue-200 text-blue-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          TypeScript
        </span>
      );
    case "React":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-sky-800 hover:-m-[1px] text-sm bg-sky-200 text-sky-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          React
        </span>
      );
    case "Hooks":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-sky-800 hover:-m-[1px] text-sm bg-sky-200 text-sky-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          Hooks
        </span>
      );
    case "Next":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          Next.js
        </span>
      );
    case "Infrastructure":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          インフラ
        </span>
      );
    case "AI":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-indigo-800 hover:-m-[1px] text-sm bg-indigo-200 text-indigo-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          AI
        </span>
      );
    case "CS":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-violet-800 hover:-m-[1px] text-sm bg-violet-200 text-violet-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          CS
        </span>
      );
    case "Other":
      return (
        <span
          style={{ boxSizing: "border-box" }}
          className="hover:border hover:border-gray-800 hover:-m-[1px] text-sm bg-gray-200 text-gray-800 px-2 pb-[2px] rounded-full"
          onClick={(e) => handleClickTag(e, tag)}
        >
          その他
        </span>
      );
  }
};
