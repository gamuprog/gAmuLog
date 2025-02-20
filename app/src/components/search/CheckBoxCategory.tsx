import React from "react";

import {
  categoriesWithName,
  Category,
  CategoryWithName,
} from "@/interfaces/category";

type Props = {
  categoryWithName: CategoryWithName;
  onClick: (tag: Category) => void;
  isChecked: boolean;
  defaultChecked?: boolean;
  className?: string;
};
export const CheckBoxCategory = ({
  categoryWithName,
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
    <label
      className={`${className} rounded-lg cursor-pointer inline-flex flex-col items-center px-4 ${
        categoryStyleVariants[categoryWithName.category]
      } ${
        isChecked && checkedCategoryStyleVariants[categoryWithName.category]
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        defaultChecked={defaultChecked}
        onChange={() => onClick(categoryWithName.category)}
        className="hidden"
      />
      <div className="flex flex-col items-center p-3 md:p-2">
        <div className="text-2xl">{categoryWithName.ja}</div>
        <div className="text-sm">{categoryWithName.en}</div>
      </div>
    </label>
  );
};
