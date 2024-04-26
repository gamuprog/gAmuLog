import { ChangeEvent, KeyboardEventHandler } from "react";
import { IoIosSearch } from "react-icons/io";

type Props = {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: KeyboardEventHandler;
};

export const SearchInput = ({ className, onChange, onKeyDown }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <div className="focus:text-blue-400 text-xl text-gray-500 absolute left-3 top-[11px]">
        <IoIosSearch />
      </div>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="キーワードを入力"
        className="focus:shadow-input focus:shadow-sky-400 focus:border-blue-400 duration-300 ease-in-out w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md outline-none"
      />
    </div>
  );
};
