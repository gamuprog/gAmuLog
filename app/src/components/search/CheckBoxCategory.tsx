import React from "react";

import { Category, categories } from "@/interfaces/category";

type Props = {
  category: Category;
  onClick: (tag: Category) => void;
  isChecked: boolean;
  defaultChecked?: boolean;
  className?: string;
};
export const CheckBoxCategory = ({
  category,
  onClick,
  isChecked,
  defaultChecked,
  className,
}: Props) => {
  const categoryStyleVariants: { [key in Category]: string } = {
    Tech: "bg-blue-200 text-blue-800 pb-[2px]",
    DevDiary: "bg-green-200 text-green-800 py-[1px]",
    LifeStyle: "bg-orange-200 text-orange-800 pb-[2px]",
  };

  const checkedCategoryStyleVariants: { [key in Category]: string } = {
    Tech: "border-2 border-blue-800 -m-[2px]",
    DevDiary: "border-2 border-green-800 -m-[2px]",
    LifeStyle: "border-2 border-orange-800 -m-[2px]",
  };

  return (
    <div className={`${className}`}>
      <label
        className={`rounded-lg cursor-pointer inline-flex flex-col items-center px-4 ${
          categoryStyleVariants[category]
        } ${isChecked && checkedCategoryStyleVariants[category]}`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          defaultChecked={defaultChecked}
          onChange={() => onClick(category)}
          className="mr-2 appearance-none"
        />
        <div className="flex flex-col items-center p-2">
          <div className="text-2xl">{categories[category].ja}</div>
          <div className="text-sm">{categories[category].en}</div>
        </div>
      </label>
    </div>
  );
};
