"use client";
import { useClickOutside } from "@/components/hooks/clickOutsider";
import { Category } from "@/interfaces/category";
import { ReactNode, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

type Props = {
  handleClickClose: () => void;
  categories: Category[];
  children: ReactNode;
};

export function DetailSearchModalFrame({ handleClickClose, children }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside(divRef, handleClickClose);

  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-60 px-96 py-48 transition-opacity duration-500 ease-in-out">
      <div className="bg-white w-full h-full rounded-md p-4" ref={divRef}>
        <div className="flex justify-between items-center p-3">
          <h3 className="mr-10 break-keep font-bold text-xl">詳細検索</h3>
          <button
            className="min-w-fit text-5xl text-gray-600"
            type="button"
            onClick={handleClickClose}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="px-4 mt-4">カテゴリーで絞り込む:</div>
        {children}
      </div>
    </div>
  );
}
